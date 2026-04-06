# Topics Content Structure

## New Modular Organization

The topics content has been refactored into a clean, scalable structure:

```
app/lib/topics/
├── index.ts                   (main export)
├── types.ts                   (shared types)
├── javascript/
│   ├── index.ts              (javascript topics registry)
│   ├── variables.tsx
│   ├── data-types.tsx
│   └── [add more topics here]
├── react/
│   ├── index.ts              (react topics registry)
│   ├── components.tsx
│   └── [add more topics here]
└── [add more courses here]
```

## Usage

Import topics just like before:

```typescript
import { topicsContent } from '@/lib/topics';

// Access topics the same way
const topic = topicsContent.javascript.variables;
```

## Adding New Topics

### Step 1: Create topic file in the course folder

Create `app/lib/topics/javascript/operators.tsx`:

```typescript
import { TopicData } from '../types';
import { ContentSection, Paragraph, ... } from '@/components/learn/TopicContentComponents';

export const operatorsTopic: TopicData = {
  title: "Operators in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>Your content here...</Paragraph>
        </ContentSection>
      ),
    },
    // ... more sections
  ],
};
```

### Step 2: Add to course index

Update `app/lib/topics/javascript/index.ts`:

```typescript
import { operatorsTopic } from './operators';

export const javascriptTopics: CourseTopics = {
  variables: variablesTopic,
  'data-types': dataTypesTopic,
  operators: operatorsTopic,  // ← Add here
};
```

### Step 3: Done!

The topics will automatically be available at `topicsContent.javascript.operators`

## Adding New Courses

### Step 1: Create course folder

Create `app/lib/topics/[courseName]/`

### Step 2: Create topic files

Add individual topic files (e.g., `basics.tsx`, `advanced.tsx`)

### Step 3: Create index file

Create `app/lib/topics/[courseName]/index.ts`:

```typescript
import { basicsTopic } from './basics';
import { advancedTopic } from './advanced';
import { CourseTopics } from '../types';

export const pythonTopics: CourseTopics = {
  basics: basicsTopic,
  advanced: advancedTopic,
};
```

### Step 4: Add to main index

Update `app/lib/topics/index.ts`:

```typescript
import { pythonTopics } from './python';

export const topicsContent = {
  javascript: javascriptTopics,
  react: reactTopics,
  python: pythonTopics,  // ← Add here
} as const;
```

## Benefits

✅ **Scalable** - Easy to add hundreds of topics  
✅ **Maintainable** - Each topic is isolated  
✅ **Organized** - Clear course/topic structure  
✅ **Type-safe** - Full TypeScript support  
✅ **Lazy-loadable** - Can be code-split if needed later  
✅ **Version-controlled** - Smaller diffs per file  

## Files Reference

- **Main index**: `app/lib/topics/index.ts`
- **Types**: `app/lib/topics/types.ts`
- **JavaScript topics**: `app/lib/topics/javascript/`
- **React topics**: `app/lib/topics/react/`
