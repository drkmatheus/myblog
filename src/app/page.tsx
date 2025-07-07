import { FeaturedPost } from "@/components/FeaturedPost";

import { MyLoader } from "@/components/MyLoader";
import { PostListing } from "@/components/PostsListing";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <FeaturedPost />
      <Suspense fallback={<MyLoader />}>
        <PostListing />
      </Suspense>
    </>
  );
}
