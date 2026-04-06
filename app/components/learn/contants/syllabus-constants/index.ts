import { expressSyllabus } from "./express-syllabus";
import { javascriptSyllabus } from "./javascript-syllabus";
import { mongodbSyllabus } from "./mongodb-syllabus";
import { nextjsSyllabus } from "./next-syllabus";
import { nodejsSyllabus } from "./node-syllabus";
import { pythonSyllabus } from "./python-syllabus";
import { reactSyllabus } from "./react-syllabus";
import { typescriptSyllabus } from "./typescript-syllabus";


const subjectDetails: Record<string, { title: string; content: string }> = {
  javascript: {
    title: "JavaScript",
    content:
      "Learn JavaScript from basics to advanced concepts including ES6+, async programming, and more.",
  },
  react: {
    title: "React",
    content:
      "Master React for building modern, scalable frontend applications with hooks, state management, and best practices.",
  },
  typescript: {
    title: "TypeScript",
    content:
      "Learn TypeScript to add static typing to your JavaScript projects, improve code quality, and enhance developer experience.",
  },
  next: {
    title: "Next.js",
    content:
      "Learn Next.js to build fast, SEO-friendly React applications with server-side rendering and static site generation.",
  },
  node: {
    title: "Node.js",
    content:
      "Master Node.js for building scalable backend applications, REST APIs, and real-time services with JavaScript.",
  },
  python: {
    title: "Python",
    content:
      "Learn Python for AI, web development, data science, automation, and more with its simple syntax and powerful libraries.",
  },
  mongodb: {
    title: "MongoDB",
    content:
      "Master MongoDB, a popular NoSQL database, to store and manage data for modern applications with flexibility and scalability.",
  },
  express: {
    title: "Express.js",
    content:
      "Learn Express.js to build fast, minimalist web applications and APIs with Node.js, handling routing, middleware, and more.",
  },
};

const syllabusData: Record<
  string,
  {
    title: string;
    sections: {
      title: string;
      icon: any;
      topics: { title: string; slug: string, icon?: any, iconBgClassName?: string, thumbnail?: string }[];
    }[];
  }
> = {
  javascript: javascriptSyllabus,
  react: reactSyllabus,
  typescript: typescriptSyllabus,
  next: nextjsSyllabus,
  node: nodejsSyllabus,
  python: pythonSyllabus,
  mongodb: mongodbSyllabus,
  express: expressSyllabus,
};

export {
    subjectDetails,
    syllabusData,
}