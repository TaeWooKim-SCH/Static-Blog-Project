'use client'

import LogoIcon from "../icons/LogoIcon";
import NavItem from "../common/NavItem";
import useChangeTheme from "@/app/libs/useChangeTheme";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

export default function HeaderNav() {
  const navKind = [['blog', 'Blog'], ['snippets', 'Snippets'], ['archives', 'Archives']];
  const { isthemeDark, theme, themeChangeLight, themeChangeDark } = useChangeTheme();
  console.log(theme);
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
        {!isthemeDark ? (
          <button className="h-9 w-9 transition-all hover:bg-gray-200 rounded-[5px] dark:hover:bg-[#262626]" onClick={themeChangeDark}>
            <SunIcon className="fill-yellow-400" width={36} height={36} />
          </button>
          ) : (
          <button className="h-9 w-9 transition-all hover:bg-gray-200 rounded-[5px] dark:hover:bg-[#262626]" onClick={themeChangeLight}>
            <MoonIcon className="fill-yellow-400" width={36} height={36} />
          </button>
        )}
      </div>
    </nav>
  );
}
