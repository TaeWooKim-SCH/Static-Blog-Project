import FeaturePosts from "./conponents/FeaturePosts";
import LinkArrow from "./conponents/common/LinkArrow"
import Title from "./conponents/common/Title"
import Layout from "./conponents/layouts/Layout"

export default async function Home() {
  return (
    <Layout>
      <main>
        <section>
          <Title>taewoo</Title>
          <div className="mb-4 text-[1.1rem]">
            <span className="text-[#555555] dark:text-[#dddddd]">Hello, I{"'"}m </span>
            <span className="font-bold dark:text-white">Frontend Developer</span>
            <span className="text-[#555555] dark:text-[#dddddd]">.</span>
          </div>
          <div className="mb-4 text-[1.1rem]">
            <span className="text-[#555555] dark:text-[#dddddd]">wanted to convey my knowledge to people.</span>
          </div>
          <div>
            <LinkArrow href="https://taewoo-portfolio.netlify.app" target="_blank">More about me</LinkArrow>
          </div>
        </section>
        <FeaturePosts />
      </main>
    </Layout>
  )
}
