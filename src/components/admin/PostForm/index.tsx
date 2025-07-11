"use client";
import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { NewspaperIcon } from "lucide-react";

export function PostForm() {
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-3">
        <InputText labelText="Digite" placeholder="Digite aqui" />
        <InputText labelText="Digite" placeholder="Digite aqui" />
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
