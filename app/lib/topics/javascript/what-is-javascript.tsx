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

export const WhatIsJavaScriptTopic: TopicData = {
  title: "What is JavaScript?",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            JavaScript is a high-level, dynamic, interpreted programming language that is a core technology of the World Wide Web. It enables interactive web pages, web applications, server-side development, and even mobile/desktop apps. Originally created for browsers, it now runs virtually everywhere.
          </Paragraph>
          <InfoBox variant="blue" icon="🌐">
            Together with HTML (structure) and CSS (presentation), JavaScript provides behavior and interactivity.
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "history",
      title: "History & Evolution",
      content: (
        <Space size="lg">
          <Paragraph>
            JavaScript was created in 1995 by <Strong>Brendan Eich</Strong> while working at Netscape. He built the first version in just 10 days. The language was originally named <Strong>Mocha</Strong>, then <Strong>LiveScript</Strong>, and finally renamed to <Strong>JavaScript</Strong> as a marketing collaboration with Sun Microsystems (makers of Java) — despite having almost nothing in common with Java.
          </Paragraph>
          <CodeBlock>
{`Timeline:
1995  → JavaScript created (LiveScript → JavaScript)
1997  → ECMAScript 1 (first standard)
1999  → ES3 (regular expressions, try/catch)
2009  → ES5 (strict mode, JSON, array methods)
2015  → ES6 / ES2015 (let, const, classes, arrow functions, modules)
2016+ → Annual releases (ES2016, ES2017, etc.)`}
          </CodeBlock>
          <InfoBox variant="purple" icon="📜">
            ECMAScript is the official specification; JavaScript is the most famous implementation. Other implementations include JScript (IE) and ActionScript (Flash).
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "key-characteristics",
      title: "Key Characteristics of JavaScript",
      content: (
        <Space size="lg">
          <Paragraph>
            Understanding what makes JavaScript unique helps you write better code and appreciate its design.
          </Paragraph>
          <List>
            <ListItem><Strong>Interpreted, not compiled</Strong> → Code runs line by line without a separate compilation step (though modern engines use JIT compilation for performance).</ListItem>
            <ListItem><Strong>Dynamically typed</Strong> → Variables can hold any type, and types can change at runtime.</ListItem>
            <ListItem><Strong>First-class functions</Strong> → Functions are values that can be assigned, passed, and returned.</ListItem>
            <ListItem><Strong>Prototype-based inheritance</Strong> → Objects inherit directly from other objects (not classes, though ES6 added class syntax as sugar).</ListItem>
            <ListItem><Strong>Event-driven & asynchronous</Strong> → Uses an event loop to handle non-blocking I/O (callbacks, promises, async/await).</ListItem>
            <ListItem><Strong>Single-threaded</Strong> → One main thread for execution, but can offload tasks via Web Workers or Node.js worker threads.</ListItem>
          </List>
          <CodeBlock>
{`// Dynamically typed
let value = 42;     // number
value = "string";   // now a string — no error

// First-class function
const greet = () => console.log("Hi");
const runFunction = (fn) => fn();
runFunction(greet);  // "Hi"

// Prototype inheritance
const parent = { name: "Parent" };
const child = Object.create(parent);
console.log(child.name);  // "Parent" (inherited)`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "what-can-it-do",
      title: "What Can JavaScript Do Today?",
      content: (
        <Space size="lg">
          <Paragraph>
            Originally limited to simple form validation and image rollovers, modern JavaScript powers entire application ecosystems.
          </Paragraph>
          <List>
            <ListItem><Strong>Client-side web development</Strong> → DOM manipulation, event handling, animations, fetch API, WebSockets, canvas, WebGL, and more.</ListItem>
            <ListItem><Strong>Frontend frameworks</Strong> → React, Vue, Angular, Svelte, Solid (build complex SPAs).</ListItem>
            <ListItem><Strong>Server-side development</Strong> → Node.js with Express, NestJS, Fastify (handles millions of concurrent connections).</ListItem>
            <ListItem><Strong>Mobile apps</Strong> → React Native, Ionic, NativeScript (write once, run on iOS/Android).</ListItem>
            <ListItem><Strong>Desktop apps</Strong> → Electron (VS Code, Slack, Discord), Tauri (smaller, more secure).</ListItem>
            <ListItem><Strong>Command-line tools</Strong> → Build CLI utilities with Node.js (e.g., ESLint, Prettier, npm itself).</ListItem>
            <ListItem><Strong>Machine learning</Strong> → TensorFlow.js, Brain.js (run models in browser or Node).</ListItem>
            <ListItem><Strong>Game development</Strong> → Phaser, Three.js (2D/3D games in browser).</ListItem>
            <ListItem><Strong>IoT and robotics</Strong> → Johnny-Five, Node-RED (control hardware with JavaScript).</ListItem>
          </List>
          <InfoBox variant="green" icon="🚀">
            According to Stack Overflow's 2023 survey, JavaScript is the most commonly used programming language for the 11th year in a row.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "how-javascript-runs",
      title: "How JavaScript Runs in the Browser",
      content: (
        <Space size="lg">
          <Paragraph>
            Every modern browser has a built-in <Strong>JavaScript engine</Strong> that parses and executes JavaScript code. These engines implement the ECMAScript standard and add additional APIs for browser interaction (DOM, events, etc.).
          </Paragraph>
          <List>
            <ListItem><Strong>V8</Strong> → Chrome, Edge, Brave, Node.js (C++ written by Google)</ListItem>
            <ListItem><Strong>SpiderMonkey</Strong> → Firefox (first JS engine, written by Brendan Eich)</ListItem>
            <ListItem><Strong>JavaScriptCore (Nitro)</Strong> → Safari (also used in React Native)</ListItem>
            <ListItem><Strong>Chakra</Strong> → Legacy Edge (now replaced by V8)</ListItem>
          </List>
          <CodeBlock>
{`Browser execution flow:
1. HTML parser builds DOM tree
2. When <script> tag is encountered (without defer/async):
   a. Stop parsing HTML
   b. Download script (if external)
   c. Execute script (which may modify DOM)
   d. Resume HTML parsing
3. After HTML is fully parsed, browser triggers DOMContentLoaded event
4. Load external resources (images, stylesheets)
5. Trigger window.load event

With defer: step 2 becomes non-blocking, script runs after step 3
With async: script runs as soon as downloaded (may be before or after DOM is ready)`}
          </CodeBlock>
          <InfoBox variant="blue" icon="⚙️">
            Modern JS engines use Just-In-Time (JIT) compilation: they interpret initially, then compile hot code paths to machine code for performance, sometimes beating traditionally compiled languages in specific tasks.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "javascript-versus-java",
      title: "JavaScript vs Java (They Are Not Related)",
      content: (
        <Space size="lg">
          <Paragraph>
            Despite the confusing name similarity, JavaScript and Java are entirely different languages designed for different purposes. The name "JavaScript" was a marketing decision to ride on Java's popularity.
          </Paragraph>
          <List>
            <ListItem><Strong>Java</Strong> → compiled to bytecode, runs in JVM (Java Virtual Machine), statically typed, class-based OOP, multi-threaded, used for enterprise backends, Android, and large systems.</ListItem>
            <ListItem><Strong>JavaScript</Strong> → interpreted (or JIT-compiled), runs in JS engines (browser/Node), dynamically typed, prototype-based OOP, single-threaded with event loop, used for web frontend, servers (Node.js), mobile/desktop apps.</ListItem>
          </List>
          <CodeBlock>
{`// Java (compiled, static types)
public class Main {
    public static void main(String[] args) {
        int number = 42;   // type fixed
        number = "text";   // ❌ compilation error
    }
}

// JavaScript (interpreted, dynamic types)
let number = 42;   // number
number = "text";   // ✅ works fine, now a string`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            The famous quote: <Strong>"Java is to JavaScript as car is to carpet."</Strong> They share only the first four letters.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "javascript-versus-typescript",
      title: "JavaScript vs TypeScript (A Modern Twist)",
      content: (
        <Space size="lg">
          <Paragraph>
            TypeScript is a <Strong>superset</Strong> of JavaScript developed by Microsoft. It adds static type checking and other features that compile back to plain JavaScript. Many large projects (like VS Code, Angular, and React itself) use TypeScript.
          </Paragraph>
          <CodeBlock>
{`// JavaScript (dynamic)
function add(a, b) {
  return a + b;
}
add(5, "10");  // "510" (string concatenation) — maybe not intended

// TypeScript (static types)
function add(a: number, b: number): number {
  return a + b;
}
add(5, "10");  // ❌ TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'`}
          </CodeBlock>
          <InfoBox variant="purple" icon="📘">
            TypeScript is not a different language — any valid JavaScript is also valid TypeScript. It adds compile-time type checking that disappears in the final JS output.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "ecmascript",
      title: "ECMAScript: The Standard Behind JavaScript",
      content: (
        <Space size="lg">
          <Paragraph>
            ECMAScript (ES) is the standardized specification that JavaScript engines implement. TC39 (Technical Committee 39) is the committee that evolves the language, with proposals going through stages (0 to 4) before being added.
          </Paragraph>
          <CodeBlock>
{`Key ES versions and features:
ES3 (1999)   → try/catch, regular expressions
ES5 (2009)   → strict mode, JSON, Array methods (map, filter, reduce), Object.create
ES6/ES2015   → let/const, arrow functions, classes, modules, promises, template literals, destructuring, spread/rest, Map/Set
ES2016       → Array.includes, exponentiation operator (**)
ES2017       → async/await, Object.values/entries, shared memory
ES2018       → rest/spread properties, asynchronous iteration
ES2019       → Array.flat/flatMap, Object.fromEntries
ES2020       → BigInt, optional chaining (?.), nullish coalescing (??), Promise.allSettled
ES2021       → String.replaceAll, Promise.any, logical assignment operators
ES2022       → Top-level await, .at() method for arrays/strings, Object.hasOwn
ES2023       → Array.findLast, Hashbang grammar, WeakMap symbols as keys`}
          </CodeBlock>
          <InfoBox variant="blue" icon="📅">
            Since ES6 (2015), ECMAScript releases a new version annually, and browsers implement features quickly. You can use modern JS today with transpilers like Babel for older browser support.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "first-example",
      title: "Your First JavaScript Program",
      content: (
        <Space size="lg">
          <Paragraph>
            Let's write a simple interactive program that runs in the browser. Create an HTML file and open it in any browser.
          </Paragraph>
          <CodeBlock>
{`<!DOCTYPE html>
<html>
<head>
  <title>My First JS</title>
</head>
<body>
  <h1 id="greeting">Hello!</h1>
  <button id="changeBtn">Click me</button>

  <script>
    // Select elements from DOM
    const heading = document.getElementById('greeting');
    const button = document.getElementById('changeBtn');

    // Add event listener
    button.addEventListener('click', () => {
      heading.textContent = 'You clicked the button!';
      heading.style.color = 'red';
      
      // Show in console
      console.log('Button was clicked at ' + new Date().toLocaleTimeString());
    });

    // Also log to console when page loads
    console.log('Page loaded and script running!');
  </script>
</body>
</html>`}
          </CodeBlock>
          <InfoBox variant="green" icon="🎯">
            Try modifying the code: change the color, add a counter, or display an alert. The best way to learn is to experiment.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "why-learn-js",
      title: "Why Learn JavaScript in 2025?",
      content: (
        <Space size="lg">
          <Paragraph>
            JavaScript is not just a "toy language" anymore — it's a professional, versatile, and in-demand skill.
          </Paragraph>
          <List>
            <ListItem><Strong>Universal runtime</Strong> → One language for frontend, backend, mobile, desktop, and IoT.</ListItem>
            <ListItem><Strong>Huge ecosystem</Strong> → npm (Node Package Manager) has over 2 million packages, the largest package registry in the world.</ListItem>
            <ListItem><Strong>Excellent tooling</Strong> → VSCode, ESLint, Prettier, Webpack, Vite, etc.</ListItem>
            <ListItem><Strong>Strong job market</Strong> → JavaScript consistently tops job listings for web developers.</ListItem>
            <ListItem><Strong>Low entry barrier</Strong> → No need to install compilers or complex toolchains to start (just a browser).</ListItem>
            <ListItem><Strong>Fast evolution</Strong> → New features every year that make the language more expressive and safer.</ListItem>
          </List>
          <InfoBox variant="purple" icon="💡">
            Many concepts you learn in JavaScript (functions, objects, async patterns) transfer to other languages like Python, C#, or Rust.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "common-misconceptions",
      title: "Common Misconceptions About JavaScript",
      content: (
        <Space size="lg">
          <Paragraph>
            Let's clear up some myths that confuse beginners.
          </Paragraph>
          <List>
            <ListItem><Strong>"JavaScript is only for web browsers"</Strong> → False. Node.js runs on servers, React Native makes mobile apps, Electron makes desktop apps.</ListItem>
            <ListItem><Strong>"JavaScript is slow"</Strong> → Outdated. Modern JIT compilers like V8 make JS very fast for most tasks, often within 2-3x of C for compute-heavy code.</ListItem>
            <ListItem><Strong>"JavaScript is not a real programming language"</Strong> → False. It's Turing-complete, supports OOP and functional paradigms, and is used by Google, Facebook, Netflix, and NASA.</ListItem>
            <ListItem><Strong>"JavaScript has no types"</Strong> → Incorrect. It has dynamic types, and you can add static types with TypeScript or JSDoc.</ListItem>
            <ListItem><Strong>"You need to learn Java first"</Strong> → Absolutely not. They are unrelated, and many developers start directly with JavaScript.</ListItem>
          </List>
        </Space>
      ),
    },
    {
      id: "summary",
      title: "Summary",
      content: (
        <List>
          <ListItem>JavaScript is a high-level, dynamic, interpreted language created by Brendan Eich in 1995.</ListItem>
          <ListItem>It runs in browsers via JS engines (V8, SpiderMonkey, JavaScriptCore) and outside browsers via Node.js.</ListItem>
          <ListItem>Key features: dynamic typing, first-class functions, prototype inheritance, async event loop.</ListItem>
          <ListItem>Used for web (frontend & backend), mobile apps, desktop apps, CLI tools, games, ML, and IoT.</ListItem>
          <ListItem>ECMAScript is the standard; annual releases add modern features.</ListItem>
          <ListItem>JavaScript is not related to Java; TypeScript is a typed superset.</ListItem>
          <ListItem>It's the most popular language in the world according to multiple surveys.</ListItem>
        </List>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>What is JavaScript and where is it typically used?</ListItem>
          <ListItem>Who created JavaScript and in what year?</ListItem>
          <ListItem>Explain the difference between JavaScript and ECMAScript.</ListItem>
          <ListItem>What are the key characteristics of JavaScript (dynamic typing, first-class functions, etc.)?</ListItem>
          <ListItem>Is JavaScript compiled or interpreted? Explain how modern engines work.</ListItem>
          <ListItem>What is the difference between JavaScript and Java?</ListItem>
          <ListItem>What is the difference between JavaScript and TypeScript?</ListItem>
          <ListItem>What are some popular JavaScript engines and which browsers use them?</ListItem>
          <ListItem>What does "JavaScript runs everywhere" mean? Give examples.</ListItem>
          <ListItem>What are the major features added in ES6 (ES2015)?</ListItem>
        </List>
      ),
    },
  ],
};