export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;

  return (
    <div className="text-2xl text-center font-bold">
      <h1>Post de id: {id}</h1>
    </div>
  );
}
