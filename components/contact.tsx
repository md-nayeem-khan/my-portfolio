"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageCircle, Zap } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@nayeemkhan.dev",
    href: "mailto:contact@nayeemkhan.dev",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1712-402628",
    href: "tel:+8801712402628",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mohakhali, Dhaka, Bangladesh",
    href: "https://maps.google.com",
    color: "from-purple-500 to-pink-500",
  },
]

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate success (you would replace this with actual form submission logic)
    setFormStatus("success")

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setFormStatus("idle")
    }, 3000)
  }

  const getStatusIcon = () => {
    switch (formStatus) {
      case "sending":
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Send size={20} />
          </motion.div>
        )
      case "success":
        return <CheckCircle size={20} className="text-green-400" />
      case "error":
        return <AlertCircle size={20} className="text-red-400" />
      default:
        return <Send size={20} />
    }
  }

  const getButtonText = () => {
    switch (formStatus) {
      case "sending":
        return "Sending..."
      case "success":
        return "Message Sent!"
      case "error":
        return "Try Again"
      default:
        return "Send Message"
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Rounded badge */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gray-800/30 dark:bg-gray-800/30 bg-gray-100/50 backdrop-blur-sm border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30 rounded-full px-4 py-2"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <MessageCircle size={16} className="text-purple-400" />
              </motion.div>
              <span className="text-sm text-gray-300 dark:text-gray-300 text-gray-700 font-mono">
                ./contact --connect
              </span>
            </motion.div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-white text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Open to new opportunities, exciting collaborations, and meaningful conversations about innovation and scalable solutions. Let’s{" "}
            <span className="text-purple-400 font-medium">connect</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact info cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2 },
                  }}
                  className="group block"
                >
                  <div className="relative bg-gray-900/40 dark:bg-gray-900/40 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 dark:border-gray-800/50 border-gray-200/50 transition-all duration-300 hover:border-purple-500/50 overflow-hidden">
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                    />

                    <div className="relative z-10 flex items-center gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                      >
                        <info.icon size={24} className="text-white" />
                      </motion.div>

                      {/* Info */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-2 group-hover:text-purple-400 dark:group-hover:text-purple-400 group-hover:text-purple-600 transition-colors duration-300">
                          {info.label}
                        </h3>
                        <p className="text-gray-300 dark:text-gray-300 text-gray-700 font-medium">{info.value}</p>
                      </div>
                    </div>

                    {/* Hover effect particles */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-purple-400 rounded-full"
                          initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: 0,
                          }}
                          animate={{
                            y: [null, "-30px"],
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-gray-900/40 dark:bg-gray-900/40 bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-800/50 dark:border-gray-800/50 border-gray-200/50 overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-50" />

              {/* Floating elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
                    animate={{
                      x: [0, 100, 0],
                      y: [0, -50, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center"
                  >
                    <Zap size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white dark:text-white text-gray-900">Send me a message</h3>
                    <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">
                      I'll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="relative"
                    >
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-4 bg-gray-800/30 dark:bg-gray-800/30 bg-white/60 border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30 rounded-2xl text-white dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Your full name"
                        animate={{
                          scale: focusedField === "name" ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>

                    {/* Email field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="relative"
                    >
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-4 bg-gray-800/30 dark:bg-gray-800/30 bg-white/60 border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30 rounded-2xl text-white dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                        animate={{
                          scale: focusedField === "email" ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </div>

                  {/* Subject field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="relative"
                  >
                    <motion.input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-4 bg-gray-800/30 dark:bg-gray-800/30 bg-white/60 border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30 rounded-2xl text-white dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="What's this about?"
                      animate={{
                        scale: focusedField === "subject" ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  {/* Message field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="relative"
                  >
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-gray-800/30 dark:bg-gray-800/30 bg-white/60 border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30 rounded-2xl text-white dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                      animate={{
                        scale: focusedField === "message" ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  {/* Submit button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={formStatus === "sending"}
                      whileHover={{
                        scale: formStatus === "idle" ? 1.02 : 1,
                        y: formStatus === "idle" ? -3 : 0,
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                        formStatus === "success"
                          ? "bg-green-500 text-white shadow-2xl shadow-green-500/25"
                          : formStatus === "error"
                            ? "bg-red-500 text-white shadow-2xl shadow-red-500/25"
                            : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/25"
                      } ${formStatus === "sending" ? "cursor-not-allowed opacity-80" : ""}`}
                    >
                      {getStatusIcon()}
                      <span>{getButtonText()}</span>
                    </motion.button>
                  </motion.div>
                </form>

                {/* Success message */}
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-2xl text-center"
                  >
                    <CheckCircle size={32} className="text-green-400 mx-auto mb-3" />
                    <p className="text-green-400 font-semibold text-lg mb-2">Message sent successfully!</p>
                    <p className="text-green-300 text-sm">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
