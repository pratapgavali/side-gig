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

export const VariablesTopic: TopicData = {
  title: "Variables in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            Variables are containers for storing data values. In JavaScript, variables are dynamically typed, meaning you don't have to declare the type upfront. The language provides three ways to declare variables: <InlineCode>var</InlineCode>, <InlineCode>let</InlineCode>, and <InlineCode>const</InlineCode> — each with different behaviors regarding scope, reassignment, and hoisting.
          </Paragraph>
          <InfoBox variant="blue" icon="📦">
            Think of variables as labeled boxes that hold values. The label (variable name) lets you access the value later.
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "declaration",
      title: "Declaring Variables",
      content: (
        <Space size="lg">
          <Paragraph>
            You can declare variables using three keywords:
          </Paragraph>
          <List>
            <ListItem><Strong>var</Strong> → Old way (pre-ES6). Function-scoped, can be redeclared, hoisted with undefined.</ListItem>
            <ListItem><Strong>let</Strong> → Modern. Block-scoped, cannot be redeclared in same scope, hoisted but not initialized (TDZ).</ListItem>
            <ListItem><Strong>const</Strong> → Modern. Block-scoped, must be initialized at declaration, cannot be reassigned (but object properties can change).</ListItem>
          </List>
          <CodeBlock>
{`// var
var name = "Alice";
var name = "Bob";   // ✅ allowed (redeclaration)
console.log(name);  // "Bob"

// let
let age = 25;
let age = 30;       // ❌ SyntaxError: Identifier 'age' has already been declared
age = 30;           // ✅ allowed (reassignment)

// const
const PI = 3.14159;
PI = 3.14;          // ❌ TypeError: Assignment to constant variable
const TAU;          // ❌ SyntaxError: Missing initializer in const declaration

// const with objects (reference is constant, but properties can change)
const user = { name: "John" };
user.name = "Jane"; // ✅ allowed
user = {};          // ❌ TypeError`}
          </CodeBlock>
          <InfoBox variant="green" icon="✅">
            Best practice: Use <InlineCode>const</InlineCode> by default. Use <InlineCode>let</InlineCode> only when you know the value will change. Avoid <InlineCode>var</InlineCode> in modern code.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "scope",
      title: "Variable Scope",
      content: (
        <Space size="lg">
          <Paragraph>
            Scope determines where a variable is accessible. JavaScript has three types of scope: global, function, and block.
          </Paragraph>
          <CodeBlock>
{`// Global scope (accessible everywhere)
let globalVar = "I'm global";

function example() {
  // Function scope (accessible only inside this function)
  var functionScoped = "Inside function";

  if (true) {
    // Block scope (accessible only inside this block {})
    let blockScoped = "Inside block";
    const alsoBlockScoped = 42;
    var notBlockScoped = "I leak out!";  // var ignores block scope
  }

  console.log(notBlockScoped);  // "I leak out!" (var escapes)
  console.log(blockScoped);      // ❌ ReferenceError (let is block-scoped)
}

console.log(functionScoped);     // ❌ ReferenceError (function scope)`}
          </CodeBlock>
          <InfoBox variant="purple" icon="🎯">
            Block scope includes <InlineCode>{}</InlineCode> in <InlineCode>if</InlineCode>, <InlineCode>for</InlineCode>, <InlineCode>while</InlineCode>, and standalone blocks. <InlineCode>let</InlineCode> and <InlineCode>const</InlineCode> respect block scope; <InlineCode>var</InlineCode> does not.
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
            Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. However, the initialization stays in place.
          </Paragraph>
          <CodeBlock>
{`// How JavaScript actually interprets var hoisting:
console.log(myVar);  // undefined (not ReferenceError)
var myVar = 5;
// Equivalent to:
// var myVar;        // hoisted, initialized as undefined
// console.log(myVar);
// myVar = 5;

// let and const are hoisted but NOT initialized
console.log(myLet);  // ❌ ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;

// Temporal Dead Zone (TDZ): the time between entering scope and actual declaration
{
  // TDZ starts here for myLet
  // console.log(myLet); // ReferenceError
  let myLet = 20;
  // TDZ ends here
  console.log(myLet);   // 20
}

// Function declarations are fully hoisted (can be called before definition)
sayHello();  // "Hello"
function sayHello() {
  console.log("Hello");
}

// Function expressions are not hoisted
sayGoodbye();  // ❌ TypeError: sayGoodbye is not a function
var sayGoodbye = function() {
  console.log("Goodbye");
};`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            The Temporal Dead Zone (TDZ) prevents you from using <InlineCode>let</InlineCode> or <InlineCode>const</InlineCode> variables before declaration, catching many bugs that <InlineCode>var</InlineCode> would silently ignore.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "naming-rules",
      title: "Naming Rules & Conventions",
      content: (
        <Space size="lg">
          <Paragraph>
            Variable names (identifiers) must follow specific rules and common conventions.
          </Paragraph>
          <List>
            <ListItem><Strong>Allowed characters</Strong> → letters (a-z, A-Z), digits (0-9), underscore (_), dollar sign ($). Cannot start with a digit.</ListItem>
            <ListItem><Strong>Case-sensitive</Strong> → <InlineCode>myVar</InlineCode>, <InlineCode>myvar</InlineCode>, and <InlineCode>MyVar</InlineCode> are different.</ListItem>
            <ListItem><Strong>Reserved keywords</Strong> → Cannot use words like <InlineCode>let</InlineCode>, <InlineCode>const</InlineCode>, <InlineCode>if</InlineCode>, <InlineCode>return</InlineCode>, etc.</ListItem>
            <ListItem><Strong>Unicode allowed</Strong> → You can use emojis or non-English letters (but rarely recommended).</ListItem>
          </List>
          <CodeBlock>
{`// Valid names
let camelCase = "good";
let _private = "underscore prefix often means private";
let $jquery = "dollar sign used by jQuery";
let äöü = "umlauts work";
let 你好 = "Chinese characters work";

// Invalid names
let 123abc = "no";      // starts with digit
let my-var = "no";      // hyphen not allowed
let let = "no";         // reserved keyword

// Conventions (not enforced by JS, but followed by developers)
// camelCase for variables and functions
let userAge = 30;

// PascalCase for classes/constructors
class UserAccount { }

// UPPER_SNAKE_CASE for constants (truly immutable)
const MAX_RETRY_COUNT = 5;

// Prefix underscore for "private" (convention only)
let _internalState = {};`}
          </CodeBlock>
          <InfoBox variant="blue" icon="📝">
            Use meaningful, descriptive names. <InlineCode>let d = new Date()</InlineCode> is bad; <InlineCode>let currentDate = new Date()</InlineCode> is good.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "reassignment",
      title: "Reassignment vs Mutation",
      content: (
        <Space size="lg">
          <Paragraph>
            Understanding the difference between reassigning a variable and mutating its value is critical, especially with <InlineCode>const</InlineCode>.
          </Paragraph>
          <CodeBlock>
{`// Reassignment: changing what the variable points to
let a = 5;
a = 10;            // reassignment

const b = 5;
b = 10;            // ❌ error: cannot reassign const

// Mutation: changing internal properties of an object/array
const obj = { count: 1 };
obj.count = 2;     // ✅ mutation, not reassignment
obj = {};          // ❌ reassignment, not allowed

const arr = [1, 2, 3];
arr.push(4);       // ✅ mutation
arr[0] = 99;       // ✅ mutation
arr = [5, 6, 7];   // ❌ reassignment

// Primitives are immutable by nature
let str = "hello";
str[0] = "H";      // doesn't change (but no error in non-strict)
console.log(str);  // "hello"
str = "Hello";     // reassignment (allowed with let)`}
          </CodeBlock>
          <InfoBox variant="purple" icon="🔄">
            <InlineCode>const</InlineCode> prevents reassignment, not mutation. Use <InlineCode>Object.freeze()</InlineCode> to make objects truly immutable.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "default-values",
      title: "Default Values & Undefined",
      content: (
        <Space size="lg">
          <Paragraph>
            Variables that are declared but not assigned have the value <InlineCode>undefined</InlineCode>. You can also assign default values using logical operators or the nullish coalescing operator.
          </Paragraph>
          <CodeBlock>
{`// Declared but not assigned
let x;
console.log(x);  // undefined

// Multiple declarations (allowed with let, but each must be separate statement)
let a, b, c;
a = 1, b = 2, c = 3;

// Default values (old way with ||)
function greet(name) {
  name = name || "Guest";   // if name is falsy (null, undefined, "", 0), use "Guest"
  console.log("Hello " + name);
}
greet("");        // "Hello Guest" (maybe not desired)

// Better: nullish coalescing (??) — only defaults for null/undefined
function greetBetter(name) {
  name = name ?? "Guest";   // only if null or undefined
  console.log("Hello " + name);
}
greetBetter("");  // "Hello " (empty string kept)
greetBetter(null); // "Hello Guest"

// Default parameters in functions (modern)
function multiply(a, b = 1) {
  return a * b;
}
multiply(5);      // 5 (b defaults to 1)`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "var-pitfalls",
      title: "Why var is Problematic (Avoid It)",
      content: (
        <Space size="lg">
          <Paragraph>
            Before ES6 (2015), <InlineCode>var</InlineCode> was the only option. It has several quirks that lead to bugs.
          </Paragraph>
          <CodeBlock>
{`// 1. No block scope (var leaks out)
if (true) {
  var leak = "I escape";
}
console.log(leak);  // "I escape" (should not be accessible)

// 2. Redeclaration allowed (accidental overwrite)
var count = 10;
var count = 20;   // No error, silently overwrites

// 3. Hoisting with undefined (access before declaration yields undefined, not error)
console.log(price);  // undefined
var price = 100;

// 4. Variable leaks in loops (only one binding)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // 3,3,3 (not 0,1,2)
}
// With let: 0,1,2 because let creates a new binding per iteration

// 5. Can be used before declaration in TDZ sense? No TDZ for var
function test() {
  console.log(myVar);  // undefined (not error)
  var myVar = 5;
}

// 6. Global var creates property on window (pollutes global object)
var globalThing = "hi";
console.log(window.globalThing);  // "hi" (let/const do not)`}
          </CodeBlock>
          <InfoBox variant="red" icon="🚫">
            Never use <InlineCode>var</InlineCode> in new code. Use <InlineCode>let</InlineCode> and <InlineCode>const</InlineCode> exclusively.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "global-variables",
      title: "Global Variables and window Object",
      content: (
        <Space size="lg">
          <Paragraph>
            In browsers, global variables declared with <InlineCode>var</InlineCode> become properties of the <InlineCode>window</InlineCode> object. Variables declared with <InlineCode>let</InlineCode> or <InlineCode>const</InlineCode> do not.
          </Paragraph>
          <CodeBlock>
{`// var creates window property
var globalVar = "hello";
console.log(window.globalVar);  // "hello"

// let/const do NOT
let globalLet = "world";
console.log(window.globalLet);  // undefined

// Implicit globals (forgetting var/let/const — bad!)
function dangerous() {
  mistake = "I become global";   // no keyword, becomes window.mistake
}
dangerous();
console.log(window.mistake);     // "I become global" (hard to debug)

// Avoid global pollution: use modules, IIFE, or block scope
// Good: wrap in block with let/const
{
  let local = "only here";
}

// Better: use ES modules (each file has its own scope)
// export/import prevents global leakage`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="🌍">
            Minimize global variables. They can cause naming collisions and make code hard to test. Use modules or function scopes to encapsulate.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "summary",
      title: "Summary",
      content: (
        <List>
          <ListItem>Three ways to declare: <InlineCode>var</InlineCode> (avoid), <InlineCode>let</InlineCode> (mutable), <InlineCode>const</InlineCode> (immutable binding)</ListItem>
          <ListItem><InlineCode>let</InlineCode> and <InlineCode>const</InlineCode> are block-scoped; <InlineCode>var</InlineCode> is function-scoped</ListItem>
          <ListItem>Hoisting: declarations are moved to top; <InlineCode>var</InlineCode> is initialized as <InlineCode>undefined</InlineCode>; <InlineCode>let/const</InlineCode> are in TDZ until declaration</ListItem>
          <ListItem>Use <InlineCode>const</InlineCode> by default, <InlineCode>let</InlineCode> when reassignment is needed</ListItem>
          <ListItem>Naming: camelCase for variables, descriptive, no reserved keywords</ListItem>
          <ListItem><InlineCode>const</InlineCode> prevents reassignment but not mutation of objects/arrays</ListItem>
          <ListItem>Avoid implicit globals (always use <InlineCode>let</InlineCode>, <InlineCode>const</InlineCode>, or <InlineCode>var</InlineCode>)</ListItem>
        </List>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>What is the difference between <InlineCode>var</InlineCode>, <InlineCode>let</InlineCode>, and <InlineCode>const</InlineCode>?</ListItem>
          <ListItem>Explain variable hoisting in JavaScript. How does it differ between <InlineCode>var</InlineCode> and <InlineCode>let/const</InlineCode>?</ListItem>
          <ListItem>What is the Temporal Dead Zone (TDZ)?</ListItem>
          <ListItem>Why is it recommended to avoid <InlineCode>var</InlineCode>?</ListItem>
          <ListItem>What happens if you declare a variable without any keyword (e.g., <InlineCode>x = 5</InlineCode>) in non-strict mode?</ListItem>
          <ListItem>Can you change the value of a <InlineCode>const</InlineCode> variable? What about its properties if it's an object?</ListItem>
          <ListItem>What is the difference between block scope and function scope?</ListItem>
          <ListItem>How do you create a global variable with <InlineCode>let</InlineCode>? (Trick: in browsers, attach to <InlineCode>window</InlineCode> explicitly)</ListItem>
          <ListItem>What will <InlineCode>console.log(a); var a = 2;</InlineCode> output? What about with <InlineCode>let</InlineCode>?</ListItem>
          <ListItem>Why does <InlineCode>for (var i = 0; i &lt; 3; i++) { 'setTimeout(() => console.log(i));' }</InlineCode> print 3 three times? How to fix?</ListItem>
        </List>
      ),
    },
  ],
};