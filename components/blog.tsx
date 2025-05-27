"use client"

import { motion, useInView } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag, User, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Spring Boot",
    excerpt:
      "Learn how to design and implement microservices architecture using Spring Boot, Spring Cloud, and best practices for distributed systems.",
    content:
      "In this comprehensive guide, we'll explore the fundamentals of microservices architecture and how to implement it effectively using Spring Boot...",
    image: "/placeholder.svg?height=300&width=500",
    author: "Nayeem Khan",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Backend",
    tags: ["Spring Boot", "Microservices", "Java", "Architecture"],
  },
  {
    id: 2,
    title: "Modern Frontend Development with Angular 17",
    excerpt:
      "Discover the latest features in Angular 17 including standalone components, new control flow syntax, and performance improvements.",
    content:
      "Angular 17 brings exciting new features that revolutionize how we build modern web applications. Let's dive into the most important updates...",
    image: "/placeholder.svg?height=300&width=500",
    author: "Nayeem Khan",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "Frontend",
    tags: ["Angular", "TypeScript", "Frontend", "Web Development"],
  },
  {
    id: 3,
    title: "Optimizing Database Performance in Production",
    excerpt:
      "Essential techniques for optimizing database queries, indexing strategies, and monitoring performance in high-traffic applications.",
    content:
      "Database performance is crucial for application success. Here are proven strategies to optimize your database for production workloads...",
    image: "/placeholder.svg?height=300&width=500",
    author: "Nayeem Khan",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    category: "Database",
    tags: ["MySQL", "Performance", "Optimization", "Database"],
  },
  {
    id: 4,
    title: "Implementing CI/CD Pipelines with Docker and AWS",
    excerpt:
      "Step-by-step guide to setting up automated deployment pipelines using Docker containers and AWS services for seamless delivery.",
    content:
      "Continuous Integration and Deployment are essential for modern software development. Learn how to implement robust CI/CD pipelines...",
    image: "/placeholder.svg?height=300&width=500",
    author: "Nayeem Khan",
    publishDate: "2023-12-28",
    readTime: "12 min read",
    category: "DevOps",
    tags: ["Docker", "AWS", "CI/CD", "DevOps"],
  },
  {
    id: 5,
    title: "Advanced JavaScript Patterns and Best Practices",
    excerpt:
      "Explore advanced JavaScript concepts including closures, prototypes, async patterns, and modern ES6+ features for better code quality.",
    content:
      "JavaScript has evolved significantly over the years. Let's explore advanced patterns that will make you a better developer...",
    image: "/placeholder.svg?height=300&width=500",
    author: "Nayeem Khan",
    publishDate: "2023-12-20",
    readTime: "7 min read",
    category: "JavaScript",
    tags: ["JavaScript", "ES6+", "Patterns", "Best Practices"],
  },
  {
    id: 6,
    title: "Building Responsive UIs with CSS Grid and Flexbox",
    excerpt:
      "Master modern CSS layout techniques with practical examples and learn when to use CSS Grid vs Flexbox for different scenarios.",
    content:
      "CSS Grid and Flexbox are powerful layout tools. Understanding when and how to use each one will elevate your frontend skills...",
    image: "/placeholder.svg?height=300&width=500",
    author: "Nayeem Khan",
    publishDate: "2023-12-15",
    readTime: "5 min read",
    category: "CSS",
    tags: ["CSS", "Grid", "Flexbox", "Responsive Design"],
  },
]

const categories = ["All", "Backend", "Frontend", "Database", "DevOps", "JavaScript", "CSS"]

function BlogCard({ post, index }: { post: any; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.article
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
      <Link href={`/blog/${post.id}`} className="block h-full">
        <div className="relative bg-gray-900/50 dark:bg-gray-900/50 bg-white/90 rounded-2xl overflow-hidden border border-gray-800/50 dark:border-gray-800/50 border-gray-200/50 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20 hover:shadow-gray-300/20 h-full flex flex-col">
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

          <div className="relative overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />

            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-gray-700/50"
              >
                {post.category}
              </motion.span>
            </div>

            {/* Image overlay that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400 dark:text-gray-400 text-gray-600">
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <motion.h3 className="text-xl font-bold text-white dark:text-white text-gray-900 mb-3 group-hover:text-purple-400 dark:group-hover:text-purple-400 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
              {post.title}
            </motion.h3>

            <p className="text-gray-400 dark:text-gray-400 text-gray-600 mb-6 leading-relaxed group-hover:text-gray-300 dark:group-hover:text-gray-300 group-hover:text-gray-700 transition-colors duration-300 flex-grow line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                <motion.span
                  key={tagIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 + 0.3 }}
                  className="flex items-center gap-1 px-2 py-1 text-xs text-gray-300 dark:text-gray-300 text-gray-700 bg-gray-800/30 dark:bg-gray-800/30 bg-gray-100/50 rounded border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30 group-hover:border-purple-500/20 group-hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Tag size={10} />
                  {tag}
                </motion.span>
              ))}
            </div>

            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }} className="mt-auto">
              <span className="inline-flex items-center gap-2 text-gray-400 dark:text-gray-400 text-gray-600 hover:text-purple-400 dark:hover:text-purple-400 hover:text-purple-600 transition-all duration-200 group-hover:text-purple-400 dark:group-hover:text-purple-400 group-hover:text-purple-600 font-medium">
                <span>Read More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function Blog() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
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
              <BookOpen size={16} className="text-purple-400" />
            </motion.div>
            <span className="text-sm text-gray-300 dark:text-gray-300 text-gray-700 font-mono">./blog --articles</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-white text-gray-900 mb-6">
            Blog & Articles
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge about <span className="text-purple-400 font-medium">web development</span>,{" "}
            <span className="text-pink-400 font-medium">best practices</span>, and the latest technologies in the
            industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-500 text-white"
                  : "bg-gray-800/30 dark:bg-gray-800/30 bg-gray-100/50 text-gray-300 dark:text-gray-300 text-gray-700 border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30 hover:border-purple-500/30 hover:bg-purple-500/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </motion.div>

        {/* View All Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ y: -3, scale: 1.05 }} transition={{ duration: 0.2 }} className="inline-block">
            <Link
              href="#all-blogs"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 rounded-2xl backdrop-blur-sm font-medium"
            >
              <span>View All Blogs</span>
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
