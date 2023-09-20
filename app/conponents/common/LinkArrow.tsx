import Link from "next/link";

export default function LinkArrow({
  className,
  href,
  children,
  target
}: React.ComponentProps<'a'>) {
  return (
    <Link
      href={href ?? '/'}
      className={`inline-flex text-[#7e7e7e] hover:text-[#2b2b2b] dark:hover:text-[#dddddd] transition-all ${className}`}
      target={target && target}
    >
      { children }
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="ml-1 h-6 w-6 pt-1 hover:stroke-[##2b2b2b]"
      >
        <path
        className="stroke-[#7e7e7e] hover:stroke-[##2b2b2b]"
          // stroke="#7e7e7e"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
        ></path>
      </svg>
    </Link>
  );
}