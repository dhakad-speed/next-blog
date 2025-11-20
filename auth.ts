import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { dbConnect } from "./src/lib/dbConnect";
import UserModel from "./src/model/User";
import { verifyPassword } from "./src/utils/encrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: String(process.env.NEXT_PUBLIC_BETTER_AUTH_SECRET),
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
    async jwt({ user, token }) {
      if (user) {
        const encryptUser = user as {
          username?: string;
          email?: string;
        };
        if (
          typeof encryptUser.username === "string" &&
          typeof encryptUser.email
        ) {
          token.name = encryptUser.username;
          token.email = encryptUser.email;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name =
          (session.user.name ?? typeof token.name === "string")
            ? token.name
            : undefined;

        (session.user as { username?: string }).username =
          typeof token.name === "string" ? token.name : undefined;
      }
      return session;
    },
  },
});
