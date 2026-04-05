import { Container } from "@/components/basic/Container";
import Link from "next/link";

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

// ✅ NEW: syllabus structure
const syllabusData: Record<
  string,
  {
    title: string;
    sections: {
      title: string;
      topics: { title: string; slug: string }[];
    }[];
  }
> = {
  javascript: {
    title: "JavaScript",
    sections: [
      {
        title: "Basics",
        topics: [
          { title: "Variables", slug: "variables" },
          { title: "Data Types", slug: "data-types" },
          { title: "Operators", slug: "operators" },
        ],
      },
      {
        title: "Intermediate",
        topics: [
          { title: "Functions", slug: "functions" },
          { title: "Closures", slug: "closures" },
          { title: "Arrays", slug: "arrays" },
        ],
      },
      {
        title: "Advanced",
        topics: [
          { title: "Promises", slug: "promises" },
          { title: "Async/Await", slug: "async-await" },
        ],
      },
    ],
  },

  react: {
    title: "React",
    sections: [
      {
        title: "Basics",
        topics: [
          { title: "Components", slug: "components" },
          { title: "Props", slug: "props" },
        ],
      },
      {
        title: "Intermediate",
        topics: [
          { title: "useState", slug: "use-state" },
          { title: "useEffect", slug: "use-effect" },
        ],
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(subjectDetails).map((subject) => ({
    subject,
  }));
}

export default async function SubjectPage({ params }: Props) {
  const { subject } = await params;

  const subjectInfo = subjectDetails[subject as keyof typeof subjectDetails];
  const syllabus = syllabusData[subject];

  if (!subjectInfo || !syllabus) {
    return (
      <Container>
        <div className="py-10">
          <h1 className="text-4xl font-bold text-red-400">
            Subject Not Found
          </h1>
          <p className="text-gray-400 mt-4">
            The subject &quot;{subject}&quot; does not exist.
          </p>
          <Link
            href="/learn"
            className="text-blue-400 hover:text-blue-300 mt-6 inline-block"
          >
            ← Back to Subjects
          </Link>
        </div>
      </Container>
    );
  }

return (
  <Container>
    <div className="py-10">

      {/* Back */}
      <Link
        href="/learn"
        className="text-blue-400 hover:text-blue-300 mb-6 inline-block"
      >
        ← Back to Subjects
      </Link>

      {/* 🔥 Hero Section */}
      <div className="relative rounded-3xl p-8 mb-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur">
        <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-blue-500 to-purple-500" />

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10">
          {subjectInfo.title}
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl relative z-10">
          {subjectInfo.content}
        </p>

        {/* Fake stats (adds premium feel) */}
        <div className="flex gap-6 mt-6 text-sm text-gray-400 relative z-10">
          <span>📘 {syllabus.sections.length} Sections</span>
          <span>
            📚{" "}
            {syllabus.sections.reduce(
              (acc, sec) => acc + sec.topics.length,
              0
            )}{" "}
            Topics
          </span>
        </div>
      </div>

      {/* 🔥 Syllabus Sections */}
      <div className="space-y-12">
        {syllabus.sections.map((section) => (
          <div
            key={section.title}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
          >
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">
                {section.title}
              </h2>

              <span className="text-sm text-gray-400">
                {section.topics.length} topics
              </span>
            </div>

            {/* Topics Grid */}
            <div className="grid md:grid-cols-2 gap-5">
              {section.topics.map((topic, index) => (
                <Link
                  key={topic.slug}
                  href={`/learn/${subject}/${topic.slug}`}
                  className="group flex items-center justify-between p-2 rounded-2xl bg-white/5 hover:bg-white/10 transition"
                >
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Topic {index + 1}
                    </p>

                    <h3 className="text-lg font-medium group-hover:text-blue-400 transition">
                      {topic.title}
                    </h3>
                  </div>

                  <span className="text-gray-500 group-hover:text-blue-400 transition">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  </Container>
);
}