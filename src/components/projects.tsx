"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const featuredProjects = [
  {
    id: "enterprise-io-automation",
    title: "Enterprise IO Automation Framework (IOWarp MCPs)",
    status: "Currently Active",
    period: "2024 - Present",
    description: "Led the development of the Model Context Protocol (MCP) server framework, including Pandas, Parquet, Plot and HDF5 MCP servers, to automate I/O and filesystem workflows for local and cloud environments.",
    highlights: [
      "Designed custom LLM client using Google Gen AI SDK",
      "Coordinates 120+ simulation pipelines",
      "Processes multi-terabyte datasets",
      "Significantly reduced data access latency"
    ],
    techStack: ["Python", "MCP", "Google Gen AI SDK", "Pandas", "HDF5", "Cloud"],
    image: "/images/projects/enterprise-io.jpg",
    projectUrl: "https://iowarp.github.io/iowarp-mcps/",
    githubUrl: "https://github.com/iowarp/iowarp-mcps"
  },
  {
    id: "intelligent-soc",
    title: "Intelligent Security Operations Center (SOC)",
    period: "July - August 2025",
    description: "Built a hybrid log classification system and transformed it into enterprise grade SOC platform using ensemble ML (BERT + Groq/Llama 3.1) with real-time threat detection and event correlation.",
    highlights: [
      "MCP based Agentic AI framework orchestration",
      "Slack, JIRA, and Grafana integrations",
      "70% reduction in mean time to detect",
      "60% reduction in false positives"
    ],
    techStack: ["Python", "BERT", "Groq", "Llama 3.1", "Slack API", "JIRA", "Grafana", "MCP"],
    image: "/images/projects/soc-platform.jpg",
    projectUrl: "https://log-classification-system.streamlit.app/",
    githubUrl: "https://github.com/sohamvsonar/Intelligent-SOC-Log-Classification-System"
  },
  {
    id: "chronoai",
    title: "ChronoAI",
    period: "April - June 2025",
    description: "Engineered a Python inference pipeline to log LLM prompts and responses into ChronoLog, and built a Model context protocol server for context based retrieval and cross platform communication.",
    highlights: [
      "50K+ real-time LLM conversations captured",
      "End-to-end LLM logging and retrieval",
      "Cross-platform communication",
      "Scalable architecture design"
    ],
    techStack: ["Python", "ChronoLog", "MCP", "LLM APIs", "Real-time Processing"],
    image: "/images/projects/chronoai.jpg",
    githubUrl: "https://github.com/sohamvsonar/ChronoMCP"
  },
  {
    id: "github-insights",
    title: "GitHub Repo Insights and Forecasting Tool",
    period: "January - March 2025",
    description: "Created and hosted a forecasting tool analyzing over 10,000 GitHub issues and metrics, integrating GitHub API to design data pipelines and deliver actionable insights.",
    highlights: [
      "10,000+ GitHub issues analyzed",
      "Machine learning forecasting models",
      "Interactive visualizations",
      "Real-time trend analysis"
    ],
    techStack: ["Python", "React", "Flask", "Elasticsearch", "GitHub API", "ML"],
    image: "/images/projects/github-insights.jpg",
    githubUrl: "https://github.com/sohamvsonar/GitHub-Repo-Insights-and-Forecasting-Tool"
  },
  {
    id: "p2p-system",
    title: "P2P Publisher Subscriber System",
    period: "October - December 2024",
    description: "Built a fault-tolerant P2P publisher-subscriber system with 99.9% availability using topic replication in a hypercube topology.",
    highlights: [
      "99.9% system availability",
      "30% performance optimization",
      "1M+ topics scaling capability",
      "Efficient failure recovery"
    ],
    techStack: ["Linux", "P2P Networks", "Hypercube Topology", "Async I/O", "Fault Tolerance"],
    image: "/images/projects/p2p-system.jpg",
    githubUrl: "https://github.com/sohamvsonar/Peer-to-Peer-Publisher-Subscriber-System"
  },
  {
    id: "disease-prediction-using-ml",
    title: "Disease Prediction and Medical Recommendation System",
    period: "March - May 2024",
    description: "Implemented a machine learning-based system using a Random Forest model, with accurate disease predictions and built a Flask web application providing tailored medication, diet, and workout recommendations.",
    highlights: [
      "Random Forest ML model for accurate predictions",
      "Flask web application with intuitive UI",
      "Tailored medication recommendations",
      "Personalized diet and workout plans"
    ],
    techStack: ["Machine Learning", "Flask", "Random Forest", "Data Analysis", "Python"],
    image: "/images/projects/disease-pred.jpg",
    projectUrl: "https://disease-prediction-and-medical-pwxv.onrender.com/",
    githubUrl: "https://github.com/sohamvsonar/Disease-Prediction-and-Medical-Recommendation-System"
  }
]

export function Projects() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
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
            <source src="" type="video/mp4" />
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
            Featured <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">Showcasing my most impactful work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-background/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-blue-600/20 overflow-hidden">
                {project.id === 'github-insights' ? (
                  // Custom GitHub Analytics Dashboard
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-4">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      
                      {/* Background grid */}
                      <g stroke="rgba(255,255,255,0.1)" strokeWidth="0.5">
                        {[40, 80, 120, 160].map(y => (
                          <line key={y} x1="50" y1={y} x2="350" y2={y} />
                        ))}
                        {[80, 140, 200, 260, 320].map(x => (
                          <line key={x} x1={x} y1="40" x2={x} y2="160" />
                        ))}
                      </g>
                      
                      {/* Bar chart */}
                      {[
                        { x: 70, height: 60, color: "#22d3ee" },
                        { x: 110, height: 90, color: "#3b82f6" },
                        { x: 150, height: 45, color: "#8b5cf6" },
                        { x: 190, height: 110, color: "#10b981" },
                        { x: 230, height: 75, color: "#06b6d4" },
                        { x: 270, height: 120, color: "#8b5cf6" },
                        { x: 310, height: 85, color: "#22d3ee" }
                      ].map((bar, idx) => (
                        <rect
                          key={idx}
                          x={bar.x}
                          y={160 - bar.height}
                          width="25"
                          height={bar.height}
                          fill={bar.color}
                          opacity="0.8"
                          rx="2"
                        />
                      ))}
                      
                      {/* Trend line */}
                      <path
                        d="M70 120 Q150 80 230 60 T310 90"
                        stroke="url(#lineGradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                      
                      {/* Data points on line */}
                      {[{x: 70, y: 120}, {x: 150, y: 90}, {x: 230, y: 60}, {x: 310, y: 90}].map((point, idx) => (
                        <circle key={idx} cx={point.x} cy={point.y} r="4" fill="white" opacity="0.9" />
                      ))}
                      
                      {/* Title and metrics */}
                      <text x="50" y="25" fill="white" fontSize="16" fontWeight="bold">GitHub Analytics</text>
                      <text x="280" y="25" fill="#10b981" fontSize="12">10K+ Issues</text>
                      
                      {/* Legend */}
                      <g transform="translate(50, 180)">
                        <circle cx="0" cy="0" r="3" fill="#22d3ee" />
                        <text x="10" y="4" fill="white" fontSize="10">Issues</text>
                        <circle cx="60" cy="0" r="3" fill="#10b981" />
                        <text x="70" y="4" fill="white" fontSize="10">Forecasts</text>
                        <circle cx="130" cy="0" r="3" fill="#8b5cf6" />
                        <text x="140" y="4" fill="white" fontSize="10">Trends</text>
                      </g>
                    </svg>
                  </div>
                ) : project.id === 'p2p-system' ? (
                  // Custom P2P Network Architecture
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 p-4">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                      <defs>
                        <radialGradient id="nodeGradient" cx="50%" cy="50%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </radialGradient>
                        <radialGradient id="centralGradient" cx="50%" cy="50%">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </radialGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Network connections */}
                      <g stroke="rgba(34, 211, 238, 0.4)" strokeWidth="2" fill="none">
                        {/* Hypercube connections */}
                        <path d="M200 100 L120 60 M200 100 L280 60 M200 100 L120 140 M200 100 L280 140" />
                        <path d="M200 100 L80 100 M200 100 L320 100 M200 100 L160 40 M200 100 L240 40" />
                        <path d="M200 100 L160 160 M200 100 L240 160" />
                        
                        {/* Outer ring connections */}
                        <path d="M120 60 L280 60 M120 140 L280 140 M80 100 L320 100" />
                        <path d="M160 40 L240 40 M160 160 L240 160" />
                      </g>
                      
                      {/* Publisher/Subscriber nodes */}
                      {[
                        {x: 120, y: 60, type: 'pub'},
                        {x: 280, y: 60, type: 'sub'},
                        {x: 120, y: 140, type: 'sub'},
                        {x: 280, y: 140, type: 'pub'},
                        {x: 80, y: 100, type: 'pub'},
                        {x: 320, y: 100, type: 'sub'},
                        {x: 160, y: 40, type: 'sub'},
                        {x: 240, y: 40, type: 'pub'},
                        {x: 160, y: 160, type: 'pub'},
                        {x: 240, y: 160, type: 'sub'}
                      ].map((node, idx) => (
                        <g key={idx}>
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="8"
                            fill="url(#nodeGradient)"
                            filter="url(#glow)"
                            opacity="0.9"
                          />
                          <text
                            x={node.x}
                            y={node.y + 2}
                            textAnchor="middle"
                            fill="white"
                            fontSize="6"
                            fontWeight="bold"
                          >
                            {node.type.toUpperCase()}
                          </text>
                        </g>
                      ))}
                      
                      {/* Central broker/coordinator */}
                      <circle
                        cx="200"
                        cy="100"
                        r="15"
                        fill="url(#centralGradient)"
                        filter="url(#glow)"
                        opacity="0.95"
                      >
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                      </circle>
                      
                      <text
                        x="200"
                        y="105"
                        textAnchor="middle"
                        fill="white"
                        fontSize="8"
                        fontWeight="bold"
                      >
                        HUB
                      </text>
                      
                      {/* Floating data packets */}
                      {[
                        {x: 150, y: 80, delay: '0s'},
                        {x: 250, y: 120, delay: '1s'},
                        {x: 180, y: 130, delay: '2s'}
                      ].map((packet, idx) => (
                        <circle
                          key={idx}
                          cx={packet.x}
                          cy={packet.y}
                          r="3"
                          fill="#22d3ee"
                          opacity="0.6"
                        >
                          <animate 
                            attributeName="cy" 
                            values={`${packet.y};${packet.y - 20};${packet.y}`} 
                            dur="3s" 
                            repeatCount="indefinite"
                            begin={packet.delay}
                          />
                        </circle>
                      ))}
                      
                      {/* Title and stats */}
                      <text x="20" y="25" fill="white" fontSize="16" fontWeight="bold">P2P Network</text>
                      <text x="20" y="185" fill="#22d3ee" fontSize="12">99.9% Uptime</text>
                      <text x="320" y="25" fill="#10b981" fontSize="11" textAnchor="end">1M+ Topics</text>
                      <text x="320" y="185" fill="#8b5cf6" fontSize="11" textAnchor="end">Hypercube Topology</text>
                    </svg>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                {/* Status Badge */}
                {project.status && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Currently Active' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{project.period}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 mt-auto">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2 border border-border text-muted-foreground rounded-lg font-medium hover:bg-muted/50 transition-colors text-sm ${
                        !project.projectUrl ? 'flex-1' : ''
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {!project.projectUrl && !project.githubUrl && (
                    <div className="flex-1 flex items-center justify-center px-4 py-2 bg-muted/50 text-muted-foreground rounded-lg text-sm">
                      Private Project
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/project-library"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium hover:bg-primary/20 transition-all duration-300 text-lg"
          >
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}