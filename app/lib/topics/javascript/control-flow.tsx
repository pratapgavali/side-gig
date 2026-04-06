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

export const ControlFlowTopic: TopicData = {
  title: "Control Flow in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            Control flow determines the order in which statements are executed. JavaScript executes code line by line from top to bottom, but you can alter this flow using conditional statements (decision-making) and loops (repetition). Mastering control flow is essential for creating dynamic, responsive programs.
          </Paragraph>
          <InfoBox variant="blue" icon="🔄">
            Control flow structures are the building blocks of algorithm logic – they let you react to different inputs and repeat tasks efficiently.
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "if-statement",
      title: "if Statement",
      content: (
        <Space size="lg">
          <Paragraph>
            The <InlineCode>if</InlineCode> statement executes a block of code if a specified condition evaluates to <InlineCode>true</InlineCode>. The condition is coerced to a boolean (truthy/falsy).
          </Paragraph>
          <CodeBlock>
{`// Basic syntax
if (condition) {
  // code runs if condition is truthy
}

// Examples
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
}

// Single statement (braces optional but not recommended)
if (age > 16) console.log("Can drive");

// Multiple conditions with logical operators
let hasLicense = true;
if (age >= 18 && hasLicense) {
  console.log("You can drive legally");
}

// Truthy/falsy in conditions
let name = "Alice";
if (name) {               // truthy (non-empty string)
  console.log(\`Hello, \${name}\`);
}

let count = 0;
if (count) {              // falsy (0) – block won't run
  console.log("Count is", count);
}
// Better to be explicit:
if (count !== 0) { ... }`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "if-else",
      title: "if...else and else if",
      content: (
        <Space size="lg">
          <Paragraph>
            Use <InlineCode>else</InlineCode> to execute code when the condition is false. Chain multiple conditions with <InlineCode>else if</InlineCode>.
          </Paragraph>
          <CodeBlock>
{`// if...else
let hour = 14;
if (hour < 12) {
  console.log("Good morning");
} else {
  console.log("Good afternoon");
}

// else if ladder
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("Fail");
}

// Nested if (be careful with readability)
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin");
  } else {
    console.log("Welcome, user");
  }
} else {
  console.log("Please log in");
}`}
          </CodeBlock>
          <InfoBox variant="green" icon="✅">
            Prefer <InlineCode>else if</InlineCode> over nested <InlineCode>if</InlineCode> when checking mutually exclusive conditions.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "ternary",
      title: "Ternary Operator (Conditional Operator)",
      content: (
        <Space size="lg">
          <Paragraph>
            The ternary operator <InlineCode>condition ? expr1 : expr2</InlineCode> is a concise way to write simple <InlineCode>if...else</InlineCode> statements. It returns a value, so it can be used in expressions.
          </Paragraph>
          <CodeBlock>
{`// Basic syntax
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status);  // "adult"

// Used in return statements
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

// Chaining (use sparingly – can hurt readability)
let score = 75;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade);  // "C"

// Better to use if/else for complex chains
let result;
if (score >= 90) result = "A";
else if (score >= 80) result = "B";
else result = "F";

// Ternary for conditional rendering (React-like)
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back" : "Please sign up";`}
          </CodeBlock>
          <InfoBox variant="purple" icon="⚡">
            Use ternary for simple, single-line conditionals. For complex logic, stick with <InlineCode>if...else</InlineCode> for clarity.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "switch",
      title: "switch Statement",
      content: (
        <Space size="lg">
          <Paragraph>
            The <InlineCode>switch</InlineCode> statement evaluates an expression and matches it against multiple <InlineCode>case</InlineCode> clauses. It's cleaner than long <InlineCode>if...else if</InlineCode> chains when comparing a single value against many possibilities.
          </Paragraph>
          <CodeBlock>
{`// Basic switch
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown";
}
console.log(dayName);  // "Wednesday"

// Multiple cases sharing same block (fall-through intentionally)
let fruit = "apple";
switch (fruit) {
  case "apple":
  case "pear":
    console.log("Pome fruit");
    break;
  case "banana":
    console.log("Berry (botanically)");
    break;
  default:
    console.log("Other fruit");
}

// Switch with expressions (not just constants)
let age = 25;
switch (true) {
  case age < 13:
    console.log("Child");
    break;
  case age < 20:
    console.log("Teen");
    break;
  case age < 65:
    console.log("Adult");
    break;
  default:
    console.log("Senior");
}

// Forgetting break leads to fall-through
switch (2) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");   // runs
  case 3:
    console.log("Three"); // also runs (no break)
}
// Output: "Two" then "Three"`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            Always include <InlineCode>break</InlineCode> unless you intentionally want fall-through. Use <InlineCode>default</InlineCode> as a catch-all.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "for-loop",
      title: "for Loop",
      content: (
        <Space size="lg">
          <Paragraph>
            The <InlineCode>for</InlineCode> loop repeats a block of code a specified number of times. It consists of three optional parts: initialization, condition, and final expression.
          </Paragraph>
          <CodeBlock>
{`// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0,1,2,3,4
}

// Loop through array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Reverse loop
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

// Step by 2
for (let i = 0; i < 10; i += 2) {
  console.log(i);  // 0,2,4,6,8
}

// All parts optional
let i = 0;
for (; i < 3; ) {
  console.log(i);
  i++;
}

// Infinite loop (be careful!)
// for (;;) { console.log("forever"); }`}
          </CodeBlock>
          <InfoBox variant="blue" icon="🔄">
            The classic <InlineCode>for</InlineCode> loop gives you fine control over iteration, but for arrays, consider <InlineCode>forEach</InlineCode> or <InlineCode>for...of</InlineCode> for better readability.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "while-do-while",
      title: "while and do...while Loops",
      content: (
        <Space size="lg">
          <Paragraph>
            <InlineCode>while</InlineCode> checks the condition before each iteration; <InlineCode>do...while</InlineCode> executes at least once before checking.
          </Paragraph>
          <CodeBlock>
{`// while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// while with unknown iterations (e.g., user input)
let input = "";
while (input !== "quit") {
  input = prompt("Enter command (type 'quit' to exit)");
  console.log("You entered:", input);
}

// do...while (runs at least once)
let num = 10;
do {
  console.log("This runs once even if condition is false");
  num++;
} while (num < 5);
// Output: runs once, then stops because condition fails

// Danger: infinite loop
// while (true) { console.log("infinite"); }

// Use break to exit infinite loops
let attempts = 0;
while (true) {
  attempts++;
  if (attempts > 3) break;
  console.log("Attempt", attempts);
}`}
          </CodeBlock>
          <InfoBox variant="green" icon="💡">
            Use <InlineCode>while</InlineCode> when you don't know the number of iterations upfront (e.g., waiting for a condition). Use <InlineCode>do...while</InlineCode> when the code must run at least once.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "for-of-for-in",
      title: "for...of and for...in Loops",
      content: (
        <Space size="lg">
          <Paragraph>
            <InlineCode>for...of</InlineCode> iterates over <Strong>values</Strong> of iterable objects (arrays, strings, maps, sets). <InlineCode>for...in</InlineCode> iterates over <Strong>enumerable property keys</Strong> (usually for objects, but avoid with arrays).
          </Paragraph>
          <CodeBlock>
{`// for...of (values)
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);  // "red", "green", "blue"
}

// for...of with string
let word = "hello";
for (let char of word) {
  console.log(char);  // "h","e","l","l","o"
}

// for...of with Map
let map = new Map([["a",1], ["b",2]]);
for (let [key, value] of map) {
  console.log(key, value);
}

// for...in (property keys) – mostly for objects
let person = { name: "Alice", age: 25, city: "NYC" };
for (let key in person) {
  console.log(key, person[key]);  // name Alice, age 25, city NYC
}

// Avoid for...in with arrays (iterates over indices as strings + prototype)
let arr = ["a", "b", "c"];
arr.customProp = "test";
for (let i in arr) {
  console.log(i);  // "0","1","2","customProp" (not what you want)
}
// Use for...of for array values, or classic for loop for indices

// Checking own properties in for...in
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key); // safe
  }
}`}
          </CodeBlock>
          <InfoBox variant="purple" icon="📦">
            Rule: <InlineCode>for...of</InlineCode> for values (arrays, strings), <InlineCode>for...in</InlineCode> for object properties, <InlineCode>for</InlineCode> loop when you need index.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "break-continue",
      title: "break and continue",
      content: (
        <Space size="lg">
          <Paragraph>
            <InlineCode>break</InlineCode> exits the loop entirely. <InlineCode>continue</InlineCode> skips the rest of the current iteration and moves to the next one.
          </Paragraph>
          <CodeBlock>
{`// break: exit loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);  // 0,1,2,3,4
}

// continue: skip iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);  // 0,1,3,4
}

// Use with labels (exiting nested loops)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(i, j);
  }
}
// Output: (0,0) (0,1) (0,2) (1,0) then stops

// continue with label
outer: for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer;
    console.log(i, j);
  }
}
// Output: (0,0) (1,0) (skips j=1 for each i)

// While loop with break
let num = 0;
while (true) {
  num++;
  if (num > 3) break;
  console.log(num);
}`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="🏷️">
            Labels are rarely needed but can simplify complex nested loop logic. Use them sparingly – often a refactored function is clearer.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "error-handling",
      title: "Error Handling with try...catch...finally",
      content: (
        <Space size="lg">
          <Paragraph>
            <InlineCode>try...catch</InlineCode> allows you to handle runtime errors gracefully without crashing the script. The <InlineCode>finally</InlineCode> block runs regardless of whether an error occurred.
          </Paragraph>
          <CodeBlock>
{`// Basic try...catch
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Something went wrong:", error.message);
}

// Example with JSON parsing
let jsonString = '{"name": "Alice"}';
try {
  let user = JSON.parse(jsonString);
  console.log(user.name);
} catch (err) {
  console.log("Invalid JSON");
}

// finally always runs
try {
  console.log("Open file");
  throw new Error("Disk full");
} catch (err) {
  console.log("Error caught");
} finally {
  console.log("Close file");  // Always runs
}

// Throwing custom errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (err) {
  console.error(err.message);
}

// Optional catch binding (ES2019)
try {
  // code
} catch {   // error parameter omitted
  console.log("An error occurred");
}`}
          </CodeBlock>
          <InfoBox variant="red" icon="⚠️">
            Use <InlineCode>try...catch</InlineCode> only for code that might legitimately fail (e.g., network requests, file I/O, parsing). Avoid using it for control flow.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "best-practices",
      title: "Control Flow Best Practices",
      content: (
        <Space size="lg">
          <Paragraph>
            Writing clean, maintainable control flow logic is a skill. Follow these guidelines.
          </Paragraph>
          <List>
            <ListItem><Strong>Use early returns</Strong> to avoid deep nesting.</ListItem>
            <ListItem><Strong>Avoid deep nested ifs</Strong> – refactor into functions or use guard clauses.</ListItem>
            <ListItem><Strong>Prefer switch</Strong> for many mutually exclusive equality checks.</ListItem>
            <ListItem><Strong>Use meaningful variable names</Strong> in loop counters (<InlineCode>i</InlineCode> is fine for short loops, but use <InlineCode>index</InlineCode> or <InlineCode>counter</InlineCode> for clarity).</ListItem>
            <ListItem><Strong>Limit loop complexity</Strong> – avoid modifying loop variable inside the body unexpectedly.</ListItem>
            <ListItem><Strong>Use array methods</Strong> (<InlineCode>map</InlineCode>, <InlineCode>filter</InlineCode>, <InlineCode>reduce</InlineCode>) instead of explicit loops when appropriate (functional style).</ListItem>
          </List>
          <CodeBlock>
{`// Bad: deep nesting
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.role === "admin") {
        // do admin stuff
      }
    }
  }
}

// Good: early returns
function processUser(user) {
  if (!user) return;
  if (!user.isActive) return;
  if (user.role !== "admin") return;
  // do admin stuff
}

// Bad: loop with side effects
let items = [1,2,3];
for (let i = 0; i < items.length; i++) {
  if (items[i] % 2 === 0) {
    items.push(items[i] * 2);  // modifies array while iterating
  }
}

// Good: use separate array or filter/map
let evenDoubled = items.filter(x => x % 2 === 0).map(x => x * 2);`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "summary",
      title: "Summary",
      content: (
        <List>
          <ListItem><InlineCode>if/else</InlineCode> – basic conditional logic</ListItem>
          <ListItem><InlineCode>switch</InlineCode> – clean alternative for many equality checks</ListItem>
          <ListItem>Ternary operator – concise <InlineCode>if/else</InlineCode> expressions</ListItem>
          <ListItem><InlineCode>for</InlineCode> loop – counter-based iteration</ListItem>
          <ListItem><InlineCode>while</InlineCode> and <InlineCode>do...while</InlineCode> – condition-based iteration</ListItem>
          <ListItem><InlineCode>for...of</InlineCode> – iterate over values (arrays, strings, iterables)</ListItem>
          <ListItem><InlineCode>for...in</InlineCode> – iterate over object property keys (avoid arrays)</ListItem>
          <ListItem><InlineCode>break</InlineCode> – exit loop; <InlineCode>continue</InlineCode> – skip iteration</ListItem>
          <ListItem><InlineCode>try...catch...finally</InlineCode> – handle runtime errors</ListItem>
          <ListItem>Prefer early returns and avoid deep nesting for readability</ListItem>
        </List>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>What is the difference between <InlineCode>for...in</InlineCode> and <InlineCode>for...of</InlineCode>?</ListItem>
          <ListItem>How do you exit a nested loop in JavaScript?</ListItem>
          <ListItem>What is the difference between <InlineCode>while</InlineCode> and <InlineCode>do...while</InlineCode>?</ListItem>
          <ListItem>Explain the ternary operator with an example.</ListItem>
          <ListItem>When would you use a <InlineCode>switch</InlineCode> statement over an <InlineCode>if/else</InlineCode> chain?</ListItem>
          <ListItem>What happens if you omit <InlineCode>break</InlineCode> in a <InlineCode>switch</InlineCode> case?</ListItem>
          <ListItem>How does <InlineCode>try...catch</InlineCode> work? What is the purpose of <InlineCode>finally</InlineCode>?</ListItem>
          <ListItem>What is an infinite loop? How do you avoid it?</ListItem>
          <ListItem>What is the output of <InlineCode>for (var i = 0; i &lt; 3; i++) { 'setTimeout(() =&gt; console.log(i));' }</InlineCode> and why? How to fix?</ListItem>
          <ListItem>Can you use <InlineCode>continue</InlineCode> in a <InlineCode>switch</InlineCode> statement?</ListItem>
          <ListItem>What is a label in JavaScript and when might you use it?</ListItem>
          <ListItem>What are guard clauses and why are they useful?</ListItem>
        </List>
      ),
    },
  ],
};