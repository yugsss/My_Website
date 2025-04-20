"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, GraduationCap, Code, Award, Briefcase, Heart, Star, Shield, Zap, Phone } from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState("about")
  const containerRef = useRef(null)
  const profileRef = useRef(null)
  const isProfileInView = useInView(profileRef, { once: false })

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])

  // Skills data with proficiency levels
  const skills = {
    operatingSystems: [
      { name: "Windows", proficiency: 90 },
      { name: "Kali Linux", proficiency: 85 },
      { name: "Parrot", proficiency: 80 },
      { name: "Mac OS", proficiency: 75 },
    ],
    databases: [
      { name: "MySQL", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "Oracle", proficiency: 75 },
      { name: "MS SQL", proficiency: 70 },
    ],
    securityTools: [
      { name: "Nmap", proficiency: 95 },
      { name: "Metasploit", proficiency: 90 },
      { name: "Wireshark", proficiency: 85 },
      { name: "Burp Suite", proficiency: 90 },
      { name: "Netcat", proficiency: 80 },
      { name: "Nikto", proficiency: 84 },
      { name: "Kismet", proficiency: 70 },
      { name: "Splunk", proficiency: 85 },
      { name: "Acunetix", proficiency: 80 },
      { name: "John the Ripper", proficiency: 85 },
      { name: "SQLmap", proficiency: 80 },
      { name: "Hydra", proficiency: 75 },
    ],
  }

  // Education data
  const education = [
    {
      degree: "Master's in Cyber Security and Trusted Systems",
      institution: "Purdue University, USA",
      period: "Aug 2023 – May 2025",
      courses:
        "Database Security, Wireless Security & Technology, Security Risk Assessment, Computer Security, Social Engineering & Mitigation, Cloud Security, Network Security, Mobile Network & Forensics",
      gpa: "4.0/4.0",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "purple",
    },
    {
      degree: "Bachelors of Science in Information Technology",
      institution: "Jai Hind College, Churchgate, Mumbai",
      period: "Jun 2019 – Apr 2022",
      courses:
        "Cyber Security, Big Data, Cloud Computing, IoT, Resource Management (RM), ERP, Machine Learning, Data Structure, DBMS, Advanced Python",
      gpa: "9.8/10",
      icon: <Award className="h-6 w-6" />,
      color: "blue",
    },
  ]

  // Personal traits
  const traits = [
    {
      icon: <Shield className="h-5 w-5 text-purple-400" />,
      title: "Security Focused",
      description: "Dedicated to identifying and mitigating security vulnerabilities",
    },
    {
      icon: <Zap className="h-5 w-5 text-yellow-400" />,
      title: "Fast Learner",
      description: "Quickly adapts to new technologies and methodologies",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-blue-400" />,
      title: "Professional",
      description: "Maintains high standards of work ethics and delivery",
    },
    {
      icon: <Heart className="h-5 w-5 text-red-400" />,
      title: "Passionate",
      description: "Deeply committed to cybersecurity and continuous improvement",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-8 overflow-hidden" ref={containerRef}>
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

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
            <motion.span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              About Me
            </motion.span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            />
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            ref={profileRef}
          >
            {/* Profile image with parallax effect */}
            <motion.div
              className="aspect-square rounded-xl overflow-hidden relative"
              style={{ y, opacity }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img src="/images/profile.jpeg" alt="Yugam Chheda" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Animated overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-500/40 via-transparent to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Profile info with staggered animation */}
            <motion.div
              className="mt-4 space-y-2"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate={isProfileInView ? "visible" : "hidden"}
            >
              <motion.h3
                className="text-xl font-semibold"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Yugam Chheda
              </motion.h3>
              <motion.p
                className="text-white/70"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Cybersecurity Professional
              </motion.p>
              <motion.p
                className="text-white/70"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Indianapolis, USA
              </motion.p>

              <motion.div
                className="flex gap-4 mt-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                  },
                }}
              >
                {[
                  { icon: "github", url: "https://github.com/yugsss" },
                  { icon: "linkedin", url: "https://linkedin.com/in/yugam-chheda" },
                  { icon: "mail", url: "mailto:yugamchheda31@gmail.com" },
                  { icon: "phone", url: "tel:+13174147918" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target={social.icon !== "phone" && social.icon !== "mail" ? "_blank" : ""}
                    rel={social.icon !== "phone" && social.icon !== "mail" ? "noopener noreferrer" : ""}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {social.icon === "github" && (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                      </svg>
                    )}
                    {social.icon === "linkedin" && (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                        <rect
                          x="2"
                          y="9"
                          width="4"
                          height="12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></rect>
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></circle>
                      </svg>
                    )}
                    {social.icon === "mail" && (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                        <polyline
                          points="22,6 12,13 2,6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></polyline>
                      </svg>
                    )}
                    {social.icon === "phone" && <Phone className="h-5 w-5" />}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Personal traits cards */}
            <div className="mt-8 space-y-3">
              {traits.map((trait, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  whileHover={{
                    x: 5,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="p-2 bg-white/10 rounded-full">{trait.icon}</div>
                  <div>
                    <h4 className="text-sm font-medium">{trait.title}</h4>
                    <p className="text-xs text-white/60">{trait.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume download button */}
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1Q1U8rH6MjR2pA7qgxNB5nG_RAoE1M2e8" // ← ✅ UPDATED
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <span>Download Resume</span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <Card className="bg-[#111] border-[#222] overflow-hidden">
              <CardContent className="p-6">
                <Tabs defaultValue="about" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="bg-[#222] mb-6 w-full justify-start">
                    <TabsTrigger
                      value="about"
                      className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-red-500/20 transition-all duration-300"
                    >
                      <User className="h-4 w-4" /> About
                    </TabsTrigger>
                    <TabsTrigger
                      value="education"
                      className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-purple-500/20 transition-all duration-300"
                    >
                      <GraduationCap className="h-4 w-4" /> Education
                    </TabsTrigger>
                    <TabsTrigger
                      value="skills"
                      className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-teal-500/20 transition-all duration-300"
                    >
                      <Code className="h-4 w-4" /> Skills
                    </TabsTrigger>
                  </TabsList>

                  <AnimatePresence mode="wait">
                    {activeTab === "about" && (
                      <TabsContent value="about" className="space-y-4 min-h-[300px] mt-0">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-lg leading-relaxed"
                          >
                            I'm Yugam Chheda, a cybersecurity graduate student at Purdue University, with a strong focus
                            on penetration testing, vulnerability assessment, and red teaming methodologies. My passion
                            lies in identifying system weaknesses and proactively securing digital infrastructures
                            through offensive security strategies.
                          </motion.p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <motion.div
                              className="bg-white/5 p-4 rounded-lg border border-white/10"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                            >
                              <h3 className="text-lg font-medium mb-2 flex items-center">
                                <Briefcase className="h-5 w-5 mr-2 text-purple-400" /> Professional Experience
                              </h3>
                              <p className="text-white/70 text-sm">
                                With hands-on experience as a Cyber Security Intern at GajShield Infotech, I conducted
                                real-world penetration tests, firewall assessments, and intrusion prevention tasks using
                                industry-standard tools. At Capgemini, I worked as a Software Analyst, managing database
                                security for enterprise clients.
                              </p>
                            </motion.div>

                            <motion.div
                              className="bg-white/5 p-4 rounded-lg border border-white/10"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                            >
                              <h3 className="text-lg font-medium mb-2 flex items-center">
                                <GraduationCap className="h-5 w-5 mr-2 text-blue-400" /> Academic Background
                              </h3>
                              <p className="text-white/70 text-sm">
                                Academically, I hold a Bachelor's in Information Technology and am currently pursuing
                                advanced coursework in Network Security, Cloud Security, and Security Risk Assessment.
                                My goal is to specialize in red team operations to strengthen defensive measures.
                              </p>
                            </motion.div>
                          </div>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-6"
                          >
                            Outside the lab, I'm a committed athlete — a national-level track sprinter representing
                            Maharashtra in the 200m and 400m events, a state-level basketball player, and a seasoned
                            marathon runner, having participated in 30+ events including several for social causes. My
                            discipline in sports mirrors my work ethic in cybersecurity: focused, strategic, and always
                            pushing limits.
                          </motion.p>

                          <motion.div
                            className="mt-8 p-5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-500/20"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{
                              scale: 1.02,
                              boxShadow: "0 0 20px rgba(219, 39, 119, 0.2)",
                            }}
                          >
                            <h4 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                              Why Cybersecurity?
                            </h4>
                            <p className="text-white/80">
                              My fascination with cybersecurity stems from the constant evolution of threats and
                              defenses in the digital landscape. I believe that understanding offensive security is
                              crucial to building robust defensive measures. Every system has vulnerabilities waiting to
                              be discovered, and I'm passionate about finding them before malicious actors do.
                            </p>
                          </motion.div>
                        </motion.div>
                      </TabsContent>
                    )}

                    {activeTab === "education" && (
                      <TabsContent value="education" className="space-y-4 min-h-[300px] mt-0">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="relative"
                        >
                          {/* Timeline line */}
                          <motion.div
                            className="absolute left-[22px] top-2 bottom-20 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          />

                          {education.map((item, index) => (
                            <motion.div
                              key={index}
                              className="relative pl-16 mb-10"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.3 }}
                            >
                              {/* Timeline dot */}
                              <motion.div
                                className={`absolute left-0 top-2 w-11 h-11 rounded-full bg-gradient-to-r ${
                                  item.color === "purple"
                                    ? "from-purple-500 to-pink-500"
                                    : "from-blue-500 to-purple-500"
                                } flex items-center justify-center text-white shadow-lg shadow-${item.color}-500/20`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.3, type: "spring" }}
                                whileHover={{ scale: 1.1, rotate: 10 }}
                              >
                                {item.icon}
                              </motion.div>

                              <motion.div
                                className={`bg-gradient-to-br from-[#191919] to-[#111] p-5 rounded-lg border border-[#333] hover:border-${item.color}-500/50 transition-all duration-300 shadow-lg shadow-black/20`}
                                whileHover={{
                                  y: -5,
                                  boxShadow:
                                    item.color === "purple"
                                      ? "0 10px 25px -5px rgba(168, 85, 247, 0.2)"
                                      : "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                                }}
                              >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                                  <h4
                                    className={`font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r ${
                                      item.color === "purple"
                                        ? "from-purple-400 to-pink-400"
                                        : "from-blue-400 to-purple-400"
                                    }`}
                                  >
                                    {item.degree}
                                  </h4>
                                  <motion.span
                                    className="text-sm text-white/50 bg-white/5 px-3 py-1 rounded-full"
                                    whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                                  >
                                    {item.period}
                                  </motion.span>
                                </div>
                                <p className="text-white/70 mb-2">{item.institution}</p>
                                <p className="text-white/60 text-sm mb-2">
                                  <span className="font-medium text-white/80">Coursework:</span> {item.courses}
                                </p>
                                <p className="text-white/70 text-sm">
                                  <span className="font-medium">GPA:</span>{" "}
                                  <span className="text-green-400">{item.gpa}</span>
                                </p>

                                {/* Animated highlight on hover */}
                                <motion.div
                                  className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"
                                  whileHover={{ width: "100%" }}
                                  transition={{ duration: 0.3 }}
                                />
                              </motion.div>
                            </motion.div>
                          ))}

                          <motion.div
                            className="mt-8 p-5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 ml-16"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{
                              scale: 1.02,
                              boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                            }}
                          >
                            <h4 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                              Continuous Learning
                            </h4>
                            <p className="text-white/80">
                              Beyond formal education, I'm committed to continuous learning through online courses,
                              capture-the-flag competitions, and security conferences. The cybersecurity field evolves
                              rapidly, and staying current with emerging threats and defense techniques is essential.
                            </p>
                          </motion.div>
                        </motion.div>
                      </TabsContent>
                    )}

                    {activeTab === "skills" && (
                      <TabsContent value="skills" className="min-h-[300px] mt-0">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <h4 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                                Operating Systems
                              </h4>
                              <div className="space-y-4">
                                {skills.operatingSystems.map((skill, i) => (
                                  <motion.div
                                    key={i}
                                    className="space-y-1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                                  >
                                    <div className="flex justify-between items-center">
                                      <span>{skill.name}</span>
                                      <span className="text-xs text-white/60">{skill.proficiency}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                      <motion.div
                                        className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.proficiency}%` }}
                                        transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                                      />
                                    </div>
                                  </motion.div>
                                ))}
                              </div>

                              <h4 className="font-semibold mb-4 mt-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                                Databases
                              </h4>
                              <div className="space-y-4">
                                {skills.databases.map((skill, i) => (
                                  <motion.div
                                    key={i}
                                    className="space-y-1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                                  >
                                    <div className="flex justify-between items-center">
                                      <span>{skill.name}</span>
                                      <span className="text-xs text-white/60">{skill.proficiency}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                      <motion.div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.proficiency}%` }}
                                        transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                                      />
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <h4 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                Security Tools
                              </h4>
                              <div className="grid grid-cols-2 gap-3">
                                {skills.securityTools.map((skill, i) => (
                                  <motion.div
                                    key={i}
                                    className="bg-white/5 rounded-lg p-3 flex flex-col"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                                    whileHover={{
                                      y: -3,
                                      backgroundColor: "rgba(255,255,255,0.1)",
                                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                    }}
                                  >
                                    <div className="flex justify-between items-center mb-2">
                                      <span className="text-sm font-medium">{skill.name}</span>
                                      <Star className="h-3 w-3 text-yellow-400" />
                                    </div>
                                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-auto">
                                      <motion.div
                                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.proficiency}%` }}
                                        transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                                      />
                                    </div>
                                  </motion.div>
                                ))}
                              </div>

                              <motion.div
                                className="mt-8 p-4 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-lg border border-green-500/20"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                whileHover={{
                                  scale: 1.02,
                                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
                                }}
                              >
                                <h4 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                                  Continuous Skill Development
                                </h4>
                                <p className="text-white/80">
                                  I regularly participate in CTF competitions, bug bounty programs, and hands-on labs to
                                  sharpen my technical skills. This practical experience complements my theoretical
                                  knowledge and keeps me updated with the latest attack vectors and defense mechanisms.
                                </p>
                              </motion.div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </TabsContent>
                    )}
                  </AnimatePresence>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
