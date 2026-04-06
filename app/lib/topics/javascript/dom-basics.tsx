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

export const DomBasicsTopic: TopicData = {
  title: "DOM Basics in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction to the DOM",
      content: (
        <ContentSection>
          <Paragraph>
            The Document Object Model (DOM) is a programming interface that represents an HTML document as a tree of objects. Each HTML element becomes a node in this tree, and JavaScript can interact with every node – reading, modifying, creating, or deleting them. The DOM is what makes static web pages dynamic and interactive.
          </Paragraph>
          <Paragraph>
            Important: The DOM is not part of the JavaScript language itself. It's a Web API provided by browsers. JavaScript simply gives you the tools to manipulate the DOM.
          </Paragraph>
          <InfoBox variant="blue" icon="🌳">
            The DOM tree starts with the <InlineCode>document</InlineCode> object. From there you can access <InlineCode>html</InlineCode>, <InlineCode>head</InlineCode>, <InlineCode>body</InlineCode>, and every other element.
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "dom-tree",
      title: "Understanding the DOM Tree",
      content: (
        <Space size="lg">
          <Paragraph>
            When a browser loads an HTML page, it parses the HTML and builds a tree structure. Each HTML tag becomes an element node. Text inside tags becomes text nodes. Attributes become property nodes.
          </Paragraph>
          <Paragraph>
            For example, take this simple HTML:
          </Paragraph>
          <CodeBlock>
{`<!DOCTYPE html>
<html>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>`}
          </CodeBlock>
          <Paragraph>
            The DOM tree looks like this:
          </Paragraph>
          <CodeBlock>
{`document
 └── html
     └── body
         ├── h1
         │   └── text: "Hello"
         └── p
             └── text: "World"`}
          </CodeBlock>
          <Paragraph>
            Every node has properties like <InlineCode>parentNode</InlineCode>, <InlineCode>childNodes</InlineCode>, <InlineCode>nodeType</InlineCode>, and <InlineCode>nodeName</InlineCode>. You can traverse the tree using these properties.
          </Paragraph>
          <InfoBox variant="green" icon="🗂️">
            Most of the time you'll work with <Strong>element nodes</Strong>. Text nodes and comment nodes exist but are often skipped in everyday DOM manipulation.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "selecting-elements",
      title: "Selecting DOM Elements",
      content: (
        <Space size="lg">
          <Paragraph>
            Before you can change anything, you need to get a reference to the element. JavaScript offers several ways to select elements, each with different strengths.
          </Paragraph>
          <List>
            <ListItem><InlineCode>getElementById(id)</InlineCode> – fastest, returns a single element.</ListItem>
            <ListItem><InlineCode>querySelector(selector)</InlineCode> – flexible, returns first match using any CSS selector.</ListItem>
            <ListItem><InlineCode>querySelectorAll(selector)</InlineCode> – returns a static NodeList of all matching elements.</ListItem>
            <ListItem><InlineCode>getElementsByClassName(class)</InlineCode> – returns a live HTMLCollection.</ListItem>
            <ListItem><InlineCode>getElementsByTagName(tag)</InlineCode> – returns a live HTMLCollection.</ListItem>
          </List>
          <Paragraph>
            The difference between a <Strong>live</Strong> and a <Strong>static</Strong> collection matters: live collections automatically update when the DOM changes; static collections do not.
          </Paragraph>
          <CodeBlock>
{`// Select by ID
const header = document.getElementById("main-header");

// Select with CSS selector (first match)
const firstButton = document.querySelector(".btn-primary");

// Select all matching
const allItems = document.querySelectorAll(".list-item");

// Live collection (updates when DOM changes)
const liveDivs = document.getElementsByTagName("div");`}
          </CodeBlock>
          <Paragraph>
            <InlineCode>querySelectorAll</InlineCode> returns a NodeList that is not live. You can iterate over it with <InlineCode>forEach</InlineCode>, but array methods like <InlineCode>map</InlineCode> require conversion: <InlineCode>Array.from(nodeList)</InlineCode> or <InlineCode>[...nodeList]</InlineCode>.
          </Paragraph>
        </Space>
      ),
    },
    {
      id: "manipulating-content",
      title: "Reading and Changing Content",
      content: (
        <Space size="lg">
            <ContentSection>
          <Paragraph>
            Once you have an element, you can read or change what's inside it. The two most common properties are <InlineCode>textContent</InlineCode> and <InlineCode>innerHTML</InlineCode>.
          </Paragraph>
          <Paragraph>
            <InlineCode>textContent</InlineCode> gives you the raw text inside an element, ignoring HTML tags. It is safe and fast. Use it whenever you only need text.
          </Paragraph>
          <Paragraph>
            <InlineCode>innerHTML</InlineCode> gives you the HTML markup inside an element. It is powerful because you can insert HTML strings, but it is also dangerous: if you insert untrusted user input, you create an XSS (cross‑site scripting) vulnerability.
          </Paragraph>
          <CodeBlock>
{`const para = document.querySelector("p");

// Safe – only text
console.log(para.textContent);
para.textContent = "New text here";

// Powerful but risky
console.log(div.innerHTML);
div.innerHTML = "<strong>Bold text</strong>";

// NEVER do this with user input:
// div.innerHTML = userProvidedString;`}
          </CodeBlock>
          <Paragraph>
            For inserting plain text from users, always use <InlineCode>textContent</InlineCode> or create a text node with <InlineCode>document.createTextNode()</InlineCode>.
          </Paragraph>
          <InfoBox variant="red" icon="⚠️">
            Using <InlineCode>innerHTML</InlineCode> with user input is the number one cause of XSS attacks. Always sanitize or use <InlineCode>textContent</InlineCode>.
          </InfoBox>
        </ContentSection>
        </Space>
      ),
    },
    {
      id: "attributes-and-classes",
      title: "Working with Attributes and Classes",
      content: (
        <Space size="lg">
          <Paragraph>
            HTML elements have attributes like <InlineCode>id</InlineCode>, <InlineCode>class</InlineCode>, <InlineCode>src</InlineCode>, <InlineCode>href</InlineCode>, and custom <InlineCode>data-*</InlineCode> attributes. You can read, set, or remove them.
          </Paragraph>
          <Paragraph>
            For most standard attributes, you can use direct property access: <InlineCode>element.id = "newId"</InlineCode>. For non‑standard or dynamic attribute names, use <InlineCode>getAttribute</InlineCode> and <InlineCode>setAttribute</InlineCode>.
          </Paragraph>
          <CodeBlock>
{`const link = document.querySelector("a");

// Direct property
link.href = "https://example.com";

// Generic methods
link.setAttribute("target", "_blank");
const value = link.getAttribute("data-info");

// Removing
link.removeAttribute("title");`}
          </CodeBlock>
          <Paragraph>
            CSS classes deserve special attention. The <InlineCode>classList</InlineCode> object provides convenient methods to add, remove, toggle, and check classes without messing with strings.
          </Paragraph>
          <CodeBlock>
{`const div = document.querySelector("div");

div.classList.add("active");
div.classList.remove("hidden");
div.classList.toggle("expanded");
div.classList.contains("active"); // true`}
          </CodeBlock>
          <Paragraph>
            For custom data attributes (like <InlineCode>data-user-id</InlineCode>), use the <InlineCode>dataset</InlineCode> property. It automatically converts kebab‑case to camelCase.
          </Paragraph>
          <CodeBlock>
{`// HTML: <div data-user-id="123" data-role="admin"></div>
console.log(div.dataset.userId); // "123"
div.dataset.status = "active";   // adds data-status="active"`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "styles",
      title: "Manipulating Styles",
      content: (
        <Space size="lg">
          <Paragraph>
            You can change the appearance of an element by modifying its inline styles or by toggling CSS classes. Inline styles are set via the <InlineCode>style</InlineCode> property.
          </Paragraph>
          <CodeBlock>
{`const box = document.querySelector(".box");

// Inline styles (camelCase property names)
box.style.backgroundColor = "red";
box.style.fontSize = "16px";`}
          </CodeBlock>
          <Paragraph>
            However, mixing styles and logic often leads to messy code. A better practice is to define CSS classes and then add or remove them. This keeps presentation separate from behavior.
          </Paragraph>
          <CodeBlock>
{`/* CSS */
.box.highlight {
  background: yellow;
  border: 2px solid orange;
}

// JavaScript
box.classList.add("highlight");`}
          </CodeBlock>
          <Paragraph>
            To read the actual computed style of an element (after all CSS rules are applied), use <InlineCode>getComputedStyle</InlineCode>.
          </Paragraph>
          <CodeBlock>
{`const styles = getComputedStyle(box);
console.log(styles.marginTop);`}
          </CodeBlock>
          <InfoBox variant="blue" icon="🎨">
            Prefer toggling classes over setting inline styles. It keeps your CSS maintainable and your JavaScript clean.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "creating-and-removing",
      title: "Creating, Inserting, and Removing Elements",
      content: (
        <Space size="lg">
          <Paragraph>
            The DOM is dynamic – you can create new elements, insert them anywhere, and remove existing ones.
          </Paragraph>
          <Paragraph>
            Use <InlineCode>document.createElement(tagName)</InlineCode> to create a new element. Then configure its properties, and finally insert it into the document.
          </Paragraph>
          <CodeBlock>
{`// Create
const newDiv = document.createElement("div");
newDiv.textContent = "I am new!";
newDiv.className = "message";

// Insert as last child of body
document.body.appendChild(newDiv);

// Insert before another element
const reference = document.querySelector("#existing");
document.body.insertBefore(newDiv, reference);`}
          </CodeBlock>
          <Paragraph>
            Modern browsers also support <InlineCode>insertAdjacentElement</InlineCode> and <InlineCode>insertAdjacentHTML</InlineCode> for more flexible insertion.
          </Paragraph>
          <CodeBlock>
{`target.insertAdjacentHTML("beforeend", "<span>Hello</span>");
// Positions: "beforebegin", "afterbegin", "beforeend", "afterend"`}
          </CodeBlock>
          <Paragraph>
            To remove an element, call <InlineCode>remove()</InlineCode> directly on the element. The old way (<InlineCode>parentNode.removeChild(child)</InlineCode>) still works but is more verbose.
          </Paragraph>
          <CodeBlock>
{`element.remove();  // modern, clean`}
          </CodeBlock>
          <Paragraph>
            If you need to copy an existing element, use <InlineCode>cloneNode(true)</InlineCode> for a deep copy (including all children) or <InlineCode>cloneNode(false)</InlineCode> for a shallow copy.
          </Paragraph>
        </Space>
      ),
    },
    {
      id: "traversing",
      title: "Traversing the DOM",
      content: (
        <Space size="lg">
          <Paragraph>
            Once you have a reference to an element, you can move to its parent, children, or siblings using traversal properties.
          </Paragraph>
          <List>
            <ListItem><InlineCode>parentNode</InlineCode> or <InlineCode>parentElement</InlineCode> – moves up.</ListItem>
            <ListItem><InlineCode>children</InlineCode> – returns live HTMLCollection of child elements (no text nodes).</ListItem>
            <ListItem><InlineCode>childNodes</InlineCode> – returns all child nodes (including text and comments).</ListItem>
            <ListItem><InlineCode>firstElementChild</InlineCode> / <InlineCode>lastElementChild</InlineCode> – first/last child element.</ListItem>
            <ListItem><InlineCode>nextElementSibling</InlineCode> / <InlineCode>previousElementSibling</InlineCode> – adjacent element siblings.</ListItem>
          </List>
          <CodeBlock>
{`const item = document.querySelector("li");
const parent = item.parentNode;
const nextItem = item.nextElementSibling;
const container = document.querySelector("#list");
const firstChild = container.firstElementChild;`}
          </CodeBlock>
          <Paragraph>
            The <InlineCode>closest(selector)</InlineCode> method is very useful: it starts at the current element and walks up the ancestor chain until it finds an element that matches the given CSS selector. It returns the first match or <InlineCode>null</InlineCode>.
          </Paragraph>
          <CodeBlock>
{`const card = button.closest(".card");
if (card) { ... }`}
          </CodeBlock>
          <InfoBox variant="green" icon="🔍">
            Prefer properties ending with "Element" (like <InlineCode>children</InlineCode>, <InlineCode>nextElementSibling</InlineCode>) to skip text nodes and comments.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "events-basics",
      title: "Handling Events",
      content: (
        <Space size="lg">
          <Paragraph>
            Events are the way the browser tells you that something happened: a click, a keypress, a form submission, etc. You can listen for events and run code in response.
          </Paragraph>
          <Paragraph>
            The modern and recommended way is <InlineCode>addEventListener</InlineCode>. It allows multiple listeners on the same element and gives you full control.
          </Paragraph>
          <CodeBlock>
{`const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  console.log("Button clicked!");
  console.log(event.target); // the actual clicked element
});`}
          </CodeBlock>
          <Paragraph>
            The event object passed to the callback contains useful information: <InlineCode>target</InlineCode> (the element that triggered the event), <InlineCode>type</InlineCode> (the event name), and methods like <InlineCode>preventDefault()</InlineCode> and <InlineCode>stopPropagation()</InlineCode>.
          </Paragraph>
          <CodeBlock>
{`link.addEventListener("click", (e) => {
  e.preventDefault(); // stops navigation
  console.log("Link clicked but no page change");
});`}
          </CodeBlock>
          <Paragraph>
            Common event types include:
          </Paragraph>
          <List>
            <ListItem><Strong>Mouse</Strong> – <InlineCode>click</InlineCode>, <InlineCode>dblclick</InlineCode>, <InlineCode>mouseenter</InlineCode>, <InlineCode>mouseleave</InlineCode></ListItem>
            <ListItem><Strong>Keyboard</Strong> – <InlineCode>keydown</InlineCode>, <InlineCode>keyup</InlineCode></ListItem>
            <ListItem><Strong>Form</Strong> – <InlineCode>submit</InlineCode>, <InlineCode>change</InlineCode>, <InlineCode>input</InlineCode>, <InlineCode>focus</InlineCode>, <InlineCode>blur</InlineCode></ListItem>
            <ListItem><Strong>Window</Strong> – <InlineCode>load</InlineCode>, <InlineCode>resize</InlineCode>, <InlineCode>scroll</InlineCode></ListItem>
          </List>
          <Paragraph>
            To remove an event listener, you need a reference to the same function that was added. Anonymous functions cannot be removed.
          </Paragraph>
          <CodeBlock>
{`function handleClick() { ... }
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);`}
          </CodeBlock>
          <InfoBox variant="purple" icon="🖱️">
            Always use <InlineCode>addEventListener</InlineCode>. Avoid inline <InlineCode>onclick</InlineCode> attributes – they mix HTML and JavaScript and don't support multiple listeners.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "event-delegation",
      title: "Event Delegation",
      content: (
        <Space size="lg">
          <Paragraph>
            Event delegation is a technique that uses the fact that most events <Strong>bubble up</Strong> from the target element to its ancestors. Instead of attaching a listener to many individual elements, you attach a single listener to a parent element and then check what was actually clicked.
          </Paragraph>
          <Paragraph>
            This is especially useful when:
          </Paragraph>
          <List>
            <ListItem>You have many similar elements (e.g., a long list of items).</ListItem>
            <ListItem>Elements are added dynamically after the page loads.</ListItem>
          </List>
          <CodeBlock>
{`// Instead of this (inefficient for 1000 items)
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", handleItem);
});

// Do this (single listener on parent)
const list = document.querySelector("#item-list");
list.addEventListener("click", (event) => {
  const item = event.target.closest(".item");
  if (item) {
    console.log("Item clicked:", item.textContent);
  }
});`}
          </CodeBlock>
          <Paragraph>
            The <InlineCode>closest</InlineCode> method is very handy here: it finds the nearest ancestor (or the element itself) that matches the selector. This works even if the click happens on a child element (like a span inside the item).
          </Paragraph>
          <InfoBox variant="blue" icon="♻️">
            Event delegation reduces memory usage and automatically handles future elements. It's a best practice for any dynamic list or menu.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "domcontentloaded",
      title: "Running Code After DOM is Ready",
      content: (
        <Space size="lg">
          <Paragraph>
            If your JavaScript code is placed in the <InlineCode>{'<head>'}</InlineCode> or early in the page, the DOM may not have finished loading when the script runs. Trying to select an element that hasn't been parsed yet will return <InlineCode>null</InlineCode>.
          </Paragraph>
          <Paragraph>
            The simplest fix is to put your <InlineCode>{'<script>'}</InlineCode> tag just before the closing <InlineCode>{'</body>'}</InlineCode>. But if you need to run code earlier, listen for the <InlineCode>DOMContentLoaded</InlineCode> event.
          </Paragraph>
          <CodeBlock>
{`document.addEventListener("DOMContentLoaded", () => {
  // DOM is fully built, safe to query elements
  const header = document.querySelector("#header");
});`}
          </CodeBlock>
          <Paragraph>
            There is also the <InlineCode>load</InlineCode> event, which fires after all resources (images, stylesheets, etc.) have loaded. Use <InlineCode>load</InlineCode> only when you need to wait for external resources.
          </Paragraph>
          <InfoBox variant="green" icon="⏱️">
            For most DOM manipulation, <InlineCode>DOMContentLoaded</InlineCode> is sufficient and faster than <InlineCode>load</InlineCode>.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "common-pitfalls",
      title: "Common Pitfalls to Avoid",
      content: (
        <Space size="lg">
          <Paragraph>
            Even experienced developers make these mistakes. Being aware of them saves hours of debugging.
          </Paragraph>
          <List>
            <ListItem><Strong>Accessing elements too early</Strong> – always ensure the DOM is ready.</ListItem>
            <ListItem><Strong>Using <InlineCode>innerHTML</InlineCode> with user data</Strong> – opens XSS vulnerabilities.</ListItem>
            <ListItem><Strong>Forgetting that NodeLists are not arrays</Strong> – use <InlineCode>Array.from()</InlineCode> or spread.</ListItem>
            <ListItem><Strong>Confusing live vs static collections</Strong> – live collections update automatically, which can cause unexpected behavior.</ListItem>
            <ListItem><Strong>Modifying the DOM inside a loop reading dimensions</Strong> – causes multiple reflows, hurting performance. Batch reads and writes separately.</ListItem>
          </List>
          <CodeBlock>
{`// Bad: causes reflow each iteration
for (let i = 0; i < items.length; i++) {
  items[i].style.width = items[i].offsetWidth + 10 + "px";
}

// Better: read first, then write
const widths = [];
for (let i = 0; i < items.length; i++) {
  widths.push(items[i].offsetWidth);
}
for (let i = 0; i < items.length; i++) {
  items[i].style.width = widths[i] + 10 + "px";
}`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "summary",
      title: "Summary",
      content: (
        <List>
          <ListItem>The DOM is a tree representation of the HTML document, accessed via the <InlineCode>document</InlineCode> object.</ListItem>
          <ListItem>Select elements with <InlineCode>querySelector</InlineCode>/<InlineCode>getElementById</InlineCode>.</ListItem>
          <ListItem>Use <InlineCode>textContent</InlineCode> for safe text manipulation, <InlineCode>innerHTML</InlineCode> only with trusted content.</ListItem>
          <ListItem>Manipulate classes with <InlineCode>classList</InlineCode> and custom data with <InlineCode>dataset</InlineCode>.</ListItem>
          <ListItem>Create, insert, and remove elements with <InlineCode>createElement</InlineCode>, <InlineCode>appendChild</InlineCode>, and <InlineCode>remove</InlineCode>.</ListItem>
          <ListItem>Traverse the DOM using parent/child/sibling properties (prefer the "Element" versions).</ListItem>
          <ListItem>Handle events with <InlineCode>addEventListener</InlineCode>; use event delegation for dynamic or many elements.</ListItem>
          <ListItem>Wait for <InlineCode>DOMContentLoaded</InlineCode> before manipulating the DOM if your script runs early.</ListItem>
        </List>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>What is the DOM and how is it different from HTML source?</ListItem>
          <ListItem>Explain the difference between <InlineCode>textContent</InlineCode> and <InlineCode>innerHTML</InlineCode>. When is one preferred over the other?</ListItem>
          <ListItem>What is event delegation and why is it useful?</ListItem>
          <ListItem>How do you select all elements with a certain class, and how is a live NodeList different from a static one?</ListItem>
          <ListItem>What is the <InlineCode>closest()</InlineCode> method used for?</ListItem>
          <ListItem>How do you create a new element and add it to the page?</ListItem>
          <ListItem>What is the difference between <InlineCode>preventDefault()</InlineCode> and <InlineCode>stopPropagation()</InlineCode>?</ListItem>
          <ListItem>What is the purpose of <InlineCode>DOMContentLoaded</InlineCode>? How is it different from the <InlineCode>load</InlineCode> event?</ListItem>
          <ListItem>How do you get the computed style of an element after CSS is applied?</ListItem>
          <ListItem>What is the difference between <InlineCode>children</InlineCode> and <InlineCode>childNodes</InlineCode>?</ListItem>
          <ListItem>How can you safely insert user‑provided text into the DOM without risking XSS?</ListItem>
          <ListItem>Why is it inefficient to read and write styles interleaved in a loop?</ListItem>
        </List>
      ),
    },
  ],
};