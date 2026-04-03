export function Footer() {
  return (
    <footer className="text-center py-8 text-sm text-gray-500 border-t border-white/10">
      © {new Date().getFullYear()} EduNotes. Built with Next.js & Tailwind.
    </footer>
  );
}