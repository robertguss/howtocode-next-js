import Image from "next/image"
import Link from "next/link"

export default function BooksGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-2">
      <Link href="/books/go-basics.zip">
        <a target="_blank">
          <Image
            src="/books/covers/go-basics-book-cover.png"
            className="mx-auto"
            alt="Go Basics Book Cover"
            width={550}
            height={700}
          />
        </a>
      </Link>

      <Link href="/books/understanding-the-jamstack.zip">
        <a target="_blank">
          <Image
            src="/books/covers/jamstack-book-cover.png"
            className="mx-auto"
            alt="Understanding the Jamstack Book Cover"
            width={550}
            height={700}
          />
        </a>
      </Link>
    </section>
  )
}
