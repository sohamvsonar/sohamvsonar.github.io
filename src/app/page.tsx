import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { RecentAchievements } from "@/components/recent-achievements"
import { GitHubContributions } from "@/components/github-contributions"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <GitHubContributions />
      <RecentAchievements />
      <Skills />
      <Contact />
    </main>
  )
}