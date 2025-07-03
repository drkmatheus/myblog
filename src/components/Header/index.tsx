"use client";
import clsx from "clsx";

export function Header() {
  return (
    <h1
      className={clsx(
        "text-6xl",
        "text-blue-600",
        "hover:bg-blue-200",
        "hover:text-white",
        "transition",
        "duration-500"
      )}
    >
      Teste
    </h1>
  );
}
