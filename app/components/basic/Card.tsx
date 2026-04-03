import Link from "next/link";

export function Card({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link
      href={href}
      className="group p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur hover:border-blue-500 hover:bg-white/10 transition"
    >
      <h4 className="text-xl font-semibold group-hover:text-blue-400 transition">
        {title}
      </h4>
      <p className="text-sm text-gray-400 mt-3">{description}</p>
      <div className="mt-4 text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition">
        Read more →
      </div>
    </Link>
  );
}