import Head from "next/head"
import Link from "next/link"
import { getAllPosts } from "../utils/mdxUtils"
import PreviewCard from "@/components/Posts/PreviewCard"
import PageHeader from "@/components/PageHeader"

let title = "How To Code"
let description = "Tutorials for Web Developers"
let seoDescription =
  "How to Code focuses on teaching web development through articles, books, courses and tutorials."

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={seoDescription} />
      </Head>

      <main className="py-12 lg:py-20">
        <article className="max-w-6xl mx-auto px-3">
          <PageHeader title={title} description={description} />
          <section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8"
            data-test="articles-section"
          >
            {allPosts.slice(0, 6).map((post, index) => (
              <div className="col-span-1" key={index}>
                <PreviewCard post={post} />
              </div>
            ))}
          </section>
        </article>
      </main>

      <section className="flex space-x-8 justify-center text-xl pt-8 font-bold">
        <Link href="/posts">
          <a className="mr-8" data-test="see-all-link">
            See All<span className="squiggle">&rarr;</span>
          </a>
        </Link>
      </section>
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
