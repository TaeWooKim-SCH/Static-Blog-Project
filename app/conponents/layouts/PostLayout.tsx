'use client'

import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import { AiOutlineCalendar } from 'react-icons/ai';

import Layout from "./Layout";
import Title from "../common/Title";
import Hr from '../common/Hr';
import Mdx from '../common/Mdx';
import TocBanner from '../common/TocBanner';
import Tag from '../common/Tag';
import AuthorContacts from '../common/AuthorContacts';
import { HiChevronRight } from 'react-icons/hi';
import { Post } from '@/.contentlayer/generated';
import SubTitle from '../common/SubTitle';
import SEO from '../SEO';

export default function PostLayout({ post }: { post: Post }) {
  const { scrollYProgress } = useScroll();

  return (
    <Layout>
      {/* <SEO title={post.title} description={post.description} /> */}
      {/* <motion.div
        className="w-full h-2 fixed top-0 right-0 bg-red-500 z-50"
        style={{ scaleX: scrollYProgress }}
      /> */}
      <div className="flex flex-col items-center pb-4">
        <Title>{post.title}</Title>
        <div className="text-sm flex items-center">
          <AiOutlineCalendar className="dark:fill-[#dddddd]" />
          <div className="ml-1 dark:text-[#dddddd]">{new Date(post.date).toISOString().substring(0, 10)}</div>
        </div>
      </div>
      <Hr className="mb-5 lg:mb-14" />
      <div className="mb-5 lg:hidden">
        <SubTitle>Table of contents</SubTitle>
        <ul className="mt-5 pl-10">
          {post.headings.map((head: any, idx: number) => (
              head.level === 1 || head.level === 2 ? (
                <li className="py-1 list-disc" key={idx}>
                  <a
                    className="dark:text-[#dddddd]"
                    href={`#${head.slug}`}
                  >{head.text}</a>
                </li>
              ) : (
                <li className="py-1 ml-2" key={idx}>
                  <a
                    className="flex items-center dark:text-[#dddddd] text-xs"
                    href={`#${head.slug}`}
                  >
                    <HiChevronRight className="dark:fill-[#dddddd]" /> {head.text}
                  </a>
                </li>
              )
            ))}
          </ul>
        <Hr className="my-5" />
      </div>
      <div className="flex justify-center relative lg:gap-8 w-full">
        <Mdx data={post.body.code} />
        <div className="ml-auto">
          <div className="sticky top-[50px] min-w-[240px] max-w-[260px] hidden lg:block">
            <TocBanner headings={post.headings} />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags && post.tags.map((tag: string, i: number) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </div>
        <Hr className="my-10" />
        <div className="flex justify-center items-center">
          <Image className="w-24 h-24 rounded-full mr-8" src="/blogImgs/profile.jpg" alt="프로필 사진" width={100} height={100} />
          <div>
            <div className="font-bold dark:text-[#dddddd]">TaeWoo Kim</div>
            <div className="text-[#838383] mb-2">Junior Frontend Engineer</div>
            <AuthorContacts />
          </div>
        </div>
      </div>
    </Layout>
  );
}