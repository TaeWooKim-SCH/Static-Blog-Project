import Image from 'next/image';
import { AiOutlineCalendar } from 'react-icons/ai';

import Layout from "./Layout";
import Title from "../common/Title";
import Hr from '../common/Hr';
import Mdx from '../common/Mdx';
import TocBanner from '../common/TocBanner';
import Tag from '../common/Tag';
import AuthorContacts from '../common/AuthorContacts';

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
        <div className="ml-auto">
          <div className="sticky top-[50px] min-w-[240px] max-w-[260px]">
            <TocBanner headings={post.headings} />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag: string, i: number) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </div>
        <Hr className="my-10" />
        <div className="flex justify-center items-center">
          <Image className="w-24 h-24 rounded-full mr-8" src="/blogImgs/profile.jpg" alt="프로필 사진" width={100} height={100} />
          <div>
            <div className="font-bold dark:text-[#dddddd]">TaeWoo Kim</div>
            <div className="text-[#a1a1a1] mb-2">Junior Frontend Engineer</div>
            <AuthorContacts />
          </div>
        </div>
      </div>
    </Layout>
  );
}