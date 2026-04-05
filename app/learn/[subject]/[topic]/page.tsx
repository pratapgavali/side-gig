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

            <h1 className="text-4xl font-bold text-gray-900 capitalize mt-1">
              {topicData.title}
            </h1>
          </div>

          {/* Sections */}
          {topicData.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24" >

                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>

                <div className="text-gray-700 leading-relaxed [&_pre]:!m-0 [&_code]:text-blue-500 [&_code]:font-mono [&_code]:text-sm [&_strong]:text-gray-900 [&_ul]:space-y-1 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:before:content-['✓'] [&_li]:before:text-blue-400 [&_li]:before:font-bold [&_li]:before:flex-shrink-0 [&_li]:before:mt-0.5 [&_li]:list-none">
                  {section.content}
                </div>
            </section>
          ))}

        </div>
      </div>
    </Container>
  );
}