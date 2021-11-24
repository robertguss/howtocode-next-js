import Head from "next/head"
import Header from "../components/Header"
import { getAllPosts } from "../utils/mdxUtils"
import PreviewCard from "../components/Posts/PreviewCard"

export default function Home({ allPosts }) {
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

      <main className="py-12 lg:py-20">
        <article className="max-w-6xl mx-auto px-3">
          {/* <HomeHeader title={title} description={description} /> */}
          <section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8"
            data-test="articles-section"
          >
            {allPosts.slice(0, 6).map((p, index) => (
              <div className="col-span-1" key={index}>
                <PreviewCard post={p} />
              </div>
            ))}
          </section>
        </article>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "description",
    "hero",
    "tags",
  ])

  return {
    props: { allPosts },
  }
}
