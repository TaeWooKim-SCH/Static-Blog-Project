import HeaderNav from "./HeaderNav"
import Hr from "../common/Hr";
import AuthorContacts from "../common/AuthorContacts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[1100px]">
      <HeaderNav />
      {/* --- */}
      <main className="pb-16">{children}</main>
      {/* --- */}
      <footer className="pb-8">
        <Hr className="mb-8" />
        <div className="flex flex-col items-end space-y-1">
          <AuthorContacts />
          <p className="text-[0.9rem] dark:text-[#dddddd]">© 2023 taewoo blog Powered by Next.js, Vercel App</p>
        </div>
      </footer>
    </div>
  );
}