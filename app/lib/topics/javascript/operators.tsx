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

export const operatorsTopic: TopicData = {
  title: "Operators in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            Operators are special symbols or keywords used to perform operations on operands (values or variables). 
            JavaScript provides a rich set of operators for arithmetic, comparison, logical, assignment, and more.
          </Paragraph>
          <InfoBox variant="blue" icon="⚙️">
            Operators take one, two, or three operands and produce a result.
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "arithmetic",
      title: "Arithmetic Operators",
      content: (
        <Space size="lg">
          <Paragraph>
            Used to perform mathematical operations.
          </Paragraph>
          <List>
            <ListItem><Strong>+</Strong> → Addition</ListItem>
            <ListItem><Strong>-</Strong> → Subtraction</ListItem>
            <ListItem><Strong>*</Strong> → Multiplication</ListItem>
            <ListItem><Strong>/</Strong> → Division</ListItem>
            <ListItem><Strong>%</Strong> → Modulus (remainder)</ListItem>
            <ListItem><Strong>**</Strong> → Exponentiation (ES7)</ListItem>
            <ListItem><Strong>++</Strong> → Increment</ListItem>
            <ListItem><Strong>--</Strong> → Decrement</ListItem>
          </List>
          <CodeBlock>
{`let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Increment/Decrement
let x = 5;
console.log(x++); // 5 (post-increment)
console.log(++x); // 7 (pre-increment)`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            Be careful with <Strong>++</Strong> and <Strong>--</Strong> – pre and post make a difference!
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "assignment",
      title: "Assignment Operators",
      content: (
        <Space size="lg">
          <Paragraph>
            Assign values to variables. The most common is <InlineCode>=</InlineCode>, but compound operators combine arithmetic and assignment.
          </Paragraph>
          <List>
            <ListItem><Strong>=</Strong> → x = y</ListItem>
            <ListItem><Strong>+=</Strong> → x += y (x = x + y)</ListItem>
            <ListItem><Strong>-=</Strong> → x -= y</ListItem>
            <ListItem><Strong>*=</Strong> → x *= y</ListItem>
            <ListItem><Strong>/=</Strong> → x /= y</ListItem>
            <ListItem><Strong>%=</Strong> → x %= y</ListItem>
            <ListItem><Strong>**=</Strong> → x **= y</ListItem>
          </List>
          <CodeBlock>
{`let score = 100;
score += 20;   // 120
score -= 10;   // 110
score *= 2;    // 220
score /= 4;    // 55
score %= 10;   // 5
console.log(score); // 5`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "comparison",
      title: "Comparison Operators",
      content: (
        <Space size="lg">
          <Paragraph>
            Compare two values and return a boolean (<InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>).
          </Paragraph>
          <List>
            <ListItem><Strong>==</Strong> → equal value (loose)</ListItem>
            <ListItem><Strong>===</Strong> → equal value and type (strict)</ListItem>
            <ListItem><Strong>!=</Strong> → not equal value</ListItem>
            <ListItem><Strong>!==</Strong> → not equal value or type</ListItem>
            <ListItem><Strong>&gt;</Strong> → greater than</ListItem>
            <ListItem><Strong>&lt;</Strong> → less than</ListItem>
            <ListItem><Strong>&gt;=</Strong> → greater than or equal</ListItem>
            <ListItem><Strong>&lt;=</Strong> → less than or equal</ListItem>
          </List>
          <CodeBlock>
{`console.log(5 == "5");   // true (loose)
console.log(5 === "5");  // false (strict)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(3 <= 3);     // true`}
          </CodeBlock>
          <InfoBox variant="green" icon="✅">
            Always prefer <Strong>===</Strong> and <Strong>!==</Strong> to avoid unexpected type coercion.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "logical",
      title: "Logical Operators",
      content: (
        <Space size="lg">
          <Paragraph>
            Used to combine or invert boolean values.
          </Paragraph>
          <List>
            <ListItem><Strong>&amp;&amp;</Strong> → AND (true if both are true)</ListItem>
            <ListItem><Strong>||</Strong> → OR (true if at least one is true)</ListItem>
            <ListItem><Strong>!</Strong> → NOT (inverts truthiness)</ListItem>
          </List>
          <CodeBlock>
{`let a = true, b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false

// Short-circuit evaluation
let user = null;
let name = user && user.name; // user is null → stops at user, name = null
let defaultName = user || "Guest"; // "Guest"`}
          </CodeBlock>
          <InfoBox variant="purple" icon="💡">
            <Strong>&amp;&amp;</Strong> and <Strong>||</Strong> use short-circuit evaluation – they stop as soon as the result is determined.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "ternary",
      title: "Ternary (Conditional) Operator",
      content: (
        <Space size="lg">
          <Paragraph>
            A shorthand for <InlineCode>if-else</InlineCode>. Syntax: <InlineCode>condition ? exprIfTrue : exprIfFalse</InlineCode>.
          </Paragraph>
          <CodeBlock>
{`let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

// Nested ternary (use sparingly)
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade); // "B"`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            Keep ternaries simple. Deep nesting hurts readability – use regular <InlineCode>if/else</InlineCode> instead.
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
            Returns a string indicating the type of the operand.
          </Paragraph>
          <CodeBlock>
{`console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object"  (historical bug)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"`}
          </CodeBlock>
          <InfoBox variant="red" icon="❗">
            <Strong>typeof null</Strong> returns <InlineCode>"object"</InlineCode> – a known JavaScript quirk. Use <InlineCode>value === null</InlineCode> to check for null.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "bitwise",
      title: "Bitwise Operators (Overview)",
      content: (
        <Space size="lg">
          <Paragraph>
            Work on 32-bit binary representations. Rarely used in everyday JS, but good to know.
          </Paragraph>
          <List>
            <ListItem><Strong>&amp;</Strong> → AND</ListItem>
            <ListItem><Strong>|</Strong> → OR</ListItem>
            <ListItem><Strong>^</Strong> → XOR</ListItem>
            <ListItem><Strong>~</Strong> → NOT</ListItem>
            <ListItem><Strong>&lt;&lt;</Strong> → left shift</ListItem>
            <ListItem><Strong>&gt;&gt;</Strong> → right shift</ListItem>
          </List>
          <CodeBlock>
{`console.log(5 & 1);   // 1 (0101 & 0001 = 0001)
console.log(5 | 1);   // 5 (0101 | 0001 = 0101)
console.log(5 ^ 1);   // 4 (0101 ^ 0001 = 0100)
console.log(~5);      // -6
console.log(5 << 1);  // 10`}
          </CodeBlock>
          <InfoBox variant="purple" icon="💡">
            Bitwise operators are useful for flags, permissions, and performance-critical low-level operations.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "precedence",
      title: "Operator Precedence",
      content: (
        <Space size="lg">
          <Paragraph>
            Determines the order in which operators are evaluated. Multiplication and division happen before addition and subtraction. Use parentheses <InlineCode>()</InlineCode> to control precedence.
          </Paragraph>
          <CodeBlock>
{`let result = 2 + 3 * 4;   // 14 (multiplication first)
let fixed = (2 + 3) * 4; // 20 (parentheses override)

// Logical AND has higher precedence than OR
console.log(true || false && false); // true (&& first: false && false = false, then true || false = true)`}
          </CodeBlock>
          <InfoBox variant="green" icon="✅">
            When in doubt, use parentheses to make your intention clear – it improves readability.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "best-practices",
      title: "Best Practices",
      content: (
        <ContentSection>
          <List>
            <ListItem>Use <Strong>===</Strong> and <Strong>!==</Strong> instead of <Strong>==</Strong> and <Strong>!=</Strong></ListItem>
            <ListItem>Use parentheses to clarify complex expressions</ListItem>
            <ListItem>Avoid nested ternaries – use <InlineCode>if/else</InlineCode> or <InlineCode>switch</InlineCode></ListItem>
            <ListItem>Leverage short-circuit evaluation for default values (<InlineCode>value || defaultValue</InlineCode>)</ListItem>
            <ListItem>Be mindful of <Strong>++</Strong> and <Strong>--</Strong> placement (pre vs post)</ListItem>
          </List>
          <InfoBox variant="blue" icon="🚀">
            Clean operator usage leads to fewer bugs and more maintainable code.
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>Difference between <InlineCode>==</InlineCode> and <InlineCode>===</InlineCode>?</ListItem>
          <ListItem>What is short-circuit evaluation? Give an example.</ListItem>
          <ListItem>Explain the difference between <InlineCode>++i</InlineCode> and <InlineCode>i++</InlineCode>.</ListItem>
          <ListItem>What does <InlineCode>typeof null</InlineCode> return and why?</ListItem>
          <ListItem>How does operator precedence affect <InlineCode>console.log(3 + 4 * 2)</InlineCode>?</ListItem>
          <ListItem>Write a ternary operator that returns "Adult" if age ≥ 18 else "Minor".</ListItem>
        </List>
      ),
    },
  ],
};