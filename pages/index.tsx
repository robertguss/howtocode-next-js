import Head from "next/head"
import Link from "next/link"
import Layout from "@/components/Layout"
import { getAllPosts } from "@/utils/mdxUtils"
import PreviewCard from "@/components/Posts/PreviewCard"
import PageHeader from "@/components/PageHeader"
import EmailSignup from "@/components/EmailSignup"

let title = "How To Code"
let description = "Tutorials for Web Developers"
let seoDescription =
  "How to Code focuses on teaching web development through articles, books, courses and tutorials."

export default function Home({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={seoDescription} />
      </Head>

      <main className="py-12 lg:py-20">
        <article className="mx-auto max-w-6xl px-3">
          <PageHeader title={title} description={description} />
          <section
            className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3"
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

      <section className="flex justify-center space-x-8 text-xl font-bold">
        <Link href="/posts">
          <a className="mr-8" data-test="see-all-link">
            All Articles <span className="squiggle">&rarr;</span>
          </a>
        </Link>
      </section>

      <EmailSignup />
    </Layout>
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
