import Head from "next/head"
import PageHeader from "@/components/PageHeader"
import BooksGrid from "@/components/Books/BooksGrid"

let pageTitle = "Books"
let pageDescription = "All of my books are free!"
let seoTitle = "Books | How To Code"
let seoDescription = "Download all of my books for free!"

export default function Books() {
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>

      <main className="py-12 lg:py-20">
        <article className="max-w-6xl mx-auto px-3">
          <PageHeader title={pageTitle} description={pageDescription} />

          <BooksGrid />
        </article>
      </main>
    </>
  )
}
