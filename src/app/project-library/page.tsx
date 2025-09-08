"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const additionalProjects = [
  {
    id: "chicago-energy-forecast",
    title: "Chicago Energy Forecast using Autogens",
    year: "2025",
    description: "AI-powered energy forecasting system using autonomous agents for predictive analysis of Chicago's energy consumption patterns.",
    techStack: ["GenAI", "Autogens", "Data Analysis"],
    githubUrl: "https://github.com/sohamvsonar/Chicago-Energy-Forecast-Using-Autogens"
  },
  {
    id: "docquery",
    title: "Docquery - PDF Chat Data Extraction",
    year: "2024",
    description: "Engineered an interactive PDF chat system deploying Langchain and multiple AI APIs for accuracy, enabling dynamic, real-time extraction of insights from documents.",
    techStack: ["Python", "LangChain", "LLM APIs", "PDF Processing"]
  },
  {
    id: "image-segmentation-yolo-sam",
    title: "Image Segmentation using YOLO and SAM",
    year: "2024", 
    description: "Advanced computer vision project combining YOLO object detection with Segment Anything Model (SAM) for precise image segmentation.",
    techStack: ["Computer Vision", "YOLO", "SAM"],
    githubUrl: "https://github.com/sohamvsonar/Image-Segmentation-Using-YOLO-SAM"
  },
  {
    id: "chicago-crime-analysis",
    title: "Chicago Crime Analysis and Predictive Modeling",
    year: "2024",
    description: "Comprehensive analysis of Chicago crime data with predictive modeling using machine learning and K-Nearest Neighbours algorithm.",
    techStack: ["Exploratory Data Analysis", "Machine Learning", "K-Nearest Neighbours"],
    githubUrl: "https://github.com/sohamvsonar/Chicago-Crime-Analysis-and-Predictive-Modeling"
  },
  {
    id: "llm-cold-email-generator", 
    title: "LLM Based Cold Email Generator",
    year: "2024",
    description: "Intelligent email generation system powered by Large Language Models and LangChain for personalized cold outreach campaigns.",
    techStack: ["Groq", "Machine Learning", "Langchain"],
    githubUrl: "https://github.com/sohamvsonar/LLM-cold-email-generator"
  },
  {
    id: "face-recognition-attendance",
    title: "Face Recognition Attendance System", 
    year: "2022",
    description: "Real-time face recognition system for automated attendance tracking using computer vision and Firebase integration.",
    techStack: ["Python", "OpenCV", "Firebase SDK", "Face Recognition"],
    githubUrl: "https://github.com/sohamvsonar/Face-Recognition-Attendance-System"
  },
  {
    id: "stock-market-predictor",
    title: "Stock Market Price Predictor",
    year: "2024", 
    description: "Machine learning model for stock price prediction using LSTM neural networks and Yahoo Finance data integration.",
    techStack: ["Machine Learning", "LSTM", "Yahoo Finance"],
    githubUrl: "https://github.com/sohamvsonar/Stock-Market-Price-Predictor"
  },
  {
    id: "expense-tracker-app",
    title: "Expense Tracker Application",
    year: "2023",
    description: "Full-stack expense tracking application with intuitive UI and local data persistence using SQLite database.",
    techStack: ["Flutter", "Dart", "SQLite"], 
    githubUrl: "https://github.com/sohamvsonar/expense_tracker"
  },
  {
    id: "sentiment-analysis-bigram",
    title: "Sentiment Analysis with Smoothed Bigram Language Model",
    year: "2023",
    description: "Natural language processing project implementing smoothed bigram models for sentiment classification and analysis.",
    techStack: ["Python", "NLTK", "Pandas"],
    githubUrl: "https://github.com/sohamvsonar/sentiment_analysis"
  },
  {
    id: "nlp-probability-distribution",
    title: "NLP Probability Distribution and Entropy Analysis", 
    year: "2023",
    description: "Statistical analysis of language models focusing on probability distributions and entropy calculations for NLP applications.",
    techStack: ["Python", "NLTK", "Pandas"],
    githubUrl: "https://github.com/sohamvsonar/ProbabilityDistribution"
  },
  {
    id: "battleships-game",
    title: "Battleships Game",
    year: "2023", 
    description: "Interactive battleships game developed with modern UI framework and REST API integration for multiplayer functionality.",
    techStack: ["Flutter", "Dart", "REST API"],
    githubUrl: "https://github.com/sohamvsonar/battleships_game"
  },
  {
    id: "restaurant-inventory-management",
    title: "Restaurant Bill and Inventory Management System",
    year: "2023",
    description: "Comprehensive restaurant management system with billing, inventory tracking, and database integration using Python and MySQL.",
    techStack: ["Python", "Tkinter", "MySQL"],
    githubUrl: "https://github.com/sohamvsonar/RestaurantBillMS"
  },
  {
    id: "nlp-parse-tree-generator",
    title: "NLP Parse Tree Generator",
    year: "2023", 
    description: "Natural language processing tool for generating syntactic parse trees using various NLP libraries and parsing algorithms.",
    techStack: ["Python", "NLP Libraries"],
    githubUrl: "https://github.com/sohamvsonar/NLPParseTreeGenerator"
  },
  {
    id: "linear-regression-model",
    title: "Linear Regression Model",
    year: "2022",
    description: "Implementation of linear regression algorithms from scratch with visualization capabilities using Python scientific libraries.", 
    techStack: ["Python", "Scikit-learn", "Matplotlib", "Pandas"],
    githubUrl: "https://github.com/sohamvsonar/linear_regression"
  },
  {
    id: "yahtzee-game",
    title: "Yahtzee Game", 
    year: "2021",
    description: "Digital implementation of the classic Yahtzee dice game with interactive UI and game logic built using Flutter framework.",
    techStack: ["Flutter", "Dart"],
    githubUrl: "https://github.com/sohamvsonar/yahtzee_game"
  }
]

export default function ProjectLibrary() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Video for Dark Mode */}
      {mounted && theme === 'dark' && (
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/projects-video.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      
      {/* Header */}
      <div className="bg-muted/30 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link 
              href="/#projects"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Featured Projects
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Project <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">Library</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive collection of all my projects, experiments, and technical explorations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {additionalProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl text-muted-foreground">📚</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                The project library is being prepared with additional projects. 
                Check back soon for more amazing work!
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group bg-background/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.05 }}
                >
                  {/* Project Content */}
                  <div className="p-6 relative flex flex-col flex-1">
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                      {project.year}
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 pr-16">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4 flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* GitHub Link */}
                    <div className="flex mt-auto">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border text-muted-foreground rounded-lg font-medium hover:bg-muted/50 transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center px-4 py-2 bg-muted/50 text-muted-foreground rounded-lg text-sm">
                          Private Project
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}