"use server";

import { simulateLag } from "@/utils/simulate-lag";

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await simulateLag(5000); // para atrasar ataques de força bruta
  return {
    username: "",
    error: "",
  };
}
