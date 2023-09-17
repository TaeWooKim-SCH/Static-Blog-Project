import { allPosts } from "@/.contentlayer/generated";

export const AllSeries = Array.from(new Set(allPosts.filter((post) => (
  post._raw.sourceFilePath.split('/')[0] === 'blog'
)).map((post) => post._raw.sourceFilePath.split('/')[1])));
