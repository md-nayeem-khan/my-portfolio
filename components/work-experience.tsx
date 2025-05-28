"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    id: 1,
    position: "Senior Software Engineer",
    company: "Enosis Solutions",
    companyUrl: "https://www.linkedin.com/company/enosis-solutions/",
    positionLogo: "SSE",
    companyColor: "bg-purple-600",
    timelineColor: "border-purple-500",
    duration: "2023 - Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    responsibilities: [
      "Leading design and development of distributed, cloud-native backend systems for high availability financial platforms.",
      "Architected and integrated Redis-backed caching layers, reducing API latency by over 35% for critical financial reports.",
      "Initiated and led a system-wide performance optimization project, increasing system throughput by 30%.",
      "Developed high traffic APIs, improving response times by 25% through query optimization and caching.",
      "Spearheaded R&D initiatives that enhanced data processing performance.",
      "Diagnosed and resolved over 120+ issues, ensuring 99.9% system uptime.",
      "Collaborated in cross functional product meetings to drive feature roadmaps and technical decision making."
    ],
    achievements: [],
  },
  {
    id: 2,
    position: "Software Engineer",
    company: "Enosis Solutions",
    companyUrl: "https://www.linkedin.com/company/enosis-solutions/",
    positionLogo: "SE",
    companyColor: "bg-pink-600",
    timelineColor: "border-pink-500",
    duration: "2021 - 2022",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    responsibilities: [
      "Developed microservices for enterprise SaaS products, integrating with Spring boot, MySQL, Redis and AWS services.",
      "Implemented features for user management, analytics, and financial reporting modules.",
      "Implemented customer‑facing web features using AngularJS and Angular.",
      "Delivered bug fixes and feature enhancements with strong adherence to deadlines and quality benchmarks.",
    ],
    achievements: [],
  }
]

function ExperienceCard({ experience, index }: { experience: any; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative flex items-start gap-8"
    >
      {/* Enhanced position logo */}
      <motion.div className="flex-shrink-0">
        <div
          className={`w-16 h-16 ${experience.companyColor} rounded-full flex items-center justify-center text-white font-bold text-xl`}
        >
          {experience.positionLogo}
        </div>
      </motion.div>

      {/* Enhanced experience details */}
      <motion.div className="flex-1 min-w-0">
        <div>
          {/* Header */}
          <div className="mb-6">
            <motion.h3 className="text-2xl font-bold text-white mb-2">{experience.position}</motion.h3>

            <motion.div className="text-xl font-semibold text-purple-400 mb-4">
              <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {experience.company}
              </a>
            </motion.div>

            {/* Enhanced meta information */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div>
                <span>{experience.duration}</span>
              </div>
              <div>
                <span>{experience.location}</span>
              </div>
              <div>
                <span>{experience.type}</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <motion.div className="flex flex-wrap gap-2 mb-6"></motion.div>

          {/* Responsibilities */}
          <motion.h4 className="text-lg font-semibold text-gray-300 mb-4">Key Responsibilities</motion.h4>

          <ul className="space-y-3">
            {experience.responsibilities.map((responsibility: string, respIndex: number) => (
              <motion.li key={respIndex} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>{responsibility}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const timelineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Enhanced section header */}
        <motion.div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Briefcase size={16} className="text-purple-400" />
              </motion.div>
              <span className="text-sm text-gray-300 font-mono">./experience --career</span>
            </motion.div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Work Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A progressive professional journey driving impactful software solutions using{" "}
            <span className="text-purple-400 font-medium">modern web technologies</span> and{" "}
            <span className="text-pink-400 font-medium">scalable system architectures</span>.
          </p>
        </motion.div>

        {/* Enhanced timeline container - Centered */}
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <div className="relative">
              {/* Enhanced animated timeline line */}
              <div className="absolute left-8 top-0 w-1 bg-gray-700/30 h-full rounded-full">
                <motion.div
                  className="w-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full"
                  style={{ height: timelineProgress }}
                  initial={{ height: "0%" }}
                />
              </div>

              {/* Experience items */}
              <div className="space-y-20">
                {experiences.map((experience, index) => (
                  <ExperienceCard key={experience.id} experience={experience} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
