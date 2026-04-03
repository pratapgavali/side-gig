import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-0backdrop-blur bg-white/5 border-b border-white/10">
      <Link href="/" className="hover:opacity-80 transition">
        <Logo />
      </Link>

      <div className="space-x-8 text-sm">
        <Link href="/learn" className="hover:text-blue-400">
          Learn
        </Link>
        <Link href="/notes" className="hover:text-blue-400">
          Notes
        </Link>
        <Link href="/blog" className="hover:text-blue-400">
          Blog
        </Link>
      </div>
    </nav>
  );
}