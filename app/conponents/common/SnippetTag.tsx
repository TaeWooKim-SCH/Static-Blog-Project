'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Tag from "./Tag";
import { AllSnippets } from "@/app/libs/dataset";

function countingPost(name: string) {
  if (name === 'all') {
    return AllSnippets.length;
  }
  return AllSnippets.filter((post) => post._raw.sourceFilePath.includes(name)).length;
}

export default function SnippetTag({ name }: any) {
  const searchParams = useSearchParams();
  const isActive = (searchParams.get('key') === name) || (
    !searchParams.get('key') && name === 'all'
  );

  return (
    <Link href={`?key=${name}`}>
      <Tag
        className={`${
          isActive ? 'font-bold border-gray-400 border-2' : 'font-normal'
        }`}
      >{name.charAt(0).toUpperCase() + name.substring(1)}<span className="ml-1 text-xs">{countingPost(name)}</span></Tag>
    </Link>
  );
}