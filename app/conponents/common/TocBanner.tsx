'use client'

import { BiLink } from 'react-icons/bi';
import { HiMiniArrowUturnUp } from 'react-icons/hi2';

export default function TocBanner({ headings }: PropsType) {
  const copyLinkHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    return alert('클립보드에 복사되었습니다.');
  }

  const topScrollHandler = () => {
    return window.scrollTo(0, 0);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 transition-all">
      <div className="p-4 pr-2 dark:border-neutral-700">
        <p className="font-bold">On this page</p>
        <ul className="mt-2 text-sm">
          {headings.map((head, idx) => (
            head.level === 1 || head.level === 2 ? (
              <li className="py-1" key={idx}><a href={`#${head.slug}`}>{head.text}</a></li>
            ) : (
              <li className="py-1 ml-4" key={idx}><a href={`#${head.slug}`}>{'>'} {head.text}</a></li>
            )
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between p-4 bg-neutral-200">
        <button onClick={copyLinkHandler}>
          <BiLink size="25" />
        </button>
        <button onClick={topScrollHandler}>
          <HiMiniArrowUturnUp size="20" />
        </button>
      </div>
    </div>
  );
}

interface PropsType {
  headings: HeadType[]
}

interface HeadType {
  level: number;
  text: string;
  slug: string;
}