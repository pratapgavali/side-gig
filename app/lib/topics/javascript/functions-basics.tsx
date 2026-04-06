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

export const FunctionsBasicsTopic: TopicData = {
  title: "Functions in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            A function is a reusable block of code that performs a specific task. Functions are first-class citizens in JavaScript – they can be assigned to variables, passed as arguments to other functions, and returned from functions. They are the building blocks of modular, maintainable code.
          </Paragraph>
          <InfoBox variant="blue" icon="📦">
            "Don't repeat yourself" (DRY) – functions let you write code once and use it many times.
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "function-definition",
      title: "Ways to Define Functions",
      content: (
        <Space size="lg">
          <Paragraph>
            JavaScript provides several syntaxes for defining functions, each with different behaviors regarding hoisting, <InlineCode>this</InlineCode> binding, and use cases.
          </Paragraph>
          <CodeBlock>
{`// 1. Function Declaration (hoisted)
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice"));  // "Hello, Alice"

// 2. Function Expression (not hoisted)
const greetExpr = function(name) {
  return "Hello, " + name;
};
console.log(greetExpr("Bob"));  // "Hello, Bob"

// 3. Arrow Function (ES6)
const greetArrow = (name) => {
  return "Hello, " + name;
};
// Shorthand when single expression
const greetShort = name => "Hello, " + name;
console.log(greetShort("Charlie"));  // "Hello, Charlie"

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("Runs immediately");
})();

(() => console.log("Arrow IIFE"))();

// 5. Function Constructor (rarely used)
const add = new Function('a', 'b', 'return a + b');
console.log(add(2, 3));  // 5`}
          </CodeBlock>
          <InfoBox variant="green" icon="✅">
            Prefer function declarations for named functions that are used throughout the scope. Use arrow functions for callbacks and when you need lexical <InlineCode>this</InlineCode>.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "function-declaration",
      title: "Function Declaration in Depth",
      content: (
        <Space size="lg">
          <Paragraph>
            Function declarations are hoisted – they are moved to the top of their scope during compilation, so you can call them before they appear in the code.
          </Paragraph>
          <CodeBlock>
{`// Hoisting example
sayHello("John");  // Works even though declaration is below

function sayHello(name) {
  console.log("Hello, " + name);
}

// Function declarations are block-scoped in strict mode? Actually, they are hoisted to the top of their enclosing function or global scope.
// But in block scope, they behave differently in non-strict mode.
{
  function insideBlock() { return 1; }
}
console.log(insideBlock());  // Works in non-strict, but not recommended

// Best practice: declare functions at the top of their scope
function calculateTotal(price, tax) {
  function applyTax(amount) {
    return amount * (1 + tax);
  }
  return applyTax(price);
}`}
          </CodeBlock>
          <InfoBox variant="purple" icon="📈">
            Hoisting makes function declarations great for organizing code – you can put the main logic at the top and helper functions at the bottom.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "function-expression",
      title: "Function Expressions",
      content: (
        <Space size="lg">
          <Paragraph>
            A function expression defines a function as part of a larger expression (usually an assignment). Unlike declarations, they are not hoisted.
          </Paragraph>
          <CodeBlock>
{`// Named function expression (name is local to the function)
const factorial = function fac(n) {
  return n <= 1 ? 1 : n * fac(n - 1);
};
console.log(factorial(5));  // 120
// console.log(fac(5));     // ReferenceError: fac is not defined

// Anonymous function expression (most common)
const square = function(x) {
  return x * x;
};

// Function expressions are evaluated at runtime
console.log(typeof multiply);  // "undefined" (not hoisted)
const multiply = function(a, b) { return a * b; };

// Use case: conditional function definition
let fn;
if (Math.random() > 0.5) {
  fn = function() { console.log("Heads"); };
} else {
  fn = function() { console.log("Tails"); };
}
fn();`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "arrow-functions",
      title: "Arrow Functions (ES6+)",
      content: (
        <Space size="lg">
          <Paragraph>
            Arrow functions provide a shorter syntax and lexically bind <InlineCode>this</InlineCode>. They are especially useful for callbacks and functional programming.
          </Paragraph>
          <CodeBlock>
{`// Basic syntax
const add = (a, b) => {
  return a + b;
};

// Implicit return (no braces needed for single expression)
const multiply = (a, b) => a * b;

// Single parameter can omit parentheses
const double = x => x * 2;

// No parameters need empty parentheses
const getRandom = () => Math.random();

// Returning an object literal requires parentheses
const makePerson = (name, age) => ({ name, age });

// Arrow functions in callbacks
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

// Arrow functions do NOT have their own 'this'
const obj = {
  name: "Alice",
  regularFunc: function() {
    console.log(this.name);  // "Alice"
  },
  arrowFunc: () => {
    console.log(this.name);  // undefined (lexical this from outer scope)
  }
};

// No 'arguments' object in arrow functions
const arrowSum = (a, b) => {
  // console.log(arguments);  // ReferenceError
  return a + b;
};

// Use rest parameters instead
const arrowRest = (...args) => args.reduce((s, n) => s + n, 0);`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            Arrow functions are not suitable for methods that need their own <InlineCode>this</InlineCode>, constructors (cannot use <InlineCode>new</InlineCode>), or when you need the <InlineCode>arguments</InlineCode> object.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "parameters",
      title: "Parameters and Arguments",
      content: (
        <Space size="lg">
          <Paragraph>
            Functions can accept parameters (placeholders) and are called with arguments (actual values). JavaScript is flexible – you can pass fewer or more arguments than declared.
          </Paragraph>
          <CodeBlock>
{`// Basic parameters
function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}\`;
}
console.log(greet("Alice"));        // "Hello, Alice"
console.log(greet("Bob", "Hi"));    // "Hi, Bob"

// Default parameters (ES6)
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5));    // 5
console.log(multiply(5, 2)); // 10

// Default parameters can be expressions
function getDefault() { return 10; }
function add(a, b = getDefault()) { return a + b; }

// Rest parameters (gather remaining arguments into an array)
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4));  // 10

// Rest must be the last parameter
function log(prefix, ...messages) {
  messages.forEach(m => console.log(prefix, m));
}

// The arguments object (array-like, not a real array)
function oldSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(oldSum(1, 2, 3));  // 6

// Converting arguments to array
function toArray() {
  return Array.from(arguments);  // or [...arguments]
}

// Passing too many arguments (extra are ignored)
function twoParams(a, b) {
  console.log(a, b);
}
twoParams(1, 2, 3, 4);  // 1, 2 (rest ignored)

// Passing too few (missing become undefined)
function threeParams(a, b, c) {
  console.log(a, b, c);
}
threeParams(1, 2);  // 1, 2, undefined`}
          </CodeBlock>
          <InfoBox variant="blue" icon="🎯">
            Use default parameters for optional values and rest parameters for variable numbers of arguments. Avoid the <InlineCode>arguments</InlineCode> object in new code.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "return-values",
      title: "Return Values",
      content: (
        <Space size="lg">
          <Paragraph>
            Functions return a value using the <InlineCode>return</InlineCode> statement. If no <InlineCode>return</InlineCode> is used, the function returns <InlineCode>undefined</InlineCode>.
          </Paragraph>
          <CodeBlock>
{`// Explicit return
function add(a, b) {
  return a + b;
}
const result = add(2, 3);  // 5

// Multiple return statements
function compare(a, b) {
  if (a > b) return "greater";
  if (a < b) return "less";
  return "equal";
}

// Early return (guard clause)
function processUser(user) {
  if (!user) return;  // returns undefined
  if (!user.isActive) return;
  // process active user
}

// Returning nothing (undefined)
function noReturn() {
  let x = 5;
  // no return
}
console.log(noReturn());  // undefined

// Returning functions (closures)
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2

// Returning objects
function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      console.log(\`Hi, I'm \${this.name}\`);
    }
  };
}`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "scope",
      title: "Function Scope & Variable Access",
      content: (
        <Space size="lg">
          <Paragraph>
            Variables declared inside a function are local to that function and cannot be accessed from outside. Functions can access variables from their outer (enclosing) scopes.
          </Paragraph>
          <CodeBlock>
{`// Local scope
function myFunction() {
  let localVar = "I'm local";
  console.log(localVar);  // accessible
}
// console.log(localVar);  // ReferenceError

// Nested scope (lexical scoping)
let globalVar = "global";
function outer() {
  let outerVar = "outer";
  function inner() {
    let innerVar = "inner";
    console.log(globalVar);  // "global"
    console.log(outerVar);   // "outer"
    console.log(innerVar);   // "inner"
  }
  inner();
  // console.log(innerVar);  // ReferenceError
}
outer();

// Variable shadowing
let name = "global";
function shadow() {
  let name = "local";  // shadows global
  console.log(name);   // "local"
}
shadow();
console.log(name);     // "global"

// Parameters are local variables
function params(a, b) {
  console.log(a, b);
  // a and b are only accessible inside
}`}
          </CodeBlock>
          <InfoBox variant="green" icon="🔒">
            Functions create a new scope. Variables declared with <InlineCode>let</InlineCode> and <InlineCode>const</InlineCode> are block-scoped; <InlineCode>var</InlineCode> is function-scoped.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "iife",
      title: "IIFE (Immediately Invoked Function Expression)",
      content: (
        <Space size="lg">
          <Paragraph>
            An IIFE is a function that runs as soon as it is defined. It's used to create a private scope, avoiding global namespace pollution.
          </Paragraph>
          <CodeBlock>
{`// Basic IIFE
(function() {
  console.log("IIFE runs immediately");
})();

// With parameters
(function(name) {
  console.log("Hello, " + name);
})("Alice");

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE");
})();

// Returning values from IIFE
const result = (function(a, b) {
  return a + b;
})(3, 4);
console.log(result);  // 7

// Creating private variables (module pattern)
const counterModule = (function() {
  let privateCount = 0;
  return {
    increment() { privateCount++; },
    decrement() { privateCount--; },
    getCount() { return privateCount; }
  };
})();
counterModule.increment();
console.log(counterModule.getCount());  // 1
// console.log(counterModule.privateCount); // undefined

// Modern alternative: block scope with let/const
{
  let privateVar = "only in this block";
  // no need for IIFE
}`}
          </CodeBlock>
          <InfoBox variant="purple" icon="📦">
            IIFEs were essential before ES6 modules and block scoping. Today, you can often use block scope <InlineCode>{}</InlineCode> with <InlineCode>let/const</InlineCode> instead.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "hoisting-functions",
      title: "Hoisting: Declarations vs Expressions",
      content: (
        <Space size="lg">
          <Paragraph>
            Function declarations are hoisted completely; function expressions are not. This is a critical difference.
          </Paragraph>
          <CodeBlock>
{`// Function Declaration – hoisted
sayHi("John");  // Works

function sayHi(name) {
  console.log("Hi " + name);
}

// Function Expression – not hoisted
sayHello("Jane");  // TypeError: sayHello is not a function

var sayHello = function(name) {
  console.log("Hello " + name);
};

// var hoisting with undefined
console.log(sayHey);  // undefined (not ReferenceError)
var sayHey = function() {};

// Let/const with function expressions
// console.log(sayBye);  // ReferenceError (TDZ)
const sayBye = function() {};

// Best practice: define functions before using them, regardless of hoisting`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            To avoid confusion, always define functions before calling them, even though declarations are hoisted.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "callback-functions",
      title: "Callback Functions",
      content: (
        <Space size="lg">
          <Paragraph>
            A callback is a function passed as an argument to another function, to be executed later. Callbacks are fundamental to asynchronous programming and array methods.
          </Paragraph>
          <CodeBlock>
{`// Simple callback
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}
greet("Alice", function() {
  console.log("Callback executed!");
});

// Array methods use callbacks
const numbers = [1, 2, 3];
numbers.forEach(function(num) {
  console.log(num);
});

// Asynchronous callback (setTimeout)
setTimeout(function() {
  console.log("Runs after 1 second");
}, 1000);

// Event listener callback
// button.addEventListener('click', function() {
//   console.log('Button clicked');
// });

// Callback with error-first pattern (Node.js style)
function readFile(path, callback) {
  // simulate async
  setTimeout(() => {
    if (!path) callback(new Error("No path"), null);
    else callback(null, "file content");
  }, 100);
}
readFile("test.txt", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

// Callback hell (pyramid of doom)
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doMore(newResult, function(final) {
      console.log(final);
    });
  });
});
// Use promises or async/await instead`}
          </CodeBlock>
          <InfoBox variant="blue" icon="🔄">
            Callbacks are powerful but can lead to "callback hell". Modern JavaScript uses Promises and async/await for better readability.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "pure-functions",
      title: "Pure vs Impure Functions",
      content: (
        <Space size="lg">
          <Paragraph>
            Pure functions always return the same output for the same input and have no side effects. They are easier to test and reason about.
          </Paragraph>
          <CodeBlock>
{`// Pure function
function add(a, b) {
  return a + b;
}
// Same input → same output, no external changes

// Impure function (depends on external state)
let tax = 0.1;
function calculatePrice(price) {
  return price * (1 + tax);  // tax could change
}

// Impure (has side effect)
let total = 0;
function addToTotal(value) {
  total += value;  // modifies external variable
  console.log(total);  // I/O side effect
  return total;
}

// Impure (modifies input)
function impurePush(arr, item) {
  arr.push(item);  // mutates argument
  return arr;
}
// Pure version
function purePush(arr, item) {
  return [...arr, item];  // returns new array
}

// Benefits of pure functions:
// - Easier to test
// - Memoizable (caching)
// - Parallelizable (no shared state)
// - Predictable`}
          </CodeBlock>
          <InfoBox variant="green" icon="🧪">
            Favor pure functions when possible. They lead to more predictable, testable, and maintainable code.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "summary",
      title: "Summary",
      content: (
        <List>
          <ListItem>Function declarations are hoisted; expressions are not.</ListItem>
          <ListItem>Arrow functions provide concise syntax and lexical <InlineCode>this</InlineCode>.</ListItem>
          <ListItem>Use default parameters, rest parameters, and avoid the <InlineCode>arguments</InlineCode> object.</ListItem>
          <ListItem>Functions create scope; inner functions can access outer variables (closure).</ListItem>
          <ListItem>IIFEs create private scope (less needed with ES6 modules).</ListItem>
          <ListItem>Callbacks are functions passed to other functions for later execution.</ListItem>
          <ListItem>Pure functions (no side effects, deterministic) are easier to test and maintain.</ListItem>
        </List>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>What is the difference between function declaration and function expression?</ListItem>
          <ListItem>Explain arrow functions and how they differ from regular functions regarding <InlineCode>this</InlineCode>.</ListItem>
          <ListItem>What are default parameters and rest parameters?</ListItem>
          <ListItem>What is an IIFE? When would you use it?</ListItem>
          <ListItem>What is a callback function? Give an example.</ListItem>
          <ListItem>What is function hoisting?</ListItem>
          <ListItem>What is the difference between parameters and arguments?</ListItem>
          <ListItem>Can you return multiple values from a function?</ListItem>
          <ListItem>What is a pure function? Why are they beneficial?</ListItem>
          <ListItem>What is a closure? (advanced, but often asked with functions)</ListItem>
          <ListItem>What is the <InlineCode>arguments</InlineCode> object? Is it available in arrow functions?</ListItem>
          <ListItem>How do you create a function that can be called with any number of arguments?</ListItem>
        </List>
      ),
    },
  ],
};