
import { allPosts } from "@/.contentlayer/generated";
import Layout from "../conponents/layouts/Layout";
import Title from "../conponents/common/Title";
import SubTitle from "../conponents/common/SubTitle";
import PostListItem from "../conponents/common/PostListItem";
import { AllSeries } from "../libs/dataset";

export default function Blog() {
  console.log(AllSeries);

  return (
    <Layout>
      <Title>Blog</Title>
      <div>
        <div className="text-gray-500">개발하며 알게된 것들을 기록하는 공간입니다.</div>
        
        <div className="mt-16 flex">
          <SubTitle>All Posts</SubTitle>
          <span className="pt-3 ml-2 text-lg font-bold">{'('}{allPosts.length}{')'}</span>
        </div>

        <div className="grid gap-8 grid-cols-2 mt-12">
          {allPosts.map((post, idx) => (
            <PostListItem post={post} key={idx} />
          ))}
        </div>
      </div>
    </Layout>
  );
}