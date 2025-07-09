import { deletePostsAction } from "@/actions/delete-posts-action";
import { findAllPosts } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import { DeletePostButton } from "../admin/DeletePostButton";

export async function PostsListingAdminPage() {
  const posts = await findAllPosts();

  return (
    <div className="text-1xl text-center font-bold">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "py-2",
              !post.published && "bg-slate-300",
              "flex gap-2 items-center justify-between"
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
