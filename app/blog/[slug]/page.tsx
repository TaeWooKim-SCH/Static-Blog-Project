import { notFound } from 'next/navigation';

import Layout from '@/app/conponents/layouts/Layout';
import Mdx from '../../conponents/common/Mdx';
import { allPosts } from 'contentlayer/generated';

interface PageProps {
  params: {
    slug: string;
  }
}

async function getDocFromParams(slug: string) {
  const doc = allPosts.find((post) => post.slug.substring(1) === slug);

  if (!doc) {
    return notFound();
  }

  return doc;
}

export default async function DetailPage({ params }: PageProps) {
  const doc = await getDocFromParams(params.slug);
  
  return (
    <Layout>
      <Mdx data={doc.body.code} />
    </Layout>
  );
}