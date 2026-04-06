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

export const ConsoleDebuggingTopic: TopicData = {
  title: "Console & Debugging in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            Debugging is the process of finding and fixing errors in your code. The browser's DevTools console is the most essential tool for JavaScript debugging. It allows you to log information, inspect variables, run code interactively, and trace execution flow.
          </Paragraph>
          <InfoBox variant="blue" icon="🐛">
            "The art of debugging is figuring out what you really told your program to do, not what you thought you told it to do."
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "opening-console",
      title: "Opening the Browser Console",
      content: (
        <Space size="lg">
          <Paragraph>
            Every modern browser includes Developer Tools (DevTools). Here's how to open the Console tab:
          </Paragraph>
          <List>
            <ListItem><Strong>Chrome/Edge/Brave</Strong> → F12 or Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac) → then click "Console"</ListItem>
            <ListItem><Strong>Firefox</Strong> → F12 or Ctrl+Shift+I → then "Console" tab</ListItem>
            <ListItem><Strong>Safari</Strong> → First enable DevTools in Preferences → Advanced → "Show Develop menu" → then Cmd+Option+C</ListItem>
          </List>
          <InfoBox variant="purple" icon="⌨️">
            Shortcut: <InlineCode>Ctrl+Shift+J</InlineCode> (Windows/Linux) or <InlineCode>Cmd+Option+J</InlineCode> (Mac) opens the Console directly in Chrome/Edge.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "console-log",
      title: "console.log() – Basic Logging",
      content: (
        <Space size="lg">
          <Paragraph>
            The most common method for outputting information. You can log strings, numbers, objects, arrays, and even multiple values at once.
          </Paragraph>
          <CodeBlock>
{`// Single value
console.log("Hello World");
console.log(42);
console.log(true);

// Multiple values (comma-separated)
console.log("User:", "Alice", "Age:", 25);

// Variables
let count = 10;
console.log("Count is:", count);

// Objects and arrays
const user = { name: "John", age: 30 };
console.log(user);   // Expandable object in console

const colors = ["red", "green", "blue"];
console.log(colors); // Expandable array`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "console-methods",
      title: "Other Console Methods",
      content: (
        <Space size="lg">
          <Paragraph>
            The console object has many methods for different debugging needs.
          </Paragraph>
          <CodeBlock>
{`// Error, warning, info (with icons and styling)
console.error("Something went wrong!");
console.warn("This is a warning, but not fatal");
console.info("Just for your information");

// Table format for arrays/objects
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false }
];
console.table(users);

// Group related logs
console.group("User Details");
console.log("Name:", "Alice");
console.log("Age:", 28);
console.groupEnd();

// Time how long operations take
console.time("Loop time");
for (let i = 0; i < 1000000; i++) { /* ... */ }
console.timeEnd("Loop time");  // "Loop time: 12.5ms"

// Count how many times a line runs
function handleClick() {
  console.count("Button clicked");
  // "Button clicked: 1", "Button clicked: 2", ...
}

// Clear the console
console.clear();

// Assert: logs error only if condition is false
const value = 10;
console.assert(value > 100, "Value should be greater than 100");  // Only logs when false

// Trace the call stack
function first() { second(); }
function second() { console.trace("Call stack trace"); }
first();`}
          </CodeBlock>
          <InfoBox variant="green" icon="✅">
            Use <InlineCode>console.table()</InlineCode> for arrays of objects — it's much more readable than <InlineCode>console.log()</InlineCode>.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "styling-console",
      title: "Styling Console Output",
      content: (
        <Space size="lg">
          <Paragraph>
            You can add CSS styles to console logs using <InlineCode>%c</InlineCode> specifier.
          </Paragraph>
          <CodeBlock>
{`// Basic styling
console.log("%cHello World", "color: blue; font-size: 20px;");

// Multiple styles
console.log(
  "%cError! %cRecoverable warning",
  "color: red; font-weight: bold;",
  "color: orange;"
);

// Background and border
console.log("%cImportant", "background: yellow; color: black; padding: 4px; border-radius: 4px;");`}
          </CodeBlock>
          <InfoBox variant="purple" icon="🎨">
            Styled console logs are great for highlighting specific messages in a noisy console.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "debugger-statement",
      title: "The debugger Statement",
      content: (
        <Space size="lg">
          <Paragraph>
            The <InlineCode>debugger;</InlineCode> statement pauses code execution and opens the debugger at that exact line, allowing you to inspect variables, step through code, and watch expressions.
          </Paragraph>
          <CodeBlock>
{`function calculateTotal(price, tax) {
  debugger;  // Execution stops here if DevTools is open
  const total = price + (price * tax);
  return total;
}

calculateTotal(100, 0.2);`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            <InlineCode>debugger;</InlineCode> only works when DevTools is open. If closed, it does nothing.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "breakpoints",
      title: "Setting Breakpoints in DevTools",
      content: (
        <Space size="lg">
          <Paragraph>
            Breakpoints are more powerful than <InlineCode>debugger;</InlineCode> because you can set them without modifying code. They pause execution at specific lines, conditional breakpoints pause only when a condition is true, and you can inspect the call stack and variables.
          </Paragraph>
          <CodeBlock>
{`// How to set breakpoints:
// 1. Open DevTools → Sources tab
// 2. Find your JS file
// 3. Click the line number where you want to pause

// Conditional breakpoint (right-click line number → "Add conditional breakpoint")
// Only pauses when condition is true, e.g.: i === 5

// DOM breakpoints: Pause when element is modified
// Right-click element in Elements tab → Break on → attribute modifications / subtree modifications / node removal

// XHR/fetch breakpoints: Pause when specific URL is requested
// Sources tab → XHR/fetch Breakpoints → add URL pattern`}
          </CodeBlock>
          <InfoBox variant="blue" icon="⏸️">
            While paused, you can hover over variables to see values, use the Console to evaluate expressions, and step through code with F10 (step over) or F11 (step into).
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "debugging-techniques",
      title: "Common Debugging Techniques",
      content: (
        <Space size="lg">
          <Paragraph>
            Beyond console logs and breakpoints, these strategies help find bugs faster.
          </Paragraph>
          <List>
            <ListItem><Strong>Rubber duck debugging</Strong> → Explain your code line by line to a rubber duck (or any object). Often reveals the bug mid-explanation.</ListItem>
            <ListItem><Strong>Binary search debugging</Strong> → Comment out half the code; if bug disappears, it's in the commented half. Repeat.</ListItem>
            <ListItem><Strong>Console.assert</Strong> → Check invariants without cluttering console.</ListItem>
            <ListItem><Strong>Logging variable changes</Strong> → Use setters or Proxy to log when variables change.</ListItem>
            <ListItem><Strong>Compare with working code</Strong> → Isolate the difference between working and broken versions.</ListItem>
          </List>
          <CodeBlock>
{`// Binary search debugging example
function buggyFunction(data) {
  // Comment out half to isolate
  // const step1 = transformA(data);
  const step2 = transformB(data);
  const step3 = transformC(step2);
  return step3;
}

// Console.assert for sanity checks
function divide(a, b) {
  console.assert(b !== 0, "Division by zero attempted!");
  return a / b;
}

// Watch value changes with Proxy (advanced)
const data = { count: 0 };
const watched = new Proxy(data, {
  set(target, prop, value) {
    console.log(\`\${prop} changed from \${target[prop]} to \${value}\`);
    target[prop] = value;
    return true;
  }
});
watched.count = 5;  // logs: count changed from 0 to 5`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "common-errors",
      title: "Common JavaScript Errors and Their Causes",
      content: (
        <Space size="lg">
          <Paragraph>
            Recognizing error messages helps you fix bugs quickly.
          </Paragraph>
          <List>
            <ListItem><Strong>ReferenceError: x is not defined</Strong> → Variable was never declared.</ListItem>
            <ListItem><Strong>TypeError: Cannot read property 'x' of undefined</Strong> → Accessing property on <InlineCode>undefined</InlineCode> or <InlineCode>null</InlineCode>.</ListItem>
            <ListItem><Strong>SyntaxError: Unexpected token</Strong> → Missing bracket, parenthesis, or invalid syntax.</ListItem>
            <ListItem><Strong>RangeError: Maximum call stack size exceeded</Strong> → Infinite recursion.</ListItem>
            <ListItem><Strong>TypeError: x is not a function</Strong> → Calling something that isn't a function.</ListItem>
            <ListItem><Strong>Uncaught (in promise) ...</Strong> → Promise rejection not handled with <InlineCode>.catch()</InlineCode>.</ListItem>
          </List>
          <CodeBlock>
{`// ReferenceError
console.log(unknownVar);  // unknownVar is not defined

// TypeError
const obj = null;
obj.name;  // Cannot read property 'name' of null

// RangeError (infinite recursion)
function recurse() { recurse(); }
recurse();

// TypeError: not a function
const num = 42;
num();  // num is not a function`}
          </CodeBlock>
          <InfoBox variant="red" icon="🔥">
            Read the error stack trace! It tells you exactly which line caused the error and the sequence of function calls that led there.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "debugging-async",
      title: "Debugging Asynchronous Code",
      content: (
        <Space size="lg">
          <Paragraph>
            Async code (callbacks, promises, async/await) can be tricky because errors may occur after the original call stack is gone.
          </Paragraph>
          <CodeBlock>
{`// Problem: error stack trace is not helpful
setTimeout(() => {
  const data = null;
  console.log(data.value);  // TypeError, but stack shows only setTimeout internals
}, 1000);

// Solution 1: Use async stack traces (Chrome/Edge enable by default, Firefox needs about:config)
// Solution 2: Use .catch() with full error object
Promise.resolve()
  .then(() => {
    throw new Error("Something failed");
  })
  .catch(err => {
    console.error("Caught:", err);  // Full stack trace
  });

// Solution 3: Use unhandledrejection event (global handler)
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Debugging async/await
async function fetchData() {
  debugger;  // Pauses before await
  const response = await fetch('/api/data');
  debugger;  // Pauses after response received
  const data = await response.json();
  return data;
}`}
          </CodeBlock>
          <InfoBox variant="purple" icon="⏳">
            In Chrome DevTools, async stack traces are enabled by default — you'll see the full chain of async calls leading to an error.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "network-debugging",
      title: "Debugging Network Requests",
      content: (
        <Space size="lg">
          <Paragraph>
            Many bugs involve failed API calls or incorrect data. The Network tab is essential for debugging them.
          </Paragraph>
          <CodeBlock>
{`// How to use Network tab:
// 1. Open DevTools → Network tab
// 2. Reload page or trigger API call
// 3. Click on a request to see:
//    - Headers (request/response headers, cookies, auth)
//    - Payload (sent data)
//    - Preview/Response (received data)
//    - Timing (how long each phase took)

// Useful features:
// - Preserve log: Keep logs across page reloads
// - Disable cache: Force fresh requests
// - Throttling: Simulate slow 3G, offline, etc.
// - Filter: Only show XHR/fetch requests

// Logging network errors in code
fetch('/api/users')
  .then(response => {
    if (!response.ok) {
      console.error('HTTP error:', response.status, response.statusText);
      throw new Error(\`HTTP \${response.status}\`);
    }
    return response.json();
  })
  .catch(err => {
    console.error('Network or fetch error:', err);
  });`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "debugging-tips",
      title: "Pro Debugging Tips",
      content: (
        <Space size="lg">
          <Paragraph>
            These advanced techniques can save hours of frustration.
          </Paragraph>
          <List>
            <ListItem><Strong>console.trace() for call stack</Strong> → See which function called the current one.</ListItem>
            <ListItem><Strong>Monitor events</Strong> → <InlineCode>monitorEvents(element, 'click')</InlineCode> in console logs all click events on an element.</ListItem>
            <ListItem><Strong>Store as global variable</Strong> → Right-click any logged object in console → "Store as global variable" → access as <InlineCode>temp1</InlineCode>.</ListItem>
            <ListItem><Strong>Conditional breakpoints</Strong> → Right-click line number → Add conditional breakpoint → e.g., <InlineCode>user.age &gt; 18</InlineCode>.</ListItem>
            <ListItem><Strong>Logpoint / tracepoint</Strong> → Chrome's "Add logpoint" logs a message without pausing execution.</ListItem>
            <ListItem><Strong>Blackbox scripts</Strong> → Right-click script in Sources → "Blackbox script" to skip stepping into library code.</ListItem>
          </List>
          <CodeBlock>
{`// In console, after logging an object:
// Right-click the logged object → "Store as global variable"
// Then you can inspect it:
temp1.name = "Modified";

// Monitor all events on an element
const btn = document.querySelector('button');
monitorEvents(btn, 'click');   // Logs every click event
unmonitorEvents(btn, 'click'); // Stop monitoring

// Get memory usage
console.memory;  // Only in Chrome

// Live expression (Chrome Sources tab)
// Click "Watch" and add an expression like "user.name" — updates in real-time`}
          </CodeBlock>
          <InfoBox variant="green" icon="💡">
            Use <InlineCode>console.log()</InlineCode> liberally during development, but remove or guard them in production to avoid performance and security issues.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "summary",
      title: "Summary",
      content: (
        <List>
          <ListItem>Console methods: <InlineCode>.log()</InlineCode>, <InlineCode>.error()</InlineCode>, <InlineCode>.warn()</InlineCode>, <InlineCode>.table()</InlineCode>, <InlineCode>.time()</InlineCode>, <InlineCode>.group()</InlineCode></ListItem>
          <ListItem><InlineCode>debugger;</InlineCode> statement pauses execution when DevTools is open</ListItem>
          <ListItem>Breakpoints (line, conditional, DOM, XHR) are more flexible than <InlineCode>debugger;</InlineCode></ListItem>
          <ListItem>Stack traces show the call sequence leading to an error</ListItem>
          <ListItem>Network tab is crucial for API debugging</ListItem>
          <ListItem>Async errors need special handling (unhandledrejection, .catch())</ListItem>
          <ListItem>Use <InlineCode>console.assert()</InlineCode> and <InlineCode>console.trace()</InlineCode> for deeper insights</ListItem>
          <ListItem>Chrome DevTools offers advanced features like logpoints, live expressions, and event monitoring</ListItem>
        </List>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>What is the difference between <InlineCode>console.log()</InlineCode> and <InlineCode>console.error()</InlineCode>?</ListItem>
          <ListItem>How do you conditionally pause execution in DevTools without modifying code?</ListItem>
          <ListItem>What is the <InlineCode>debugger;</InlineCode> statement and when does it work?</ListItem>
          <ListItem>How can you measure how long a function takes to execute?</ListItem>
          <ListItem>What is a stack trace and how do you generate one?</ListItem>
          <ListItem>How do you debug a promise rejection that isn't being caught?</ListItem>
          <ListItem>What does <InlineCode>console.table()</InlineCode> do and when is it useful?</ListItem>
          <ListItem>How can you log a message with custom CSS styling in the console?</ListItem>
          <ListItem>What is the difference between breakpoints and <InlineCode>debugger;</InlineCode>?</ListItem>
          <ListItem>How do you inspect network requests that fail?</ListItem>
          <ListItem>What does "conditional breakpoint" mean and how do you set one?</ListItem>
          <ListItem>How do you debug infinite recursion?</ListItem>
        </List>
      ),
    },
  ],
};