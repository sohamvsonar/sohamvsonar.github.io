"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const skillsData = {
  "Programming Languages": [
    "Python",
    "Java",
    "C++",
    "R",
    "HTML",
    "CSS"
  ],
  "AI & Machine Learning": [
    "GenAI/LLMs",
    "Machine Learning",
    "Agentic AI",
    "Autogens",
    "MCP Servers",
    "RAG"
  ],
  "Web & Backend": [
    "Django",
    "Node.js",
    "React",
    "REST APIs",
    "SaaS",
    "Next.js"
  ],
  "Database": [
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "MongoDB",
    "Redis",
    "Elasticsearch"
  ],
  "Cloud & Big Data": [
    "AWS",
    "GCP",
    "Azure",
    "Docker",
    "Kubernetes",
    "Hadoop",
    "Spark"
  ],
  "Tools & Version Control": [
    "GitHub",
    "Git",
    "Jira",
    "VS Code",
    "Jupyter",
    "Postman"
  ]
}

const certifications = [
  {
    category: "Graduate Coursework",
    items: [
      "Design and Analysis of Algorithms (CS535)",
      "Advanced Operating Systems (CS550)",
      "Cloud Computing (CS553)",
      "Advanced Database Organization (CS525)",
      "Machine Learning (CS584)",
      "Natural Language Processing (CS585)",
      "Data Preparation and Analysis (CSP571)",
      "Big Data Technologies (CSP574)"
    ]
  },
  {
    category: "Professional Certifications",
    items: [
      "100 Days of Python Bootcamp",
      "Java Data Structures and Algorithms",
      "Google Cloud Architecture",
      "Python by University of Michigan"
    ]
  }
]

export function Skills() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Video for Dark Mode */}
      {mounted && theme === 'dark' && (
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {category}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Courses & <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Certifications</span>
            </h3>
            <p className="text-muted-foreground">Academic achievements and professional development</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    sectionIndex === 0 ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-green-500 to-teal-500'
                  }`}></div>
                  {section.category}
                </h4>
                
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.2) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}