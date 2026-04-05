// data/topicsContent.tsx
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
  InlineCode
} from '@/components/learn/TopicContentComponents';

export const topicsContent: Record<
  string,
  Record<
    string,
    {
      title: string;
      sections: {
        id: string;
        title: string;
        content: React.ReactNode;
      }[];
    }
  >
> = {
  javascript: {
    variables: {
      title: "Variables in JavaScript",
      sections: [
        {
          id: "intro",
          title: "Introduction",
          content: (
            <ContentSection>
              <Paragraph>
                Variables are containers used to store data values in JavaScript. They allow you to
                reuse and manipulate data throughout your program.
              </Paragraph>

              <InfoBox variant="blue" icon="💡">
                A variable is like a labeled box where you store information.
              </InfoBox>
            </ContentSection>
          ),
        },
        {
          id: "declarations",
          title: "Variable Declarations (var, let, const)",
          content: (
            <Space size="lg">
              <List>
                <ListItem><Strong>var</Strong> → function scoped (old)</ListItem>
                <ListItem><Strong>let</Strong> → block scoped</ListItem>
                <ListItem><Strong>const</Strong> → block scoped + cannot be reassigned</ListItem>
              </List>

              <CodeBlock>
{`var a = 10;
let b = 20;
const c = 30;`}
              </CodeBlock>

              <InfoBox variant="yellow" icon="⚠️">
                Always prefer <Strong>const</Strong> unless you need reassignment.
              </InfoBox>
            </Space>
          ),
        },
        {
          id: "scope",
          title: "Scope (Global, Function, Block)",
          content: (
            <Space size="lg">
              <Paragraph>
                Scope determines where a variable is accessible.
              </Paragraph>

              <List>
                <ListItem>Global Scope → accessible everywhere</ListItem>
                <ListItem>Function Scope → only inside function</ListItem>
                <ListItem>Block Scope → inside {'{}'} (let & const)</ListItem>
              </List>

              <CodeBlock>
{`{
  let x = 10;
  const y = 20;
}
// x and y are not accessible here`}
              </CodeBlock>

              <InfoBox variant="green" icon="✅">
                <Strong>let</Strong> and <Strong>const</Strong> respect block scope.
              </InfoBox>
            </Space>
          ),
        },
        {
          id: "hoisting",
          title: "Hoisting",
          content: (
            <Space size="lg">
              <Paragraph>
                Hoisting is JavaScript's behavior of moving variable declarations to the top.
              </Paragraph>

              <CodeBlock>
{`console.log(a); // undefined
var a = 5;`}
              </CodeBlock>

              <CodeBlock>
{`console.log(b); // ❌ ReferenceError
let b = 10;`}
              </CodeBlock>

              <InfoBox variant="red" icon="❗">
                <Strong>let</Strong> and <Strong>const</Strong> are hoisted but not initialized (TDZ).
              </InfoBox>
            </Space>
          ),
        },
        {
          id: "tdz",
          title: "Temporal Dead Zone (TDZ)",
          content: (
            <ContentSection>
              <Paragraph>
                TDZ is the time between variable declaration and initialization where accessing it throws an error.
              </Paragraph>

              <CodeBlock>
{`console.log(x); // ❌ error
let x = 10;`}
              </CodeBlock>
            </ContentSection>
          ),
        },
        {
          id: "reassignment",
          title: "Reassignment vs Mutation",
          content: (
            <Space size="lg">
              <Paragraph>
                <Strong>const</Strong> prevents reassignment, but allows mutation of objects.
              </Paragraph>

              <CodeBlock>
{`const user = { name: "John" };

user.name = "Doe"; // ✅ allowed
user = {}; // ❌ not allowed`}
              </CodeBlock>
            </Space>
          ),
        },
        {
          id: "best-practices",
          title: "Best Practices",
          content: (
            <ContentSection>
              <List>
                <ListItem>Use <Strong>const</Strong> by default</ListItem>
                <ListItem>Use <Strong>let</Strong> only when needed</ListItem>
                <ListItem>Avoid <Strong>var</Strong></ListItem>
                <ListItem>Use meaningful variable names</ListItem>
              </List>

              <InfoBox variant="purple" icon="🚀">
                Clean variable usage improves readability and reduces bugs.
              </InfoBox>
            </ContentSection>
          ),
        },
        {
          id: "interview",
          title: "Interview Questions",
          content: (
            <List>
              <ListItem>Difference between var, let, const?</ListItem>
              <ListItem>What is hoisting?</ListItem>
              <ListItem>Explain TDZ</ListItem>
              <ListItem>const vs let?</ListItem>
            </List>
          ),
        },
      ],
    },
    "data-types": {
      title: "Data Types in JavaScript",
      sections: [
        {
          id: "intro",
          title: "Introduction",
          content: (
            <ContentSection>
              <Paragraph>
                Data types define the kind of data a variable can hold. JavaScript is
                a dynamically typed language, meaning you don't need to specify the type explicitly.
              </Paragraph>

              <InfoBox variant="blue" icon="💡">
                The type of a variable is determined at runtime.
              </InfoBox>
            </ContentSection>
          ),
        },
        {
          id: "types-overview",
          title: "Types of Data Types",
          content: (
            <Space size="lg">
              <Paragraph>
                JavaScript has two main categories:
              </Paragraph>

              <List>
                <ListItem><Strong>Primitive Types</Strong></ListItem>
                <ListItem><Strong>Non-Primitive Types</Strong></ListItem>
              </List>

              <CodeBlock>
{`Primitive → string, number, boolean, null, undefined, symbol, bigint
Non-Primitive → object, array, function`}
              </CodeBlock>
            </Space>
          ),
        },
        {
          id: "primitive",
          title: "Primitive Data Types",
          content: (
            <Space size="lg">
              <Paragraph>
                Primitive types are immutable and stored by value.
              </Paragraph>

              <List>
                <ListItem><Strong>String</Strong> → text</ListItem>
                <ListItem><Strong>Number</Strong> → numeric values</ListItem>
                <ListItem><Strong>Boolean</Strong> → true/false</ListItem>
                <ListItem><Strong>Undefined</Strong> → declared but not assigned</ListItem>
                <ListItem><Strong>Null</Strong> → intentional empty value</ListItem>
                <ListItem><Strong>Symbol</Strong> → unique identifiers</ListItem>
                <ListItem><Strong>BigInt</Strong> → large integers</ListItem>
              </List>

              <CodeBlock>
{`let name = "John";       // string
let age = 25;             // number
let isLoggedIn = true;    // boolean
let x;                    // undefined
let y = null;             // null`}
              </CodeBlock>
            </Space>
          ),
        },
        {
          id: "non-primitive",
          title: "Non-Primitive Data Types",
          content: (
            <Space size="lg">
              <Paragraph>
                Non-primitive types are stored by reference.
              </Paragraph>

              <List>
                <ListItem><Strong>Object</Strong></ListItem>
                <ListItem><Strong>Array</Strong></ListItem>
                <ListItem><Strong>Function</Strong></ListItem>
              </List>

              <CodeBlock>
{`const user = { name: "John" };
const arr = [1, 2, 3];

function greet() {
  return "Hello";
}`}
              </CodeBlock>

              <InfoBox variant="yellow" icon="⚠️">
                Objects are stored by reference, not by value.
              </InfoBox>
            </Space>
          ),
        },
        {
          id: "typeof",
          title: "typeof Operator",
          content: (
            <Space size="lg">
              <Paragraph>
                The <InlineCode>typeof</InlineCode> operator is used to check the type of a variable.
              </Paragraph>

              <CodeBlock>
{`typeof "hello"   // "string"
typeof 10        // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object" ❗`}
              </CodeBlock>

              <InfoBox variant="red" icon="❗">
                <Strong>typeof null</Strong> returns "object" (this is a known JavaScript bug).
              </InfoBox>
            </Space>
          ),
        },
        {
          id: "coercion",
          title: "Type Coercion",
          content: (
            <Space size="lg">
              <Paragraph>
                Type coercion is automatic conversion of values from one type to another.
              </Paragraph>

              <CodeBlock>
{`"5" + 2   // "52"
"5" - 2   // 3
true + 1  // 2`}
              </CodeBlock>

              <InfoBox variant="purple" icon="💡">
                JavaScript tries to convert types automatically in operations.
              </InfoBox>
            </Space>
          ),
        },
        {
          id: "equality",
          title: "== vs ===",
          content: (
            <Space size="lg">
              <List>
                <ListItem><Strong>==</Strong> → loose equality (allows coercion)</ListItem>
                <ListItem><Strong>===</Strong> → strict equality (no coercion)</ListItem>
              </List>

              <CodeBlock>
{`5 == "5"   // true
5 === "5"  // false`}
              </CodeBlock>

              <InfoBox variant="green" icon="✅">
                Always use <Strong>===</Strong> for safer comparisons.
              </InfoBox>
            </Space>
          ),
        },
        {
          id: "summary",
          title: "Summary",
          content: (
            <List>
              <ListItem>JavaScript has primitive and non-primitive types</ListItem>
              <ListItem>Primitive → stored by value</ListItem>
              <ListItem>Objects → stored by reference</ListItem>
              <ListItem>Use <InlineCode>typeof</InlineCode> to check type</ListItem>
              <ListItem>Prefer <Strong>===</Strong> over <Strong>==</Strong></ListItem>
            </List>
          ),
        },
        {
          id: "interview",
          title: "Interview Questions",
          content: (
            <List>
              <ListItem>Difference between primitive and non-primitive?</ListItem>
              <ListItem>Why does typeof null return object?</ListItem>
              <ListItem>Explain type coercion with examples</ListItem>
              <ListItem>Difference between == and ===?</ListItem>
            </List>
          ),
        },
      ],
    },
  },
  react: {
    components: {
      title: "Components",
      sections: [
        {
          id: "intro",
          title: "Introduction",
          content: (
            <Paragraph>
              Components are reusable building blocks of a React app.
            </Paragraph>
          ),
        },
      ],
    },
  },
};