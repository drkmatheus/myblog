import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { MyLoader } from "@/components/MyLoader";
import { PostListing } from "@/components/PostsListing";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />
      <section
        className={clsx("grid grid-cols-1 gap-8 mb-10", "sm:grid-cols-2 group")}
      >
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="h-full w-full object-center group-hover:scale-105 transition object-cover"
            src="/images/MegaManX.png"
            width={1020}
            height={960}
            alt="Megaman X ready to fight"
            priority
          />
        </Link>
        <div className="flex flex-col gap-5 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2025-07-03">
            03/07/2025 21:00
          </time>
          <h1 className="text-3xl/tight font-bold block mb-2 sm:text-4xl">
            <Link href="#">Lorem ipsum dolor sit amet consectetur.</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
            temporibus molestias laboriosam rem neque tempora laborum
            consequatur beatae laudantium quas nesciunt. Sed consectetur magni
            dolores. Nulla rerum sed illo enim!Lorem ipsum dolor sit, amet
            consectetur adipisicing elit.
          </p>
        </div>
      </section>
      <Suspense fallback={<MyLoader />}>
        <PostListing />
      </Suspense>
      <footer>
        <p className="text-5xl font-bold text-center py-7">FOOTER</p>
      </footer>
    </Container>
  );
}
