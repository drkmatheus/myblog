type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Hello World! Hello {slug}!</h1>
    </div>
  );
}
