import LogoIcon from "../icons/LogoIcon";
import NavItem from "../common/NavItem";
import ChangeTheme from "../common/ChangeTheme";

export default function HeaderNav() {
  const navKind = [['blog', 'Blog'], ['snippets', 'Snippets'], ['archives', 'Archives']];

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
