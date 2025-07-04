import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { MyLoader } from "@/components/MyLoader";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostListing } from "@/components/PostsListing";
import clsx from "clsx";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />
      <section
        className={clsx("grid grid-cols-1 gap-8 mb-10", "sm:grid-cols-2 group")}
      >
        <PostCoverImage
          linkProps={{ href: "#" }}
          imageProps={{
            width: 1200,
            height: 680,
            alt: "Zero",
            src: "/images/Zero.png",
            priority: true,
          }}
        ></PostCoverImage>
        <div className="flex flex-col gap-5 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2025-07-03">
            03/07/2025 21:00
          </time>
          <PostHeading url="#" as="h1">
            Título grande pra caramba para esse post em destaque
          </PostHeading>
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
