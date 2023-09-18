import Layout from "../conponents/layouts/Layout";
import Title from "../conponents/common/Title";
import SubTitle from "../conponents/common/SubTitle";
import PostListItem from "../conponents/common/PostListItem";
import {  AllBlogPost, filteredSeriesBook } from "../libs/dataset";

export default async function Blog() {
  return (
    <Layout>
      <Title>Blog</Title>
      <div>
        <div className="text-gray-500">개발하며 알게된 것들을 기록하는 공간입니다.</div>

        <div className="flex items-center space-x-6 pt-12 no-scrollbar">
          {filteredSeriesBook.map((post, idx) => (
            <div key={idx}>
              <a href={post.slug}>
                <div className="relative h-56 w-40 select-none rounded-lg bg-neutral-200 px-8 pt-8 pb-12 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl">
                  <div className="absolute inset-y-0 left-2.5 w-[1px] bg-neutral-100"></div>
                  <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium">{post.title}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex">
          <SubTitle>All Posts</SubTitle>
          <span className="pt-3 ml-2 text-lg font-bold">{'('}{AllBlogPost.length}{')'}</span>
        </div>

        <div className="grid gap-8 grid-cols-2 mt-12">
          {AllBlogPost.map((post, idx) => (
            <PostListItem post={post} key={idx} />
          ))}
        </div>
      </div>
    </Layout>
  );
}