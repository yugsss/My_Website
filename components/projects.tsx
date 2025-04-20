"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code, Monitor } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Repository {
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
}

// Replace the projectShowcases array with the updated projects

const projectShowcases = [
  {
    name: "File Integrity Checker",
    description:
      "A tool for monitoring and verifying file integrity to detect unauthorized modifications or corruptions.",
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    technologies: ["Python", "Cryptography", "Hash Functions", "System Monitoring"],
    features: [
      "Real-time file monitoring",
      "Cryptographic hash verification",
      "Tamper detection alerts",
      "Detailed change logging",
    ],
  },
  {
    name: "Nmap-Assistant",
    description:
      "An interactive assistant for Nmap scanning that simplifies network reconnaissance and vulnerability assessment.",
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    technologies: ["Python", "Nmap", "Network Security", "CLI"],
    features: [
      "Simplified Nmap command generation",
      "Scan result interpretation",
      "Vulnerability correlation",
      "Reporting and visualization",
    ],
  },
  {
    name: "Digital Library Layout",
    description: "Virtual environment for digital resources using Cisco Packet Tracer with enhanced security measures.",
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    technologies: ["Cisco Packet Tracer", "Networking", "Security", "Database"],
    features: [
      "Secure resource access",
      "Network topology visualization",
      "User authentication system",
      "Resource management interface",
    ],
  },
]

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [activeProject, setActiveProject] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalProject, setModalProject] = useState(0)
  const showcaseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        // List of specific repositories you want to display (in the order you want them to appear)
        const featuredRepoNames = [
          "nmap-assistant",
          "File-Integrity-Checker",
          "port-scanner",
          "Google-Maps-API_Recoding-Latitude-and-Longitude",
          "HTB-Writeups",
          "Book-App",
        ]

        const response = await fetch("https://api.github.com/users/yugsss/repos?per_page=100")
        if (response.ok) {
          const allRepos = await response.json()

          // First, try to find and order the specifically named repositories
          const featuredRepos = featuredRepoNames
            .map((name) =>
              allRepos.find(
                (repo) =>
                  repo.name.toLowerCase() === name.toLowerCase() ||
                  repo.name.toLowerCase().replace(/-/g, "") === name.toLowerCase().replace(/-/g, ""),
              ),
            )
            .filter((repo) => repo !== undefined)

          // If we don't have enough featured repos, fill in with other repos
          let finalRepos = [...featuredRepos]

          if (finalRepos.length < 6) {
            // Add other repos that aren't already included, excluding GitHub Pages repos
            const otherRepos = allRepos
              .filter((repo) => !repo.name.includes(".github.io") && !featuredRepos.some((r) => r.name === repo.name))
              .slice(0, 6 - finalRepos.length)

            finalRepos = [...finalRepos, ...otherRepos]
          }

          setRepos(finalRepos)
        }
      } catch (error) {
        console.error("Error fetching repos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()

    // Auto-rotate project images
    const imageInterval = setInterval(() => {
      setActiveImage((prev) => (prev < projectShowcases[activeProject].images.length - 1 ? prev + 1 : 0))
    }, 5000)

    return () => clearInterval(imageInterval)
  }, [activeProject])

  // Fallback projects in case GitHub API fails or has no pinned repos
  const displayRepos =
    repos.length > 0
      ? repos
      : projectShowcases.map((p) => ({
          name: p.name,
          description: p.description,
          html_url: "https://github.com/yugsss",
          homepage: "",
          topics: p.technologies.map((t) => t.toLowerCase()),
        }))

  const nextProject = () => {
    setActiveProject((prev) => (prev < projectShowcases.length - 1 ? prev + 1 : 0))
    setActiveImage(0)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev > 0 ? prev - 1 : projectShowcases.length - 1))
    setActiveImage(0)
  }

  const openProjectModal = (index: number) => {
    setModalProject(index)
    setShowModal(true)
    document.body.style.overflow = "hidden"
  }

  const closeProjectModal = () => {
    setShowModal(false)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="text-3xl font-bold relative inline-block"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: false }}
          >
            <motion.span className="relative z-10 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Featured Projects
            </motion.span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            />
          </motion.h2>
        </motion.div>

        {/* Interactive Project Showcase */}
        <div className="mb-20" ref={showcaseRef}>
          {/* Update the showcase section to move navigation buttons below the container */}
          {/* Replace the div with the absolute buttons with this: */}
          <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-[#222] shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <motion.div
                className="relative aspect-video overflow-hidden rounded-lg bg-black/50"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={`${activeProject}-${activeImage}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${activeProject}-${activeImage}`}
                      src={projectShowcases[activeProject].images[activeImage]}
                      alt={`${projectShowcases[activeProject].name} screenshot`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 gap-2">
                  {projectShowcases[activeProject].images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeImage ? "bg-white scale-125" : "bg-white/30"
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent cursor-pointer"
                  onClick={() => openProjectModal(activeProject)}
                >
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="text-xs text-white/70 bg-black/50 px-2 py-1 rounded">Click to view details</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 bg-black/50 backdrop-blur-sm border-white/10 hover:bg-black/70"
                      >
                        <Monitor className="h-4 w-4 mr-1" /> Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 bg-black/50 backdrop-blur-sm border-white/10 hover:bg-black/70"
                      >
                        <Code className="h-4 w-4 mr-1" /> Code
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col justify-between"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={`info-${activeProject}`}
              >
                <div>
                  <motion.h3
                    className="text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {projectShowcases[activeProject].name}
                  </motion.h3>
                  <motion.p
                    className="text-white/70 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {projectShowcases[activeProject].description}
                  </motion.p>

                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h4 className="text-sm font-semibold text-white/90 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {projectShowcases[activeProject].technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="text-sm font-semibold text-white/90 mb-2">Key Features</h4>
                    <ul className="space-y-1 list-disc pl-5">
                      {projectShowcases[activeProject].features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="text-sm text-white/70"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <motion.div
                  className="flex gap-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button
                    onClick={() => openProjectModal(activeProject)}
                    className="bg-white text-black hover:bg-white/90"
                  >
                    View Details
                  </Button>
                  <Button variant="outline">
                    <Github className="h-4 w-4 mr-2" /> GitHub
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          {/* Add this after the showcase container div */}
          <div className="flex justify-center items-center mt-6 mb-10 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-black/50 backdrop-blur-sm border-white/10 hover:bg-black/70"
              onClick={prevProject}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {projectShowcases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeProject ? "bg-white scale-125" : "bg-white/30"
                  }`}
                  aria-label={`View project ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="bg-black/50 backdrop-blur-sm border-white/10 hover:bg-black/70"
              onClick={nextProject}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Project Grid */}
        <h3 className="text-xl font-semibold mb-6 text-center">More Projects</h3>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-[#111] border-[#222] h-64 animate-pulse">
                <CardContent className="p-0"></CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayRepos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="bg-[#111] border-[#222] h-full flex flex-col hover:border-white/20 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                  <CardHeader>
                    <CardTitle className="text-xl">{repo.name}</CardTitle>
                    <CardDescription className="line-clamp-2 h-24">
                      {repo.description || "A cool project by Yugam Chheda"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {(repo.topics || ["cybersecurity", "project"]).slice(0, 3).map((topic) => (
                        <span key={topic} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-[#222] pt-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div
              className="bg-[#111] border border-[#333] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">{projectShowcases[modalProject].name}</h3>
                  <Button variant="ghost" size="icon" onClick={closeProjectModal} className="hover:bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-black/50 mb-4">
                      <img
                        src={projectShowcases[modalProject].images[activeImage] || "/placeholder.svg"}
                        alt={`${projectShowcases[modalProject].name} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex gap-2 mb-6">
                      {projectShowcases[modalProject].images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImage(idx)}
                          className={`w-16 h-24 rounded overflow-hidden border-2 transition-all ${
                            idx === activeImage ? "border-white" : "border-transparent"
                          }`}
                        >
                          <img
                            src={projectShowcases[modalProject].images[idx] || "/placeholder.svg"}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button className="bg-white text-black hover:bg-white/90">
                        <Monitor className="h-4 w-4 mr-2" /> Live Demo
                      </Button>
                      <Button variant="outline">
                        <Github className="h-4 w-4 mr-2" /> View Code
                      </Button>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
                      <p className="text-white/70">{projectShowcases[modalProject].description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectShowcases[modalProject].technologies.map((tech, i) => (
                          <span key={i} className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2 list-disc pl-5">
                        {projectShowcases[modalProject].features.map((feature, i) => (
                          <li key={i} className="text-white/70">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
