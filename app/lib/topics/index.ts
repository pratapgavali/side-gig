import { javascriptTopics } from './javascript';
import { reactTopics } from './react';

/**
 * Main topics content registry
 * 
 * Structure:
 * topicsContent[course][topic] = TopicData
 * 
 * Add new topics by:
 * 1. Create topic file in course folder (e.g., javascript/operators.tsx)
 * 2. Export the topic constant
 * 3. Add it to the course's index.ts file
 * 4. Topics are automatically available via this main index
 */
export const topicsContent = {
  javascript: javascriptTopics,
  react: reactTopics,
} as const;

// Type exports
export type { TopicData, CourseTopics, TopicSection } from './types';
