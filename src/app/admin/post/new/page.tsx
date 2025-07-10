import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import clsx from "clsx";
import { NewspaperIcon } from "lucide-react";

export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function NewPostPage({ params }: AdminPostIdPageProps) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-3">
      <InputText labelText="Digite" placeholder="Digite aqui" />
      <InputText labelText="Digite" placeholder="Digite aqui" />
      <InputText disabled labelText="Digite" placeholder="Digite aqui" />
      <Button variant="ghost" size="lg">
        <NewspaperIcon />
        Criar
      </Button>
    </div>
  );
}
