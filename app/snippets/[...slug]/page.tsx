import PostLayout from "@/app/conponents/layouts/PostLayout";
import { AllSnippets } from "@/app/libs/dataset";
import { getDocFromParams } from "@/app/libs/module";

interface PageProps {
  params: {
    slug: string;
  }
}

export async function generateStaticParams() {
  return AllSnippets.map((post) => ({
    slug: post.slug.split('/').slice(2)
  }))
}

export default async function SnippetDetail({ params }: PageProps) {
  const doc = await getDocFromParams(params.slug);

  return (
    <PostLayout post={doc} />
  );
}