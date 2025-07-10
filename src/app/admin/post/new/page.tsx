import { Button } from "@/components/Button";
import clsx from "clsx";
import { NewspaperIcon } from "lucide-react";

export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function NewPostPage({ params }: AdminPostIdPageProps) {
  const { id } = await params;

  return (
    <div className="text-xl text-center font-bold flex gap-4 items-center">
      <h1>Página de criação de posts</h1>
      <Button variant="default" size="md">
        <NewspaperIcon />
        Criar
      </Button>
      <Button variant="danger" size="sm">
        <NewspaperIcon />
        Criar
      </Button>
      <Button variant="ghost" size="lg">
        <NewspaperIcon />
        Criar
      </Button>
    </div>
  );
}
