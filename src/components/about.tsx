"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function About() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="relative py-20 bg-muted/30 overflow-hidden">
      {/* Background Video - Only in Dark Mode */}
      {mounted && theme === 'dark' && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-muted/60"></div>
        </div>
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">Get to know me better</p>
        </motion.div>

        <div className="space-y-8">
          {/* About Me */}
          <motion.div 
            className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <p> 
                  My interests primarily lies in <span className="text-primary font-semibold">AI/Machine Learning</span> and{' '}
                  <span className="text-primary font-semibold">Python Software Development</span>, with a heart that beats for innovation 
                  and a mind wired for code.
                </p>
              </div>

              <p>
                Currently, I am working as a <span className="text-primary font-semibold">Research Engineer</span> at{' '}
                <a 
                  href="https://grc.iit.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline transition-all duration-200"
                >
                  Gnosis Research Center
                </a> at the Illinois Tech. I have experience working at multiple startups,{' '}
                <a 
                  href="https://www.vosyn.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline transition-all duration-200"
                >
                  Vosyn AI
                </a>,{' '}
                  Wolfizer Technologies, 
                and an Information Technology company-{' '}
                <a 
                  href="https://hexaware.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline transition-all duration-200"
                >
                  Hexaware Technologies
                </a>.
              </p>

              <p>
                Recently, I have built a great interest in developing <span className="text-primary font-semibold">AI applications using LLM's</span>. 
                You can check some of the applications I made below.
              </p>

              <p>
                My hobbies include{' '}
                <a 
                  href="https://www.chess.com/member/soham427" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline transition-all duration-200"
                >
                  Playing Chess
                </a> and competing in tournaments, 
                <span className="text-primary font-semibold"> Trekking</span> and <span className="text-primary font-semibold">Weightlifting</span>.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
              Education
            </h3>
            <div className="space-y-6">
              {/* Master's Degree */}
              <motion.div 
                className="border-l-4 border-primary pl-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-1">Master of Computer Science</h4>
                <p className="text-primary font-medium mb-1 text-sm">August 2023 - May 2025</p>
                <p className="text-muted-foreground font-medium mb-1 text-sm">
                  <a 
                    href="https://www.iit.edu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline transition-all duration-200"
                  >
                    Illinois Institute of Technology
                  </a>, Chicago, IL
                </p>
                <p className="text-muted-foreground mb-2 text-sm"><span className="font-semibold">GPA:</span> 3.50/4.00</p>
                
              </motion.div>

              {/* Bachelor's Degree */}
              <motion.div 
                className="border-l-4 border-primary pl-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-1">Bachelor of Computer Engineering (Honors in Data Science)</h4>
                <p className="text-primary font-medium mb-1 text-sm">August 2018 - July 2022</p>
                <p className="text-muted-foreground font-medium mb-1 text-sm">
                  <a 
                    href="https://www.unipune.ac.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline transition-all duration-200"
                  >
                    Savitribai Phule Pune University
                  </a>
                </p>
                <p className="text-muted-foreground mb-2 text-sm"><span className="font-semibold">GPA:</span> 3.55/4.00</p>
              
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}