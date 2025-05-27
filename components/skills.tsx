"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Database, Cloud, Wrench, Cog, Terminal } from "lucide-react"

const skillCategories = [
  {
    id: 1,
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Java", level: 95, icon: "java" },
      { name: "JavaScript", level: 90, icon: "javascript" },
      { name: "TypeScript", level: 88, icon: "typescript" },
      { name: "Python", level: 85, icon: "python" },
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Spring Boot", level: 92, icon: "spring" },
      { name: "Spring Cloud", level: 88, icon: "cloud" },
      { name: "Hibernate", level: 85, icon: "database" },
      { name: "REST APIs", level: 95, icon: "api" },
      { name: "Redis", level: 80, icon: "redis" },
    ],
  },
  {
    id: 3,
    title: "Frontend",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Angular", level: 90, icon: "angular" },
      { name: "AngularJS", level: 85, icon: "angularjs" },
      { name: "HTML", level: 95, icon: "html" },
      { name: "CSS", level: 90, icon: "css" },
      { name: "SASS", level: 85, icon: "sass" },
      { name: "Bootstrap", level: 88, icon: "bootstrap" },
    ],
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS", level: 88, icon: "aws" },
      { name: "Docker", level: 85, icon: "docker" },
      { name: "Maven", level: 82, icon: "maven" },
      { name: "Webpack", level: 80, icon: "webpack" },
    ],
  },
  {
    id: 5,
    title: "Databases",
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "MySQL", level: 90, icon: "mysql" },
      { name: "MongoDB", level: 85, icon: "mongodb" },
      { name: "SQL Server", level: 88, icon: "sqlserver" },
    ],
  },
  {
    id: 6,
    title: "Tools",
    icon: Wrench,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Git", level: 95, icon: "git" },
      { name: "Jira", level: 85, icon: "jira" },
      { name: "JUnit", level: 88, icon: "junit" },
      { name: "Mockito", level: 82, icon: "test" },
      { name: "Jasmine", level: 80, icon: "jasmine" },
    ],
  },
  {
    id: 7,
    title: "Development Practices",
    icon: Cog,
    color: "from-teal-500 to-green-500",
    skills: [
      { name: "Microservices", level: 90, icon: "microservices" },
      { name: "Distributed Systems", level: 85, icon: "distributed" },
      { name: "Event‑Driven Systems", level: 88, icon: "events" },
      { name: "Agile", level: 92, icon: "agile" },
      { name: "CI/CD", level: 85, icon: "cicd" },
    ],
  },
]

// Animated skill icons component
function AnimatedSkillIcon({
  iconName,
  isHovered,
  categoryColor,
}: { iconName: string; isHovered: boolean; categoryColor: string }) {
  const getIconAnimation = (icon: string) => {
    const animations = {
      java: {
        idle: { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] },
        hover: { rotate: [0, 360], scale: [1, 1.2, 1] },
      },
      javascript: {
        idle: { y: [0, -2, 0], rotate: [0, 3, -3, 0] },
        hover: { rotate: [0, 180, 360], scale: [1, 1.3, 1] },
      },
      typescript: {
        idle: { scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] },
        hover: { rotate: [0, -180, 0], scale: [1, 1.2, 1] },
      },
      python: {
        idle: { y: [0, -3, 0], scale: [1, 1.05, 1] },
        hover: { rotate: [0, 15, -15, 0], scale: [1, 1.3, 1], y: [0, -5, 0] },
      },
      spring: {
        idle: { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] },
        hover: { rotate: [0, 360], scale: [1, 1.4, 1] },
      },
      cloud: {
        idle: { y: [0, -2, 0], x: [0, 1, -1, 0] },
        hover: { y: [0, -8, 0], scale: [1, 1.3, 1] },
      },
      database: {
        idle: { scale: [1, 1.05, 1], y: [0, -1, 0] },
        hover: { rotateY: [0, 180, 360], scale: [1, 1.2, 1] },
      },
      api: {
        idle: { rotate: [0, 5, -5, 0] },
        hover: { rotate: [0, 360], scale: [1, 1.3, 1] },
      },
      redis: {
        idle: { scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] },
        hover: { rotate: [0, 720], scale: [1, 1.4, 1] },
      },
      angular: {
        idle: { rotate: [0, 10, -10, 0] },
        hover: { rotate: [0, 360], scale: [1, 1.3, 1] },
      },
      angularjs: {
        idle: { rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] },
        hover: { rotate: [0, -360], scale: [1, 1.2, 1] },
      },
      html: {
        idle: { y: [0, -2, 0], rotate: [0, 2, -2, 0] },
        hover: { scale: [1, 1.3, 1], rotate: [0, 20, -20, 0] },
      },
      css: {
        idle: { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] },
        hover: { rotate: [0, 360], scale: [1, 1.3, 1] },
      },
      sass: {
        idle: { y: [0, -2, 0], rotate: [0, 3, -3, 0] },
        hover: { rotate: [0, 180, 360], scale: [1, 1.2, 1] },
      },
      bootstrap: {
        idle: { scale: [1, 1.1, 1] },
        hover: { rotate: [0, 360], scale: [1, 1.4, 1] },
      },
      aws: {
        idle: { y: [0, -2, 0], scale: [1, 1.05, 1] },
        hover: { rotate: [0, 360], scale: [1, 1.3, 1], y: [0, -5, 0] },
      },
      docker: {
        idle: { y: [0, -3, 0], rotate: [0, 5, -5, 0] },
        hover: { rotate: [0, 360], scale: [1, 1.4, 1] },
      },
      maven: {
        idle: { rotate: [0, 10, -10, 0] },
        hover: { rotate: [0, 720], scale: [1, 1.2, 1] },
      },
      webpack: {
        idle: { scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] },
        hover: { rotate: [0, 360], scale: [1, 1.3, 1] },
      },
      mysql: {
        idle: { y: [0, -2, 0], scale: [1, 1.05, 1] },
        hover: { rotateY: [0, 360], scale: [1, 1.3, 1] },
      },
      mongodb: {
        idle: { rotate: [0, 8, -8, 0] },
        hover: { rotate: [0, 360], scale: [1, 1.4, 1] },
      },
      sqlserver: {
        idle: { scale: [1, 1.1, 1], y: [0, -1, 0] },
        hover: { rotate: [0, 180, 360], scale: [1, 1.2, 1] },
      },
      git: {
        idle: { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] },
        hover: { rotate: [0, 360], scale: [1, 1.3, 1] },
      },
      jira: {
        idle: { y: [0, -2, 0], rotate: [0, 3, -3, 0] },
        hover: { rotate: [0, 720], scale: [1, 1.2, 1] },
      },
      junit: {
        idle: { scale: [1, 1.1, 1] },
        hover: { rotate: [0, 360], scale: [1, 1.4, 1] },
      },
      test: {
        idle: { rotate: [0, 10, -10, 0] },
        hover: { rotate: [0, 360], scale: [1, 1.3, 1] },
      },
      jasmine: {
        idle: { y: [0, -2, 0], scale: [1, 1.05, 1] },
        hover: { rotate: [0, 180, 360], scale: [1, 1.2, 1] },
      },
      microservices: {
        idle: { scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] },
        hover: { rotate: [0, 360], scale: [1, 1.4, 1] },
      },
      distributed: {
        idle: { y: [0, -2, 0], x: [0, 1, -1, 0] },
        hover: { rotate: [0, 720], scale: [1, 1.3, 1] },
      },
      events: {
        idle: { rotate: [0, 8, -8, 0] },
        hover: { rotate: [0, 360], scale: [1, 1.3, 1], y: [0, -3, 0] },
      },
      agile: {
        idle: { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] },
        hover: { rotate: [0, 360], scale: [1, 1.4, 1] },
      },
      cicd: {
        idle: { y: [0, -2, 0], rotate: [0, 3, -3, 0] },
        hover: { rotate: [0, 720], scale: [1, 1.2, 1] },
      },
    }
    return animations[icon as keyof typeof animations] || animations.java
  }

  const getSkillIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      java: "☕",
      javascript: "🟨",
      typescript: "🔷",
      python: "🐍",
      spring: "🍃",
      cloud: "☁️",
      database: "🗄️",
      api: "🔗",
      redis: "🔴",
      angular: "🅰️",
      angularjs: "📐",
      html: "🌐",
      css: "🎨",
      sass: "💎",
      bootstrap: "🅱️",
      aws: "☁️",
      docker: "🐳",
      maven: "📦",
      webpack: "📦",
      mysql: "🐬",
      mongodb: "🍃",
      sqlserver: "🗃️",
      git: "🌿",
      jira: "📋",
      junit: "✅",
      test: "🧪",
      jasmine: "🌸",
      microservices: "🔧",
      distributed: "🌐",
      events: "⚡",
      agile: "🔄",
      cicd: "🚀",
    }
    return icons[iconName] || "💻"
  }

  const animation = getIconAnimation(iconName)

  return (
    <motion.div
      className={`w-8 h-8 bg-gradient-to-r ${categoryColor} rounded flex items-center justify-center text-white text-sm font-bold shadow-lg`}
      animate={isHovered ? animation.hover : animation.idle}
      transition={{
        duration: isHovered ? 0.6 : 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <motion.span animate={isHovered ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.3 }}>
        {getSkillIcon(iconName)}
      </motion.span>
    </motion.div>
  )
}

function SkillCard({ skill, categoryColor, delay }: { skill: any; categoryColor: string; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-gray-900/50 dark:bg-gray-900/50 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-800/50 dark:border-gray-800/50 border-gray-200/50 transition-all duration-300 hover:border-purple-500/30 overflow-hidden">
        {/* Subtle glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}
        />

        {/* Skill Header */}
        <div className="relative z-10 flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* Animated Developer Icon */}
            <AnimatedSkillIcon iconName={skill.icon} isHovered={isHovered} categoryColor={categoryColor} />

            {/* Skill Name */}
            <span className="text-white dark:text-white text-gray-900 font-medium font-mono text-sm">{skill.name}</span>
          </div>

          {/* Skill Level */}
          <motion.span
            className="text-gray-400 dark:text-gray-400 text-gray-600 text-xs font-mono"
            animate={isHovered ? { scale: 1.1, color: "#a855f7" } : {}}
            transition={{ duration: 0.2 }}
          >
            {skill.level}%
          </motion.span>
        </div>

        {/* Progress Bar */}
        <div className="relative z-10">
          <div className="w-full h-1 bg-gray-800/30 dark:bg-gray-800/30 bg-gray-200/50 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${categoryColor} rounded-full`}
              initial={{ width: "0%" }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              animate={
                isHovered
                  ? {
                      boxShadow: `0 0 10px rgba(168, 85, 247, 0.5)`,
                    }
                  : {}
              }
            />
          </div>
        </div>

        {/* Animated particles on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: 0,
                }}
                animate={{
                  y: [null, "-20px"],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gray-800/50 dark:bg-gray-800/50 bg-gray-100/80 backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 border-gray-300/50 rounded-full px-4 py-2 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Terminal size={16} className="text-purple-400" />
            </motion.div>
            <span className="text-sm text-gray-300 dark:text-gray-300 text-gray-700 font-mono">
              ./skills --animated
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white text-gray-900 mb-4 font-mono">
            <span className="text-gray-500 dark:text-gray-500 text-gray-400">const</span>{" "}
            <span className="text-purple-400">skills</span>{" "}
            <span className="text-gray-500 dark:text-gray-500 text-gray-400">=</span>{" "}
            <span className="text-green-400">{"{"}</span>
          </h2>
          {/* <p className="text-lg text-gray-300 dark:text-gray-300 text-gray-600 max-w-2xl mx-auto font-mono text-sm">
            // Interactive animated skill showcase
          </p> */}
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center shadow-lg`}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <category.icon size={20} className="text-white" />
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white text-gray-900 font-mono">
                    <span className="text-gray-500 dark:text-gray-500 text-gray-400">//</span>{" "}
                    {category.title.toLowerCase().replace(/\s+/g, "_")}
                  </h3>
                  <div className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 font-mono">
                    {category.skills.length} technologies
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    skill={skill}
                    categoryColor={category.color}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Bracket */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="text-3xl font-bold text-green-400 font-mono mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {"}"}
          </motion.div>
          <div className="inline-flex items-center gap-3 bg-gray-800/30 dark:bg-gray-800/30 bg-gray-100/50 backdrop-blur-sm rounded-lg px-6 py-3 border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30">
            <motion.div
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            <span className="text-gray-300 dark:text-gray-300 text-gray-700 font-mono text-sm">
              {skillCategories.reduce((total, category) => total + category.skills.length, 0)} skills loaded
              successfully
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
