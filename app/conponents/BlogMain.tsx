'use client'

import { motion } from "framer-motion";
import Link from "next/link";

import { filteredSeriesBook, sortedAllBlogPost } from "../libs/dataset";
import SubTitle from "./common/SubTitle";
import SearchBarInput from "./common/SearchBarInput";
import PostListItem from "./common/PostListItem";
import useSearch from "../libs/useSearch";

export default function BlogMain() {
  const { searchValue, searchHandler } = useSearch();

  const filteredBlogPost = sortedAllBlogPost.filter((post) => post.title.includes(searchValue));
  console.log(filteredSeriesBook);
  return (
    <div>
      <div className="text-[#555555] dark:text-[#dddddd]">개발하며 알게된 것들을 기록하는 공간입니다.</div>

      <div className="mt-5">
        <SearchBarInput onChange={searchHandler} />
      </div>

      <div
        className="flex items-center space-x-6 py-12 overflow-scroll scrollbar-hide"
      >
        {filteredSeriesBook.map((post, idx) => (
          <div key={idx}>
            <Link href={post.slug}>
              <div className="relative h-56 w-40 select-none rounded-lg bg-neutral-200 px-8 pt-8 pb-12 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl dark:bg-neutral-800">
                <div className="absolute inset-y-0 left-2.5 w-[1px] bg-neutral-100 dark:bg-neutral-700"></div>
                <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-neutral-700 dark:text-[#dddddd]">{post.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 flex">
        <SubTitle>{searchValue ? 'Filtered Posts' : 'All Posts'}</SubTitle>
        <span className="pt-3 ml-2 text-lg font-bold dark:text-[#dddddd]">{'('}{filteredBlogPost.length}{')'}</span>
      </div>

      <motion.div
        className="grid gap-8 grid-cols-1 lg:grid-cols-2 mt-12"
        initial={animate.initial}
        animate={animate.animate}
        exit={animate.exit}
      >
        {filteredBlogPost.map((post, idx) => (
          <PostListItem post={post} key={idx} />
        ))}
      </motion.div>
    </div>
  );
}

const animate = {
  initial :{ 
      transform : `translateY(50px)`,
      opacity : 0,
      transition: `all 2s ease`
  },
  animate : {
      transform : 'translateY(0px)',
      opacity: 1,
  },
  exit : {
      transform : `translateY(50px)`,
      opacity: 0,
  }
}