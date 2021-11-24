import Head from "next/head"
import Header from "../components/Header"

export default function Home({ content, courses }) {
  return (
    <>
      <Head>
        <title>Next.js Starter Kit</title>
        <meta
          name="description"
          content="A Starter Kit for Next.js Applications"
        />
      </Head>

      <Header />
    </>
  )
}
