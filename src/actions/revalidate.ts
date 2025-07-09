"use server";

import { revalidateTag } from "next/cache";

export async function revalidatePostsAction(formData: FormData) {
  const path = formData.get("path") || "";
  revalidateTag("posts"); // para revalidar a home
  revalidateTag("Sigma: O Vilão Icônico"); // para revalidar um post unico
}
