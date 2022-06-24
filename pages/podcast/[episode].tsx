import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import dynamic from "next/dynamic"
import { useMemo } from "react"
import Head from "next/head"
import { parse } from "rss-to-json"
import { MDXRemote } from "next-mdx-remote"

import { Layout } from "@/components/Podcast/Layout"
import { useAudioPlayer } from "@/components/Podcast/AudioProvider"
import { Container } from "@/components/Podcast/Container"
import { PlayButton } from "@/components/Podcast/player/PlayButton"

const Description = dynamic(() => import("@/components/Podcast/Description"), {
  ssr: false,
})

import { PODCASTS_PATH, allPodcastsFilePaths } from "../../utils/mdxUtils"

export default function Episode({ episode, showNotes }) {
  let date = new Date(episode.published)

  let audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.audio.src,
        type: episode.audio.type,
      },
      link: `/${episode.id}`,
    }),
    [episode]
  )
  let player = useAudioPlayer(audioPlayerData)

  return (
    <>
      <Layout>
        <Head>
          {/* <title>{episode.title} - How to Code: Web Development Podcast</title> */}
          <meta name="description" content={episode.description} />
        </Head>
        <article className="py-16 lg:py-36">
          <Container>
            <header className="flex flex-col">
              <div className="flex items-center gap-6">
                <PlayButton player={player} size="large" />
                <div className="flex flex-col">
                  <h1 className="mt-2 text-4xl font-bold text-slate-900">
                    {episode.title}
                  </h1>
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
                </div>
              </div>
              <Description episode={episode} />
              {/* <p className="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">
                {episode.description}
              </p> */}
            </header>
            <hr className="my-12 border-gray-200" />
            {/* <div
              className="[&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2:nth-of-type(3n)]:before:bg-violet-200 prose prose-slate mt-14"
              dangerouslySetInnerHTML={{ __html: episode.content }}
            /> */}

            <div className="relative overflow-hidden bg-white">
              <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-indigo mx-auto text-gray-500">
                  <MDXRemote {...showNotes} />
                </div>
              </div>
            </div>
          </Container>
        </article>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  console.log(params)
  const podcastsFilePath = path.join(PODCASTS_PATH, `${params.episode}.md`)
  const source = fs.readFileSync(podcastsFilePath)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content)

  let feed = await parse("https://feeds.buzzsprout.com/2007004.rss")
  let episode = feed.items
    .map(
      ({
        itunes_episode,
        title,
        description,
        content,
        enclosures,
        published,
      }) => ({
        id: itunes_episode.toString(),
        title: `${itunes_episode}: ${title}`,
        description,
        content,
        published,
        audio: enclosures.map((enclosure) => ({
          src: enclosure.url,
          type: enclosure.type,
        }))[0],
      })
    )
    .find(({ id }) => id === params.episode)

  if (!episode) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      showNotes: mdxSource,
      episode,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  let feed = await parse("https://feeds.buzzsprout.com/2007004.rss")

  return {
    paths: feed.items.map(({ itunes_episode }) => ({
      params: {
        episode: itunes_episode.toString(),
      },
    })),
    fallback: "blocking",
  }
}
