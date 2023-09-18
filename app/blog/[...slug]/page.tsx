import { notFound } from 'next/navigation';
import { AiOutlineCalendar } from 'react-icons/ai';

import Layout from '@/app/conponents/layouts/Layout';
import Mdx from '../../conponents/common/Mdx';
import { allPosts } from 'contentlayer/generated';
import Hr from '@/app/conponents/common/Hr';
import TocBanner from '@/app/conponents/common/TocBanner';
import Title from '@/app/conponents/common/Title';
import { filteredBlogPost } from '@/app/libs/dataset';

interface PageProps {
  params: {
    slug: string;
  }
}

export async function generateStaticParams() {
  return filteredBlogPost.map((post) => ({
    slug: post.slug.split('/').slice(2)
  }));
}

async function getDocFromParams(slug: any) {
  const doc = allPosts.find((post) => (
    post.slug.split('/').slice(2).join('/') === slug.join('/')
  ));

  if (!doc) {
    return notFound();
  }

  return doc;
}

export default async function DetailPage({ params }: PageProps) {
  const doc = await getDocFromParams(params.slug);

  return (
    <Layout>
      <div className="flex flex-col items-center pb-4">
        <Title>{doc.title}</Title>
        <div className="text-sm flex items-center">
          <AiOutlineCalendar />
          <div className="ml-1">{new Date(doc.date).toISOString().substring(0, 10)}</div>
        </div>
      </div>
      <Hr className="mb-14" />
      <div className="flex">
        <Mdx data={doc.body.code} />
        <div className="ml-auto">
          <div className="sticky top-[120px]">
            <TocBanner headings={doc.headings} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
