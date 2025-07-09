export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function NewPostPage({ params }: AdminPostIdPageProps) {
  const { id } = await params;

  return (
    <div className="text-2xl text-center font-bold">
      <h1>Página de criação de posts</h1>
    </div>
  );
}
