import Image from "next/image"
import { format, parseISO } from "date-fns/fp"

export default function PreviewCard({ post }) {
  return (
    <>
      <a
        href={`/posts/${post.slug}`}
        className="relative top-0 block h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-75 ease-in-out hover:-top-2 hover:shadow-xl"
        data-test="article-card"
      >
        <Image
          className="squiggle"
          src={post.hero}
          alt={post.title}
          width={360}
          height={192}
        />
        <div className="py-6 px-8">
          <h2 className="text-2xl font-bold leading-tight">{post.title}</h2>
          <p className="mt-4 flex items-center text-xs text-gray-600">
            {format("MM-dd-yyyy", parseISO(post.date))}
          </p>
        </div>
      </a>
    </>
  )
}
