"use server";

import { logColor } from "@/utils/log-color";

export async function deletePostsAction(formData: FormData) {
  const id = formData.get("id");

  logColor("" + id);
}
