import Image from "next/image";
import { AiOutlineCalendar } from 'react-icons/ai';

export default function PostItem({ href, imgUrl, title, date }: PropsType) {
  return (
    <a
      href={href}
      className="hover:scale-[1.03] transition-all overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
    >
      <div>
        <Image
          className="h-64 w-full object-cover"
          src={imgUrl}
          alt="이미지"
          width={300}
          height={300}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <AiOutlineCalendar className="dark:fill-white" size="12" />
          <div className="ml-1 text-xs dark:text-[#dddddd]">{date}</div>
        </div>
        <p className="text-xl font-bold tracking-tight dark:text-[#dddddd]">{title}</p>
      </div>
    </a>
  );
}

interface PropsType {
  href: string;
  imgUrl: string;
  title: string;
  date: string;
}