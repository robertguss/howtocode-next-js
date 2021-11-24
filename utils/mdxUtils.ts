import path from "path"
import glob from "glob"
import toc from "markdown-toc-unlazy"

export const POSTS_PATH = path.join(process.cwd(), "posts/")

export const allContentFilePaths = glob
  .sync("posts/*")
  .filter((path) => /\.md?$/.test(path))
  .map((path) => path.replace(/^posts/, ""))

export const getToCForMarkdown = (markdown) => toc(markdown).json
