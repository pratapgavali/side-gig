import Link from "next/link";

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition shadow-lg"
    >
      {children}
    </Link>
  );
}

export function GradientButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition shadow-xl"
    >
      {children}
    </Link>
  );
}