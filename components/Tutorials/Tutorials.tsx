import Image from "next/image"
import Link from "next/link"

export default function Tutorials() {
  return (
    <article className="max-w-5xl mx-auto px-3" data-test="tutorials">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
        <div className="col-span-1">
          <Link href="/tutorials/elixir-basics">
            <a className="transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden">
              <Image
                className="squiggle"
                src="/images/elixir-basics/cover-purple.png"
                alt=""
                width={488}
                height={260}
              />
              <div className="py-6 px-8">
                <h2 className="font-bold text-2xl leading-tight">
                  Elixir Basics
                </h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/tutorials/understanding-the-jamstack/">
            <a className="transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden">
              <Image
                className="squiggle"
                src="/images/hero/understanding_the_jamstack_banner.png"
                alt=""
                width={488}
                height={260}
              />
              <div className="py-6 px-8">
                <h2 className="font-bold text-2xl leading-tight">
                  Understanding the Jamstack
                </h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/tutorials/adonis-fundamentals/">
            <a className="transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden">
              <Image
                className="squiggle"
                src="/images/hero/adonis-js.png"
                alt=""
                width={488}
                height={260}
              />
              <div className="py-6 px-8">
                <h2 className="font-bold text-2xl leading-tight">
                  Adonis Fundamentals
                </h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/tutorials/go-basics/">
            <a className="transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden">
              <Image
                className="squiggle"
                src="/images/hero/adonis-js.png"
                alt=""
                width={488}
                height={260}
              />
              <div className="py-6 px-8">
                <h2 className="font-bold text-2xl leading-tight">Go Basics</h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/tutorials/tailwind-css-travel-site/">
            <a className="transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden">
              <Image
                className="squiggle"
                src="/images/hero/tailwind-css-travel-site.png"
                alt=""
                width={488}
                height={260}
              />
              <div className="py-6 px-8">
                <h2 className="font-bold text-2xl leading-tight">
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
