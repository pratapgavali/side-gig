import { GradientButton, PrimaryButton } from "./components/basic/Button";
import { Card } from "./components/basic/Card";
import { Container } from "./components/basic/Container";
import { Section } from "./components/basic/Section";


export default function Home() {
  const subjects = [
    { title: "JavaScript", slug: "javascript" },
    { title: "React", slug: "react" },
  ];

  return (
    <main>
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="text-center py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          MyDigitalSpace Academy
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Master Development Skills
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Master modern web development with real-world projects and in-depth tutorials
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <PrimaryButton href="/learn">Start Learning</PrimaryButton>
        </div>
      </section>

      <Container>
        <Section title="Available Subjects">
          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <Card
                key={subject.slug}
                title={subject.title}
                href={`/learn/${subject.slug}`}
                description="Master the fundamentals and advanced concepts."
              />
            ))}
          </div>
        </Section>
      </Container>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h3>
        <p className="text-gray-400 mb-6">Consistent learning leads to big results.</p>
        <GradientButton href="/learn">Explore Subjects</GradientButton>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
