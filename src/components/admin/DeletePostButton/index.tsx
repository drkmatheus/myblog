"use client";
import { deletePostsAction } from "@/actions/delete-posts-action";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();

  async function handleClick() {
    startTransition(async () => {
      const result = await deletePostsAction(id);
      alert("Botão clicado " + result);
    });
  }

  return (
    <button
      className={clsx(
        "p-1.5",
        "border-2",
        "border-blue-700",
        "rounded-[4px]",
        "flex columns-1",
        "bg-white",
        "hover:bg-blue-200",
        "mr-1",
        "cursor-pointer",
        "hover:text-red-500",
        "disabled:text-slate-500 disabled:cursor-not-allowed"
      )}
      aria-label={`Deletar post ${title}`}
      title="Deletar post"
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon className="mr-1" /> Deletar
    </button>
  );
}
