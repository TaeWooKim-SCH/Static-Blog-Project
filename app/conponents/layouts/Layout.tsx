import HeaderNav from "./HeaderNav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[1100px]">
      <HeaderNav />
      <main>{children}</main>
    </div>
  );
}