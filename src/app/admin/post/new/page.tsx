import { PostForm } from "@/components/admin/PostForm";

export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function NewPostPage({ params }: AdminPostIdPageProps) {
  const { id } = await params;

  return (
    <>
      <h1>Criar Post</h1>
      <PostForm />
    </>
  );
}
