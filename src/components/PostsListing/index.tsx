import { postRepository } from "@/repositories/post";

// Como aqui tem coisa que pode demorar a renderizar, foi separado do código principal, para usar o Suspense
// do react para carregar apenas um componente do layout.

export async function PostListing() {
  const posts = await postRepository.findAll();
  return posts.map((post) => {
    return <p key={post.id}>{post.title}</p>;
  });
}
