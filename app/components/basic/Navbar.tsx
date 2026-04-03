import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 backdrop-blur bg-white/5 border-b border-white/10">
      <h1 className="text-2xl font-bold">EduNotes</h1>

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