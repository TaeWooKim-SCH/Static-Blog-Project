import Layout from "../conponents/layouts/Layout";
import Title from "../conponents/common/Title";
import { AllBlogPost, filteredSeriesBook } from "../libs/dataset";
import SubTitle from "../conponents/common/SubTitle";
import PostListItem from "../conponents/common/PostListItem";

export default async function Blog() {
  return (
    <Layout>
      {/*  */}
      <Title>Blog</Title>
      {/*  */}
      <div>
        {/*  */}
        <div className="text-[#555555] dark:text-[#dddddd]">개발하며 알게된 것들을 기록하는 공간입니다.</div>
        {/*  */}
        <div className="flex items-center space-x-6 py-12 overflow-scroll scrollbar-hide">
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
        {/*  */}
        <div className="mt-16 flex">
          <SubTitle>{'All Posts'}</SubTitle>
          <span className="pt-[0.4rem] lg:pt-3 ml-2 lg:text-lg font-bold dark:text-[#dddddd]">{'('}{AllBlogPost.length}{')'}</span>
        </div>
        {/*  */}
        <div className="grid gap-8 grid-cols-1 mt-12 lg:grid-cols-2">
          {AllBlogPost.map((post, idx) => (
            <PostListItem post={post} key={idx} />
          ))}
        </div>
        {/*  */}
      </div>
      {/*  */}
    </Layout>
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