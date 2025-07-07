import { findPostBySlug } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlug(slug);

  return (
    <div>
      <h1>{post.content}</h1>
    </div>
  );
}
