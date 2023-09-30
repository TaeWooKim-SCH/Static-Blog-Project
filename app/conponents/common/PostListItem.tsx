import Link from "next/link";

import { AiOutlineCalendar } from 'react-icons/ai';
import Tag from "./Tag";

export default function PostListItem({ post }: any) {
  const href = `${post.slug}`;

  return (
    <div className="text-ye group w-full px-6 py-4 transition-all hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl">
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
