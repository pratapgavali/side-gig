import React from 'react';

export interface TopicSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface TopicData {
  title: string;
  sections: TopicSection[];
}

export interface CourseTopics {
  [topicSlug: string]: TopicData;
}
