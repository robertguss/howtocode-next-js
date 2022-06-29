import path from "path"
import { join } from "path"
import glob from "glob"
import toc from "markdown-toc-unlazy"
import fs from "fs"
import matter from "gray-matter"

export const POSTS_PATH = path.join(process.cwd(), "posts/")
export const PODCASTS_PATH = path.join(process.cwd(), "podcasts/")

export const allContentFilePaths = glob
  .sync("posts/*")
  .filter((path) => /\.md?$/.test(path))
  .map((path) => path.replace(/^posts/, ""))

export const allPodcastsFilePaths = glob
  .sync("podcasts/*")
  .filter((path) => /\.md?$/.test(path))
  .map((path) => path.replace(/^podcasts/, ""))

export const getToCForMarkdown = (markdown) => toc(markdown).json

const postsDirectory = join(process.cwd(), "posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllPostsDesc(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1))
  return posts
}
