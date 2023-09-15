import Layout from "./conponents/layouts/Layout"

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-red-500 text-[3rem] font-[800]">안녕하세요.</h1>
        <h1 className="text-red-500 text-[3rem] font-[800]">Hello world.</h1>
      </main>
    </Layout>
  )
}
