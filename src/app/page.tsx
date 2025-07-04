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
            className="group-hover:scale-105 transition"
            src="/images/MegaManX.png"
            width={1020}
            height={960}
            alt="Megaman X ready to fight"
          />
        </Link>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
          temporibus molestias laboriosam rem neque tempora laborum consequatur
          beatae laudantium quas nesciunt. Sed consectetur magni dolores. Nulla
          rerum sed illo enim!Lorem ipsum dolor sit, amet consectetur
          adipisicing elit.
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
