"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function GitHubContributions() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="github-contributions" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            GitHub <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Activity</span>
          </h2>
          <p className="text-xl text-muted-foreground">My coding journey visualized</p>
        </motion.div>

        <motion.div
          className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Contribution Graph</h3>
            <p className="text-muted-foreground">Daily contributions over the past year</p>
          </div>
          
          {/* GitHub Contributions Embed */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              {mounted && (
                <img
                  src={`https://ghchart.rshah.org/${theme === 'dark' ? '2f81f7' : '40c463'}/sohamvsonar`}
                  alt="sohamvsonar's GitHub contribution graph"
                  className="w-full h-auto rounded-lg"
                  style={{
                    filter: theme === 'dark' ? 'brightness(0.9)' : 'brightness(1)',
                  }}
                />
              )}
            </div>
          </div>

          {/* GitHub Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              className="bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/10 border border-green-200 dark:border-green-800/30 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
              <div className="text-sm text-green-700 dark:text-green-300 font-medium">Contributions</div>
              <div className="text-xs text-muted-foreground mt-1">This Year</div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10 border border-blue-200 dark:border-blue-800/30 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
              <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">Repositories</div>
              <div className="text-xs text-muted-foreground mt-1">Public Projects</div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10 border border-purple-200 dark:border-purple-800/30 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">180+</div>
              <div className="text-sm text-purple-700 dark:text-purple-300 font-medium">Commit Streak</div>
              <div className="text-xs text-muted-foreground mt-1">Longest</div>
            </motion.div>
          </div>

          {/* View GitHub Profile Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://github.com/sohamvsonar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium hover:bg-primary/20 transition-all duration-300 text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              Visit GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}