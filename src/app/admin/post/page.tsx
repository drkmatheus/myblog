import { MyLoader } from "@/components/MyLoader";
import { PostsListingAdminPage } from "@/components/PostsListingAdminPage";
import { findAllPosts } from "@/lib/post/queries/admin";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const metadata: Metadata = {
  title: "Admin Page",
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<MyLoader />}>
      <PostsListingAdminPage />
    </Suspense>
  );
}
