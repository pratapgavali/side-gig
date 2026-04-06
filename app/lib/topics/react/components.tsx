import React from 'react';
import {
  ContentSection,
  Paragraph,
  List,
  ListItem,
  CodeBlock,
  InfoBox,
  Strong,
  Space,
  InlineCode,
} from '@/components/learn/TopicContentComponents';
import { TopicData } from '../types';

export const componentsTopic: TopicData = {
  title: "Components",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            Components are reusable building blocks of a React app. They make your UI modular and maintainable.
          </Paragraph>

          <InfoBox variant="blue" icon="💡">
            Think of components as LEGO blocks that you can combine to build your app.
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "types",
      title: "Types of Components",
      content: (
        <Space size="lg">
          <List>
            <ListItem><Strong>Functional Components</Strong> → JavaScript functions (modern)</ListItem>
            <ListItem><Strong>Class Components</Strong> → ES6 classes (older)</ListItem>
          </List>

          <CodeBlock>
{`// Functional Component
function Welcome() {
  return <h1>Hello!</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello!</h1>;
  }
}`}
          </CodeBlock>

          <InfoBox variant="green" icon="✅">
            Today, functional components with hooks are the standard approach.
          </InfoBox>
        </Space>
      ),
    },
  ],
};
