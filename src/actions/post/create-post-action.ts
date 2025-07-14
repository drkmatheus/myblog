"use server";

import { PostDto } from "@/dto/post/postdto";

type CreatePostActionState = {
  formState: PostDto;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData
): Promise<CreatePostActionState> {
  const title = formData.get("title")?.toString() || "";

  return {
    formState: { ...prevState.formState, title },
    errors: [],
  };
}
