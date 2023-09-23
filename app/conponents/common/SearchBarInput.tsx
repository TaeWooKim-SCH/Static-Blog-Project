import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBarInput({
  className,
  ...props
}: React.ComponentProps<'input'>) {

  return (
    <div className={`relative ${className}`}>
      <input
        className="block w-full rounded-md px-4 py-2 border border-neutral-300 focus:outline-none"
        type="text"
        placeholder="시리즈 북, 포스트 제목 검색"
        {...props}
      />
      <AiOutlineSearch
        className="absolute top-[0.6rem] right-3 fill-neutral-300"
        size="22"
      />
    </div>
  );
}