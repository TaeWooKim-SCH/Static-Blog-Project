'use client'

import { useEffect, useState } from "react";

import LogoIcon from "../icons/LogoIcon";
import NavItem from "../common/NavItem";
import useChangeTheme from "@/app/libs/useChangeTheme";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import ChangeTheme from "../common/ChangeTheme";

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
      <ChangeTheme />
    </nav>
  );
}
