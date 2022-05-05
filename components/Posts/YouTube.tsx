type Props = {
  id: string
}

export default function YouTube({ id }: Props) {
  return (
    <div className="embed-responsive aspect-ratio-16/9 mt-6 lg:mt-12">
      <iframe
        width="700"
        height="500"
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullScreen
      ></iframe>
    </div>
  )
}
