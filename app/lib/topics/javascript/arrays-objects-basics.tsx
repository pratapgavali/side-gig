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

export const ArraysObjectsBasicsTopic: TopicData = {
  title: "Arrays & Objects in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <ContentSection>
          <Paragraph>
            Arrays and objects are the two most important non‑primitive data structures in JavaScript. Arrays store ordered collections of values, while objects store key-value pairs for representing entities. Together, they form the backbone of data management in JavaScript applications.
          </Paragraph>
          <InfoBox variant="blue" icon="📊">
            Arrays = ordered lists (numbered indices). Objects = dictionaries (named properties).
          </InfoBox>
        </ContentSection>
      ),
    },
    {
      id: "arrays-creation",
      title: "Creating Arrays",
      content: (
        <Space size="lg">
          <Paragraph>
            Arrays can hold any type of data, including mixed types, and are dynamically sized.
          </Paragraph>
          <CodeBlock>
{`// Array literal (preferred)
let fruits = ["apple", "banana", "orange"];
let mixed = [1, "hello", true, null, { name: "object" }];

// Using Array constructor
let numbers = new Array(5);     // Creates array with length 5 (empty slots)
let items = new Array(1, 2, 3); // [1, 2, 3]

// Array.of (ES6) – avoids the single-number quirk
let arr1 = Array.of(5);    // [5] (not empty length 5)
let arr2 = Array.of(1,2,3); // [1,2,3]

// Array.from (ES6) – from iterable or array-like
let str = "hello";
let chars = Array.from(str);        // ['h','e','l','l','o']
let squares = Array.from([1,2,3], x => x * x); // [1,4,9]

// Empty arrays and holes
let empty = [];
let holes = [1, , 3];  // length 3, index 1 is empty (not undefined)
console.log(holes[1]);  // undefined (but hole behaves differently in some methods)`}
          </CodeBlock>
          <InfoBox variant="green" icon="✅">
            Prefer array literal <InlineCode>[]</InlineCode> over <InlineCode>new Array()</InlineCode> – it's shorter and avoids the single‑number trap.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "arrays-access",
      title: "Accessing and Modifying Arrays",
      content: (
        <Space size="lg">
          <Paragraph>
            Array elements are accessed via zero‑based indices. You can read, write, and add elements dynamically.
          </Paragraph>
          <CodeBlock>
{`// Access by index
let colors = ["red", "green", "blue"];
console.log(colors[0]);   // "red"
console.log(colors[2]);   // "blue"
console.log(colors[5]);   // undefined (no error)

// Modify existing element
colors[1] = "yellow";
console.log(colors);      // ["red", "yellow", "blue"]

// Add new element at end
colors[3] = "purple";
colors[colors.length] = "orange";  // same as push

// Length property (auto-updates)
console.log(colors.length);  // 5

// Setting length truncates array
colors.length = 2;
console.log(colors);  // ["red", "yellow"] (lost blue, purple, orange)

// Sparse arrays (holes)
let sparse = [1, , 3];
console.log(sparse.length);  // 3
console.log(sparse[1]);      // undefined
console.log(sparse.hasOwnProperty(1));  // false (hole, not a property)

// Negative indices don't work (use at() method)
console.log(colors[-1]);     // undefined
console.log(colors.at(-1));  // "yellow" (ES2022)

// Check if index exists
console.log(0 in colors);    // true
console.log(5 in colors);    // false`}
          </CodeBlock>
          <InfoBox variant="yellow" icon="⚠️">
            Assigning to an index beyond <InlineCode>length</InlineCode> increases length, creating empty slots. Use <InlineCode>push</InlineCode> or <InlineCode>concat</InlineCode> for safe addition.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "array-methods-basic",
      title: "Basic Array Methods",
      content: (
        <Space size="lg">
          <Paragraph>
            JavaScript arrays provide many built‑in methods for manipulation and iteration.
          </Paragraph>
          <CodeBlock>
{`// Adding elements
let arr = [1, 2];
arr.push(3);          // [1,2,3] (end) – returns new length
arr.unshift(0);       // [0,1,2,3] (beginning) – returns new length

// Removing elements
let last = arr.pop();     // removes last, returns 3
let first = arr.shift();  // removes first, returns 0
console.log(arr);         // [1,2]

// Find index
let nums = [10, 20, 30];
console.log(nums.indexOf(20));    // 1
console.log(nums.indexOf(99));    // -1
console.log(nums.includes(20));   // true
console.log(nums.lastIndexOf(20)); // from end

// Slicing (does not modify original)
let sliced = nums.slice(1, 3);  // [20,30] (end index exclusive)
let copy = nums.slice();        // shallow copy

// Splicing (modifies original)
let removed = nums.splice(1, 1, 25, 35);  // start, deleteCount, items to insert
console.log(nums);     // [10,25,35,30]
console.log(removed);  // [20]

// Concatenation
let a = [1,2];
let b = [3,4];
let c = a.concat(b);    // [1,2,3,4] (returns new array)
let d = [...a, ...b];   // spread operator (ES6)

// Joining to string
let words = ["Hello", "World"];
console.log(words.join(" "));   // "Hello World"
console.log(words.join());      // "Hello,World" (default comma)

// Reversing (modifies original)
let rev = [1,2,3].reverse();    // [3,2,1]

// Sorting (modifies original, default converts to strings)
let nums2 = [3, 1, 10, 2];
nums2.sort();                   // [1,10,2,3] (string order!)
nums2.sort((a,b) => a - b);     // [1,2,3,10] (numeric ascending)
nums2.sort((a,b) => b - a);     // [10,3,2,1] (descending)`}
          </CodeBlock>
          <InfoBox variant="purple" icon="📝">
            <InlineCode>sort()</InlineCode> without a compare function sorts elements as strings – a common pitfall with numbers.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "array-iteration",
      title: "Array Iteration Methods",
      content: (
        <Space size="lg">
          <Paragraph>
            Modern JavaScript offers powerful functional methods for working with arrays without manual loops.
          </Paragraph>
          <CodeBlock>
{`// forEach – execute for each element
let fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});

// map – transform each element
let numbers = [1,2,3,4];
let doubled = numbers.map(n => n * 2);  // [2,4,6,8]

// filter – keep elements that pass test
let evens = numbers.filter(n => n % 2 === 0);  // [2,4]

// reduce – accumulate to a single value
let sum = numbers.reduce((acc, n) => acc + n, 0);  // 10
let product = numbers.reduce((acc, n) => acc * n, 1);  // 24

// reduceRight – same but from right
let str = ['a','b','c'].reduceRight((acc, ch) => acc + ch, ''); // 'cba'

// some – any element satisfies condition?
let hasEven = numbers.some(n => n % 2 === 0);  // true

// every – all elements satisfy condition?
let allPositive = numbers.every(n => n > 0);   // true

// find – first element satisfying condition
let firstEven = numbers.find(n => n % 2 === 0);  // 2

// findIndex – index of first match
let idx = numbers.findIndex(n => n % 2 === 0);   // 1

// flat – flatten nested arrays (ES2019)
let nested = [1, [2, [3,4]]];
console.log(nested.flat(1));     // [1,2,[3,4]]
console.log(nested.flat(2));     // [1,2,3,4]
console.log(nested.flat(Infinity)); // fully flatten

// flatMap – map then flat by one level
let sentences = ["hello world", "goodbye"];
let words = sentences.flatMap(s => s.split(" ")); // ['hello','world','goodbye']`}
          </CodeBlock>
          <InfoBox variant="green" icon="⚡">
            These methods are declarative and chainable: <InlineCode>arr.filter(...).map(...).reduce(...)</InlineCode>.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "objects-creation",
      title: "Creating Objects",
      content: (
        <Space size="lg">
          <Paragraph>
            Objects store unordered key‑value pairs. Keys are strings (or Symbols), values can be any type.
          </Paragraph>
          <CodeBlock>
{`// Object literal (preferred)
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  greet: function() { console.log("Hi"); },
  // Method shorthand (ES6)
  sayHi() { console.log("Hello"); }
};

// Using new Object()
let obj = new Object();
obj.key = "value";

// Object.create() – with prototype
let proto = { type: "animal" };
let dog = Object.create(proto);
dog.name = "Rex";
console.log(dog.type);  // "animal" (inherited)

// From variables (property value shorthand)
let name = "Bob";
let age = 25;
let user = { name, age };  // { name: "Bob", age: 25 }

// Computed property names (ES6)
let propName = "score";
let game = {
  [propName]: 100,
  ["player" + "Name"]: "Alice"
};`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "objects-access",
      title: "Accessing and Modifying Properties",
      content: (
        <Space size="lg">
          <Paragraph>
            Properties can be accessed using dot notation or bracket notation. Bracket notation is necessary for dynamic or invalid identifier keys.
          </Paragraph>
          <CodeBlock>
{`let person = { name: "Alice", "favorite-color": "blue", 123: "number key" };

// Dot notation (key must be valid identifier)
console.log(person.name);  // "Alice"

// Bracket notation (any string expression)
console.log(person["favorite-color"]);  // "blue"
console.log(person[123]);               // "number key" (number converted to string)
let key = "name";
console.log(person[key]);               // "Alice" (dynamic)

// Adding new properties
person.city = "New York";
person["age"] = 30;

// Modifying properties
person.name = "Bob";

// Deleting properties
delete person.isStudent;
console.log(person.isStudent);  // undefined

// Checking existence
console.log("name" in person);        // true
console.log(person.hasOwnProperty("name"));  // true (own, not inherited)
console.log(person.gender === undefined); // true (but not reliable if property value is undefined)

// Object.keys/values/entries (ES6)
let keys = Object.keys(person);      // array of own enumerable keys
let values = Object.values(person);  // array of values
let entries = Object.entries(person); // [[key,value], ...]`}
          </CodeBlock>
          <InfoBox variant="yellow" aria-label="warning">
            Use bracket notation when the property name is dynamic, contains hyphens, or starts with a digit.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "object-methods",
      title: "Useful Object Methods",
      content: (
        <Space size="lg">
          <Paragraph>
            JavaScript provides several static methods for object introspection and manipulation.
          </Paragraph>
          <CodeBlock>
{`// Copying objects (shallow)
let original = { a: 1, b: { c: 2 } };
let copy = Object.assign({}, original);  // shallow copy
let spread = { ...original };            // also shallow

// Object.freeze – prevents any changes
let frozen = { value: 10 };
Object.freeze(frozen);
frozen.value = 20;   // silently fails (or error in strict mode)
console.log(frozen.value);  // 10

// Object.seal – prevents adding/deleting, allows modifying existing
let sealed = { count: 5 };
Object.seal(sealed);
sealed.newProp = "no";   // ignored
sealed.count = 10;       // allowed
delete sealed.count;     // ignored

// Object.preventExtensions – prevents adding new properties
let obj = { a: 1 };
Object.preventExtensions(obj);
obj.b = 2;   // ignored

// Check capabilities
console.log(Object.isFrozen(frozen));   // true
console.log(Object.isSealed(sealed));   // true
console.log(Object.isExtensible(obj));  // false

// Property descriptors
let desc = Object.getOwnPropertyDescriptor(person, "name");
console.log(desc);  // { value: "Bob", writable: true, enumerable: true, configurable: true }

// Define property with custom descriptor
Object.defineProperty(person, "id", {
  value: 123,
  writable: false,
  enumerable: false,
  configurable: false
});
console.log(person.id);  // 123
console.log(Object.keys(person));  // id not shown (non-enumerable)

// Object.fromEntries (ES2019) – convert entries back to object
let entries = [["a",1], ["b",2]];
let obj2 = Object.fromEntries(entries);  // { a:1, b:2 }`}
          </CodeBlock>
          <InfoBox variant="blue" icon="🔒">
            Use <InlineCode>Object.freeze()</InlineCode> for true constants. Remember it's shallow – nested objects can still be modified.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "nested-structures",
      title: "Nested Arrays and Objects",
      content: (
        <Space size="lg">
          <Paragraph>
            Real‑world data often involves arrays of objects, objects containing arrays, or deeper nesting.
          </Paragraph>
          <CodeBlock>
{`// Array of objects
let users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];
// Find user by id
let user = users.find(u => u.id === 2);
console.log(user.name);  // "Bob"

// Object containing array
let classroom = {
  name: "Math 101",
  students: ["Alice", "Bob", "Charlie"],
  addStudent(name) {
    this.students.push(name);
  }
};
classroom.addStudent("David");
console.log(classroom.students);  // ["Alice","Bob","Charlie","David"]

// Deep nesting
let company = {
  name: "Tech Corp",
  departments: [
    { name: "Engineering", employees: [{ name: "John" }, { name: "Jane" }] },
    { name: "Sales", employees: [{ name: "Mike" }] }
  ]
};
// Access Jane
console.log(company.departments[0].employees[1].name);  // "Jane"

// Safe access with optional chaining (ES2020)
let ceo = company?.ceo?.name;  // undefined (no error)

// Looping through nested structures
for (let dept of company.departments) {
  console.log(dept.name);
  for (let emp of dept.employees) {
    console.log(\`  - \${emp.name}\`);
  }
}`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "array-destructuring",
      title: "Array & Object Destructuring (ES6)",
      content: (
        <Space size="lg">
          <Paragraph>
            Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
          </Paragraph>
          <CodeBlock>
{`// Array destructuring
let colors = ["red", "green", "blue"];
let [first, second] = colors;
console.log(first, second);  // "red" "green"

// Skip elements
let [ , , third] = colors;
console.log(third);  // "blue"

// Rest pattern (must be last)
let [head, ...tail] = colors;
console.log(head);   // "red"
console.log(tail);   // ["green","blue"]

// Default values
let [a, b, c = "default"] = [1, 2];
console.log(c);  // "default"

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);  // 2,1

// Object destructuring
let person = { name: "Alice", age: 30, city: "NYC" };
let { name, age } = person;
console.log(name, age);  // "Alice" 30

// Renaming variables
let { name: fullName, age: years } = person;
console.log(fullName, years);

// Default values
let { job = "unemployed" } = person;
console.log(job);

// Nested destructuring
let user = {
  id: 1,
  profile: { username: "alice123", avatar: "alice.png" }
};
let { profile: { username } } = user;
console.log(username);  // "alice123"

// Function parameter destructuring
function greet({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}
greet(person);`}
          </CodeBlock>
        </Space>
      ),
    },
    {
      id: "spread-operator",
      title: "Spread Operator with Arrays & Objects",
      content: (
        <Space size="lg">
          <Paragraph>
            The spread operator <InlineCode>...</InlineCode> expands iterables (arrays) or copies properties (objects). It's a concise alternative to many older methods.
          </Paragraph>
          <CodeBlock>
{`// Spread with arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];  // [1,2,3,4]
let copy = [...arr1];               // shallow copy

// Spread in function calls
let numbers = [5, 10, 15];
let max = Math.max(...numbers);  // 15

// Spread with strings
let chars = [..."hello"];  // ['h','e','l','l','o']

// Spread with objects (ES2018)
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };  // { a:1, b:2, c:3, d:4 }

// Overriding properties (order matters)
let base = { color: "red", size: "M" };
let extended = { ...base, color: "blue" };  // color overwritten
console.log(extended);  // { color: "blue", size: "M" }

// Shallow copy with spread
let originalObj = { deep: { nested: true }, simple: 1 };
let shallowCopy = { ...originalObj };
shallowCopy.deep.nested = false;
console.log(originalObj.deep.nested);  // false (shared reference)
// Use structuredClone() for deep copy

// Convert NodeList to array
let divs = document.querySelectorAll("div");
let divArray = [...divs];`}
          </CodeBlock>
          <InfoBox variant="green" icon="✨">
            Spread creates shallow copies. For deep cloning, use <InlineCode>structuredClone()</InlineCode> or libraries like Lodash.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "common-pitfalls",
      title: "Common Pitfalls with Arrays & Objects",
      content: (
        <Space size="lg">
          <Paragraph>
            Avoid these frequent mistakes when working with arrays and objects.
          </Paragraph>
          <CodeBlock>
{`// 1. Array comparison by reference (not by value)
console.log([1,2] === [1,2]);  // false (different objects)

// 2. Modifying array while iterating with forEach
let arr = [1,2,3,4];
arr.forEach((item, index) => {
  if (item % 2 === 0) arr.splice(index, 1); // skips elements
});

// 3. Using delete on array (leaves hole, not shift)
let arr2 = [1,2,3];
delete arr2[1];  // [1, empty, 3] – length still 3
// Use splice instead: arr2.splice(1,1)

// 4. Forgetting that sort() mutates
let sorted = arr2.sort();  // arr2 is also sorted

// 5. Copying objects with = (reference)
let original = { count: 5 };
let copy = original;
copy.count = 10;
console.log(original.count);  // 10 (not 5)

// 6. Assuming object property order (ordered since ES2015 but don't rely on numeric indices)
let obj = { "2": "two", "1": "one", "b": "bee" };
console.log(Object.keys(obj));  // ["1","2","b"] (integer-like first, then insertion order)

// 7. Checking property existence with falsy check
let user = { score: 0 };
if (user.score) { }  // false (0 is falsy) – use 'in' or !== undefined

// 8. Using for...in on arrays (iterates over non-index properties)
let arr3 = ["a","b"];
arr3.custom = "c";
for (let i in arr3) console.log(i);  // "0","1","custom"

// 9. Comparing objects with == or ===
if ({a:1} == {a:1}) { }  // false – compare properties manually or use JSON.stringify (shallow)

// 10. Mutating objects in React state or Redux
// Always create new objects: setState({ ...state, newProp: value })`}
          </CodeBlock>
          <InfoBox variant="red" icon="🐛">
            Remember: arrays and objects are compared by reference, not by content. Use <InlineCode>JSON.stringify()</InlineCode> or deep equality libraries when needed.
          </InfoBox>
        </Space>
      ),
    },
    {
      id: "summary",
      title: "Summary",
      content: (
        <List>
          <ListItem>Arrays: ordered, zero‑indexed, dynamic length, mixed types.</ListItem>
          <ListItem>Key array methods: <InlineCode>push/pop</InlineCode>, <InlineCode>shift/unshift</InlineCode>, <InlineCode>splice</InlineCode>, <InlineCode>slice</InlineCode>, <InlineCode>map/filter/reduce</InlineCode>.</ListItem>
          <ListItem>Objects: key‑value pairs, keys are strings/Symbols, unordered (mostly).</ListItem>
          <ListItem>Access properties with dot or bracket notation; bracket for dynamic keys.</ListItem>
          <ListItem>Destructuring: unpack values from arrays and objects into variables.</ListItem>
          <ListItem>Spread operator: copy, merge, expand arrays and objects.</ListItem>
          <ListItem>Both are reference types – copying creates shallow copies; use <InlineCode>structuredClone()</InlineCode> for deep.</ListItem>
          <ListItem>Nested structures are common; use optional chaining (<InlineCode>?.</InlineCode>) for safe access.</ListItem>
        </List>
      ),
    },
    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <List>
          <ListItem>How do you check if a variable is an array?</ListItem>
          <ListItem>What is the difference between <InlineCode>slice()</InlineCode> and <InlineCode>splice()</InlineCode>?</ListItem>
          <ListItem>How do you remove duplicate values from an array?</ListItem>
          <ListItem>Explain the difference between <InlineCode>map()</InlineCode> and <InlineCode>forEach()</InlineCode>.</ListItem>
          <ListItem>How do you deep copy an object?</ListItem>
          <ListItem>What is the difference between dot notation and bracket notation for object properties?</ListItem>
          <ListItem>How do you iterate over object properties?</ListItem>
          <ListItem>What is array destructuring? Give an example.</ListItem>
          <ListItem>What is the spread operator and how is it used with arrays and objects?</ListItem>
          <ListItem>Why does <InlineCode>[1,2,3] === [1,2,3]</InlineCode> return false?</ListItem>
          <ListItem>How do you sort an array of numbers in ascending order?</ListItem>
          <ListItem>What are the differences between <InlineCode>Object.freeze()</InlineCode> and <InlineCode>Object.seal()</InlineCode>?</ListItem>
          <ListItem>How do you convert an array-like object (e.g., <InlineCode>arguments</InlineCode>) to a real array?</ListItem>
          <ListItem>What is <InlineCode>Array.from()</InlineCode> and how is it different from spread?</ListItem>
        </List>
      ),
    },
  ],
};