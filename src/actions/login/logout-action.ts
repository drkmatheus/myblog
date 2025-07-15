"use server";

import { simulateLag } from "@/utils/simulate-lag";

export async function logoutAction() {
  await simulateLag(5000); // para atrasar ataques de força bruta
}
