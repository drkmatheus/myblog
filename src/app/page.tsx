import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { MyLoader } from "@/components/MyLoader";
import { PostListing } from "@/components/PostsListing";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<MyLoader />}>
        <PostListing />
      </Suspense>
      <footer>
        <p className="text-5xl font-bold text-center py-7">FOOTER</p>
      </footer>
    </Container>
  );
}
