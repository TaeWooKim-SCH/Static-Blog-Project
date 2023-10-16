import { notFound } from "next/navigation";

import { allPosts } from "@/.contentlayer/generated";
import { sortedAllSnippets } from "./dataset";

export async function getDocFromParams(slug: any) {
  const doc = allPosts.find((post) => (
    post.slug.split('/').slice(2).join('/') === slug.join('/')
  ));

  if (!doc) {
    return notFound();
  }

  return doc;
}

export async function filteredSnippets(key: string ='all') {
  if (key === 'all') {
    return sortedAllSnippets;
  }

  return sortedAllSnippets.filter((post) => post.slugAsParams.split('/')[0] === key);
}

export function getSeriesSign(name: string) {
  return (
    allPosts.filter((post) => post._raw.sourceFilePath.includes('index.mdx') && post.slug.split('/')[2] === name)[0]
  )
}