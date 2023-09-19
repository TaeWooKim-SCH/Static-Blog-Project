import { allPosts } from "@/.contentlayer/generated";

export const AllBlogPost = allPosts
  .filter((post) => !post._raw.sourceFilePath.includes('index.mdx') && post._raw.sourceFilePath.includes('blog'));

export const AllSeriesName = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('index.mdx') && post._raw.sourceFilePath.includes('blog'))
  .map((post) => post.slug.split('/')[2]);

export const filteredSeriesBook = allPosts.filter((post) => post._raw.sourceFilePath.includes('index.mdx'));

export const AllSnippets = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('snippets'));

export const AllSnippetsName = Array.from(new Set(AllSnippets.map((post) => (
  post._raw.sourceFilePath.split('/')[1]
))));