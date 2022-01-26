import Head from "next/head"
import Layout from "@/components/Layout"
import PageHeader from "@/components/PageHeader"
import SearchInput from "@/components/Search/SearchInput"
import Script from "next/script"

let pageTitle = "Search"
let pageDescription = "Search all Articles"
let seoTitle = "Search | How To Code"
let seoDescription = "Search through all articles on How To Code"

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
          <SearchInput />
        </article>
      </main>

      <Script
        id="lunr-js"
        src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js"
        strategy="beforeInteractive"
      />
      <Script
        id="mark-js"
        src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/mark.min.js"
        strategy="beforeInteractive"
      />
      <Script id="search-js" src="/scripts/lunrSearch.js" />
    </Layout>
  )
}
