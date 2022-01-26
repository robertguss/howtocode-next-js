import Head from "next/head"
import Layout from "@/components/Layout"
import PageHeader from "@/components/PageHeader"
import Courses from "@/components/Courses/Courses"

let pageTitle = "Courses"
let pageDescription = "All courses are free!"
let seoTitle = "Courses | How To Code"
let seoDescription = "How to Code's free web development courses"

export default function Books() {
  return (
    <Layout>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>

      <main className="py-12 lg:py-20">
        <article className="mx-auto max-w-7xl px-3">
          <PageHeader title={pageTitle} description={pageDescription} />
          <Courses />
        </article>
      </main>
    </Layout>
  )
}
