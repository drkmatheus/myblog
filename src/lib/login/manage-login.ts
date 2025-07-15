import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

type JwtPayload = {
  username: string;
  expiresAt: Date;
};

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtEncodedKey = new TextEncoder().encode(jwtSecretKey);

const loginExpirationSeconds =
  Number(process.env.LOGIN_EXPIRATION_SECONDS) || 3600;
const loginExpirationString = process.env.LOGIN_EXPIRATION_STRING || "1h";
const loginCookieName = process.env.LOGIN_COOKIE_NAME || "loginSession";

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

export async function createLoginSession(username: string) {
  const expiresAt = new Date(Date.now() + loginExpirationSeconds * 1000);
  const loginSession = await signJwt({ username, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set(loginCookieName, loginSession, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: expiresAt,
  });
}

export async function deleteLoginSession() {
  const cookieStore = await cookies();
  cookieStore.set(loginCookieName, "", { expires: new Date(0) });
  cookieStore.delete(loginCookieName);
}

export async function signJwt(jwtPayload: JwtPayload) {
  return new SignJWT(jwtPayload)
    .setProtectedHeader({ alg: "HS256", typ: "jwt" })
    .setIssuedAt()
    .setExpirationTime(loginExpirationString)
    .sign(jwtEncodedKey);
}
