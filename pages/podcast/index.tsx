import { useMemo } from "react"
import dynamic from "next/dynamic"
import Head from "next/head"
import Link from "next/link"
import { parse } from "rss-to-json"

import { useAudioPlayer } from "@/components/Podcast/AudioProvider"
import { Container } from "@/components/Podcast/Container"
import { Layout } from "@/components/Podcast/Layout"
import Header from "@/components/Header"
import Footer from "@/components/Footer/Footer"

const Description = dynamic(() => import("@/components/Podcast/Description"), {
  ssr: false,
})

export default function PodcastHome({ episodes }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Podcast | How To Code</title>
          <meta
            name="description"
            content="A podcast for aspiring web developers."
          />
        </Head>
        {/* <Header /> */}
        <div className="podcast-index-page pt-16 pb-12 sm:pb-4 lg:pt-12">
          {/*
            // @ts-ignore */}
          <Container>
            <h1 className="text-2xl font-bold leading-7 text-slate-900">
              Episodes
            </h1>
          </Container>
          <div className="foo h-2.5 w-2.5 ">
            {episodes.map((episode) => (
              <EpisodeEntry key={episode.itunes_episode} episode={episode} />
            ))}
          </div>
        </div>
        {/* <Footer /> */}
      </Layout>
    </>
  )
}

function EpisodeEntry({ episode }) {
  let date = new Date(episode.published)

  let audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.audio.src,
        type: episode.audio.type,
      },
      link: `/podcast/${episode.itunes_episode}`,
    }),
    [episode]
  )
  let player = useAudioPlayer(audioPlayerData)

  return (
    <article
      aria-labelledby={`episode-${episode.itunes_episode}-title`}
      className="py-10 sm:py-12"
    >
      {/*
            // @ts-ignore */}
      <Container>
        <div className="flex flex-col items-start">
          <h2
            id={`episode-${episode.itunes_episode}-title`}
            className="mt-2 text-lg font-bold text-slate-900"
          >
            <Link href={`/podcast/${episode.itunes_episode}`}>
              <a>{episode.title}</a>
            </Link>
          </h2>
          <time
            dateTime={date.toISOString()}
            className="-order-1 font-mono text-sm leading-7 text-slate-500"
          >
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(date)}
          </time>

          <Description episode={episode} />

          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => player.toggle()}
              className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
            >
              <span className="sr-only">
                {player.playing ? "Pause" : "Play"}
                episode {episode.title}
              </span>
              <svg
                className="h-2.5 w-2.5 fill-current"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                {player.playing ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
                  />
                ) : (
                  <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
                )}
              </svg>

              <span className="ml-3" aria-hidden="true">
                Listen
              </span>
            </button>
            <span
              aria-hidden="true"
              className="text-sm font-bold text-slate-400"
            >
              /
            </span>
            <Link href={`/podcast/${episode.itunes_episode}`}>
              <a className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900">
                Show notes
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}

export async function getStaticProps() {
  // @ts-ignore
  const feed = await parse("https://feeds.buzzsprout.com/2007004.rss")

  return {
    props: {
      episodes: feed.items.map(
        ({ itunes_episode, title, description, enclosures, published }) => ({
          itunes_episode,
          title: `${itunes_episode}: ${title}`,
          published,
          description,
          audio: enclosures.map((enclosure) => ({
            src: enclosure.url,
            type: enclosure.type,
          }))[0],
        })
      ),
    },
    revalidate: 10,
  }
}
