import Link from "next/link";
import { TopicCard } from "./TopicCard";

interface Topic {
  title: string;
  slug: string;
  icon?: React.ReactNode;
  thumbnail?: string;
  iconBgClassName?: string;
}

interface SyllabusSectionProps {
  title: string;
  topics: Topic[];
  icon?: any;
  startIndex?: number;
  subjectSlug?: string;
  onTopicClick?: any;
}

export function SyllabusSection({
  title,
  topics,
  icon,
  startIndex = 1,
  subjectSlug,
  onTopicClick,
}: SyllabusSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {topics.map((topic, i) => (
            <Link key={topic.slug} href={`/learn/${subjectSlug}/${topic.slug}`}>
                <TopicCard
                  key={topic.slug}
                  index={startIndex + i}
                  title={topic.title}
                  icon={topic.icon}
                  thumbnail={topic.thumbnail}
                  iconBgClassName={topic.iconBgClassName}
                //   onClick={() => onTopicClick?.(topic.slug)}
                />
            </Link>
        ))}
      </div>
    </div>
  );
}