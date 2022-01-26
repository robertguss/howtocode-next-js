import Image from "next/image"
import Link from "next/link"

export default function Tutorials() {
  return (
    <article className="mx-auto max-w-5xl px-3" data-test="tutorials">
      <section className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2">
        <div className="col-span-1">
          <Link href="/tutorials/elixir-basics">
            <a className="relative top-0 block h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-75 ease-in-out hover:-top-2 hover:shadow-xl">
              <Image
                className="squiggle"
                src="/images/elixir-basics/cover-purple.png"
                alt=""
                width={488}
                height={260}
              />
              <div className="py-6 px-8">
                <h2 className="text-2xl font-bold leading-tight">
                  Elixir Basics
                </h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/tutorials/understanding-the-jamstack/">
            <a className="relative top-0 block h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-75 ease-in-out hover:-top-2 hover:shadow-xl">
              <Image
                className="squiggle"
                src="/images/hero/understanding_the_jamstack_banner.png"
                alt=""
                width={488}
                height={260}
              />
              <div className="py-6 px-8">
                <h2 className="text-2xl font-bold leading-tight">
                  Understanding the Jamstack
                </h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/tutorials/adonis-fundamentals/">
            <a className="relative top-0 block h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-75 ease-in-out hover:-top-2 hover:shadow-xl">
              <Image
                className="squiggle"
                src="/images/hero/adonis-js.png"
                alt=""
                width={488}
                height={260}
              />
              <div className="py-6 px-8">
                <h2 className="text-2xl font-bold leading-tight">
                  Adonis Fundamentals
                </h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/tutorials/go-basics/">
            <a className="relative top-0 block h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-75 ease-in-out hover:-top-2 hover:shadow-xl">
              <Image
                className="squiggle"
                src="/images/hero/Golang-Basics.png"
                alt=""
                width={488}
                height={260}
              />
              <div className="py-6 px-8">
                <h2 className="text-2xl font-bold leading-tight">Go Basics</h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/tutorials/tailwind-css-travel-site/">
            <a className="relative top-0 block h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-75 ease-in-out hover:-top-2 hover:shadow-xl">
              <Image
                className="squiggle"
                src="/images/hero/tailwind-css-travel-site.png"
                alt=""
                width={488}
                height={260}
              />
              <div className="py-6 px-8">
                <h2 className="text-2xl font-bold leading-tight">
                  Tailwind CSS Travel Site
                </h2>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </article>
  )
}
