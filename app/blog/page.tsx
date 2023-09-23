import Layout from "../conponents/layouts/Layout";
import Title from "../conponents/common/Title";
import BlogMain from "../conponents/BlogMain";

export default async function Blog() {
  return (
    <Layout>
      <Title>Blog</Title>
      <BlogMain />
    </Layout>
  );
}