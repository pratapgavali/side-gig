import Link from "next/link";

interface SubjectHeroBannerProps {
  title: string;
  description: string;
  sectionsCount: number;
  topicsCount: number;
  onBack?: string;
}

export function SubjectHeroBanner({
  title,
  description,
  sectionsCount,
  topicsCount,
  onBack,
}: SubjectHeroBannerProps) {
  return (
    <div className="mb-8">
      <Link href={onBack ?? "/learn"} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-4">
        <span>←</span> Back to Subjects
      </Link>

      <div
        className="rounded-md p-8"
style={{ background: "linear-gradient(135deg, #daeaf8 0%, #cfd8f5 40%, #ddd0f0 100%)" }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
        <p className="text-gray-700 text-base mb-5 max-w-xl">{description}</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>📁</span>
            <span>{sectionsCount} Sections</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>📚</span>
            <span>{topicsCount} Topics</span>
          </div>
        </div>
      </div>
    </div>
  );
}