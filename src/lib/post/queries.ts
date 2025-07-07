import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findAllPublicPosts = cache(
  async () => await postRepository.findAllPublished()
);

export const findPostBySlug = cache(
  async (slug: string) => await postRepository.findBySlug(slug)
);

export const findPostById = cache(
  async (id: string) => await postRepository.findBySlug(id)
);
