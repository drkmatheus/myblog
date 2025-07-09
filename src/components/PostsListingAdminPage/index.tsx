import { findAllPosts } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

export async function PostsListingAdminPage() {
  const posts = await findAllPosts();

  return (
    <div className="text-1xl text-center font-bold">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "bg-amber-900",
              "py-2",
              !post.published && "bg-slate-300",
              "flex gap-2 items-center justify-between"
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            <button
              className={clsx(
                "flex columns-1",
                "bg-amber-200",
                "mr-1",
                "text-red-500",
                "cursor-pointer",
                "hover:text-red-700"
              )}
              aria-label={`Deletar post ${post.title}`}
              title="Deletar post"
            >
              <Trash2Icon /> Deletar
            </button>
          </div>
        );
      })}
    </div>
  );
}
