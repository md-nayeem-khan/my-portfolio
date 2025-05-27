"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react"
import Link from "next/link"

function TypewriterText() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const names = ["Nayeem Khan", "a Software Engineer", "an AI Enthusiast", "a System Designer"]
  const currentName = names[currentIndex]

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(pauseTimer)
    }

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentName.length) {
            setDisplayText(currentName.slice(0, displayText.length + 1))
          } else {
            setIsPaused(true)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % names.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timer)
  }, [displayText, currentName, isDeleting, isPaused])

  return (
    <span className="relative inline-block">
      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-0.5 h-8 sm:h-10 lg:h-12 bg-gradient-to-b from-purple-400 to-pink-400 ml-1"
      />
    </span>
  )
}

export default function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/md-nayeem-khan",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mdnayeemkhan/",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@nayeemkhan.dev",
    },
  ]

  const handleSeeMyWorkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white dark:text-white text-gray-900 mb-6 transition-colors duration-300 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent inline-block min-h-[1em]">
            <TypewriterText />
          </span>
        </h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-300 text-gray-600 font-light leading-relaxed transition-colors duration-300">
            Software Engineer | AI Enthusiast | System Designer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <social.icon
                  size={24}
                  className="text-gray-300 dark:text-gray-300 text-gray-700 transition-colors duration-300 hover:text-purple-400"
                />
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* See My Work Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden"
          >
            <Link
              href="#work"
              onClick={handleSeeMyWorkClick}
              className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>

              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></span>

              <span className="relative z-10 flex items-center">
                See my work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden"
          >
            <Link
              href="https://drive.google.com/file/d/1i65Hp3ZRr88pWCXaDDiTujRLActZPqHB/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-3 border-2 border-gray-600 dark:border-gray-600 border-gray-300 text-gray-300 dark:text-gray-300 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:border-gray-400 hover:text-white dark:hover:text-white backdrop-blur-sm bg-transparent overflow-hidden"
            >
              {/* Animated border glow - removed pink/purple gradient */}
              {/* Ripple effect - removed pink/purple gradient */}
              <span className="relative z-10 flex items-center">
                Download CV
                <Download
                  size={18}
                  className="ml-2 group-hover:translate-y-0.5 group-hover:rotate-12 transition-transform duration-300"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
