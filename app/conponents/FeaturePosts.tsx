'use client'

import { motion, AnimatePresence } from "framer-motion"

import LinkArrow from "./common/LinkArrow";
import PostItem from "./common/PostItem";
import SubTitle from "./common/SubTitle";

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

export default function FeaturePosts() {
  const unsplashImgList = [
    '/blogImgs/sample/sample-1.jpg',
    '/blogImgs/sample/sample-2.jpg',
    '/blogImgs/sample/sample-3.jpg',
    '/blogImgs/sample/sample-4.jpg',
    '/blogImgs/sample/sample-5.jpg',
    '/blogImgs/sample/sample-6.jpg',
  ];

  return (
    <section className="mt-16">
      <div className="mb-6">
        <SubTitle>Featured Posts</SubTitle>
      </div>
      <AnimatePresence>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={animate.initial} animate={animate.animate}
          exit={animate.exit}
        >
          <PostItem
            href="/blog/nextjs/3-rsc"
            imgUrl={unsplashImgList[0]}
            title="[Next.js] rsc란 무엇일까?"
            date="2023.09.28"
          />
          <PostItem
            href="/blog/nextjs/2-deployError"
            imgUrl={unsplashImgList[1]}
            title="[Next.js] Vercel 배포 후 서버 에러처리"
            date="2023.09.18"
          />
          <PostItem
            href="/blog/javascript/10-browser"
            imgUrl={unsplashImgList[2]}
            title="[JavaScript] 브라우저 동작 과정"
            date="2023.09.17"
          />
          <PostItem
            href="/blog/javascript/11-runtimeengine"
            imgUrl={unsplashImgList[3]}
            title="[JavaScript] 런타임과 엔진"
            date="2023.09.16"
          />
        </motion.div>
      </AnimatePresence>
      <div className="mt-7">
        <LinkArrow href="/blog">Read all posts</LinkArrow>
      </div>
    </section>
  );
}
