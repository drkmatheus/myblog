import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import {
  formatDatetime,
  formatRelativeDatetime,
} from "@/utils/format-datetime";

// Como aqui tem coisa que pode demorar a renderizar, foi separado do código principal, para usar o Suspense
// do react para carregar apenas um componente do layout.

export async function PostListing() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className="flex flex-col group gap-4" key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1200,
                height: 680,
                alt: post.title,
                src: post.coverImageUrl,
              }}
            />
            <div className="flex flex-col gap-5 sm:justify-center">
              <time
                className="text-slate-600 text-sm/tight"
                dateTime={post.createdAt}
                title={formatRelativeDatetime(post.createdAt)}
              >
                {formatDatetime(post.createdAt)}
              </time>
              <PostHeading url={postLink} as="h2">
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
