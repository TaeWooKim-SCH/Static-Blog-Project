import { allPosts } from "@/.contentlayer/generated";

export const filteredBlogPost = allPosts.filter((post) => !post._raw.sourceFilePath.includes('index.mdx'));

export const AllSeriesName = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('index.mdx'))
  .map((post) => post.slug.split('/')[2]);

export const filteredSeriesBook = allPosts.filter((post) => post._raw.sourceFilePath.includes('index.mdx'));
