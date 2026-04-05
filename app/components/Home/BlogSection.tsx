import React from 'react'
import { Container } from '../basic/Container'
import { Section } from '../basic/Section'
import { BlogCard } from './BlogCard';
import { TutorialItem } from './TutorialItem';

const blogs = [
  { title: "Top 10 AI Tools", author: "Author Author", date: "Jul 15, 2025", icon: "🤖", bgClassName: "bg-indigo-950", avatarBgClassName: "bg-blue-100", avatarColorClassName: "text-blue-800", authorInitial: "A" },
  { title: "Mastering JavaScript", author: "Juther Author", date: "Jul 12, 2025", icon: "🟡", bgClassName: "bg-yellow-950", avatarBgClassName: "bg-yellow-100", avatarColorClassName: "text-yellow-800", authorInitial: "J" },
  { title: "Cloud Computing 101", author: "Author Author", date: "Jul 16, 2025", icon: "☁️", bgClassName: "bg-slate-900", avatarBgClassName: "bg-green-100", avatarColorClassName: "text-green-800", authorInitial: "A" },
];

const tutorials = [
  { title: "Top 10 AI Tools and Stay Muerta", date: "5 minutes ago", icon: "🤖", bgClassName: "bg-sky-100" },
  { title: "Mastering JavaScript and Ray Wiord Der...", date: "4 days ago", icon: "📝", bgClassName: "bg-yellow-100" },
  { title: "Cloud Computing to Mehog sevadergt", date: "2 days ago", icon: "☁️", bgClassName: "bg-green-100" },
  { title: "Featured Computing Cloud", date: "7 days ago", icon: "🖥️", bgClassName: "bg-violet-100" },
];

function BlogSection() {
  return (
    <Container>
      <Section title="">
<div className="md:grid grid-cols-[1.6fr_1fr] gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Latest from the Blog</h2>
            <div className="flex gap-1.5">
          <a href="#" className="text-sm text-blue-500 hover:underline">See all</a>

              {/* <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-500">←</button>
              <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-500">→</button> */}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {blogs.map((b, i) => <BlogCard key={i} {...b} />)}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Featured Tutorials</h2>
          <div>
            {tutorials.map((t, i) => <TutorialItem key={i} {...t} />)}
          </div>
        </div>
      </div>
      </Section>
    </Container>
  )
}

export default BlogSection
