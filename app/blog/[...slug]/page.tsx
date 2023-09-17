import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { AiOutlineCalendar } from 'react-icons/ai';

// import { allPosts } from 'contentlayer/generated';

// const Layout = dynamic(import('@/app/conponents/layouts/Layout'));
// const Mdx = dynamic(import('../../conponents/common/Mdx'));
// const Hr = dynamic(import('@/app/conponents/common/Hr'));
// const TocBanner = dynamic(import('@/app/conponents/common/TocBanner'));
// const Title = dynamic(import('@/app/conponents/common/Title'));
import Layout from '@/app/conponents/layouts/Layout';
import Mdx from '../../conponents/common/Mdx';
import { allPosts } from 'contentlayer/generated';
import Hr from '@/app/conponents/common/Hr';
import TocBanner from '@/app/conponents/common/TocBanner';
import Title from '@/app/conponents/common/Title';

interface PageProps {
  params: {
    slug: string;
  }
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
  console.log(params);

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
