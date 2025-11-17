import bcrypt from "bcryptjs";

export async function encryptPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const securedPassword = await bcrypt.hash(password, salt);
  return securedPassword;
}
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}
