"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    title: "CEH (Certified Ethical Hacker)",
    issuer: "EC-Council",
    date: "2022",
    description: "Scored 96% (120/125 questions)",
    link: "https://drive.google.com/file/d/14UAcx_zk_QStWyk7dXm0udHWAH7GX9yt/view",
    skills: ["Ethical Hacking", "Penetration Testing", "Security Assessment"],
  },
  {
    title: "Learn Ethical Hacking From Scratch",
    issuer: "Udemy - Zaid Sabih",
    date: "2021",
    description: "Comprehensive course on ethical hacking methodologies and techniques",
    link: "https://www.udemy.com/certificate/UC-92e34bcf-05e6-4b4a-82b6-2195cfce1823/",
    skills: ["Network Scanning", "Vulnerability Assessment", "Exploitation"],
  },
  {
    title: "System Hacking and Security: Ethical Hacking",
    issuer: "Udemy - Cyber Security Online Training",
    date: "2021",
    description: "Advanced techniques in system security and ethical hacking",
    link: "https://www.udemy.com/certificate/UC-3c27b8b1-f7ac-4e06-9bfe-8e41a58514f0/",
    skills: ["System Security", "Privilege Escalation", "Post-Exploitation"],
  },
]

const achievements = [
  {
    title: "Graduating Class Rank 🎓",
    description:
      "Ranked in Top 5 of BSc IT graduating class, Jai Hind College with a GPA of 9.8/10 ",
    year: "2022",
  },
  {
    title: "Student Mentorship Excellence",
    description: "Led a class of 25 students resulting in 20% improvement in practical skills and project outcomes",
    year: "2024",
  },
  {
    title: "National Level Sprinter 🏃‍♂️",
    description: "Represented Maharashtra in National Track Events (200m & 400m) & successfully completed 30+ marathon finisher for charity purpose",
    year: "2020",
  },
]

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  }

  return (
    <section id="certifications" className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="container mx-auto"
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
              Certifications & Achievements
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-purple-400" />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-[#111] border-[#222] overflow-hidden relative">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: false }}
                    />
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{cert.title}</CardTitle>
                          <CardDescription className="text-white/70">
                            {cert.issuer} • {cert.date}
                          </CardDescription>
                        </div>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 hover:text-white transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-4">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <CheckCircle className="mr-2 h-6 w-6 text-blue-400" />
              Achievements
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-[#111] border-[#222] overflow-hidden relative">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: false }}
                    />
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{achievement.title}</CardTitle>
                        <span className="text-sm text-white/50 bg-white/5 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
