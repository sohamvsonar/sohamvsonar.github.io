"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const experiences = [
  {
    id: "research-assistant",
    title: "Research Assistant",
    company: "Gnosis Research Center - Illinois Institute of Technology",
    shortCompany: "Gnosis Research Center",
    location: "Chicago, IL",
    period: "February 2025 - Present",
    companyUrl: "https://grc.iit.edu/",
    achievements: [
      "Developed agentic AI platform leveraging multi agent orchestration, LLM fine tuning, and conversational AI to automate end-to-end workflows across 40+ node clusters, enabling autonomous task execution and intelligent workflow coordination.",
      "Conducted research on testing LLM based applications development (cursor, claude), building risk assessment frameworks and evaluating best practices to ensure robustness, reliability, and compliance in enterprise scale AI systems.",
      "Developed a scalable AI/ML pipeline leveraging Hadoop HDFS for distributed data ingestion and Spark MLlib for model training, processing over 100 TB of data, slashing feature engineering time by 50%.",
      "Enhanced the performance of open source projects (IOWarp, Chronolog), by integrating an intuitive natural language assistant for data analytics and AI driven workflows, reducing average data retrieval latency by 40%.",
      "Accelerated containerized deployment of HPC applications, cutting setup time by 15%, by leveraging Docker, Jarvis-CD and Linux kernel tuning for Cluster Computers and scalable cloud based environments (Chameleon Cloud)."
    ]
  },
  {
    id: "ml-intern",
    title: "Machine Learning Intern",
    company: "Vosyn Inc.",
    shortCompany: "Vosyn Inc.",
    location: "Chicago, IL",
    period: "January 2025 - April 2025",
    companyUrl: "https://www.vosyn.ai",
    achievements: [
      "Designed and optimized machine learning models using Vertex AI to improve real-time multilingual voice synthesis accuracy by 35%, ensuring seamless contextual translation across global markets.",
      "Spearheaded automated CI/CD pipelines for preprocessing and feature extraction on 100k+ multilingual audio samples, reducing data preparation time by 30%.",
      "Deployed ML models for real-time voice localization using Kubernetes & Cloud Run, optimizing inference via CPU/GPU benchmarking and reduced latency by 20% and enabled scalable cross-platform integration."
    ]
  },
  {
    id: "mobile-developer",
    title: "Mobile Developer Intern",
    company: "Stealth Startup",
    shortCompany: "Stealth Startup",
    location: "Remote",
    period: "October 2024 - January 2025",
    companyUrl: "#",
    achievements: [
      "Designed and implemented user-friendly and responsive UI components using Flutter and Dart.",
      "Collaborated with cross-functional teams to align frontend features with backend requirements, ensuring seamless integration and efficient performance, enhancing team efficiency by 15%.",
      "Conducted extensive testing and debugging to improve user interface functionality across different devices."
    ]
  },
  {
    id: "executive",
    title: "Executive",
    company: "Hexaware Technologies",
    shortCompany: "Hexaware Technologies",
    location: "Mumbai, India",
    period: "March 2023 - June 2023",
    companyUrl: "https://hexaware.com",
    achievements: [
      "Achieved a 60% improvement in platform performance for a healthcare software solution by debugging and optimizing using Python, SQL, and database tuning techniques.",
      "Automated data entry workflows, reducing manual workload and improving data processing efficiency by 30% through Python scripting and workflow automation.",
      "Collaborated with cross functional teams in an Agile Scrum environment, and led backlog grooming and sprint planning across software engineering and QA teams, reducing post-deployment defects by 30%."
    ]
  },
  {
    id: "web-developer",
    title: "Web Development Intern",
    company: "Wolfizer",
    shortCompany: "Wolfizer",
    location: "Remote",
    period: "April 2022 - November 2022",
    companyUrl: "https://www.wolfizer.com",
    achievements: [
      "Cooperated with a team of web professionals, led development, design and technical support for an E-commerce website for a client; completed project 2 months prior to the deadline.",
      "Got exposure to agile development methodologies and project management processes, successfully executing 2 projects deploying these methodologies.",
      "Gained knowledge of front-end technologies such as HTML, CSS and JavaScript to create and handle multiple projects."
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst Intern",
    company: "Globalshala",
    shortCompany: "Globalshala",
    location: "Remote",
    period: "Summer 2021",
    companyUrl: "#",
    achievements: [
      "Collaborated and partnered with 3 cross-functional teams to identify and address business challenges through data analysis.",
      "Implemented Tableau to analyze and identify flaws in unstructured data provided by the marketing team for a Facebook advertisement resulting in 34% revenue growth."
    ]
  }
]

export function Experience() {
  const [activeExperience, setActiveExperience] = useState(0)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentExperience = experiences[activeExperience]

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="experience" className="relative py-20 bg-background overflow-hidden">
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
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-background/70"></div>
        </div>
      )}
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">My professional journey</p>
        </motion.div>

        {/* Mobile Sliding Navigation */}
        <div className="lg:hidden mb-8">
          <motion.div 
            className="overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'hsl(var(--primary)) hsl(var(--muted))'
            }}
          >
            <div className="flex space-x-3 px-4 pb-4 min-w-max">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(index)}
                  className={`flex-shrink-0 px-4 py-3 rounded-lg border transition-all duration-300 ${
                    activeExperience === index
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'bg-muted/30 border-border text-muted-foreground'
                  }`}
                >
                  <div className="font-semibold text-sm whitespace-nowrap">{exp.title}</div>
                  <div className="text-xs opacity-80 whitespace-nowrap">{exp.shortCompany}</div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Left Navigation Panel */}
          <div className="hidden lg:block lg:col-span-1">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    activeExperience === index
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'bg-muted/30 border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }`}
                >
                  <div className="font-semibold text-sm mb-1">{exp.title}</div>
                  <div className="text-xs opacity-80">{exp.shortCompany}</div>
                  <div className="text-xs opacity-60 mt-1">{exp.period}</div>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right Content Panel */}
          <div className="col-span-1 lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExperience}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-muted/30 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg"
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-foreground mb-3">{currentExperience.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <a 
                      href={currentExperience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline transition-all duration-200 text-xl"
                    >
                      {currentExperience.company}
                    </a>
                    <span className="text-muted-foreground font-medium">{currentExperience.location}</span>
                  </div>
                  <p className="text-primary font-medium text-lg">{currentExperience.period}</p>
                </div>

                <div className="space-y-4">
                  {currentExperience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed text-base">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}