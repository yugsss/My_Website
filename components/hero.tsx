"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  // ✅ NEW: Audio refs
  const swooshAudio = useRef<HTMLAudioElement | null>(null)
  const typingAudio = useRef<HTMLAudioElement | null>(null)

  // Text reveal animation
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const [headingText, setHeadingText] = useState("I'm Yugam Chheda")

  // Subtitle typewriter animation
  const fullSubtitle =
    "A cybersecurity professional blending technical expertise and innovation to build secure and resilient systems."
  const [subtitle, setSubtitle] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  // Button text animations
  const [contactText, setContactText] = useState("Contact Me")
  const [resumeText, setResumeText] = useState("Download Resume")
  const [buttonsVisible, setButtonsVisible] = useState(false)

  // Heading text scramble animation
  useEffect(() => {
    if (!isInView) return

    // ✅ Play swoosh sound once
    if (swooshAudio.current) {
      swooshAudio.current.play().catch((e) => console.log("Swoosh audio error:", e))
    }

    let iteration = 0
    const originalText = "I'm Yugam Chheda"

    const interval = setInterval(() => {
      setHeadingText((prevText) => {
        return originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index]
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("")
      })

      iteration += 1 / 3

      if (iteration >= originalText.length) {
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [isInView])

  // Subtitle typewriter animation
  useEffect(() => {
    if (!isInView) return

    let i = 0
    const typingSpeed = 30
    const startDelay = 1900

    const typingTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (i < fullSubtitle.length) {
          setSubtitle(fullSubtitle.slice(0, i + 1))
          i++

          // ✅ Play typing sound
          if (typingAudio.current) {
            typingAudio.current.play().catch(() => {})
          }
        } else {
          clearInterval(typingInterval)
          typingAudio.current?.pause()
          typingAudio.current!.currentTime = 0

          setButtonsVisible(true)
        }
      }, typingSpeed)

      return () => clearInterval(typingInterval)
    }, startDelay)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => {
      clearTimeout(typingTimeout)
      clearInterval(cursorInterval)
    }
  }, [isInView, fullSubtitle])

  const handleContactHover = () => {
    setContactText("Let's Talk →")
  }

  const handleContactLeave = () => {
    setContactText("Contact Me")
  }

  const handleResumeHover = () => {
    setResumeText("Get My CV →")
  }

  const handleResumeLeave = () => {
    setResumeText("Download Resume")
  }

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

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-4 md:px-8" ref={ref}>
      <div className="circle-blur circle-blur-1"></div>
      <div className="circle-blur circle-blur-2"></div>
      <div className="circle-blur circle-blur-3"></div>

      <motion.div
        className="text-center max-w-3xl z-10 pt-20 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white mx-auto"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: false }}
        >
          {headingText}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto h-[80px] md:h-[120px]"
          variants={itemVariants}
        >
          {subtitle}
          <span
            className={`inline-block w-[2px] h-[1em] bg-white ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100 ${subtitle.length >= fullSubtitle.length ? "hidden" : ""}`}
          ></span>
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={itemVariants}
          animate={buttonsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Link
            href="#contact"
            className="px-6 py-3 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] text-white rounded-md flex items-center gap-2 transition-all"
            onMouseEnter={handleContactHover}
            onMouseLeave={handleContactLeave}
          >
            <span>{contactText}</span>
            {contactText === "Contact Me" && <ArrowRight className="h-4 w-4" />}
          </Link>

          <a
            href="https://drive.google.com/uc?export=download&id=1F8iSrn0uW44JuA3TT6I4tWcaB4rmaXXT"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] text-white rounded-md flex items-center gap-2 transition-all"
            onMouseEnter={handleResumeHover}
            onMouseLeave={handleResumeLeave}
          >
            <span>{resumeText}</span>
            {resumeText === "Download Resume" && <Download className="h-4 w-4" />}
          </a>
        </motion.div>
      </motion.div>

      {/* ✅ NEW: Audio elements (hosted online) */}
      <audio ref={swooshAudio} src="https://raw.githubusercontent.com/yugsss/yugsss/main/swoop_1.mp3" preload="auto" />
      <audio ref={typingAudio} src="https://raw.githubusercontent.com/yugsss/yugsss/main/typing_2.mp3" preload="auto" />
    </section>
  )
}
