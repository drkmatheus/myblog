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
  if (!(formData instanceof FormData))
    return {
      formState: prevState.formState,
      errors: ["Dados inválidos"],
    };

  const convertFormToObj = Object.fromEntries(formData.entries());
  console.log(convertFormToObj);

  return {
    formState: prevState.formState,
    errors: [],
  };
}
