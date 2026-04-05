type SidebarProps = {
  sections: { id: string; title: string }[];
};

export function Sidebar({ sections }: SidebarProps) {
  return (
    <aside className="w-64 hidden lg:block fixed top-20 sticky top-100px">
      <div className="p-4 rounded-2xl bg-white border border-gray-200">
        <h4 className="font-semibold mb-4">On this page</h4>

        <ul className="space-y-2 text-sm text-gray-700">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:text-blue-600">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}