import Head from "next/head"
import Layout from "@/components/Layout"
import PageHeader from "@/components/PageHeader"
import Subscribe from "@/components/Subscribe/Subscribe"

let pageTitle = "Newsletter"
let pageDescription = ""
let seoTitle = "Newsletter | How To Code"
let seoDescription = "How to Code's newsletter"

export default function Newletter() {
  return (
    <Layout>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>

      <main className="py-12 lg:py-20">
        <article className="mx-auto max-w-7xl px-3">
          <PageHeader title={pageTitle} description={pageDescription} />
          <div className="mx-auto my-12 max-w-3xl">
            <Subscribe />
          </div>
        </article>
      </main>
    </Layout>
  )
}
