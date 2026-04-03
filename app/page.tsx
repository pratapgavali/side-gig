import { GradientButton, PrimaryButton } from "./components/basic/Button";
import { Card } from "./components/basic/Card";
import { Container } from "./components/basic/Container";
import { Section } from "./components/basic/Section";


export default function Home() {
  const notes = [
    { title: "JavaScript Variables", slug: "js-variables" },
    { title: "Closures Explained", slug: "closures" },
    { title: "Async/Await Guide", slug: "async-await" },
  ];

  const blogs = [
    { title: "Why Learn Next.js", slug: "why-nextjs" },
    { title: "Frontend Interview Tips", slug: "interview-tips" },
    { title: "React vs Next.js", slug: "react-vs-next" },
  ];

  return (
    <main>
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="text-center py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Master Development
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            One Note at a Time
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          High-quality JavaScript, React & Next.js notes to help you learn faster.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <PrimaryButton href="/notes">Start Learning</PrimaryButton>
          <PrimaryButton href="/blog">Read Blogs</PrimaryButton>
        </div>
      </section>

      <Container>
        <Section title="Latest Notes">
          <div className="grid md:grid-cols-3 gap-8">
            {notes.map((note) => (
              <Card
                key={note.slug}
                title={note.title}
                href={`/notes/${note.slug}`}
                description="Quick and easy explanation of core concepts."
              />
            ))}
          </div>
        </Section>

        <Section title="Latest Blogs">
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card
                key={blog.slug}
                title={blog.title}
                href={`/blog/${blog.slug}`}
                description="Deep dive article for better understanding."
              />
            ))}
          </div>
        </Section>
      </Container>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h3>
        <p className="text-gray-400 mb-6">Consistent learning leads to big results.</p>
        <GradientButton href="/notes">Explore Notes</GradientButton>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
