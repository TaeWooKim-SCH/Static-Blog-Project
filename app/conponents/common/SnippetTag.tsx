'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Tag from "./Tag";

export default function SnippetTag({ name }: any) {
  const searchParams = useSearchParams();
  const isActive = (searchParams.get('key') === name) || (
    !searchParams.get('key') && name === 'all'
  );

  return (
    <Link href={`/snippets?key=${name}`}>
      <Tag
        className={`${
          isActive ? 'font-bold border-gray-400 border-2' : 'font-normal'
        }`}
      >{name}</Tag>
    </Link>
  );
}