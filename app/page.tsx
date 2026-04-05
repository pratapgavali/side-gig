import Image from "next/image";
import { Metadata } from "next";
import { GradientButton, PrimaryButton } from "./components/basic/Button";
import { Card } from "./components/basic/Card";
import { Container } from "./components/basic/Container";
import { Section } from "./components/basic/Section";
import HeroBanner from "./components/Home/HeroBanner";
import CoursesSection from "./components/Home/CoursesSection";
import BlogSection from "./components/Home/BlogSection";
import { generateMetadata } from "../lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Home",
  description: "Learn programming and web development with our comprehensive courses. Master JavaScript, React, Node.js, and more.",
  keywords: ["programming courses", "learn coding", "web development", "javascript tutorial", "react course"],
  ogType: "website",
});

export default function Home() {
  const subjects = [
    { title: "JavaScript", slug: "javascript" },
    { title: "React", slug: "react" },
  ];

  return (
    <main>
      {/* <Navbar /> */}

      {/* Hero Banner */}
      <HeroBanner />

      {/* <Container> */}
        <CoursesSection />
        <BlogSection />
      {/* </Container> */}

      {/* CTA */}
      {/* <section className="text-center py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h3>
        <p className="text-gray-400 mb-6">Consistent learning leads to big results.</p>
        <GradientButton href="/learn">Explore All Subjects</GradientButton>
      </section> */}

      {/* <Footer /> */}
    </main>
  );
}
