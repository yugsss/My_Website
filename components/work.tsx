"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Update the workExperience array with the new job details
const workExperience = [
  {
    title: "Cyber Security Analyst",
    company: "M&T Bank, USA",
    period: "Aug 2024 – Present",
    description: [
      "Engineered and implemented AES-256 encryption for securing sensitive customer data stored in AWS S3 and internal databases, ensuring both at-rest and in-transit encryption compliance.",
      "Deployed and configured Splunk SIEM across AWS EC2 environments, enabling real-time threat detection and reducing response time to security incidents by 40%.",
      "Integrated Okta for identity and access management; enforced MFA and role-based access to enhance authentication security across financial systems.",
      "Developed AI-driven anomaly detection models using Amazon Lookout for Metrics, enabling classification and prioritization of threats based on behavioral patterns.",
      "Strengthened network defense by deploying Palo Alto Firewalls and Snort IDS, identifying and mitigating port scanning and unauthorized access attempts.",
    ],
  },
  {
    title: "SOC Analyst",
    company: "Hellinex Cloud, India",
    period: "Jul 2022 – Jul 2023",
    description: [
      "Monitored cloud infrastructure using AWS GuardDuty to detect unauthorized API calls, abnormal network traffic, and potential security threats, reducing response times by 30%.",
      "Configured and optimized Splunk SIEM to aggregate security logs, setting up automated alerts for anomalies and potential data breaches, enhancing real-time threat detection.",
      "Deployed and managed CrowdStrike for endpoint protection, ensuring real-time malware and ransomware detection, and preventing the spread of cyber threats across the cloud network.",
      "Implemented AWS Config for continuous monitoring and assessment of cloud resources to ensure compliance with industry standards such as GDPR and ISO 27001, reducing audit workload by 50%.",
      "Led the configuration of Tenable.io to perform vulnerability scanning on cloud services like EC2 instances and storage buckets, identifying and mitigating risks to maintain a secure environment.",
    ],
  },
  {
    title: "Cyber Security Analyst",
    company: "GajShield Infotech Pvt Ltd, India",
    period: "Feb 2021 – Jun 2022",
    description: [
      "Conducted vulnerability assessments and penetration testing on over 50+ enterprise applications using tools like Nmap, Netcat, and Hping, identifying critical security gaps and helping mitigate risks across the infrastructure.",
      "Developed and enforced firewall rules by monitoring, validating, and restricting port access; performed Denial-of-Service (DoS) simulations to test robustness and enhance firewall effectiveness by 40%.",
      "Managed and monitored perimeter security systems and firewalls across 20+ servers, ensuring uninterrupted network protection and implementing continuous IDM (Intrusion Detection & Monitoring) protocols using Splunk (SPL).",
      "Identified and remediated scripting vulnerabilities, ensuring firewall systems safeguarded internal assets against exploitative threats through regular patching and real-time threat analysis.",
      "Assisted in implementation and support of CyberArk Privileged Access Management (PAM) solutions including Vault, PSM, CPM, and PTA, helping secure elevated credentials and reduce insider threat risk.",
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
