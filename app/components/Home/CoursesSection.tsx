'use client'
import React from 'react'
import { Container } from '../basic/Container'
import { Section } from '../basic/Section'
import { CourseCard } from './CourseCard';
import { useRouter } from 'next/navigation';

const courses = [
    { name: "Javascript", slug: 'javascript', label: "Progress course", progress: 60, icon: "🐍", bgClassName: "bg-blue-950" },
    { name: "React", slug: 'react', label: "Progress course", progress: 35, icon: "💻", bgClassName: "bg-blue-900" },
    { name: "Next", slug: 'next', label: "Progress course", progress: 60, icon: "🐍", bgClassName: "bg-blue-950" },
    { name: "Node", slug: 'node', label: "Progress course", progress: 60, icon: "🐍", bgClassName: "bg-blue-950" },
    { name: "Python", slug: 'python', label: "Progress course", progress: 60, icon: "🐍", bgClassName: "bg-blue-950" },
];

function CoursesSection() {

    const router = useRouter();

  return (
         <Container>
           <Section id="available-subjects" title="">
            <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Featured Courses</h2>
          <a href="#" className="text-sm text-blue-500 hover:underline">See all</a>
        </div>
             <div className="grid md:grid-cols-4 gap-8">
               {courses.map((course) => (
                <CourseCard
                key={course.slug}
                    label={course.label}
                    name={course.name}
                    progress={course.progress}
                    thumbnail={`/images/course-images/${course.slug}.png`}
                    onClick={() => router.push(`/learn/${course.slug}`)}
                />
               ))}
             </div>
           </Section>
         </Container>
  )
}

export default CoursesSection
