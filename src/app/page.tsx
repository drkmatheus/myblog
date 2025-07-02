import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <div
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
    </div>
  );
}
