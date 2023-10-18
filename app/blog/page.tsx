import { Metadata } from "next";

import Layout from "../conponents/layouts/Layout";
import Title from "../conponents/common/Title";
import BlogMain from "../conponents/BlogMain";

export const metadata: Metadata = {
  title: 'Blog - taewoo',
  description: '저의 블로그를 찾아 주셔서 감사합니다.'
}

export default async function Blog() {
  return (
    <Layout>
      <Title>Blog</Title>
      {/*  */}
      <BlogMain />
    </Layout>
  );
}