import LinkArrow from "./conponents/common/LinkArrow"
import SubTitle from "./conponents/common/SubTitle"
import Title from "./conponents/common/Title"
import Layout from "./conponents/layouts/Layout"

export default function Home() {
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
          <SubTitle>Featured Posts</SubTitle>
        </section>
      </main>
    </Layout>
  )
}
