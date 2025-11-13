import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { dbConnect } from "./src/lib/dbConnect";
import UserModel from "./src/model/User";
import { verifyPassword } from "./src/utils/hashPassword";
const buildDefaultAvatar = (identifier: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    identifier
  )}&background=random`;

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: String(process.env.NEXTAUTH_SECRET),
  providers: [
    Credentials({
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "dhakadspeed@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        await dbConnect();

        try {
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.email },
              { username: credentials.username },
            ],
          });
          if (!user) throw new Error("User not Found");

          if (typeof credentials?.username !== "string") {
            throw new Error("Invalid Username");
          }
          if (typeof credentials?.password !== "string") {
            throw new Error("Invalid Username");
          }
          if (!user.isVerified) {
            console.warn("User signed in without verification:", user.email);
            // optionally return null here if you just want to block silently
          }

          const isPasswordCorrect = await verifyPassword(
            credentials?.password,
            user.password
          );
          if (!isPasswordCorrect) {
            throw new Error("Wrong Password");
          }
          return user;
        } catch (error) {
          console.error(error);
          throw new Error(
            error instanceof Error
              ? error.message
              : "Something Went Wrong In Login"
          );
        }
      },
    }),
    Google({
      clientId: String(process.env.AUTH_GOOGLE_ID),
      clientSecret: String(process.env.AUTH_GOOGLE_SECRET),
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Assuming 'user' has a 'username' property of type string
        const userWithMeta = user as {
          username?: string;
          email?: string;
          image?: string;
        };
        if (typeof userWithMeta.username === "string") {
          token.username = userWithMeta.username;
        }
        token.picture =
          userWithMeta.image ??
          buildDefaultAvatar(
            userWithMeta.username ?? userWithMeta.email ?? "User"
          );
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // Set .name, ensuring token.username is a string
        session.user.name =
          session.user.name ??
          (typeof token.username === "string" ? token.username : undefined);
        // Add a custom username field without using 'any'
        (session.user as { username?: string }).username =
          typeof token.username === "string" ? token.username : undefined;
        session.user.image =
          session.user.image ??
          (typeof (token as { picture?: unknown }).picture === "string"
            ? (token as { picture?: string }).picture
            : undefined);
      }
      return session;
    },
  },
});
