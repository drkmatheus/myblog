"use client";
import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditorField } from "@/components/MarkdownEditorField";
import { NewspaperIcon } from "lucide-react";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";

export function PostForm() {
  const [contentValue, setContentValue] = useState("");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-3">
        <InputText labelText="Digite" placeholder="Digite aqui" />
        <InputText labelText="Digite" placeholder="Digite aqui" />
        <ImageUploader />
        <MarkdownEditorField
          labelText="Conteúdo"
          disabled={false}
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
        />
        <InputText disabled labelText="Digite" placeholder="Digite aqui" />
        <Button variant="ghost" size="lg">
          <NewspaperIcon />
          Criar
        </Button>
        <InputCheckbox labeltext="Clique" />
      </div>
      <div className="mt-4">
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
}
