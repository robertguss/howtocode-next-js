import { format, parseISO } from "date-fns/fp"

export default function PreviewCard({ post }) {
  return (
    <>
      <a
        href={`/posts/${post.slug}`}
        className="transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden"
        data-test="article-card"
      >
        <img
          className="squiggle"
          src={post.hero}
          alt={post.title}
          width="360"
          height="192"
        />
        <div className="py-6 px-8">
          <h2 className="font-bold text-2xl leading-tight">{post.title}</h2>
          <p className="text-xs text-gray-600 mt-4 flex items-center">
            {format("MM-dd-yyyy", parseISO(post.date))}
          </p>
        </div>
      </a>
    </>
  )
}
