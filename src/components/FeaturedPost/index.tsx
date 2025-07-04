import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { postRepository } from "@/repositories/post";
import { findAllPublicPosts } from "@/lib/post/queries";

export async function FeaturedPost() {
  const posts = await findAllPublicPosts();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;
  return (
    <section
      className={clsx("grid grid-cols-1 gap-8 mb-10", "sm:grid-cols-2 group")}
    >
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 680,
          alt: post.title,
          src: post.coverImageUrl,
          priority: true,
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading="h1"
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
