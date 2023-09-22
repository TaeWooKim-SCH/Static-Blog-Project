'use client'

import { useEffect, useState } from "react";

import LogoIcon from "../icons/LogoIcon";
import NavItem from "../common/NavItem";
import useChangeTheme from "@/app/libs/useChangeTheme";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

export default function HeaderNav() {
  const [mounted, setMounted] = useState(false); // 마운트 때 처리를 안해주면 왜 해로 뜰까?
  const navKind = [['blog', 'Blog'], ['snippets', 'Snippets'], ['archives', 'Archives']];
  const { isthemeDark, themeChangeLight, themeChangeDark } = useChangeTheme();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="py-12 flex justify-between items-center">
      <div className="flex ">
        <NavItem className="mr-3" href="/">
          <LogoIcon width={40} />
        </NavItem>
        {navKind.map((kind) => (
          <NavItem
            className="px-3 py-2"
            href={`/${kind[0]}`}
            key={kind[0]}
          >{kind[1]}</NavItem>
        ))}
      </div>
      <div>
        {!mounted ? <></> : (
          !isthemeDark ? (
            <button className="h-9 w-9 transition-all hover:bg-gray-200 rounded-[5px] dark:hover:bg-[#262626]" onClick={themeChangeDark}>
              <SunIcon className="fill-yellow-400" width={36} height={36} />
            </button>
            ) : (
            <button className="h-9 w-9 transition-all hover:bg-gray-200 rounded-[5px] dark:hover:bg-[#262626]" onClick={themeChangeLight}>
              <MoonIcon className="fill-yellow-400" width={36} height={36} />
            </button>
          )
        )}
      </div>
    </nav>
  );
}
