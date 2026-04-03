import { Container } from "@/components/basic/Container";
import { Sidebar } from "@/components/basic/Sidebar";
import { topicsContent } from "@/lib/topics";
import Link from "next/link";

interface Props {
  params: Promise<{
    subject: string;
    topic: string;
  }>;
}

export default async function TopicPage({ params }: Props) {
  const { subject, topic } = await params;

  const subjectTopics = topicsContent[subject];
  const topicData = subjectTopics?.[topic];

  if (!topicData) {
    return (
      <Container>
        <div className="py-10">
          <h1 className="text-4xl font-bold text-red-400">
            Topic Not Found
          </h1>
          <Link
            href={`/learn/${subject}`}
            className="text-blue-400 mt-4 inline-block"
          >
            ← Back to {subject}
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex gap-10 py-16">

        {/* Sidebar */}
        <Sidebar sections={topicData.sections.map(s => ({
          id: s.id,
          title: s.title
        }))} />

        {/* Content */}
        <div className="flex-1 space-y-12">

          {/* Header */}
          <div>
            <Link
              href={`/learn/${subject}`}
              className="text-blue-400 mb-4 inline-block"
            >
              ← Back to {subject}
            </Link>

            <h1 className="text-4xl font-bold capitalize">
              {topicData.title}
            </h1>
          </div>

          {/* Sections */}
          {topicData.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-2xl font-semibold mb-3">
                {section.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}

        </div>
      </div>
    </Container>
  );
}