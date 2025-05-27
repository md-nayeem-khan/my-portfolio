"use client"

import { motion } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import { Calendar, Clock, ArrowLeft, Tag, User, Share2, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { blogPosts } from "@/app/blog/page"

export default function BlogPost() {
  const params = useParams()
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(42)

  const postId = Number.parseInt(params.id as string)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    return (
      <div className="min-h-screen bg-black dark:bg-black bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white dark:text-white text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-400 dark:text-gray-400 text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      // You could show a toast notification here
    }
  }

  return (
    <div className="min-h-screen bg-black dark:bg-black bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 dark:bg-black/90 bg-white/90 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={() => router.back()}
              whileHover={{ x: -3 }}
              className="flex items-center gap-2 text-gray-300 dark:text-gray-300 text-gray-700 hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleLike}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
                  isLiked
                    ? "bg-red-500/20 text-red-400"
                    : "bg-gray-800/50 dark:bg-gray-800/50 bg-gray-200/50 text-gray-400 dark:text-gray-400 text-gray-600 hover:text-red-400"
                }`}
              >
                <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
                <span className="text-sm">{likes}</span>
              </motion.button>

              <motion.button
                onClick={handleShare}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-800/50 dark:bg-gray-800/50 bg-gray-200/50 text-gray-400 dark:text-gray-400 text-gray-600 hover:text-purple-400 transition-colors"
              >
                <Share2 size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                <Tag size={14} />
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white text-gray-900 mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-gray-400 dark:text-gray-400 text-gray-600 mb-8"
            >
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {post.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="px-3 py-1 text-xs bg-gray-800/30 dark:bg-gray-800/30 bg-gray-100/50 text-gray-300 dark:text-gray-300 text-gray-700 rounded-full border border-gray-700/30 dark:border-gray-700/30 border-gray-300/30"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 overflow-hidden rounded-2xl"
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="prose prose-lg prose-invert dark:prose-invert prose-gray max-w-none"
          >
            <div
              className="text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    // Handle headers
                    if (line.startsWith("# ")) {
                      return `<h1 class="text-3xl font-bold text-white dark:text-white text-gray-900 mt-12 mb-6">${line.substring(2)}</h1>`
                    }
                    if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-bold text-white dark:text-white text-gray-900 mt-10 mb-4">${line.substring(3)}</h2>`
                    }
                    if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-bold text-white dark:text-white text-gray-900 mt-8 mb-3">${line.substring(4)}</h3>`
                    }

                    // Handle code blocks
                    if (line.startsWith("`")) {
                      const language = line.substring(1)
                      return language
                        ? `<pre class="bg-gray-900/50 dark:bg-gray-900/50 bg-gray-100/50 rounded-lg p-4 overflow-x-auto my-6 border border-gray-800/30 dark:border-gray-800/30 border-gray-300/30"><code class="text-sm text-gray-300 dark:text-gray-300 text-gray-700">`
                        : `</code></pre>`
                    }

                    // Handle inline code
                    line = line.replace(
                      /`([^`]+)`/g,
                      '<code class="bg-gray-800/30 dark:bg-gray-800/30 bg-gray-200/50 px-2 py-1 rounded text-sm text-purple-400">$1</code>',
                    )

                    // Handle bold text
                    line = line.replace(
                      /\*\*([^*]+)\*\*/g,
                      '<strong class="font-semibold text-white dark:text-white text-gray-900">$1</strong>',
                    )

                    // Handle lists
                    if (line.startsWith("- ")) {
                      return `<li class="mb-2">${line.substring(2)}</li>`
                    }
                    if (line.match(/^\d+\. /)) {
                      return `<li class="mb-2">${line.replace(/^\d+\. /, "")}</li>`                    }

                    // Handle regular paragraphs
                    if (line.trim() && !line.startsWith("<")) {
                      return `<p class="mb-4 leading-relaxed">${line}</p>`
                    }

                    return line
                  })
                  .join("\n"),
              }}
            />
          </motion.div>

          {/* Article Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-gray-800/30 dark:border-gray-800/30 border-gray-300/30"
          >
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900">{post.author}</h3>
                <p className="text-gray-400 dark:text-gray-400 text-gray-600">
                  Full Stack Developer & Technical Writer
                </p>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={handleLike}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isLiked
                      ? "bg-red-500/20 text-red-400"
                      : "bg-gray-800/30 dark:bg-gray-800/30 bg-gray-100/50 text-gray-400 dark:text-gray-400 text-gray-600 hover:text-red-400"
                  }`}
                >
                  <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                  <span>{likes} likes</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/30 dark:bg-gray-800/30 bg-gray-100/50 text-gray-400 dark:text-gray-400 text-gray-600 hover:text-purple-400 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>Comment</span>
                </motion.button>
              </div>

              <motion.button
                onClick={handleShare}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
              >
                <Share2 size={20} />
                <span>Share</span>
              </motion.button>
            </div>
          </motion.footer>

          {/* Related Posts */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-white dark:text-white text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <Link href={`/blog/${relatedPost.id}`}>
                      <div className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/90 rounded-xl overflow-hidden border border-gray-800/50 dark:border-gray-800/50 border-gray-200/50 transition-all duration-300 hover:border-purple-500/50">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={400}
                          height={200}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-white dark:text-white text-gray-900 mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 dark:text-gray-500 text-gray-400">
                            <span>{new Date(relatedPost.publishDate).toLocaleDateString()}</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
            </div>
          </motion.section>
        </div>
      </article>
    </div>
  )
}

