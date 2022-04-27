import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-blue-600">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Top"
        data-test="navigation"
      >
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
            </Link>

            <div className="ml-10 hidden space-x-8 lg:block">
              <Link href="/books">
                <a
                  className="text-base font-medium text-white hover:text-indigo-50"
                  key="Free Books"
                  data-test="link-free-books"
                >
                  Free Books
                </a>
              </Link>

              <Link href="/posts">
                <a
                  className="text-base font-medium text-white hover:text-indigo-50"
                  key="Articles"
                  data-test="link-articles"
                >
                  Articles
                </a>
              </Link>

              <Link href="/courses">
                <a
                  className="text-base font-medium text-white hover:text-indigo-50"
                  key="Courses"
                  data-test="link-courses"
                >
                  Courses
                </a>
              </Link>

              <Link href="/tutorials">
                <a
                  className="text-base font-medium text-white hover:text-indigo-50"
                  key="Tutorials"
                  data-test="link-tutorials"
                >
                  Tutorials
                </a>
              </Link>

              <Link href="/newsletter">
                <a
                  className="text-base font-medium text-white hover:text-indigo-50"
                  key="Newsletter"
                  data-test="link-newsletter"
                >
                  Newsletter
                </a>
              </Link>
            </div>
          </div>
          <div className="">
            <Link href="/search">
              <a
                className="rounded-md border border-transparent py-2 px-4 text-base font-medium text-white"
                data-test="link-search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          <Link href="/books">
            <a
              className="text-base font-medium text-white hover:text-indigo-50"
              key="Solutions"
            >
              Free Books
            </a>
          </Link>

          <Link href="/posts">
            <a
              className="text-base font-medium text-white hover:text-indigo-50"
              key="Pricing"
            >
              Articles
            </a>
          </Link>

          <Link href="/courses">
            <a
              className="text-base font-medium text-white hover:text-indigo-50"
              key="Docs"
            >
              Courses
            </a>
          </Link>

          <Link href="/tutorials">
            <a
              className="text-base font-medium text-white hover:text-indigo-50"
              key="Company"
            >
              Tutorials
            </a>
          </Link>

          <Link href="/newsletter">
            <a
              className="text-base font-medium text-white hover:text-indigo-50"
              key="Company"
            >
              Newsletter
            </a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
