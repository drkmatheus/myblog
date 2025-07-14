"use client";
import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditorField } from "@/components/MarkdownEditorField";
import { useActionState, useEffect, useState } from "react";
import { ImageUploader } from "../ImageUploader";
import { partialPostDTO, PostDto } from "@/dto/post/postdto";
import { createPostAction } from "@/actions/post/create-post-action";

type PostFormProps = {
  postDTO?: PostDto;
};

export function PostForm({ postDTO }: PostFormProps) {
  const initialState = {
    formState: partialPostDTO(postDTO),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    createPostAction,
    initialState
  );

  const { formState } = state;
  const [contentValue, setContentValue] = useState(postDTO?.content || "");

  return (
    <form action={action} className="mb-16">
      <div className="flex flex-col gap-3">
        <InputText
          labelText="ID"
          name="id"
          type="text"
          placeholder="ID gerado"
          readOnly
          defaultValue={formState.id}
        />
        <InputText
          labelText="Slug"
          name="Slug"
          type="text"
          placeholder="Slug gerado"
          readOnly
          defaultValue={formState.slug}
        />

        <InputText
          labelText="Autor"
          name="author"
          type="text"
          placeholder="Digite o nome do autor"
          defaultValue={formState.author}
        />

        <InputText
          labelText="Título"
          name="title"
          type="text"
          placeholder="Digite o título"
          defaultValue={formState.title}
        />
        <InputText
          labelText="Excerto"
          name="excerpt"
          type="text"
          placeholder="Digite o excerto"
          defaultValue={formState.excerpt}
        />
        <MarkdownEditorField
          labelText="Conteúdo"
          disabled={false}
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
        />
        <ImageUploader />

        <InputText
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          type="text"
          placeholder="Digite a URL da imagem de capa"
          defaultValue={formState.coverImageUrl}
        />
        <InputCheckbox
          labeltext="Publicar?"
          name="published"
          type="checkbox"
          defaultChecked={formState.published || false}
        />
      </div>
      <div className="mt-4">
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
}
