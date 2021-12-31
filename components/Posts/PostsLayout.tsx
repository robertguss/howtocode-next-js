import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote"
import Script from "next/script"
import Toc from "./Toc"

export default function LessonLayout({ toc, source, components, slug }) {
  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-tomorrow.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen mt-20">
        <div className="py-6">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-full lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Table of Content */}
            <div className="hidden lg:block lg:col-span-3 xl:col-span-3">
              <div className="sticky top-6">
                <p className="font-semibold mb-4">ON THIS PAGE</p>
                <Toc navigation={toc} />

                <Link
                  href={`https://github.com/robertguss/howtocode-next-js/blob/master/posts/${slug}.md`}
                >
                  <a className="flex pt-4 text-blue-600">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjYwOC4zNDJDNS41MzUuMzQyLjYxIDUuMTYyLjYxIDExLjEwOGMwIDQuNzU3IDMuMTUyIDguNzkyIDcuNTIzIDEwLjIxNS41NS4xLjc1MS0uMjMzLjc1MS0uNTE4IDAtLjI1Ni0uMDEtLjkzMy0uMDE1LTEuODMxLTMuMDYuNjUtMy43MDUtMS40NDQtMy43MDUtMS40NDQtLjUtMS4yNDMtMS4yMjItMS41NzQtMS4yMjItMS41NzQtLjk5OC0uNjY4LjA3Ni0uNjU1LjA3Ni0uNjU1IDEuMTA0LjA3NiAxLjY4NSAxLjExIDEuNjg1IDEuMTEuOTgxIDEuNjQ1IDIuNTc1IDEuMTcgMy4yMDEuODk0LjEtLjY5NS4zODUtMS4xNy42OTktMS40MzktMi40NDMtLjI3MS01LjAxMS0xLjE5NS01LjAxMS01LjMyIDAtMS4xNzYuNDI5LTIuMTM3IDEuMTMyLTIuODktLjExMy0uMjcyLS40OS0xLjM2Ny4xMDgtMi44NDkgMCAwIC45MjQtLjI4OSAzLjAyNSAxLjEwNC44NzctLjI0IDEuODE5LS4zNTggMi43NTQtLjM2My45MzQuMDA1IDEuODc1LjEyNCAyLjc1NC4zNjMgMi4xLTEuMzkzIDMuMDIyLTEuMTA0IDMuMDIyLTEuMTA0LjYgMS40ODIuMjIyIDIuNTc3LjExIDIuODUuNzA1Ljc1MiAxLjEzIDEuNzEzIDEuMTMgMi44ODggMCA0LjEzNi0yLjU3MiA1LjA0Ni01LjAyMiA1LjMxMy4zOTQuMzMyLjc0Ni45OS43NDYgMS45OTQgMCAxLjQzOC0uMDEzIDIuNi0uMDEzIDIuOTUzIDAgLjI4OC4xOTguNjIzLjc1Ni41MTggNC4zNjgtMS40MjcgNy41MTYtNS40NiA3LjUxNi0xMC4yMTUgMC01Ljk0Ni00LjkyNS0xMC43NjYtMTEtMTAuNzY2IiBmaWxsPSIjMTYxNTE0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                      alt="github logo"
                    ></img>
                    <span className="ml-2">Edit This Page</span>
                  </a>
                </Link>
              </div>
            </div>

            {/* Content */}
            <main className="lesson-content lg:col-span-9 xl:col-span-7">
              <div className="relative bg-white overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">
                  <div className="prose prose-indigo prose-lg text-gray-500 mx-auto">
                    <header className="mx-auto max-w-3xl text-center content">
                      <h1>{source.scope.title}</h1>
                    </header>
                    {source.scope.hero && (
                      <Image
                        className="rounded-xl mx-auto"
                        src={source.scope.hero}
                        alt={`${source.scope.title} Hero Image`}
                        width={700}
                        height={400}
                      />
                    )}

                    {source.scope.youtube && (
                      <div className="embed-responsive aspect-ratio-16/9 mt-6 lg:mt-12">
                        <iframe
                          width="700"
                          height="500"
                          className="embed-responsive-item"
                          src={`https://www.youtube.com/embed/${source.scope.youtube}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                    <MDXRemote {...source} components={components} />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <div id="modal" data-test="lesson-modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <img src="" alt="" />
        </div>
      </div>

      <Script id="show-banner" strategy="afterInteractive">
        {`
          const images = document.querySelectorAll(".lesson-content img")
          const modal = document.getElementById("modal")
          const modalImg = document.querySelector("#modal .modal-content img")
          const modalClose = document.querySelector("#modal .modal-content .close")

          images.forEach((img) => {
            img.addEventListener("click", (event) => {
              let src = event.target.getAttribute("src")
              modalImg.src = src
              modal.style.display = "block"
            })
          })

          modalClose.addEventListener("click", () => {
            modal.style.display = "none"
          })

          // When the user clicks anywhere outside of the modal, close it
          window.addEventListener("click", (event) => {
            if (event.target == modal) {
              modal.style.display = "none"
            }
          })
        `}
      </Script>
    </>
  )
}
