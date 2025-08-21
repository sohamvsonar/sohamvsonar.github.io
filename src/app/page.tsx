import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      
      {/* Placeholder sections for future phases */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-muted/50">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About</h2>
          <p className="text-muted-foreground">Coming in Phase 2</p>
        </div>
      </section>
      
      <section id="experience" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">Coming in Phase 3</p>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen flex items-center justify-center bg-muted/50">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">Coming in Phase 4</p>
        </div>
      </section>
      
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">Coming in Phase 5</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center bg-muted/50">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground">Coming in Phase 6</p>
        </div>
      </section>
    </main>
  )
}