"use server";

import { partialPostDTO, PostDto } from "@/dto/post/postdto";
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/postModel";
import { getZodErrorMessages } from "@/utils/get-zod-errors";
import { makeSlugs } from "@/utils/make-slugs";
import { v4 as uuidv4 } from "uuid";

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
  const zodParsedObj = PostCreateSchema.safeParse(convertFormToObj);

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error.format());
    return {
      formState: partialPostDTO(convertFormToObj),
      errors,
    };
  }

  const validPost = zodParsedObj.data;
  const newPost: PostModel = {
    ...validPost,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: uuidv4(),
    slug: makeSlugs(validPost.title),
  };
  return {
    formState: newPost,
    errors: [],
  };
}
