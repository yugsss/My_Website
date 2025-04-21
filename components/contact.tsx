"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Mail, Github, BookOpen, Twitter, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 50 },
    },
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative overflow-hidden" ref={ref}>
      <div className="circle-blur circle-blur-1" style={{ top: "60%", left: "10%" }}></div>
      <div className="circle-blur circle-blur-2" style={{ top: "20%", right: "10%" }}></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-12">Lets Connect!</h2>

            <div className="space-y-8">
              <a
                href="mailto:yugamchheda31@gmail.com"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>Send me a mail</span>
              </a>

              <a
                href="https://github.com/yugsss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                  <Github className="h-5 w-5" />
                </div>
                <span>View my work on Github</span>
              </a>

              <a
                href="https://app.hackthebox.com/ychheda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span>Check my profile on Hack the Box</span>
              </a>

              <a
                href="https://www.instagram.com/chhedayugam/"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                  <Twitter className="h-5 w-5" />
                </div>
                <span>Follow me on Instagram </span>
              </a>

              <a
                href="https://linkedin.com/in/yugam-chheda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span>Connect with me on Linkedin</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <form onSubmit={handleSubmit} className="contact-form space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitted && (
                <div className="bg-green-500/20 text-green-400 p-4 rounded-md text-center">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
