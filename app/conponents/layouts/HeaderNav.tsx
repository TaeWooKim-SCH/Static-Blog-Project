'use client'

import LogoIcon from "../icons/LogoIcon";
import NavItem from "../common/NavItem";
import useChangeTheme from "@/app/libs/useChangeTheme";
import SunIcon from "../icons/SunIcon";

export default function HeaderNav() {
  const navKind = [['blog', 'Blog'], ['snippets', 'Snippets'], ['archives', 'Archives']];
  const { theme, themeChangeLight, themeChangeDark } = useChangeTheme();

  return (
    <nav className="py-12 flex justify-between">
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
        {theme ? <button onClick={themeChangeDark}><SunIcon /></button> : <button onClick={themeChangeLight}><SunIcon /></button>}
      </div>
    </nav>
  );
}