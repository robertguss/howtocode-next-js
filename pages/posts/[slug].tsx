import fs from "fs"
import matter from "gray-matter"
import { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Head from "next/head"
import path from "path"
import { find, findIndex } from "lodash/fp"
import rehypeSlug from "rehype-slug"
import rehypePrism from "@mapbox/rehype-prism"
import Layout from "../../components/Layout"
import PostsLayout from "../../components/Posts/PostsLayout"

import {
  POSTS_PATH,
  allContentFilePaths,
  getToCForMarkdown,
} from "../../utils/mdxUtils"

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  //a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  //TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
}

export default function LessonPage({ toc, source }) {
  return (
    <Layout>
      <Head>
        <title>Posts | How To Code</title>
        <meta name="description" content="" />
      </Head>

      <PostsLayout toc={toc} source={source} components={components} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const contentFilePath = path.join(POSTS_PATH, `${params.slug}.md`)
  const source = fs.readFileSync(contentFilePath)
  const { content, data } = matter(source)
  const toc = getToCForMarkdown(content)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      // @ts-ignore
      rehypePlugins: [rehypeSlug, rehypePrism],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      toc,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = allContentFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.md?$/, ""))
    // remove forward slash from beginning of paths
    .map((path) => path.replace(/\//, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => {
      return { params: { slug } }
    })

  return {
    paths,
    fallback: false,
  }
}
