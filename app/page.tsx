import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Work from "@/components/work"
import Certifications from "@/components/certifications"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0618] text-white overflow-x-hidden">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Projects />
        <Work />
        <Certifications />
        <About />
        <Contact />
      </div>
    </main>
  )
}
