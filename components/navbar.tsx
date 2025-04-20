"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["home", "projects", "work", "certifications", "about", "contact"]

      // Find the section that is currently in view
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the section is in the viewport (with some buffer for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
      <div className="bg-[rgba(20,10,30,0.7)] backdrop-blur-md px-8 py-3 rounded-full">
        <nav className="flex items-center space-x-8 md:space-x-12">
          {[
            { id: "home", label: "Home" },
            { id: "projects", label: "Projects" },
            { id: "work", label: "Work" },
            { id: "certifications", label: "Certificates" },
            { id: "about", label: "About" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`nav-link text-lg font-medium transition-all duration-300 ${
                activeSection === id ? "active text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute right-6 p-2 rounded-full bg-transparent hover:bg-white/10 transition-colors"
        aria-label="Toggle theme"
      >
        {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
    </header>
  )
}
