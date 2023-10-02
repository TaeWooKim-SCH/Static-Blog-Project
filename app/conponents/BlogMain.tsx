'use client'

import { motion } from "framer-motion";

import { filteredSeriesBook, sortedAllBlogPost } from "../libs/dataset";
import SubTitle from "./common/SubTitle";
import SearchBarInput from "./common/SearchBarInput";
import PostListItem from "./common/PostListItem";
import useSearch from "../libs/useSearch";

export default function BlogMain() {
  const { searchValue, searchHandler } = useSearch();

  const filteredBlogPost = sortedAllBlogPost.filter((post) => post.title.includes(searchValue));

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
            <a href={post.slug}>
              <div className="relative h-56 w-40 select-none rounded-lg bg-neutral-200 px-8 pt-8 pb-12 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl dark:bg-neutral-800">
                <div className="absolute inset-y-0 left-2.5 w-[1px] bg-neutral-100 dark:bg-neutral-700"></div>
                <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-neutral-700 dark:text-[#dddddd]">{post.title}</div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 flex">
        <SubTitle>{searchValue ? 'Filtered Posts' : 'All Posts'}</SubTitle>
        <span className="pt-3 ml-2 text-lg font-bold dark:text-[#dddddd]">{'('}{filteredBlogPost.length}{')'}</span>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-12">
        {filteredBlogPost.map((post, idx) => (
          <PostListItem post={post} key={idx} />
        ))}
      </div>
    </div>
  );
}

// export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

// export const fadeInSlideToLeft = {
//   initial: {
//     opacity: 0,
//     x: 30,
//     transition: { duration: 0.6, ease: defaultEasing },
//     willChange: 'opacity, transform',
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: defaultEasing },
//     willChange: 'opacity, transform',
//   },
//   exit: {
//     opacity: 0,
//     x: -30,
//     transition: { duration: 0.6, ease: defaultEasing },
//     willChange: 'opacity, transform',
//   },
// };

// export const staggerOne: Variants = {
//   animate: { transition: { staggerChildren: 0.1 } },
// };

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