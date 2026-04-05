import Image from "next/image";
import { GradientButton, PrimaryButton } from "./components/basic/Button";
import { Card } from "./components/basic/Card";
import { Container } from "./components/basic/Container";
import { Section } from "./components/basic/Section";
import HeroBanner from "./components/Home/HeroBanner";
import CoursesSection from "./components/Home/CoursesSection";
import BlogSection from "./components/Home/BlogSection";


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
