import { AiOutlineCalendar } from 'react-icons/ai';

import Layout from "./Layout";
import Title from "../common/Title";
import Hr from '../common/Hr';
import Mdx from '../common/Mdx';
import TocBanner from '../common/TocBanner';

export default function PostLayout({ post }: any) {
  return (
    <Layout>
      <div className="flex flex-col items-center pb-4">
        <Title>{post.title}</Title>
        <div className="text-sm flex items-center">
          <AiOutlineCalendar className="dark:fill-[#dddddd]" />
          <div className="ml-1 dark:text-[#dddddd]">{new Date(post.date).toISOString().substring(0, 10)}</div>
        </div>
      </div>
      <Hr className="mb-14" />
      <div className="flex justify-center relative gap-8 w-full">
        <Mdx data={post.body.code} />
        <div className="ml-10">
          <div className="sticky top-[50px] min-w-[240px] max-w-[260px]">
            <TocBanner headings={post.headings} />
          </div>
        </div>
      </div>
    </Layout>
  );
}