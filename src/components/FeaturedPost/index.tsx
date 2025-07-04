import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export function FeaturedPost() {
  const slug = "";
  const postLink = `/post/${slug}`;
  return (
    <section
      className={clsx("grid grid-cols-1 gap-8 mb-10", "sm:grid-cols-2 group")}
    >
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 680,
          alt: "Zero",
          src: "/images/Zero.png",
          priority: true,
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading="h1"
        createdAt="03/07/2025 21:00"
        excerpt="Conheça a história e a evolução de X, o protagonista da série Mega Man X."
        title="X: O Legado do Blue Bomber"
      />
    </section>
  );
}
