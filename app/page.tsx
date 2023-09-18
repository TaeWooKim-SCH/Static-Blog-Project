import LinkArrow from "./conponents/common/LinkArrow"
import PostItem from "./conponents/common/PostItem";
import SubTitle from "./conponents/common/SubTitle"
import Title from "./conponents/common/Title"
import Layout from "./conponents/layouts/Layout"

export default async function Home() {
  const unsplashImgList = [
    '/blogImgs/sample/sample-1.jpg',
    '/blogImgs/sample/sample-2.jpg',
    '/blogImgs/sample/sample-3.jpg',
    '/blogImgs/sample/sample-4.jpg',
    '/blogImgs/sample/sample-5.jpg',
    '/blogImgs/sample/sample-6.jpg',
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
              href="/blog/nextjs/1-nextblog"
              imgUrl={unsplashImgList[0]}
              title="[Next.js] Next 13버전으로 블로그 만들기"
              date="2023.09.16"
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
          </div>
          <div className="mt-7">
            <LinkArrow href="/blog">Read all posts</LinkArrow>
          </div>
        </section>
      </main>
    </Layout>
  )
}
