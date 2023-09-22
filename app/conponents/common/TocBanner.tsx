'use client'

import { BiLink } from 'react-icons/bi';
import { HiMiniArrowUturnUp } from 'react-icons/hi2';
import { HiChevronRight } from 'react-icons/hi';

export default function TocBanner({ headings }: PropsType) {
  const copyLinkHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    return alert('클립보드에 복사되었습니다.');
  }

  const topScrollHandler = () => {
    return window.scrollTo(0, 0);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 transition-all dark:bg-neutral-800 dark:border-none">
      <div className="p-4 pr-2">
        <p className="font-bold dark:text-[#dddddd]">On this page</p>
        <ul className="mt-2 text-sm">
          {headings.map((head, idx) => (
            head.level === 1 || head.level === 2 ? (
              <li className="py-1" key={idx}>
                <a className="dark:text-[#a1a1a1] dark:hover:text-[#dddddd]" href={`#${head.slug}`}>{head.text}</a>
              </li>
            ) : (
              <li className="py-1 ml-2" key={idx}>
                <a className="flex items-center dark:text-[#a1a1a1] dark:hover:text-[#dddddd] text-xs" href={`#${head.slug}`}>
                  <HiChevronRight className="dark:fill-[#a1a1a1]" /> {head.text}
                </a>
              </li>
            )
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between p-4 bg-neutral-200 dark:bg-neutral-700">
        <button onClick={copyLinkHandler}>
          <BiLink className="dark:fill-[#a1a1a1]" size="25" />
        </button>
        <button onClick={topScrollHandler}>
          <HiMiniArrowUturnUp className="dark:fill-[#a1a1a1]" size="20" />
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