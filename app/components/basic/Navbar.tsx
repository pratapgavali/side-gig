import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav
      className="flex bg-[#f6f7fb] sticky top-0 z-10 items-center justify-between px-8 py-[9px] h-[65px]"
      style={{
        background: "#f6f7fb",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "none",
      }}
    >
      <Link href="/" className="hover:opacity-80 transition">
        <Logo />
      </Link>
      <div className="space-x-8 text-sm text-gray-600">
        <Link href="/learn" className="hover:text-blue-500 transition-colors">
          Learn
        </Link>
        <Link href="/blog" className="hover:text-blue-500 transition-colors">
          Blog
        </Link>
      </div>
    </nav>
  );
}