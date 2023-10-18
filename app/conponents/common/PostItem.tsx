import Image from "next/image";
import { AiOutlineCalendar } from 'react-icons/ai';

export default function PostItem({ href, imgUrl, title, date }: PropsType) {
  return (
    <a
      href={href}
      className="hover:scale-[1.03] transition-all overflow-hidden rounded-xl"
    >
      <div className="w-full h-64 relative">
        <div className="p-6 absolute bottom-0 z-20">
          <div className="flex items-center mb-2">
            <AiOutlineCalendar className="fill-white" size="12" />
            <div className="ml-1 text-xs text-[#dddddd]">{date}</div>
          </div>
          <p className="text-xl font-bold tracking-tight text-[#dddddd]">{title}</p>
        </div>
        <Image
          className="h-64 w-full object-cover absolute z-10 brightness-[0.5]"
          src={imgUrl}
          alt="이미지"
          width={300}
          height={300}
        />
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