import { findAllPosts } from "@/lib/post/queries/admin";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const metadata: Metadata = {
  title: "Admin Page",
};

export default async function AdminPostPage() {
  const posts = await findAllPosts();

  return (
    <div className="text-2xl text-center font-bold">
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
