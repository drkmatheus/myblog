"use client";
import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditorField } from "@/components/MarkdownEditorField";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";
import { PostDto } from "@/dto/post/postdto";

type PostFormProps = {
  postDTO?: PostDto;
};

export function PostForm({ postDTO }: PostFormProps) {
  const [contentValue, setContentValue] = useState(postDTO?.content || "");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-3">
        <InputText
          labelText="ID"
          name="id"
          type="text"
          placeholder="ID gerado"
          readOnly
          defaultValue={postDTO?.id}
        />
        <InputText
          labelText="Slug"
          name="Slug"
          type="text"
          placeholder="Slug gerado"
          readOnly
          defaultValue={postDTO?.slug}
        />

        <InputText
          labelText="Autor"
          name="author"
          type="text"
          placeholder="Digite o nome do autor"
          defaultValue={postDTO?.author}
        />

        <InputText
          labelText="Título"
          name="title"
          type="text"
          placeholder="Digite o título"
          defaultValue={postDTO?.title}
        />
        <InputText
          labelText="Excerto"
          name="excerpt"
          type="text"
          placeholder="Digite o excerto"
          defaultValue={postDTO?.excerpt}
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
          defaultValue={postDTO?.coverImageUrl}
        />
        <InputCheckbox
          labeltext="Publicar?"
          name="published"
          type="checkbox"
          defaultChecked={postDTO?.published || false}
        />
      </div>
      <div className="mt-4">
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
}
