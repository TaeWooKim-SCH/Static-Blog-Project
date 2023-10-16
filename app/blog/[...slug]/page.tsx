import { AllBlogPost } from '@/app/libs/dataset';
import PostLayout from '@/app/conponents/layouts/PostLayout';
import { getDocFromParams } from '@/app/libs/module';

interface PageProps {
  params: {
    slug: string;
  }
}

export async function generateStaticParams() {
  return AllBlogPost.map((post) => ({
    slug: post.slug.split('/').slice(2)
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = await getDocFromParams(params.slug);

  return {
    title: post.title,
    description: post.description
  }
}

export default async function DetailPage({ params }: PageProps) {
  const doc = await getDocFromParams(params.slug);

  return (
    <PostLayout post={doc} />
  );
}
