'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  href,
  children,
  className,
}: React.ComponentProps<'a'>) {
  const pathName = usePathname();
  const isActive = (pathName.split('/').slice(0, 2).join('/') === (href ?? '/'));

  return (
    <Link
      href={href ?? '/'}
      className={`${
        isActive ? 'text-primary font-semibold' : 'text-secondary font-normal'
      } ${className} text-[1.05rem] transition-all hover:bg-gray-200 rounded-[5px] dark:hover:bg-[#262626] dark:text-[#eeeeee]`}
    >
      { children }
    </Link>
  );
}