import Link from "next/link";

import { AiOutlineCalendar } from 'react-icons/ai';
import Tag from "./Tag";

export default function PostListItem({ post }: any) {
  const href = `${post.slug}`;

  return (
    <div className="text-ye group w-full pl-8 pr-6 py-4 transition-all rounded-md relative border-2 border-transparent hover:border-neutral-800 hover:scale-[1.05]">
      <div className="absolute top-0 left-0 w-2 h-full bg-neutral-800 rounded-l-md transition-all opacity-100 group-hover:opacity-0"></div>
      <Link href={href}>
        <p className="transition-all text-xl font-bold dark:text-[#dddddd]">{post.title}</p>
        <p className="transition-all text-[#7a7a7a] mt-1">{post.description}</p>
        <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((tag: string, i: number) => (
              <Tag key={i}>{tag}</Tag>
              ))}
          </div>
          <div className="ml-auto flex gap-2 whitespace-nowrap">
            <div className="flex items-center">
              <AiOutlineCalendar className="dark:fill-[#dddddd]" />
              <span className="ml-1 text-xs dark:text-[#dddddd]">{new Date(post.date).toISOString().substring(0, 10)}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
