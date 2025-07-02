import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { PostRepository } from "./post-repository";

export const postRepository: PostRepository = new JsonPostRepository();
