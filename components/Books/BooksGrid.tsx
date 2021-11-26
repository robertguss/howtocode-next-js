import Image from "next/image"

export default function BooksGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-8">
      <a href="/books/go-basics.zip" target="_blank">
        <Image
          src="/books/covers/go-basics-book-cover.png"
          className="mx-auto"
          alt="Go Basics Book Cover"
          width={550}
          height={700}
        />
      </a>

      <a href="/books/understanding-the-jamstack.zip" target="_blank">
        <Image
          src="/books/covers/jamstack-book-cover.png"
          className="mx-auto"
          alt="Understanding the Jamstack Book Cover"
          width={550}
          height={700}
        />
      </a>
    </section>
  )
}
