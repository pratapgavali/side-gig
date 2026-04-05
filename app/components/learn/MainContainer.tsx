/* eslint-disable react-hooks/immutability */
import { SubjectHeroBanner } from "./SubjectHeroBanner";
import { SyllabusSection } from "./SyllabusSection";

interface Topic {
  title: string;
  slug: string;
  icon?: React.ReactNode;
  thumbnail?: string;
  iconBgClassName?: string;
}

interface Section {
  title: string;
  topics: Topic[];
}

interface SubjectPageProps {
  title: string;
  description: string;
  sections: Section[];
  onBack?: () => void;
  onTopicClick?: (slug: string) => void;
}

export function SubjectPage({
  title,
  description,
  sections,
  onBack,
  onTopicClick,
}: SubjectPageProps) {
  const totalTopics = sections.reduce((acc, s) => acc + s.topics.length, 0);

  // track running topic index across sections
  let runningIndex = 1;

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <SubjectHeroBanner
        title={title}
        description={description}
        sectionsCount={sections.length}
        topicsCount={totalTopics}
        onBack={onBack}
      />

      {sections.map((section) => {
        const startIndex = runningIndex;
        runningIndex += section.topics.length;
        return (
          <SyllabusSection
            key={section.title}
            title={section.title}
            topics={section.topics}
            startIndex={startIndex}
            onTopicClick={onTopicClick}
          />
        );
      })}
    </div>
  );
}