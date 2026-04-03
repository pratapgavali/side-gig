export const topicsContent: Record<
  string,
  Record<
    string,
    {
      title: string;
      sections: {
    id: string;
    title: string;
    content: React.ReactNode;
}[];
    }
  >
> = {
  javascript: {
variables: {
  title: "Variables in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Variables are containers used to store data values in JavaScript. They allow you to
            reuse and manipulate data throughout your program.
          </p>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-blue-300 text-sm">
              💡 A variable is like a labeled box where you store information.
            </p>
          </div>
        </div>
      ),
    },

    {
      id: "declarations",
      title: "Variable Declarations (var, let, const)",
      content: (
        <div className="space-y-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong className="text-white">var</strong> → function scoped (old)</li>
            <li><strong className="text-white">let</strong> → block scoped</li>
            <li><strong className="text-white">const</strong> → block scoped + cannot be reassigned</li>
          </ul>

          <div className="bg-black/40 border border-white/10 rounded-xl p-4">
            <pre className="text-green-400 text-sm">
{`var a = 10;
let b = 20;
const c = 30;`}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
            ⚠️ Always prefer <strong>const</strong> unless you need reassignment.
          </div>
        </div>
      ),
    },

    {
      id: "scope",
      title: "Scope (Global, Function, Block)",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            Scope determines where a variable is accessible.
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Global Scope → accessible everywhere</li>
            <li>Function Scope → only inside function</li>
            <li>Block Scope → inside {`{}`} (let & const)</li>
          </ul>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`{
  let x = 10;
  const y = 20;
}
// x and y are not accessible here`}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
            ✅ <strong>let</strong> and <strong>const</strong> respect block scope.
          </div>
        </div>
      ),
    },

    {
      id: "hoisting",
      title: "Hoisting",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            Hoisting is JavaScript’s behavior of moving variable declarations to the top.
          </p>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`console.log(a); // undefined
var a = 5;`}
            </pre>
          </div>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`console.log(b); // ❌ ReferenceError
let b = 10;`}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
            ❗ <strong>let</strong> and <strong>const</strong> are hoisted but not initialized (TDZ).
          </div>
        </div>
      ),
    },

    {
      id: "tdz",
      title: "Temporal Dead Zone (TDZ)",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            TDZ is the time between variable declaration and initialization where accessing it throws an error.
          </p>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`console.log(x); // ❌ error
let x = 10;`}
            </pre>
          </div>
        </div>
      ),
    },

    {
      id: "reassignment",
      title: "Reassignment vs Mutation",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            <strong>const</strong> prevents reassignment, but allows mutation of objects.
          </p>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`const user = { name: "John" };

user.name = "Doe"; // ✅ allowed
user = {}; // ❌ not allowed`}
            </pre>
          </div>
        </div>
      ),
    },

    {
      id: "best-practices",
      title: "Best Practices",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Use <strong>const</strong> by default</li>
            <li>Use <strong>let</strong> only when needed</li>
            <li>Avoid <strong>var</strong></li>
            <li>Use meaningful variable names</li>
          </ul>

          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
            🚀 Clean variable usage improves readability and reduces bugs.
          </div>
        </div>
      ),
    },

    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Difference between var, let, const?</li>
            <li>What is hoisting?</li>
            <li>Explain TDZ</li>
            <li>const vs let?</li>
          </ul>
        </div>
      ),
    },
  ],
},

"data-types": {
  title: "Data Types in JavaScript",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Data types define the kind of data a variable can hold. JavaScript is
            a dynamically typed language, meaning you don’t need to specify the type explicitly.
          </p>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
            💡 The type of a variable is determined at runtime.
          </div>
        </div>
      ),
    },

    {
      id: "types-overview",
      title: "Types of Data Types",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            JavaScript has two main categories:
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong className="text-white">Primitive Types</strong></li>
            <li><strong className="text-white">Non-Primitive Types</strong></li>
          </ul>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`Primitive → string, number, boolean, null, undefined, symbol, bigint
Non-Primitive → object, array, function`}
            </pre>
          </div>
        </div>
      ),
    },

    {
      id: "primitive",
      title: "Primitive Data Types",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            Primitive types are immutable and stored by value.
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>String</strong> → text</li>
            <li><strong>Number</strong> → numeric values</li>
            <li><strong>Boolean</strong> → true/false</li>
            <li><strong>Undefined</strong> → declared but not assigned</li>
            <li><strong>Null</strong> → intentional empty value</li>
            <li><strong>Symbol</strong> → unique identifiers</li>
            <li><strong>BigInt</strong> → large integers</li>
          </ul>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`let name = "John";       // string
let age = 25;             // number
let isLoggedIn = true;    // boolean
let x;                    // undefined
let y = null;             // null`}
            </pre>
          </div>
        </div>
      ),
    },

    {
      id: "non-primitive",
      title: "Non-Primitive Data Types",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            Non-primitive types are stored by reference.
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Object</strong></li>
            <li><strong>Array</strong></li>
            <li><strong>Function</strong></li>
          </ul>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`const user = { name: "John" };
const arr = [1, 2, 3];

function greet() {
  return "Hello";
}`}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
            ⚠️ Objects are stored by reference, not by value.
          </div>
        </div>
      ),
    },

    {
      id: "typeof",
      title: "typeof Operator",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            The <code className="text-blue-400">typeof</code> operator is used to check the type of a variable.
          </p>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`typeof "hello"   // "string"
typeof 10        // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object" ❗`}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
            ❗ <strong>typeof null</strong> returns "object" (this is a known JavaScript bug).
          </div>
        </div>
      ),
    },

    {
      id: "coercion",
      title: "Type Coercion",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">
            Type coercion is automatic conversion of values from one type to another.
          </p>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`"5" + 2   // "52"
"5" - 2   // 3
true + 1  // 2`}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
            💡 JavaScript tries to convert types automatically in operations.
          </div>
        </div>
      ),
    },

    {
      id: "equality",
      title: "== vs ===",
      content: (
        <div className="space-y-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>==</strong> → loose equality (allows coercion)</li>
            <li><strong>===</strong> → strict equality (no coercion)</li>
          </ul>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10">
            <pre className="text-green-400 text-sm">
{`5 == "5"   // true
5 === "5"  // false`}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
            ✅ Always use <strong>===</strong> for safer comparisons.
          </div>
        </div>
      ),
    },

    {
      id: "summary",
      title: "Summary",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>JavaScript has primitive and non-primitive types</li>
            <li>Primitive → stored by value</li>
            <li>Objects → stored by reference</li>
            <li>Use <strong>typeof</strong> to check type</li>
            <li>Prefer <strong>===</strong> over <strong>==</strong></li>
          </ul>
        </div>
      ),
    },

    {
      id: "interview",
      title: "Interview Questions",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Difference between primitive and non-primitive?</li>
            <li>Why does typeof null return object?</li>
            <li>Explain type coercion with examples</li>
            <li>Difference between == and ===?</li>
          </ul>
        </div>
      ),
    },
  ],
},
  },

  react: {
    components: {
      title: "Components",
      sections: [
        {
          id: "intro",
          title: "Introduction",
          content:
            "Components are reusable building blocks of a React app.",
        },
      ],
    },
  },
};