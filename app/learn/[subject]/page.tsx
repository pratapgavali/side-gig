/* eslint-disable react-hooks/immutability */
import { Container } from "@/components/basic/Container";
import Link from "next/link";
import { Metadata } from "next";
import { generateMetadata as generatePageMetadata, getPageUrl } from "../../../lib/seo";
import { SubjectHeroBanner } from "@/components/learn/SubjectHeroBanner";
import { SyllabusSection } from "@/components/learn/SyllabusSection";
import { subjectDetails, syllabusData } from "@/components/learn/contants/syllabus-constants";

interface Props {
  params: Promise<{
    subject: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject } = await params;
  const course = subjectDetails[subject as keyof typeof subjectDetails];

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The course you're looking for doesn't exist.",
    };
  }

  return generatePageMetadata({
    title: course.title,
    description: course.content,
    keywords: [subject, "tutorial", "learn", "programming course"],
    canonical: getPageUrl(`/learn/${subject}`),
    ogType: "website",
  });
}

export async function generateStaticParams() {
  return Object.keys(subjectDetails).map((subject) => ({ subject }));
}

export default async function SubjectPage({ params }: Props) {
  const { subject } = await params;

  const subjectInfo = subjectDetails[subject as keyof typeof subjectDetails];
  const syllabus = syllabusData[subject];

  if (!subjectInfo || !syllabus) {
    return (
      <Container>
        <div className="py-10">
          <h1 className="text-4xl font-bold text-red-400">Subject Not Found</h1>
          <p className="text-gray-400 mt-4">
            The subject &quot;{subject}&quot; does not exist.
          </p>
          <Link href="/learn" className="text-blue-400 hover:text-blue-300 mt-6 inline-block">
            ← Back to Subjects
          </Link>
        </div>
      </Container>
    );
  }

  const totalTopics = syllabus.sections.reduce((acc, s) => acc + s.topics.length, 0);

  let runningIndex = 1;

  return (
    <Container>
      <div className="py-10">
        <SubjectHeroBanner
          title={subjectInfo.title}
          description={subjectInfo.content}
          sectionsCount={syllabus.sections.length}
          topicsCount={totalTopics}
          onBack="/learn"
        />

        <div className="space-y-10">
          {syllabus.sections.map((section) => {
            const startIndex = runningIndex;
            runningIndex += section.topics.length;

            return (
              <SyllabusSection
                key={section.title}
                title={section.title}
                topics={section.topics}
                icon={section.icon}
                startIndex={startIndex}
                subjectSlug={subject}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}