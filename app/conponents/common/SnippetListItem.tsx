import Link from "next/link";
import { AiOutlineCalendar } from 'react-icons/ai';

import { Post } from "@/.contentlayer/generated";

export default function SnippetListItem({ post }: { post: Post }) {
  return (
    <Link href={post.slug}>
      <div className="group w-full py-4 transition-all hover:bg-neutral-200 rounded-lg px-4 ring-1 ring-neutral-300">
        <p className="font-bold text-xl">{post.title}</p>
        <div className="flex items-center mt-2">
          <AiOutlineCalendar />
          <div className="ml-1 text-xs">{new Date(post.date).toISOString().substring(0, 10)}</div>
        </div>
      </div>
    </Link>
  );
}