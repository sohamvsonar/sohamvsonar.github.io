"use client"

import { motion } from "framer-motion"
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1 pt-12 sm:pt-16 lg:pt-0"
          >
            <motion.div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-muted-foreground">Hi, I am</span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
                  Soham Sonar
                </span>
              </motion.h1>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-4 sm:space-y-6"
            >
              <motion.p 
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed"
              >
                I&apos;m a software engineer who loves turning bold ideas into powerful applications.
              </motion.p>
              
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Specialized in <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent font-semibold">Python</span>, 
                <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent font-semibold"> Machine learning</span>, 
                and <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent font-semibold">Large Language Models</span>, 
                I build scalable, intelligent systems that solve real world problems.{" "} 
                Currently, my passion is fueled by the exciting world of Agentic AI, building with LangChain, 
                LangGraph, and MCP servers to push the boundaries of what AI agents can do.
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent font-medium"
              >
                Always curious. Always building.
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg text-muted-foreground"
              >
                I enjoy learning new skills and implementing them!
              </motion.p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-6 sm:pt-8"
            >
              <motion.button
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const projectsSection = document.getElementById('projects')
                  projectsSection?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View My Work
              </motion.button>
              
              <motion.button
                className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Mobile Scroll Indicator */}
            <motion.div
              className="flex sm:hidden justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => {
                  const aboutSection = document.getElementById('about')
                  aboutSection?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="text-sm text-muted-foreground mb-2">Scroll down</span>
                <ChevronDown className="h-6 w-6 text-primary" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            className="flex justify-center lg:justify-end order-1 lg:order-2 pt-16 sm:pt-8 lg:pt-0"
          >
            <motion.div
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-3xl" />
              <div className="absolute inset-4 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-2xl" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                {/* Placeholder for now - you can replace with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-pink-500/10 to-blue-600/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">SS</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Replace with your image
                    </p>
                  </div>
                </div>
                
                
                <Image
                  src="/images/profile.jpg"
                  alt="Soham Sonar"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 15%' }}
                  priority
                />
              </div>

              {/* Code-inspired floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 text-2xl font-mono font-bold text-primary"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {"{}"}
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 text-lg font-mono font-bold text-purple-500"
                animate={{ 
                  x: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                {"</>"}
              </motion.div>
              
              {/* Social Media Links */}
              <motion.div 
                className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 mb-4 sm:mb-6 lg:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.a
                  href="mailto:soham.sonar427@gmail.com"
                  className="p-2.5 sm:p-3 rounded-full bg-muted hover:bg-accent transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/sohamsonar23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-muted hover:bg-accent transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                </motion.a>
                
                <motion.a
                  href="https://github.com/sohamvsonar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-muted hover:bg-accent transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.a>
                
                <motion.a
                  href="https://x.com/SohamSonar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-muted hover:bg-accent transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById('about')
            aboutSection?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll down</span>
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}