import Link from "next/link";
import LogoIcon from "../icons/LogoIcon";
import NavItem from "../common/NavItem";

export default function HeaderNav() {
  const navKind = [['blog', 'Blog'], ['snippets', 'Snippets'], ['archives', 'Archives']]

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
      {/* <div>
        <button>search</button>
        <button>search</button>
      </div> */}
    </nav>
  );
}