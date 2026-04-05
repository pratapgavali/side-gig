// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Section({ title, children, ...props }: { title: string; children: React.ReactNode, [key: string]: any }) {
  return (
    <section className="py-4" {...props}>
      <h4 className="text-2xl font-bold mb-4">{title}</h4>
      {children}
    </section>
  );
}
