"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, Youtube } from "lucide-react"
import { useState, useEffect } from "react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/md-nayeem-khan",
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mdnayeemkhan/",
    color: "hover:text-blue-400",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@nayeemkhan6139",
    color: "hover:text-sky-400",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:contact@nayeemkhan.dev",
    color: "hover:text-green-400",
  },
]

const quickLinks = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gray-950/90 dark:bg-gray-950/90 bg-gray-50/90 backdrop-blur-sm border-t border-gray-800/50 dark:border-gray-800/50 border-gray-200/50 transition-colors duration-300">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                href="/"
                className="text-2xl font-bold text-white dark:text-white text-gray-900 transition-colors duration-300"
              >
                Nayeem Khan
              </Link>
            </motion.div>
            <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm leading-relaxed max-w-xs">
            Full Stack Developer passionate about crafting scalable, high-performance digital experiences with modern technologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg bg-gray-800/30 dark:bg-gray-800/30 bg-gray-200/50 backdrop-blur-sm border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30 text-gray-400 dark:text-gray-400 text-gray-600 transition-all duration-300 ${social.color} hover:border-purple-500/30`}
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-400 dark:text-gray-400 text-gray-600 hover:text-purple-400 dark:hover:text-purple-400 hover:text-purple-600 transition-all duration-300 text-sm group relative overflow-hidden"
                  >
                    <motion.span
                      whileHover={{ x: 8, scale: 1.05 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="inline-block relative z-10"
                    >
                      {link.name}
                    </motion.span>

                    {/* Animated background */}
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-md origin-left"
                    />

                    {/* Enhanced underline */}
                    <motion.span
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    />

                    {/* Shimmer effect */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900">Get In Touch</h3>
            <div className="space-y-3">
              <motion.a
                href="mailto:contact@nayeemkhan.dev"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 text-gray-400 dark:text-gray-400 text-gray-600 hover:text-purple-400 dark:hover:text-purple-400 hover:text-purple-600 transition-colors duration-300 text-sm group"
              >
                <div className="w-8 h-8 bg-gray-800/30 dark:bg-gray-800/30 bg-gray-200/50 rounded-lg flex items-center justify-center group-hover:bg-purple-500/10 transition-colors duration-300">
                  <Mail size={14} />
                </div>
                <span>contact@nayeemkhan.dev</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 text-gray-400 dark:text-gray-400 text-gray-600 text-sm"
              >
                <div className="w-8 h-8 bg-gray-800/30 dark:bg-gray-800/30 bg-gray-200/50 rounded-lg flex items-center justify-center">
                  📍
                </div>
                <span>Mohakhali, Dhaka, Bangladesh</span>
              </motion.div>
            </div>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 pt-2"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-xs text-gray-500 dark:text-gray-500 text-gray-400">
                Available for new opportunities
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 dark:via-gray-700/50 via-gray-300/50 to-transparent mb-6"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 text-gray-400">
            <span>© {new Date().getFullYear()} Nayeem Khan.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={12} className="text-red-400 animate-pulse" /> and lots of ☕
            </span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: showBackToTop ? 1 : 0,
              scale: showBackToTop ? 1 : 0,
            }}
            whileHover={{
              scale: 1.1,
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/50 bg-gray-200/50 backdrop-blur-sm border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30 text-gray-400 dark:text-gray-400 text-gray-600 hover:text-purple-400 dark:hover:text-purple-400 hover:text-purple-600 hover:border-purple-500/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: "100%",
                opacity: 0,
              }}
              animate={{
                y: "-10%",
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
