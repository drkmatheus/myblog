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
    <div className="text-xl text-center font-bold">
      <h1>Página de criação de posts</h1>
      <Button variant="default" size="md">
        <NewspaperIcon />
        Criar
      </Button>
    </div>
  );
}
