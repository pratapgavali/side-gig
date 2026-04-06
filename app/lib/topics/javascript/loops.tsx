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

export const LoopsTopic: TopicData = {
  title: "Loops in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            Loops are control flow structures that repeat a block of code multiple times. They are essential for iterating over arrays, processing collections, and performing repetitive tasks. JavaScript provides several loop mechanisms, each suited for different scenarios.
          </Paragraph>
          <InfoBox variant="blue" icon="🔄">
            Choosing the right loop can make your code more readable, performant, and less error‑prone.
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "for-loop",
      title: "The Classic for Loop",
      content: (
        <Space size="lg">
          <Paragraph>
            The <InlineCode>for</InlineCode> loop gives you explicit control over initialization, condition, and increment. It's ideal when you know the number of iterations in advance or need an index.
          </Paragraph>
          <CodeBlock>
{`// Basic syntax
for (initialization; condition; afterthought) {
  // code to repeat
}

// Example: iterate from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0,1,2,3,4
}

// Loop over array with index
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(\`\${i}: \${fruits[i]}\`);
}

// Reverse iteration
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);  // orange, banana, apple
}

// Stepping by a custom value
for (let i = 0; i < 10; i += 2) {
  console.log(i);  // 0,2,4,6,8
}

// All three parts are optional
let i = 0;
for (; i < 3; ) {
  console.log(i);
  i++;
}

// Infinite loop (use with caution)
// for (;;) { console.log('forever'); }`}
          </CodeBlock>
          <InfoBox variant="green" icon="⚡">
            Performance tip: cache array length when the array is large – <InlineCode>for (let i = 0, len = arr.length; i &lt; len; i++)</InlineCode> avoids recomputing length each iteration.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "while-loop",
      title: "while Loop",
      content: (
        <Space size="lg">
          <Paragraph>
            The <InlineCode>while</InlineCode> loop checks a condition before each iteration. It's best when you don't know how many times the loop will run, but you know when to stop.
          </Paragraph>
          <CodeBlock>
{`// Syntax
while (condition) {
  // code to repeat
}

// Count down
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}

// Read until sentinel value
let input = null;
while (input !== 'quit') {
  input = prompt('Type "quit" to exit');
  console.log('You typed:', input);
}

// Process digits of a number
let num = 1234;
while (num > 0) {
  let digit = num % 10;
  console.log(digit);
  num = Math.floor(num / 10);
}
// Output: 4,3,2,1

// Potential infinite loop – ensure condition changes
let running = true;
let counter = 0;
while (running) {
  counter++;
  if (counter === 10) running = false;
}`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            Always ensure the condition eventually becomes <InlineCode>false</InlineCode>; otherwise you'll create an infinite loop that freezes the browser or crashes the program.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "do-while",
      title: "do...while Loop",
      content: (
        <Space size="lg">
          <Paragraph>
            The <InlineCode>do...while</InlineCode> loop executes the block once before checking the condition. This guarantees at least one execution.
          </Paragraph>
          <CodeBlock>
{`// Syntax
do {
  // code to repeat
} while (condition);

// Example: ask user at least once
let answer;
do {
  answer = prompt('Do you want to continue? (yes/no)');
} while (answer !== 'no' && answer !== 'yes');

// Menu system
let choice;
do {
  console.log('1. Start game');
  console.log('2. Options');
  console.log('3. Exit');
  choice = prompt('Enter choice:');
  // process choice...
} while (choice !== '3');

// Even if condition is false initially, the block runs once
let i = 10;
do {
  console.log('This runs once, i is ' + i);
} while (i < 5);
// Output: "This runs once, i is 10"`}
          </CodeBlock>
          <InfoBox variant="purple" icon="✅">
            Use <InlineCode>do...while</InlineCode> when you need to execute the loop body at least once, such as displaying a menu or validating user input.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "for-of",
      title: "for...of Loop (ES6)",
      content: (
        <Space size="lg">
          <Paragraph>
            The <InlineCode>for...of</InlineCode> loop iterates over <Strong>iterable objects</Strong> (arrays, strings, maps, sets, etc.) and gives you the <Strong>value</Strong> of each element. It's the cleanest way to loop when you don't need the index.
          </Paragraph>
          <CodeBlock>
{`// Iterate over array values
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);  // red, green, blue
}

// Iterate over string characters
const str = 'hello';
for (let char of str) {
  console.log(char);  // h,e,l,l,o
}

// Iterate over Map
const map = new Map([
  ['name', 'Alice'],
  ['age', 30]
]);
for (let [key, value] of map) {
  console.log(key, value);
}

// Iterate over Set
const set = new Set([1, 2, 3, 3, 4]);
for (let num of set) {
  console.log(num);  // 1,2,3,4
}

// Iterate over arguments object
function sum() {
  let total = 0;
  for (let arg of arguments) {
    total += arg;
  }
  return total;
}
console.log(sum(1, 2, 3));  // 6

// For...of works with any iterable (custom objects with Symbol.iterator)
const range = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};
for (let num of range) {
  console.log(num);  // 1,2,3,4,5
}`}
          </CodeBlock>
          <InfoBox variant="blue" icon="📦">
            <InlineCode>for...of</InlineCode> cannot iterate over plain objects directly. Use <InlineCode>Object.keys()</InlineCode>, <InlineCode>Object.values()</InlineCode>, or <InlineCode>Object.entries()</InlineCode> first.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "for-in",
      title: "for...in Loop",
      content: (
        <Space size="lg">
          <Paragraph>
            <InlineCode>for...in</InlineCode> iterates over the <Strong>enumerable property keys</Strong> (including inherited ones) of an object. It is designed for objects, not arrays.
          </Paragraph>
          <CodeBlock>
{`// Iterate over object keys
const person = { name: 'Bob', age: 25, city: 'Paris' };
for (let key in person) {
  console.log(key, person[key]);
}
// name Bob, age 25, city Paris

// Check own property to exclude prototype chain
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);  // safe
  }
}

// ⚠️ for...in on arrays (not recommended)
const arr = ['a', 'b', 'c'];
arr.customProp = 'test';
for (let index in arr) {
  console.log(index);  // "0","1","2","customProp" (indices as strings)
}
// Better: use for...of or classic for loop

// Enumeration of inherited properties
const parent = { inherited: 'yes' };
const child = Object.create(parent);
child.own = 'no';
for (let key in child) {
  console.log(key);  // "own", then "inherited"
}

// Use Object.keys() for own enumerable keys only
console.log(Object.keys(child));  // ["own"]`}
          </CodeBlock>
          <InfoBox variant="red" icon="🚫">
            Do not use <InlineCode>for...in</InlineCode> for arrays unless you understand the pitfalls. It iterates over indices as strings, includes custom properties, and order is not guaranteed.
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
            <InlineCode>break</InlineCode> exits the loop immediately. <InlineCode>continue</InlineCode> skips the current iteration and moves to the next.
          </Paragraph>
          <CodeBlock>
{`// break: stop when condition met
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);  // 0,1,2,3,4
}

// continue: skip an iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);  // 0,1,3,4
}

// Labeled break (exits nested loops)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(i, j);
  }
}
// Output: (0,0) (0,1) (0,2) (1,0)

// Labeled continue
outer: for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer;
    console.log(i, j);
  }
}
// Output: (0,0) (1,0)

// Using break in while loop
let count = 0;
while (true) {
  count++;
  if (count > 5) break;
  console.log(count);
}

// Continue in while – careful with increment placement
let i = 0;
while (i < 5) {
  i++;
  if (i === 3) continue;
  console.log(i);  // 1,2,4,5
}`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="🏷️">
            Labels are rarely needed. Often you can refactor the inner loop into a function and use <InlineCode>return</InlineCode>.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "array-iteration-methods",
      title: "Array Iteration Methods (Functional Loops)",
      content: (
        <Space size="lg">
          <Paragraph>
            Modern JavaScript encourages functional iteration methods on arrays. They are often more expressive and less error‑prone than manual loops.
          </Paragraph>
          <CodeBlock>
{`// forEach – iterate with side effects
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));

// map – transform each element
const doubled = numbers.map(num => num * 2);  // [2,4,6]

// filter – select elements
const evens = numbers.filter(num => num % 2 === 0);  // [2]

// reduce – accumulate
const sum = numbers.reduce((acc, num) => acc + num, 0);  // 6

// some – any element satisfies condition?
const hasEven = numbers.some(num => num % 2 === 0);  // true

// every – all elements satisfy condition?
const allPositive = numbers.every(num => num > 0);  // true

// find – get first matching element
const firstEven = numbers.find(num => num % 2 === 0);  // 2

// findIndex – get index of first match
const idx = numbers.findIndex(num => num === 2);  // 1

// flatMap – map then flatten by one level
const nested = [[1,2], [3,4]];
const flattened = nested.flatMap(arr => arr);  // [1,2,3,4]

// Performance note: classic for loops are faster, but methods are more readable.
// For most cases, readability wins.`}
          </CodeBlock>
          <InfoBox variant="green" icon="✅">
            Prefer array methods over loops for data transformation. They are declarative, chainable, and less prone to off‑by‑one errors.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "performance",
      title: "Loop Performance Considerations",
      content: (
        <Space size="lg">
          <Paragraph>
            Different loops have different performance characteristics. In most web applications, the difference is negligible, but for heavy computations, it matters.
          </Paragraph>
          <CodeBlock>
{`// Fastest: classic for loop (reverse iteration sometimes faster)
for (let i = 0; i < arr.length; i++) { ... }

// Slightly slower but cleaner: for...of
for (const item of arr) { ... }

// Slowest among loops (but often fine): forEach
arr.forEach(item => { ... });

// Optimizations:
// 1. Cache array length
for (let i = 0, len = arr.length; i < len; i++) { ... }

// 2. Avoid function calls inside loops when possible
// Bad:
for (let i = 0; i < arr.length; i++) {
  process(arr[i]);  // function call each iteration
}
// Good: inline simple operations
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

// 3. Reduce DOM access (expensive)
// Bad:
for (let i = 0; i < 100; i++) {
  document.body.style.backgroundColor = 'red';  // forces reflow
}
// Good: batch changes
let styleChanges = '';
for (let i = 0; i < 100; i++) {
  styleChanges += 'div { color: red; }';
}
// then apply once

// 4. Use while for loops where condition may change dynamically
let nodes = document.querySelectorAll('div');
let i = 0;
while (i < nodes.length) {
  // nodes.length might change if you remove elements
  i++;
}`}
          </CodeBlock>
          <InfoBox variant="purple" icon="⚡">
            Premature optimization is the root of all evil. Write clear, readable code first. Optimize only when you measure a performance problem.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "common-pitfalls",
      title: "Common Loop Pitfalls",
      content: (
        <Space size="lg">
          <Paragraph>
            Even experienced developers make these mistakes. Recognize them to save debugging time.
          </Paragraph>
          <CodeBlock>
{`// 1. Off‑by‑one errors
// Wrong: condition should be i < arr.length, not i <= arr.length
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);  // undefined on last iteration
}

// 2. Modifying array while iterating
let items = [1, 2, 3, 4];
for (let i = 0; i < items.length; i++) {
  if (items[i] % 2 === 0) {
    items.splice(i, 1);  // removes element, shifts indices
    i--;  // adjust index to avoid skipping
  }
}

// 3. Closure in loop (var vs let)
// Problem with var:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // 3,3,3
}
// Solution: use let (block scope) or IIFE
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // 0,1,2
}

// 4. Infinite loops
let x = 0;
while (x < 10) {
  console.log(x);
  // forgot to increment x
}

// 5. Asynchronous code inside loops
// Wrong: all async calls see final value
for (var i = 0; i < 3; i++) {
  fetch('/api/data').then(() => console.log(i));  // 3,3,3
}
// Fix: use let or create closure
for (let i = 0; i < 3; i++) {
  fetch('/api/data').then(() => console.log(i));  // 0,1,2
}

// 6. Using for...in on array
const arr2 = [10, 20, 30];
arr2.custom = 'bad';
for (let idx in arr2) {
  console.log(idx, arr2[idx]);  // includes "custom"
}`}
          </CodeBlock>
          <InfoBox variant="red" icon="🐛">
            Always test your loop boundaries, especially with <InlineCode>while</InlineCode> loops. A single missing increment can freeze your page.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "loops-vs-recursion",
      title: "Loops vs Recursion",
      content: (
        <Space size="lg">
          <Paragraph>
            Some problems can be solved with either loops or recursion. Loops are generally more efficient and avoid stack overflow, but recursion can be more elegant for tree traversal.
          </Paragraph>
          <CodeBlock>
{`// Loop version: factorial
function factorialLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive version (risk of stack overflow for large n)
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

// Loop vs recursion for tree traversal
// Recursive (natural for trees)
function traverseTree(node) {
  console.log(node.value);
  node.children.forEach(child => traverseTree(child));
}

// Iterative using stack
function traverseTreeIterative(root) {
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    console.log(node.value);
    stack.push(...node.children);
  }
}`}
          </CodeBlock>
          <InfoBox variant="blue" icon="🌳">
            Use loops for simple numeric iterations and performance‑critical code. Use recursion when working with recursive data structures (trees, graphs) and depth is limited.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "summary",
      title: "Summary",
      content: (
        <List>
          <ListItem><Strong>for</Strong> – when you need an index or know iteration count</ListItem>
          <ListItem><Strong>while</Strong> – when you don't know how many iterations, but have a stop condition</ListItem>
          <ListItem><Strong>do...while</Strong> – when the loop must run at least once</ListItem>
          <ListItem><Strong>for...of</Strong> – iterating over values of iterable objects (arrays, strings, maps)</ListItem>
          <ListItem><Strong>for...in</Strong> – iterating over object property keys (not for arrays)</ListItem>
          <ListItem><Strong>Array methods</Strong> – functional style: <InlineCode>forEach</InlineCode>, <InlineCode>map</InlineCode>, <InlineCode>filter</InlineCode>, <InlineCode>reduce</InlineCode></ListItem>
          <ListItem><Strong>break</Strong> – exit loop; <Strong>continue</Strong> – skip iteration</ListItem>
          <ListItem>Avoid modifying arrays while iterating, watch for off‑by‑one errors, and be careful with closures inside loops</ListItem>
          <ListItem>Performance differences usually matter only in heavy computations; prioritize readability</ListItem>
        </List>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>What is the difference between <InlineCode>for...in</InlineCode> and <InlineCode>for...of</InlineCode>?</ListItem>
          <ListItem>How do you break out of a nested loop in JavaScript?</ListItem>
          <ListItem>Explain the difference between <InlineCode>while</InlineCode> and <InlineCode>do...while</InlineCode>.</ListItem>
          <ListItem>Why does <InlineCode>for (var i = 0; i &lt; 3; i++) { 'setTimeout(() => console.log(i));' }</InlineCode> output three 3s? How do you fix it?</ListItem>
          <ListItem>What are the performance differences between classic <InlineCode>for</InlineCode> loops and <InlineCode>forEach</InlineCode>?</ListItem>
          <ListItem>How do you iterate over the properties of an object safely (excluding prototype chain)?</ListItem>
          <ListItem>What is an infinite loop? How can you avoid it?</ListItem>
          <ListItem>Can you use <InlineCode>break</InlineCode> and <InlineCode>continue</InlineCode> in <InlineCode>forEach</InlineCode>? If not, why?</ListItem>
          <ListItem>How would you loop through a large array without blocking the main thread?</ListItem>
          <ListItem>What is the difference between <InlineCode>map</InlineCode> and <InlineCode>forEach</InlineCode>?</ListItem>
          <ListItem>How do you iterate over a <InlineCode>NodeList</InlineCode> (e.g., from <InlineCode>querySelectorAll</InlineCode>)?</ListItem>
          <ListItem>Explain labeled statements and when you might use them.</ListItem>
        </List>
      ),
    },
  ],
};