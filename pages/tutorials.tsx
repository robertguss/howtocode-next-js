import Head from "next/head"
import Layout from "@/components/Layout"
import PageHeader from "@/components/PageHeader"
import Tutorials from "@/components/Tutorials/Tutorials"

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
        <article className="max-w-7xl mx-auto px-3">
          <PageHeader title={pageTitle} description={pageDescription} />
          <Tutorials />
        </article>
      </main>
    </Layout>
  )
}
