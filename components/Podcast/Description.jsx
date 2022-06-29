export default function PodcastDescription({ episode }) {
  return (
    <>
      <p
        className="podcast-episode-description mt-1 text-base leading-7 text-slate-700"
        dangerouslySetInnerHTML={{ __html: episode.description }}
      ></p>
    </>
  )
}
