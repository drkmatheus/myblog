import { findAllPosts } from "@/lib/post/queries/admin";

export async function PostsListingAdminPage() {
  const posts = await findAllPosts();

  return (
    <div className="text-2xl text-center font-bold">
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
