import Link from "next/link";
import { AiOutlineCalendar } from 'react-icons/ai';

import { Post } from "@/.contentlayer/generated";

export default function SnippetListItem({ post }: { post: Post }) {
  return (
    <Link href={post.slug}>
      <div className="group w-full py-4 transition-all hover:bg-neutral-200 rounded-lg px-4 ring-1 ring-neutral-300 dark:hover:bg-neutral-700 dark:ring-neutral-700">
        <p className="font-bold text-xl dark:text-[#dddddd]">{post.title}</p>
        <div className="flex items-center mt-2">
          <AiOutlineCalendar className="dark:fill-[#dddddd]" />
          <div className="ml-1 text-xs dark:text-[#dddddd]">{new Date(post.date).toISOString().substring(0, 10)}</div>
        </div>
      </div>
    </Link>
  );
}