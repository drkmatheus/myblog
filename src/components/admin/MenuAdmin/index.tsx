import clsx from "clsx";
import { HouseIcon, ScrollTextIcon } from "lucide-react";
import Link from "next/link";

export function MenuAdmin() {
  const navClasses = clsx(
    "flex flex-row justify-around bg-sky-600 text-blue-300 p-2 rounded-xl mb-8"
  );
  const linkClasses = clsx(
    "flex flex-row gap-1 items-center h-10 transition hover:bg-blue-200 rounded-xl p-3 outline"
  );
  return (
    <nav className={navClasses}>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href={"/admin/post"}>
        <ScrollTextIcon />
        Posts
      </Link>
    </nav>
  );
}
