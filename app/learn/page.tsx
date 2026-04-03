import { Card } from "@/components/basic/Card";
import { Container } from "@/components/basic/Container";

export default function LearnPage() {
  const subjects = [
    {
      title: "JavaScript",
      slug: "javascript",
      description: "Master JS from basics to advanced",
    },
    {
      title: "React",
      slug: "react",
      description: "Build modern frontend apps",
    },
  ];

  return (
    <Container>
      <h1 className="text-4xl font-bold py-10">Choose a Subject</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {subjects.map((sub) => (
          <Card
            key={sub.slug}
            title={sub.title}
            href={`/learn/${sub.slug}`}
            description={sub.description}
          />
        ))}
      </div>
    </Container>
  );
}