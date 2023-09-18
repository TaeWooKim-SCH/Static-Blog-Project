import { notFound } from "next/navigation";
import { AiOutlineCalendar, AiOutlineBook } from 'react-icons/ai';

import { allPosts } from "@/.contentlayer/generated";
import Layout from "@/app/conponents/layouts/Layout";
import PostListItem from "@/app/conponents/common/PostListItem";
import { AllSeriesName } from "@/app/libs/dataset";

interface PageProps {
  params: {
    slug: string;
  }
}

export async function generateStaticParams() {
  return AllSeriesName.map((name) => ({slug: name}));
}

async function getSeriesPost(slug: string) {
  const posts = allPosts
    .filter((post) => post._raw.sourceFileDir.split('/')[1] === slug)
    .filter((post) => !post._raw.sourceFilePath.includes('index.mdx'));

  if (!posts) {
    return notFound();
  }

  return posts;
}
// async function getSeriesPost(slug: string) {
//   let seriesInfo: any;
//   const posts = allPosts
//     .filter((post) => post._raw.sourceFileDir.split('/')[1] === slug)
//     .filter((post) => {
//       if (post._raw.sourceFilePath.includes('index.mdx')) {
//         seriesInfo = post;
//       }
//       return !post._raw.sourceFilePath.includes('index.mdx')
//     });

//   if (!posts) {
//     return notFound();
//   }

//   return {
//     seriesInfo,
//     posts
//   };
// }

export default async function SeriesPage({ params }: PageProps) {
  const postsData = await getSeriesPost(params.slug);

  return (
    <Layout>
      <main className="relative pb-16">
        <section>
          <div className="grid gap-8 grid-cols-3 sm:gap-32">
            <div className="p-10">
              <div className="relative mx-auto h-[336px] w-[240px] select-none rounded-lg bg-neutral-200 px-11 pb-16 pt-12">
                <div className="absolute inset-y-0 left-4 w-[1px] bg-neutral-50"></div>
                <div className="flex h-full break-keep bg-neutral-50 px-3 py-4 text-xl font-semibold">
                  {/* {postsData.seriesInfo.title ? postsData.seriesInfo.title : '제목없음'} */}
                  프론트엔드입니다.
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-neutral-200 rounded-lg px-5 py-4">
                <p>안녕하세용</p>
                {/* <p>{postsData.seriesInfo.description}</p> */}
                <div className="flex text-xs mt-1">
                  <div className="flex items-center mr-3">
                    <AiOutlineCalendar />
                    <div className="ml-1">2023.09.18</div>
                    {/* <div className="ml-1">{new Date(postsData.seriesInfo.date).toISOString().substring(0, 10)}</div> */}
                  </div>
                  <div className="flex items-center">
                    <AiOutlineBook />
                    <div className="ml-1">{postsData.length}편</div>
                    {/* <div className="ml-1">{postsData.posts.length}편</div> */}
                  </div>
                </div>
              </div>
              <section className="mt-16">
                {postsData.map((post, idx) => (
                  <PostListItem post={post} key={idx} />
                ))}
                {/* {postsData.posts.map((post, idx) => (
                  <PostListItem post={post} key={idx} />
                ))} */}
              </section>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}