import LinkArrow from "./conponents/common/LinkArrow"
import PostItem from "./conponents/common/PostItem";
import SubTitle from "./conponents/common/SubTitle"
import Title from "./conponents/common/Title"
import Layout from "./conponents/layouts/Layout"

export default function Home() {
  const unsplashImgList = [
    '/blog/sample/sample-1.jpg',
    '/blog/sample/sample-2.jpg',
    '/blog/sample/sample-3.jpg',
    '/blog/sample/sample-4.jpg',
    '/blog/sample/sample-5.jpg',
    '/blog/sample/sample-6.jpg',
  ];

  return (
    <Layout>
      <main>
        <section>
          <Title>taewoo</Title>
          <div className="mb-4 text-[1.1rem]">
            <span className="text-[#555555]">Hello, I{"'"}m </span>
            <span className="font-bold">Frontend Developer</span>
            <span className="text-[#555555]">.</span>
          </div>
          <div className="mb-4 text-[1.1rem]">
            <span className="text-[#555555]">wanted to convey my knowledge to people.</span>
          </div>
          <div>
            <LinkArrow href="https://taewoo-portfolio.netlify.app" target="_blank">More about me</LinkArrow>
          </div>
        </section>
        <section className="mt-16">
          <div className="mb-6">
            <SubTitle>Featured Posts</SubTitle>
          </div>
          <div className="grid gap-6 grid-cols-4">
            <PostItem
              href="/blog/javascript/darkmode"
              imgUrl={unsplashImgList[0]}
              title="다크 모드 더 프로처럼 활용하기"
              date="2023.09.16"
            />
            <PostItem
              href="/blog/javascript/promise"
              imgUrl={unsplashImgList[1]}
              title="[JavaScript] Promise"
              date="2023.09.17"
            />
            <PostItem
              href="/blog/javascript/prototype"
              imgUrl={unsplashImgList[2]}
              title="[JavaScript] Prototype"
              date="2023.09.17"
            />
            <PostItem
              href="/blog/javascript/nextblog"
              imgUrl={unsplashImgList[3]}
              title="Next 13버전으로 블로그 만들기"
              date="2023.09.16"
            />
          </div>
          <div className="mt-7">
            <LinkArrow href="/blog">Read all posts</LinkArrow>
          </div>
        </section>
      </main>
    </Layout>
  )
}
