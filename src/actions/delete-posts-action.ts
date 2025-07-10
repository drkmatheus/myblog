"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { logColor } from "@/utils/log-color";
import { simulateLag } from "@/utils/simulate-lag";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deletePostsAction(id: string) {
  await simulateLag(3000);
  logColor("" + id);

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: "Post não existe",
    };
  }

  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  revalidateTag("posts");
  revalidateTag(`post-${post.slug}`);

  return { error: "" };
}
