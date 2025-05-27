"use client"

import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS featuring real-time inventory management and secure payment processing.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    codeUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project analytics.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    codeUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Modern analytics dashboard with AI-powered insights, real-time data visualization, and predictive analytics capabilities.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue.js", "Python", "TensorFlow", "D3.js"],
    codeUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive maps.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    codeUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "A modern social media platform with real-time messaging and content sharing.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    codeUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Web3.js", "Ethereum", "Solidity"],
    codeUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -12,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div className="relative bg-gray-900/50 dark:bg-gray-900/50 bg-white/90 rounded-2xl overflow-hidden border border-gray-800/50 dark:border-gray-800/50 border-gray-200/50 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20 hover:shadow-gray-300/20 h-full">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 h-48"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-white dark:text-white text-gray-900 mb-3 group-hover:text-purple-400 dark:group-hover:text-purple-400 group-hover:text-purple-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 dark:text-gray-400 text-gray-600 mb-6 text-sm leading-relaxed group-hover:text-gray-300 dark:group-hover:text-gray-300 group-hover:text-gray-700 transition-colors duration-300">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-xs text-gray-300 dark:text-gray-300 text-gray-700 bg-gray-800/30 dark:bg-gray-800/30 bg-gray-100/50 rounded-full border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <Link
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 transition-all duration-200 group-hover:text-purple-400 dark:group-hover:text-purple-400 group-hover:text-purple-600 font-medium"
              >
                <Github size={16} />
                <span className="text-sm">View Code</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 transition-all duration-200 group-hover:text-purple-400 dark:group-hover:text-purple-400 group-hover:text-purple-600 font-medium"
              >
                <Zap size={16} />
                <span className="text-sm">Live Demo</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gray-800/50 dark:bg-gray-800/50 bg-gray-100/80 backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 border-gray-300/50 rounded-full px-4 py-2"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap size={16} className="text-purple-400" />
            </motion.div>
            <span className="text-sm text-gray-300 dark:text-gray-300 text-gray-700 font-mono">
              ./projects --featured
            </span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-white text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience in{" "}
            <span className="text-purple-400 font-medium">scalable, full-stack solutions</span> and{" "}
            <span className="text-pink-400 font-medium">cutting-edge technologies</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          {/* <motion.div whileHover={{ y: -3, scale: 1.05 }} transition={{ duration: 0.2 }} className="inline-block">
            <Link
              href="#all-projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 rounded-2xl backdrop-blur-sm font-medium"
            >
              <span>View All Projects</span>
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <ExternalLink size={18} />
              </motion.div>
            </Link>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
