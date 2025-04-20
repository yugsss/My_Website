"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const workExperience = [
  {
    title: "Graduate Teaching Assistant Fellowship",
    company: "CI Compass Cyberinfrastructure",
    period: "Feb 2024 – Jul 2024",
    description: [
      "Developed and established four innovative solutions for NSF-funded research projects, directly contributing findings that addressed the three most critical challenges in cyberinfrastructure efficiency during the fellowship period.",
      "Led a class of nearly 25 students, providing personalized mentorship and feedback on assignments, resulting in a 20% improvement in students' practical skills and project outcomes.",
    ],
  },
  {
    title: "Software Analyst (Database Security)",
    company: "Capgemini Technology Service Limited",
    period: "Jul 2022 – Jul 2023",
    description: [
      "Evaluated and installed database management systems for 8 different clients.",
      "Managed standard DBA tasks, including securing databases, managing space, monitoring performance, installing critical patches resulting in a 80% uptime rate also maintained documentation for over 70 new or amended procedures.",
      "Configured parameter group and supervised IP traffic using a security group, ensuring secure access to the database; significantly mitigated potential security threats and unauthorized access.",
    ],
  },
  {
    title: "Cyber Security Intern",
    company: "GajShield Infotech Pvt Ltd",
    period: "May 2021 – Jun 2022",
    description: [
      "Analyzed vulnerability assessments of applications and penetration tests and launched exploits using various open source and commercial tools such as Nmap, Netcat, and Hping.",
      "Established firewall rules, scrutinized and validated all ports for robust security, and subjected firewalls to rigorous Denial of Service (DoS) tests, yielding a 40% efficacy rate in mitigating attacks.",
      "Executed comprehensive monitoring and management of perimeter security systems for a network exceeding 20 servers, ensuring seamless functionality of firewalls and IDM to enhance overall security posture using Splunk (SPL).",
    ],
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="flex justify-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-center relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <motion.span
              className="relative z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: false }}
            >
              Work Experience
            </motion.span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            />
          </motion.h2>
        </div>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                stiffness: 50,
              }}
              viewport={{ once: false, margin: "-100px" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
                transition: { duration: 0.2 },
              }}
            >
              <Card className="bg-[#111] border-[#222] hover:border-white/20 transition-all">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          viewport={{ once: false }}
                        >
                          {job.title}
                        </motion.span>
                      </CardTitle>
                      <CardDescription className="text-white/70">{job.company}</CardDescription>
                    </div>
                    <motion.span
                      className="text-sm text-white/50 bg-white/5 px-3 py-1 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: false }}
                    >
                      {job.period}
                    </motion.span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5">
                    {job.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="text-white/80"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + i * 0.1 }}
                        viewport={{ once: false }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
