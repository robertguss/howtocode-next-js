import { Suspense, useState } from "react"

import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer/Footer"
import { getAllPosts } from "../../utils/mdxUtils"
import PreviewCard from "@/components/Posts/PreviewCard"
import PageHeader from "@/components/PageHeader"

let pageTitle = "Articles"
let pageDescription = ""
let seoTitle = "Articles | How To Code"
let seoDescription =
  "How to Code is a blog for web developers that focuses on teaching web development through articles, books, courses and tutorials."

export default function Articles({ allPosts }) {
  const [searchValue, setSearchValue] = useState("")
  const filteredBlogPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>

      <Header />

      <main className="py-12 lg:py-20">
        <article className="mx-auto max-w-6xl px-3">
          <PageHeader title={pageTitle} description={pageDescription} />

          <div className="relative mb-4 w-full">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <section
            className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3"
            data-test="articles-section"
          >
            {!searchValue &&
              allPosts.map((post, index) => (
                <div className="col-span-1" key={index}>
                  <PreviewCard post={post} />
                </div>
              ))}

            <Suspense fallback={null}>
              {!filteredBlogPosts.length && (
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  No posts found.
                </p>
              )}
              {filteredBlogPosts.map((post, index) => (
                <div className="col-span-1" key={index}>
                  <PreviewCard post={post} />
                </div>
              ))}
            </Suspense>
          </section>
        </article>
      </main>

      <Footer />
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
