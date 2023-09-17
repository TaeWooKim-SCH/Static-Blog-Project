import Image from "next/image";
import { AiOutlineCalendar } from 'react-icons/ai';

export default function PostItem({ href, imgUrl, title, date }: PropsType) {
  return (
    <a
      href={href}
      className="overflow-hidden rounded-xl bg-neutral-200"
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
          <AiOutlineCalendar size="12" />
          <div className="ml-1 text-xs">{date}</div>
        </div>
        <p className="text-xl font-bold tracking-tight">{title}</p>
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