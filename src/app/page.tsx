import { MyLoader } from "@/components/MyLoader";
import { PostListing } from "@/components/PostsListing";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <header>
        <h1 className="text-5xl font-bold text-center py-7">HEADER</h1>
      </header>
      <Suspense fallback={<MyLoader />}>
        <PostListing />
      </Suspense>
      <footer>
        <p className="text-5xl font-bold text-center py-7">FOOTER</p>
      </footer>
    </div>
  );
}
