import { findAllPosts } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../admin/DeletePostButton";

export async function PostsListingAdminPage() {
  const posts = await findAllPosts();

  return (
    <div className="text-1xl text-center">
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

      <div
        className={clsx(
          "fixed inset-0 bg-black/70 backdrop-blur-xs",
          "flex items-center justify-center",
          "z-50"
        )}
      >
        <div
          className={clsx(
            "bg-blue-100 h-50 w-100 p-6 mx-4 rounded-xl",
            "gap-6 flex flex-col",
            "shadow-lg shadow-black/30"
          )}
        >
          <h3 className="text-xl font-bold">Tem certeza?</h3>
          <p>Texto descritivo do que está acontencendo aqui dentro do modal.</p>
          <div className="flex items-center justify-around">
            <button
              className={clsx(
                "bg-red-300",
                "transition",
                "hover:bg-red-500",
                "text-slate-950",
                "px-4",
                "py-2",
                "cursor-pointer",
                "rounded-lg",
                "flex",
                "items-center",
                "justify-center"
              )}
            >
              Sim
            </button>
            <button
              className={clsx(
                "bg-slate-300",
                "transition",
                "hover:bg-slate-400",
                "text-slate-950",
                "px-4",
                "py-2",
                "cursor-pointer",
                "rounded-lg",
                "flex",
                "items-center",
                "justify-center"
              )}
              autoFocus
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
