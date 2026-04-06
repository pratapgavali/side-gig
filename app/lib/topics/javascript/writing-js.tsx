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

export const WritingJsTopic: TopicData = {
  title: "Writing JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            Writing JavaScript isn't just about syntax — it's about where and how you run it. You can execute JavaScript in multiple environments: browser consoles, HTML files, external scripts, Node.js, and even online playgrounds. Each method has specific use cases and best practices.
          </Paragraph>
          <InfoBox variant="blue" icon="📝">
            JavaScript code is case-sensitive, and statements are typically terminated with semicolons (though automatic semicolon insertion can add them for you).
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "browser-console",
      title: "Browser Console",
      content: (
        <Space size="lg">
          <Paragraph>
            The browser's DevTools console is an interactive REPL (Read-Eval-Print Loop) environment. Open it with <Strong>F12</Strong> or <Strong>Ctrl+Shift+I</Strong> (Cmd+Option+I on Mac), then click the "Console" tab.
          </Paragraph>
          <CodeBlock>
{`// Basic logging
console.log("Hello, World!");
console.warn("This is a warning");
console.error("This is an error");
console.table([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]);

// Arithmetic expressions
10 + 5 * 2;   // 20
"10" + 5;     // "105" (string concatenation)

// Variable declaration and reassignment
let city = "Tokyo";
city = "Osaka";
console.log(city);

// Multi-line input: Shift+Enter for new line, Enter to run`}
          </CodeBlock>
          <InfoBox variant="purple" icon="🛠️">
            The console also gives you access to the current webpage's DOM — type <InlineCode>document.title</InlineCode> to see the page title, or <InlineCode>document.body.style.backgroundColor = "lightblue"</InlineCode> to change it live.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "inline-script",
      title: "Inline Script (Inside HTML)",
      content: (
        <Space size="lg">
          <Paragraph>
            Inline scripts are written directly inside an HTML file using the <InlineCode>{'<script>'}</InlineCode> tag. This is useful for small, page‑specific logic but becomes hard to maintain for larger applications.
          </Paragraph>
          <CodeBlock>
{`<!DOCTYPE html>
<html>
<head>
  <title>Inline JS Example</title>
</head>
<body>
  <button onclick="showMessage()">Click me</button>

  <script>
    function showMessage() {
      alert("Button was clicked!");
    }

    // Access DOM elements
    console.log(document.querySelector('button').innerText);
  </script>
</body>
</html>`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            Mixing HTML and JavaScript inline can make debugging harder. Prefer external files for anything beyond a few lines.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "external-file",
      title: "External JavaScript Files",
      content: (
        <Space size="lg">
          <Paragraph>
            External files are the standard for production websites. You write JavaScript in a <InlineCode>.js</InlineCode> file and link it using the <InlineCode>src</InlineCode> attribute of the <InlineCode>{'<script>'}</InlineCode> tag.
          </Paragraph>
          <CodeBlock>
{`<!-- index.html -->
<!DOCTYPE html>
<html>
<body>
  <h1>External JS Demo</h1>
  <script src="app.js"></script>
</body>
</html>`}
          </CodeBlock>
          <CodeBlock>
{`// app.js
console.log("External script loaded");

// DOM manipulation
const heading = document.querySelector('h1');
heading.style.color = 'blue';
heading.textContent = 'Updated by JavaScript!';`}
          </CodeBlock>
          <InfoBox variant="green" icon="✅">
            Benefits of external files: browser caching (faster subsequent loads), separation of concerns (HTML = structure, JS = behavior), and easier collaboration.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "script-tag-attributes",
      title: "Script Tag Attributes: async vs defer",
      content: (
        <Space size="lg">
          <Paragraph>
            By default, the browser pauses HTML parsing when it encounters a <InlineCode>{'<script>'}</InlineCode> tag, downloads the script, executes it, and then continues parsing. This can slow down page loading. The <InlineCode>async</InlineCode> and <InlineCode>defer</InlineCode> attributes change this behavior.
          </Paragraph>
          <List>
            <ListItem><Strong>No attribute</Strong> → download and execute immediately, blocking HTML parsing.</ListItem>
            <ListItem><Strong>defer</Strong> → download in background while HTML parses, execute after HTML is fully parsed (preserves order).</ListItem>
            <ListItem><Strong>async</Strong> → download in background, execute as soon as downloaded (order not guaranteed).</ListItem>
          </List>
          <CodeBlock>
{`<!-- Blocks HTML until script loads -->
<script src="blocking.js"></script>

<!-- Runs after HTML is fully parsed (recommended) -->
<script defer src="deferred.js"></script>

<!-- Runs as soon as downloaded, may interleave -->
<script async src="async.js"></script>

<!-- Multiple deferred scripts run in order -->
<script defer src="first.js"></script>
<script defer src="second.js"></script>  <!-- Runs after first.js -->`}
          </CodeBlock>
          <InfoBox variant="blue" icon="⚡">
            Best practice: Use <InlineCode>defer</InlineCode> for most scripts that need the full DOM. Use <InlineCode>async</InlineCode> for independent scripts (e.g., analytics, ads).
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "placement-best-practices",
      title: "Placement Best Practices",
      content: (
        <Space size="lg">
          <Paragraph>
            Where you put your <InlineCode>{'<script>'}</InlineCode> tags significantly affects perceived page speed and functionality.
          </Paragraph>
          <List>
            <ListItem><Strong>Inside {'<head>'}</Strong> → scripts load early but block rendering (avoid unless using defer/async).</ListItem>
            <ListItem><Strong>Just before closing {'</body>'}</Strong> → ensures DOM is ready, but scripts load later (older technique).</ListItem>
            <ListItem><Strong>With defer</Strong> → can be placed in {'<head>'} and runs after DOM is ready (modern best practice).</ListItem>
          </List>
          <CodeBlock>
{`<!-- Modern approach: defer in head -->
<head>
  <script defer src="main.js"></script>
</head>

<!-- Classic approach: scripts at end of body -->
<body>
  <!-- all HTML content -->
  <script src="jquery.js"></script>
  <script src="app.js"></script>
</body>

<!-- Avoid: blocking scripts in head without defer -->
<head>
  <script src="slow.js"></script>  <!-- Bad! Page stays blank until download+execution -->
</head>`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "nodejs",
      title: "Writing JavaScript Outside the Browser (Node.js)",
      content: (
        <Space size="lg">
          <Paragraph>
            Node.js allows you to run JavaScript on the server, command line, or any environment outside a browser. This is essential for backend development, build tools, and scripting.
          </Paragraph>
          <CodeBlock>
{`// hello.js
console.log("Hello from Node.js");

// Read command line arguments
const args = process.argv.slice(2);
console.log("Arguments:", args);

// File system operations
const fs = require('fs');
fs.writeFileSync('output.txt', 'Hello Node!');`}
          </CodeBlock>
          <CodeBlock>
{`# Run in terminal
node hello.js

# With arguments
node hello.js arg1 arg2`}
          </CodeBlock>
          <InfoBox variant="purple" icon="📦">
            Node.js uses CommonJS modules (<InlineCode>require()</InlineCode>) by default, while browsers use ES modules (<InlineCode>import</InlineCode>). Modern Node.js supports ES modules too with <InlineCode>"type": "module"</InlineCode> in package.json.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "online-editors",
      title: "Online Playgrounds & Editors",
      content: (
        <Space size="lg">
          <Paragraph>
            For quick experiments or sharing code snippets, online editors are invaluable. They often include console output, live preview, and collaboration features.
          </Paragraph>
          <List>
            <ListItem><Strong>CodePen</Strong> → great for frontend demos (HTML/CSS/JS)</ListItem>
            <ListItem><Strong>JSFiddle</Strong> → similar to CodePen, with multiple frameworks</ListItem>
            <ListItem><Strong>StackBlitz</Strong> → full VS Code experience in browser, supports npm</ListItem>
            <ListItem><Strong>Replit</Strong> → supports Node.js backend and many languages</ListItem>
            <ListItem><Strong>Chrome DevTools Snippets</Strong> → save and run scripts within browser tools</ListItem>
          </List>
          <InfoBox variant="green" icon="💻">
            Online editors are perfect for interviews, debugging, and learning — no setup required.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "common-pitfalls",
      title: "Common Pitfalls When Writing JS",
      content: (
        <Space size="lg">
          <Paragraph>
            Even experienced developers run into these issues. Knowing them saves debugging time.
          </Paragraph>
          <List>
            <ListItem><Strong>Missing script closing tag</Strong> → browser may ignore rest of page</ListItem>
            <ListItem><Strong>Using variables before declaration</Strong> → <InlineCode>let</InlineCode> and <InlineCode>const</InlineCode> are hoisted but not initialized (TDZ)</ListItem>
            <ListItem><Strong>Forgetting to link external file</Strong> → no error, just nothing happens</ListItem>
            <ListItem><Strong>Path errors in src</Strong> → use relative paths correctly (<InlineCode>./js/app.js</InlineCode> vs <InlineCode>js/app.js</InlineCode>)</ListItem>
            <ListItem><Strong>Multiple scripts depending on each other</Strong> → order matters, use <InlineCode>defer</InlineCode> to preserve order</ListItem>
          </List>
          <CodeBlock>
{`<!-- Wrong: missing closing slash (in self-closing tags not allowed in HTML5) -->
<script src="app.js" />

<!-- Correct -->
<script src="app.js"></script>

<!-- Wrong path: script not found -->
<script src="javascripts/app.js"></script>

<!-- Correct: relative path from HTML location -->
<script src="./js/app.js"></script>`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "summary",
      title: "Summary",
      content: (
        <List>
          <ListItem>Browser console = quick testing and debugging</ListItem>
          <ListItem>Inline scripts = small, page‑specific logic only</ListItem>
          <ListItem>External <InlineCode>.js</InlineCode> files = production best practice</ListItem>
          <ListItem>Use <InlineCode>defer</InlineCode> for most scripts, <InlineCode>async</InlineCode> for independent ones</ListItem>
          <ListItem>Place scripts with <InlineCode>defer</InlineCode> in <InlineCode>{'<head>'}</InlineCode> or at end of <InlineCode>{'<body>'}</InlineCode></ListItem>
          <ListItem>Node.js runs JS outside browsers (server, CLI, tools)</ListItem>
          <ListItem>Online editors are great for prototyping and sharing</ListItem>
          <ListItem>Watch for path errors, missing closing tags, and script order</ListItem>
        </List>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>What are the three ways to include JavaScript in an HTML document?</ListItem>
          <ListItem>Explain the difference between <InlineCode>async</InlineCode> and <InlineCode>defer</InlineCode> attributes.</ListItem>
          <ListItem>Why is it generally better to put scripts at the bottom of the body or use <InlineCode>defer</InlineCode>?</ListItem>
          <ListItem>What happens if you have two <InlineCode>defer</InlineCode> scripts? Does order matter?</ListItem>
          <ListItem>How can you run JavaScript outside a web browser?</ListItem>
          <ListItem>What's the difference between the browser console and Node.js REPL?</ListItem>
        </List>
      ),
    },
  ],
};