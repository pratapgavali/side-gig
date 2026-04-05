import Link from "next/link";

export function Card({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link
      href={href}
      className="group p-6 rounded-3xl bg-white border border-gray-200 backdrop-blur hover:border-blue-500 hover:bg-gray-100 transition"
    >
      <h4 className="text-xl font-semibold group-hover:text-blue-600 transition">
        {title}
      </h4>
      <p className="text-sm text-gray-700 mt-3">{description}</p>
      <div className="mt-4 text-blue-600 text-sm opacity-0 group-hover:opacity-100 transition">
        Read more →
      </div>
    </Link>
  );
}