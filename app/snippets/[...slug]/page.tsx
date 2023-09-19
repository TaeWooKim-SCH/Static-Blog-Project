import PostLayout from "@/app/conponents/layouts/PostLayout";
import { getDocFromParams } from "@/app/libs/module";

interface PageProps {
  params: {
    slug: string;
  }
}

export default async function SnippetDetail({ params }: PageProps) {
  const doc = await getDocFromParams(params.slug);

  return (
    <PostLayout post={doc} />
  );
}