import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer/Footer"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  )
}
