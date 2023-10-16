import Layout from "../conponents/layouts/Layout";
import Title from "../conponents/common/Title";
import BlogMain from "../conponents/BlogMain";
import SEO from "../conponents/SEO";

export default async function Blog() {
  return (
    <Layout>
      {/* <SEO title="Blog - taewoo" description="Welcome to taewoo blog" /> */}
      {/*  */}
      <Title>Blog</Title>
      {/*  */}
      <BlogMain />
      {/*  */}
    </Layout>
  );
}