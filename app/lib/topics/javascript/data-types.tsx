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

export const DataTypesTopic: TopicData = {
  title: "Data Types in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            Data types define the kind of data a variable can hold and the operations that can be performed on it. JavaScript is a dynamically typed language – variables can hold any type, and the type can change at runtime. The language has two main categories of data types: <Strong>primitive</Strong> (immutable, stored by value) and <Strong>non-primitive</Strong> (mutable, stored by reference).
          </Paragraph>
          <InfoBox variant="blue" icon="🏷️">
            Use <InlineCode>typeof</InlineCode> operator to check the type of a value. However, be aware of its quirks (e.g., <InlineCode>typeof null === "object"</InlineCode>).
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "primitive-overview",
      title: "Primitive Data Types",
      content: (
        <Space size="lg">
          <Paragraph>
            There are 7 primitive types in JavaScript. They are immutable (cannot be changed) and compared by value.
          </Paragraph>
          <List>
            <ListItem><InlineCode>string</InlineCode> → textual data</ListItem>
            <ListItem><InlineCode>number</InlineCode> → integers and floats (64-bit IEEE 754)</ListItem>
            <ListItem><InlineCode>boolean</InlineCode> → <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode></ListItem>
            <ListItem><InlineCode>undefined</InlineCode> → declared but not assigned</ListItem>
            <ListItem><InlineCode>null</InlineCode> → intentional absence of value</ListItem>
            <ListItem><InlineCode>symbol</InlineCode> → unique identifier (ES6)</ListItem>
            <ListItem><InlineCode>bigint</InlineCode> → arbitrary-precision integers (ES2020)</ListItem>
          </List>
          <CodeBlock>
{`// String
let name = "Alice";
let greeting = 'Hello';
let template = \`Hi, \${name}\`;  // template literal

// Number
let integer = 42;
let float = 3.14;
let negative = -10;
let special = Infinity;  // also -Infinity, NaN

// Boolean
let isActive = true;
let isComplete = false;

// Undefined
let notAssigned;
console.log(notAssigned);  // undefined

// Null
let empty = null;

// Symbol (each symbol is unique)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);  // false

// BigInt (add 'n' suffix)
let big = 9007199254740991n;
let alsoBig = BigInt(Number.MAX_SAFE_INTEGER);`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "string",
      title: "String Type in Depth",
      content: (
        <Space size="lg">
          <Paragraph>
            Strings represent text and are immutable. Once created, you cannot change individual characters, but you can create new strings based on the old one.
          </Paragraph>
          <CodeBlock>
{`// Creation
let single = 'Single quotes';
let double = "Double quotes";
let backtick = \`Template literals allow \${single} interpolation\`;

// Immutability example
let str = "hello";
str[0] = "H";       // Does nothing (no error in non-strict)
console.log(str);   // "hello"
str = "Hello";      // Creates new string, reassigns

// String length
console.log("abc".length);  // 3

// Common methods (return new strings)
let text = "  JavaScript  ";
console.log(text.trim());      // "JavaScript"
console.log(text.toUpperCase());// "  JAVASCRIPT  "
console.log(text.includes("Java"));  // true
console.log(text.slice(2, 12));      // "JavaScript"

// Escape sequences
let escaped = "Line 1\\nLine 2";   // newline
let quote = "She said \\"Hi\\"";    // escaping quotes
let path = "C:\\\\Users\\\\name";   // backslash

// Template literals (multi-line, interpolation)
let multi = \`
  This spans
  multiple lines
\`;
let a = 5, b = 10;
console.log(\`Sum is \${a + b}\`);  // "Sum is 15"`}
          </CodeBlock>
          <InfoBox variant="purple" icon="📝">
            Strings are compared lexicographically (dictionary order) using <InlineCode>&lt;</InlineCode>, <InlineCode>&gt;</InlineCode>, etc. For case-insensitive comparison, convert both to same case.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "number",
      title: "Number Type in Depth",
      content: (
        <Space size="lg">
          <Paragraph>
            JavaScript uses 64-bit floating-point numbers (IEEE 754) for all numeric values. There is no separate integer type. This leads to precision issues with decimals.
          </Paragraph>
          <CodeBlock>
{`// All numbers are floats
console.log(5 === 5.0);  // true

// Special numeric values
console.log(1 / 0);       // Infinity
console.log(-1 / 0);      // -Infinity
console.log("not a number" * 2);  // NaN (Not a Number)

// NaN behavior
console.log(NaN === NaN);  // false (use isNaN() or Number.isNaN())
console.log(isNaN(NaN));   // true
console.log(Number.isNaN(NaN));  // true (more reliable)

// Integer precision
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
console.log(2 ** 53);  // 9007199254740992 (exact up to this)
console.log(2 ** 53 + 1);  // also 9007199254740992 (lost precision)

// Decimal precision issues
console.log(0.1 + 0.2);       // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(1));  // "0.3"
console.log(0.1 + 0.2 === 0.3);       // false (use tolerance)

// Number methods
let num = 123.456;
console.log(num.toFixed(2));   // "123.46"
console.log(num.toPrecision(4)); // "123.5"
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14em")); // 3.14

// Number conversion
console.log(Number("42"));     // 42
console.log(+"42");            // 42 (unary plus)
console.log(Number("abc"));    // NaN`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            Never compare floating-point numbers directly for equality. Use a small epsilon: <InlineCode>Math.abs(a - b) &lt; 1e-10</InlineCode>.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "boolean",
      title: "Boolean & Truthy/Falsy",
      content: (
        <Space size="lg">
          <Paragraph>
            Booleans have two values: <InlineCode>true</InlineCode> and <InlineCode>false</InlineCode>. However, when used in conditions, all values are coerced to either truthy or falsy.
          </Paragraph>
          <CodeBlock>
{`// Explicit boolean
let isLoggedIn = true;

// Falsy values (only 8 of them)
// false, 0, -0, 0n, "", null, undefined, NaN
if (false) {}      // not executed
if (0) {}          // not executed
if ("") {}         // not executed
if (null) {}       // not executed
if (undefined) {}  // not executed
if (NaN) {}        // not executed
if (0n) {}         // not executed

// Everything else is truthy
if (true) {}       // executed
if (1) {}          // executed
if ("hello") {}    // executed
if ([]) {}         // executed (empty array is truthy!)
if ({}) {}         // executed (empty object is truthy!)
if (function(){}) {} // executed

// Converting to boolean
console.log(Boolean("hello"));  // true
console.log(!!"hello");         // true (double NOT)
console.log(Boolean(""));       // false

// Common pitfalls
const count = 0;
if (count) {  // false, won't run even though count is a valid number
  console.log("Has count");
}
// Better: if (count !== undefined && count !== null)`}
          </CodeBlock>
          <InfoBox variant="green" icon="💡">
            Remember: empty arrays <InlineCode>[]</InlineCode> and empty objects <InlineCode>{}</InlineCode> are <Strong>truthy</Strong>. This surprises many beginners.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "null-undefined",
      title: "null vs undefined",
      content: (
        <Space size="lg">
          <Paragraph>
            <InlineCode>undefined</InlineCode> means a variable has been declared but not assigned a value. <InlineCode>null</InlineCode> is an intentional assignment indicating "no value". They are different but loosely equal.
          </Paragraph>
          <CodeBlock>
{`// undefined scenarios
let declared;           // undefined
const obj = {};
console.log(obj.missing); // undefined
function noReturn() {}
console.log(noReturn());  // undefined

// null is assigned deliberately
let empty = null;       // developer says: this has no value

// Comparison
console.log(null == undefined);   // true (loose equality)
console.log(null === undefined);  // false (strict equality)
console.log(typeof null);         // "object" (historical bug)
console.log(typeof undefined);    // "undefined"

// Checking for null/undefined
function process(value) {
  if (value == null) {  // catches both null and undefined
    console.log("value is nullish");
  }
}
process(null);      // "value is nullish"
process(undefined); // "value is nullish"
process(0);         // not printed

// Default values (nullish coalescing)
let input = null;
let result = input ?? "default";  // "default" (only for null/undefined)
console.log(result);`}
          </CodeBlock>
          <InfoBox variant="purple" icon="❓">
            Use <InlineCode>value == null</InlineCode> to check for both <InlineCode>null</InlineCode> and <InlineCode>undefined</InlineCode>. Use <InlineCode>value === undefined</InlineCode> for strict undefined check.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "symbol-bigint",
      title: "Symbol & BigInt (Modern Primitives)",
      content: (
        <Space size="lg">
          <Paragraph>
            <InlineCode>Symbol</InlineCode> (ES6) creates unique identifiers, useful for object property keys that won't collide. <InlineCode>BigInt</InlineCode> (ES2020) handles arbitrarily large integers beyond <InlineCode>Number.MAX_SAFE_INTEGER</InlineCode>.
          </Paragraph>
          <CodeBlock>
{`// Symbol
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2);  // false (always unique)

// As object property keys
const id = Symbol("id");
const user = {
  name: "Alice",
  [id]: 12345
};
console.log(user[id]);      // 12345
console.log(Object.keys(user));  // ["name"] (symbols are not enumerable)

// Global symbol registry (reuse symbols)
const globalSym = Symbol.for("app.theme");
const sameSym = Symbol.for("app.theme");
console.log(globalSym === sameSym);  // true

// BigInt
const big = 123456789012345678901234567890n;
const alsoBig = BigInt("9007199254740991");
console.log(big + 1n);      // 123456789012345678901234567891n
console.log(typeof big);    // "bigint"

// BigInt limitations
// Cannot mix with Number in arithmetic (must convert)
// console.log(big + 1);    // TypeError
console.log(big + BigInt(1)); // OK
// Math functions don't work with BigInt (use manual operations)
// Math.max(1n, 2n)  // TypeError`}
          </CodeBlock>
          <InfoBox variant="blue" icon="🔢">
            Use BigInt when dealing with large integers (e.g., timestamps in nanoseconds, database IDs). But remember, BigInts are slower than Numbers.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "non-primitive",
      title: "Non-Primitive (Reference) Types",
      content: (
        <Space size="lg">
          <Paragraph>
            Non-primitive types are <Strong>objects</Strong> – they are mutable, stored by reference, and compared by reference (not by value). This includes plain objects, arrays, functions, dates, regular expressions, and more.
          </Paragraph>
          <CodeBlock>
{`// Object literal
const person = {
  name: "John",
  age: 30,
  greet() { console.log("Hi"); }
};

// Array (special type of object)
const colors = ["red", "green", "blue"];
console.log(typeof colors);  // "object"

// Function (also an object)
function sayHi() {}
console.log(typeof sayHi);   // "function" (special sub-type)

// Date
const now = new Date();

// RegExp
const pattern = /[a-z]+/;

// Reference behavior
let obj1 = { value: 10 };
let obj2 = obj1;        // obj2 references same object
obj2.value = 20;
console.log(obj1.value); // 20 (changed through reference)

// Comparison by reference
console.log({} === {});   // false (different objects)
console.log([] === []);   // false
console.log(obj1 === obj2); // true (same reference)`}
          </CodeBlock>
          <InfoBox variant="green" icon="🔗">
            To copy an object (shallow), use spread: <InlineCode>const copy = { '...original' }</InlineCode> or <InlineCode>Object.assign({}, original)</InlineCode>. For deep cloning, use <InlineCode>structuredClone()</InlineCode> or libraries like Lodash.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "typeof",
      title: "typeof Operator – Quirks and Use",
      content: (
        <Space size="lg">
          <Paragraph>
            The <InlineCode>typeof</InlineCode> operator returns a string indicating the type of the operand. However, it has well-known quirks.
          </Paragraph>
          <CodeBlock>
{`// Basic usage
typeof "hello";     // "string"
typeof 42;          // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof Symbol();    // "symbol"
typeof 123n;        // "bigint"
typeof {};          // "object"
typeof [];          // "object" (arrays are objects)
typeof null;        // "object"  ❗ historical bug
typeof function(){}; // "function"

// Checking for array
const arr = [1,2,3];
console.log(Array.isArray(arr));  // true (use this)

// Checking for null
const val = null;
if (val === null) { }  // direct comparison

// typeof on undeclared variables
typeof notDeclared;    // "undefined" (no error)
// notDeclared;        // ReferenceError

// typeof with parentheses
typeof (5 + 3);   // "number"
typeof 5 + 3;     // "number3" (operator precedence: typeof 5 is "number", then + "3")`}
          </CodeBlock>
          <InfoBox variant="red" icon="🐛">
            The <InlineCode>typeof null === "object"</InlineCode> is a bug from the first version of JavaScript that cannot be fixed without breaking existing code.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "type-coercion",
      title: "Type Coercion (Implicit Conversion)",
      content: (
        <Space size="lg">
          <Paragraph>
            JavaScript automatically converts types in certain operations. This is called coercion. Understanding it is crucial to avoid subtle bugs.
          </Paragraph>
          <CodeBlock>
{`// String coercion (with + operator)
console.log("5" + 2);     // "52" (number coerced to string)
console.log("5" + true);  // "5true"
console.log(2 + "5");     // "25"

// Numeric coercion (with -, *, /, %)
console.log("10" - 2);    // 8 (string to number)
console.log("10" - "2");  // 8
console.log("5" * "2");   // 10
console.log("hello" - 1); // NaN

// Boolean coercion (in conditionals, &&, ||, !)
if ("hello") { }          // truthy
console.log(!0);          // true
console.log(!!"hello");   // true

// Loose equality (==) coercion
console.log(5 == "5");    // true (string to number)
console.log(true == 1);   // true
console.log(false == 0);  // true
console.log(null == undefined); // true
console.log(null == 0);   // false

// ToNumber conversion rules
Number(undefined); // NaN
Number(null);      // 0
Number(true);      // 1
Number(false);     // 0
Number("");        // 0
Number("  12 ");   // 12

// ToBoolean conversion rules
Boolean(0);        // false
Boolean(NaN);      // false
Boolean("");       // false
Boolean(null);     // false
Boolean(undefined);// false
Boolean("0");      // true (non-empty string)`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            Be careful with <InlineCode>+</InlineCode> operator: it does string concatenation if either operand is a string. Use <InlineCode>Number()</InlineCode> or <InlineCode>parseInt()</InlineCode> for explicit conversion.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "equality",
      title: "== vs === (Loose vs Strict Equality)",
      content: (
        <Space size="lg">
          <Paragraph>
            <InlineCode>==</InlineCode> performs type coercion, while <InlineCode>===</InlineCode> does not. Always prefer <InlineCode>===</InlineCode> to avoid unexpected behavior.
          </Paragraph>
          <CodeBlock>
{`// Strict equality (no coercion)
5 === 5;         // true
5 === "5";       // false
true === 1;      // false
null === undefined; // false

// Loose equality (with coercion)
5 == "5";        // true (string "5" → number 5)
true == 1;       // true (true → 1)
false == 0;      // true
null == undefined; // true
" \t\r\n" == 0;  // true (whitespace string → 0)

// Dangerous loose equality examples
[] == false;     // true ([] → "" → 0, false → 0)
[] == ![];       // true ([] is truthy, ![] is false)
{} == {};        // false (different objects, no coercion)
NaN == NaN;      // false (NaN is not equal to itself)

// Object equality with == and ===
const obj = {};
const sameObj = obj;
obj == sameObj;   // true (same reference)
obj === sameObj;  // true

// Recommended: always use ===
if (value === undefined) { }
if (count === 0) { }
if (name === "John") { }`}
          </CodeBlock>
          <InfoBox variant="green" icon="✅">
            Rule of thumb: <Strong>always use <InlineCode>===</InlineCode> and <InlineCode>!==</InlineCode></Strong>. Only use <InlineCode>==</InlineCode> when you explicitly want coercion (e.g., <InlineCode>value == null</InlineCode> to check both null and undefined).
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "type-checking",
      title: "Type Checking Best Practices",
      content: (
        <Space size="lg">
          <Paragraph>
            Reliable type checking in JavaScript requires combining multiple techniques.
          </Paragraph>
          <CodeBlock>
{`// Primitive types (use typeof)
function checkPrimitive(value) {
  if (typeof value === "string") { /* ... */ }
  if (typeof value === "number" && !isNaN(value)) { /* ... */ }
  if (typeof value === "boolean") { /* ... */ }
  if (typeof value === "undefined") { /* ... */ }
  if (typeof value === "symbol") { /* ... */ }
  if (typeof value === "bigint") { /* ... */ }
}

// Check null
if (value === null) { }

// Check array
if (Array.isArray(value)) { }

// Check plain object (not null, not array)
function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Check function
if (typeof value === "function") { }

// Check NaN (only value not equal to itself)
if (Number.isNaN(value)) { }

// Check integer
if (Number.isInteger(value)) { }

// Check finite number
if (Number.isFinite(value)) { }

// Custom type guards
function isString(value) {
  return typeof value === "string";
}

// Using toString for more specific checks
Object.prototype.toString.call([]);     // "[object Array]"
Object.prototype.toString.call(null);   // "[object Null]"
Object.prototype.toString.call(/regex/);// "[object RegExp]"`}
          </CodeBlock>
          <InfoBox variant="purple" icon="🔍">
            For complex applications, consider TypeScript or JSDoc annotations to add static type checking.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "summary",
      title: "Summary",
      content: (
        <List>
          <ListItem>7 primitive types: string, number, boolean, undefined, null, symbol, bigint</ListItem>
          <ListItem>Primitives are immutable, stored by value, compared by value</ListItem>
          <ListItem>Non-primitive (objects) are mutable, stored by reference, compared by reference</ListItem>
          <ListItem><InlineCode>typeof null === "object"</InlineCode> is a historical bug – use <InlineCode>value === null</InlineCode> to check null</ListItem>
          <ListItem>Falsy values: <InlineCode>false, 0, -0, 0n, "", null, undefined, NaN</InlineCode></ListItem>
          <ListItem>Arrays are objects; use <InlineCode>Array.isArray()</InlineCode> to check</ListItem>
          <ListItem>Type coercion happens with operators like <InlineCode>+</InlineCode>, <InlineCode>==</InlineCode>, and in conditionals</ListItem>
          <ListItem>Always prefer <InlineCode>===</InlineCode> over <InlineCode>==</InlineCode> (except when you need null/undefined check)</ListItem>
          <ListItem>Use <InlineCode>Number.isNaN()</InlineCode> instead of global <InlineCode>isNaN()</InlineCode></ListItem>
        </List>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>What are the primitive data types in JavaScript?</ListItem>
          <ListItem>What is the difference between <InlineCode>null</InlineCode> and <InlineCode>undefined</InlineCode>?</ListItem>
          <ListItem>Why does <InlineCode>typeof null</InlineCode> return "object"?</ListItem>
          <ListItem>Explain the difference between <InlineCode>==</InlineCode> and <InlineCode>===</InlineCode> with examples.</ListItem>
          <ListItem>What is type coercion? Give examples of implicit coercion.</ListItem>
          <ListItem>How do you check if a value is an array?</ListItem>
          <ListItem>What is <InlineCode>NaN</InlineCode> and how do you test for it?</ListItem>
          <ListItem>Why does <InlineCode>0.1 + 0.2 !== 0.3</InlineCode>? How to handle floating-point precision?</ListItem>
          <ListItem>What are truthy and falsy values? List all falsy values.</ListItem>
          <ListItem>What is the difference between primitive and reference types?</ListItem>
          <ListItem>How do you copy an object in JavaScript?</ListItem>
          <ListItem>What is a Symbol and when would you use it?</ListItem>
          <ListItem>What is BigInt and how is it different from Number?</ListItem>
          <ListItem>What will <InlineCode>[] == ![]</InlineCode> evaluate to and why?</ListItem>
        </List>
      ),
    },
  ],
};