"use client";
import clsx from "clsx";
import {
  CircleXIcon,
  FilePlus2Icon,
  HouseIcon,
  LogOutIcon,
  MenuIcon,
  ScrollTextIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname;

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = clsx(
    "flex flex-col mb-8",
    "gap-2 px-6 py-2",
    "sm:flex-row sm:flex-wrap",
    "bg-sky-600 text-blue-100 rounded-lg",
    !isOpen && "h-14",
    !isOpen && "overflow-hidden",
    "sm:overflow-visible sm:h-auto"
  );
  const linkClasses = clsx(
    "flex gap-1 justify-start items-center cursor-pointer",
    "transition hover:bg-blue-700 rounded-lg",
    "h-10 shrink-0 p-2"
  );

  const closeBtnClasses = clsx(linkClasses, "sm:hidden");
  return (
    <nav className={navClasses}>
      <button onClick={() => setIsOpen((s) => !s)} className={closeBtnClasses}>
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href={"/admin/post"}>
        <ScrollTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href={"/admin/post/new"}>
        <FilePlus2Icon />
        Criar post
      </Link>

      <Link className={linkClasses} href={""}>
        <LogOutIcon />
        Logout
      </Link>
    </nav>
  );
}
