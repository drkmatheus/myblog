"use server";

import { logColor } from "@/utils/log-color";
import { simulateLag } from "@/utils/simulate-lag";

export async function deletePostsAction(id: string) {
  await simulateLag(3000);

  logColor("" + id);
  return id;
}
