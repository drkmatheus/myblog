"use client";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  function handleClick() {
    alert("Botão clicado " + id);
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
        "hover:text-red-500"
      )}
      aria-label={`Deletar post ${title}`}
      title="Deletar post"
      onClick={handleClick}
    >
      <Trash2Icon className="mr-1" /> Deletar
    </button>
  );
}
