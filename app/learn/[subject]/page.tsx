/* eslint-disable react-hooks/immutability */
import { Container } from "@/components/basic/Container";
import Link from "next/link";
import { Metadata } from "next";
import { generateMetadata as generatePageMetadata, getPageUrl } from "../../../lib/seo";
import { SubjectHeroBanner } from "@/components/learn/SubjectHeroBanner";
import { SyllabusSection } from "@/components/learn/SyllabusSection";

interface Props {
  params: Promise<{
    subject: string;
  }>;
}

const subjectDetails: Record<string, { title: string; content: string }> = {
  javascript: {
    title: "JavaScript",
    content:
      "Learn JavaScript from basics to advanced concepts including ES6+, async programming, and more.",
  },
  react: {
    title: "React",
    content:
      "Master React for building modern, scalable frontend applications with hooks, state management, and best practices.",
  },
};

const syllabusData: Record<
  string,
  {
    title: string;
    sections: {
      title: string;
      icon: any;
      topics: { title: string; slug: string, icon?: any, iconBgClassName?: string, thumbnail?: string }[];
    }[];
  }
> = {
  javascript: {
    title: "JavaScript",
    sections: [
      {
        title: "Basics",
        icon: "🧱",
        topics: [
          { title: "Variables", slug: "variables", icon: "📦", iconBgClassName: "bg-yellow-100" },
          { title: "Data Types", slug: "data-types", icon: "🔢", iconBgClassName: "bg-blue-100" },
          { title: "Operators", slug: "operators", icon: "➕", iconBgClassName: "bg-green-100" },
        ],
      },
      {
        title: "Intermediate",
         icon: "⚡",
        topics: [
          { title: "Functions", slug: "functions", icon: "⚙️", iconBgClassName: "bg-purple-100" },
          { title: "Closures", slug: "closures", icon: "🔒", iconBgClassName: "bg-red-100" },
          { title: "Arrays", slug: "arrays", icon: "🗂️", iconBgClassName: "bg-orange-100" },
        ],
      },
      {
        title: "Advanced",
        icon: "🚀",
        topics: [
          { title: "Promises", slug: "promises", icon: "🤝", iconBgClassName: "bg-teal-100" },
          { title: "Async/Await", slug: "async-await", icon: "⏳", iconBgClassName: "bg-indigo-100" },
        ],
      },
    ],
  },
  react: {
    title: "React",
    sections: [
      {
        title: "Basics",
        icon: "🧱",
        topics: [
          { title: "Components", slug: "components" },
          { title: "Props", slug: "props" },
        ],
      },
      {
        title: "Intermediate",
        icon: "⚡",
        topics: [
          { title: "useState", slug: "use-state" },
          { title: "useEffect", slug: "use-effect" },
        ],
      },
    ],
  },
};

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