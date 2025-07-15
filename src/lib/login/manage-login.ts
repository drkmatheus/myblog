import bcrypt from "bcryptjs";

export async function hashPassword(rawPassword: string) {
  const hash = await bcrypt.hash(rawPassword, 10);
  const base64 = Buffer.from(hash).toString("base64");
  return base64;
}

export async function checkPassword(rawPassword: string, base64Hash: string) {
  const hash = Buffer.from(base64Hash, "base64").toString("utf-8");
  const isValid = await bcrypt.compare(rawPassword, hash);
  return isValid;
}
