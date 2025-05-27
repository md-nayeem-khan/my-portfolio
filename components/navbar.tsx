"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const navItems = [
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      const isDarkTheme = savedTheme === "dark"
      setIsDark(isDarkTheme)

      if (isDarkTheme) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      // Default to dark theme
      setIsDark(true)
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      // Switch to dark mode
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      // Switch to light mode
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 dark:bg-black/90 bg-white/90 backdrop-blur-md transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/"
              className="text-white dark:text-white text-gray-900 font-semibold text-lg tracking-wide transition-colors duration-300"
            >
              Nayeem Khan
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index + 0.5 }}
              >
                <button
                  onClick={() => {
                    const element = document.querySelector(item.href)
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  }}
                  className="text-gray-300 dark:text-gray-300 text-gray-700 hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors duration-300 font-normal text-sm relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/30 dark:bg-white/30 bg-gray-900/30 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Theme Toggle and Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-800 dark:bg-gray-800 bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors duration-300 text-white dark:text-white text-gray-900"
              aria-label="Toggle theme"
            >
              <motion.div initial={false} animate={{ rotate: isDark ? 0 : 180 }} transition={{ duration: 0.3 }}>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="md:hidden text-white dark:text-white text-gray-900 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => {
                    const element = document.querySelector(item.href)
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    setIsOpen(false)
                  }}
                  className="block text-gray-300 dark:text-gray-300 text-gray-700 hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors duration-300 w-full text-left"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
