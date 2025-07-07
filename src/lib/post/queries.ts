import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPosts = cache(
  async () => await postRepository.findAllPublished()
);

export const findPostBySlug = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findPostById = cache(
  async (id: string) => await postRepository.findBySlug(id)
);
