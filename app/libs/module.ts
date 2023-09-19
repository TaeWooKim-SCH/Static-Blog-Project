import { notFound } from "next/navigation";

import { allPosts } from "@/.contentlayer/generated";

export async function getDocFromParams(slug: any) {
  const doc = allPosts.find((post) => (
    post.slug.split('/').slice(2).join('/') === slug.join('/')
  ));

  if (!doc) {
    return notFound();
  }

  return doc;
}