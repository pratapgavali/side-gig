export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-16">
      <h3 className="text-3xl font-bold mb-10">{title}</h3>
      {children}
    </section>
  );
}
