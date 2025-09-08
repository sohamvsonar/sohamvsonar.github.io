"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Award, Users, ExternalLink, ChevronLeft, ChevronRight, BookOpen } from "lucide-react"

const achievements = [
  {
    id: "ssdbm-2025",
    title: "ChronoLog & AI: A Scalable, Collaborative Solution for LLM Conversation Logging & Retrieval",
    subtitle: "Peer Reviewed Poster Presentation",
    date: "2025",
    location: "37th International Conference on Scalable Scientific Data Management (SSDBM 2025), Columbus, Ohio",
    type: "Research Conference",
    authors: "Soham Sonar, Jaime Cernuda, Dr. Anthony Kougkas and Dr. Xian-He Sun",
    images: [
      "/images/achievements/SSDBM-1.jpg",
      "/images/achievements/SSDBM-2.jpeg", 
      "/images/achievements/SSDBM-3.jpeg"
    ],
    problem: "There is a widespread use of Large Language Models (LLMs), with millions of LLM interactions occurring every second on cloud platforms, fueling demand for local and HPC cluster based models. Cloud providers capture vast logs but offer no AI/HPC centric logging, nor cross chat or cross-user references needed for collaborative workflows.",
    solution: "ChronoLog delivers a scalable, high throughput distributed storage with precise physical timestamps, multi-user access, and fast time range reads for on-premise and cluster environments, ideal for storing fast, structured AI conversation data.",
    implementation: "We implemented a Model Context Protocol (MCP) server which is a service that implements a standardized interface for managing and relaying contextual data through tool interactions.",
    impact: "Presented to a large group of scientists, professors, and students at SSDBM, showcasing innovative solutions for AI conversation logging in distributed systems.",
    tags: ["AI/ML", "Distributed Systems", "HPC", "Research", "MCP"]
  },
  {
    id: "iit-award-2025",
    title: "Best Poster Award - Illinois Tech Research Competition",
    subtitle: "1st Place Award at Research Poster Competition Spring 2025",
    date: "Spring 2025",
    location: "Illinois Institute of Technology, Chicago",
    type: "University Competition",
    authors: "Soham Sonar, Jaime Cernuda, Anthony Kougkas and Xian-He Sun",
    images: [
      "/images/achievements/poster-competition1.jpg",
      "/images/achievements/poster-competition2.jpg",
      "/images/achievements/poster-competition3.jpg"
    ],
    problem: "Same research as SSDBM presentation but adapted for university-wide competition format with focus on practical applications and student accessibility.",
    solution: "Demonstrated the ChronoLog & AI solution with enhanced visualization and clear explanation of benefits for academic and industry applications.",
    implementation: "Refined presentation approach to highlight the technical innovation while making it accessible to diverse academic audience across multiple disciplines.",
    impact: "Won 1st Place among all research posters at Illinois Tech, recognized for excellence in research presentation and technical innovation.",
    tags: ["Award Winner", "AI/ML", "Research Excellence", "Illinois Tech", "Academic Recognition"]
  },
  {
    id: "graduation-2025",
    title: "Master's Degree in Computer Science",
    subtitle: "Graduated from Illinois Institute of Technology",
    date: "May 17, 2025",
    location: "Credit Arena 1, Chicago, Illinois",
    type: "Academic Milestone",
    authors: "Soham Sonar",
    images: [
      "/images/achievements/graduation-1.jpg",
      "/images/achievements/graduation-2.jpg",
      "/images/achievements/graduation-3.jpg"
    ],
    problem: "Pursuing advanced education in computer science to deepen technical expertise and research capabilities in emerging technologies like AI, distributed systems, and scalable data management.",
    solution: "Completed a comprehensive Master's program at Illinois Institute of Technology, focusing on cutting-edge computer science topics including advanced algorithms, distributed systems, cloud computing, and machine learning.",
    impact: "Successfully graduated with a Master's degree in Computer Science, equipped with advanced knowledge and research experience to tackle complex technological challenges and contribute to innovation in the field.",
    tags: ["Education", "Master's Degree", "Computer Science", "Illinois Tech", "Academic Achievement"]
  }
]

export function RecentAchievements() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({})

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextPage = () => {
    if (currentPage < achievements.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev + 1)
        setIsFlipping(false)
      }, 300)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev - 1)
        setIsFlipping(false)
      }, 300)
    }
  }

  const nextImage = (achievementIndex: number) => {
    const achievement = achievements[achievementIndex]
    const current = currentImageIndex[achievementIndex] || 0
    const next = (current + 1) % achievement.images.length
    setCurrentImageIndex(prev => ({
      ...prev,
      [achievementIndex]: next
    }))
  }

  const prevImage = (achievementIndex: number) => {
    const achievement = achievements[achievementIndex]
    const current = currentImageIndex[achievementIndex] || 0
    const prevIndex = current === 0 ? achievement.images.length - 1 : current - 1
    setCurrentImageIndex(prev => ({
      ...prev,
      [achievementIndex]: prevIndex
    }))
  }

  return (
    <section id="recent-achievements" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Recent <span className="bg-gradient-to-r from-blue-500 to-primary bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">Latest research accomplishments and recognitions</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-sm text-muted-foreground">Page {currentPage + 1} of {achievements.length}</span>
          </div>
        </motion.div>

        {/* Book Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Book Spine/Shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-primary/20 rounded-2xl transform rotate-1 scale-[1.02] blur-sm"></div>
          
          {/* Book Pages */}
          <div className="relative bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-background rounded-2xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden shadow-2xl min-h-[600px]">
            {/* Page Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, rotateY: isFlipping ? 90 : 0 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: isFlipping ? -90 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full"
                >
                  {(() => {
                    const achievement = achievements[currentPage]
                    return (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                        {/* Content Side */}
                        <div className="space-y-6">
                          {/* Header */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm text-primary font-medium">
                              <Award className="w-4 h-4" />
                              {achievement.type}
                            </div>
                            
                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                              {achievement.title}
                            </h3>
                            
                            <p className="text-lg text-primary font-medium">
                              {achievement.subtitle}
                            </p>

                            {achievement.id !== 'graduation-2025' && (
                              <div className="flex items-center gap-2 text-sm">
                                <Users className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Authors:</span>
                                <span className="text-foreground font-medium text-xs">{achievement.authors}</span>
                              </div>
                            )}
                          </div>

                          {/* Content - Different for graduation vs research */}
                          {achievement.id === 'graduation-2025' ? (
                            /* Graduation Info */
                            <div className="p-6 bg-background border border-border rounded-lg">
                              <p className="text-foreground leading-relaxed">
                                I successfully completed my Master&apos;s degree in Computer Science from Illinois Institute of Technology. 
                                This milestone represents the culmination of intensive study in advanced computer science topics including distributed systems, 
                                machine learning, and software engineering.
                              </p>
                            </div>
                          ) : (
                            /* Research Achievements */
                            <div className="space-y-3">
                              <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 rounded-lg">
                                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 text-sm">Problem Statement</h4>
                                <p className="text-xs text-red-700 dark:text-red-200 leading-relaxed">
                                  {achievement.problem}
                                </p>
                              </div>

                              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 rounded-lg">
                                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 text-sm">Solution</h4>
                                <p className="text-xs text-blue-700 dark:text-blue-200 leading-relaxed">
                                  {achievement.solution}
                                </p>
                              </div>

                              <div className="p-3 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/30 rounded-lg">
                                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2 text-sm">Impact</h4>
                                <p className="text-xs text-purple-700 dark:text-purple-200 leading-relaxed">
                                  {achievement.impact}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Tags */}
                          <div className="mt-4">
                            <h6 className="text-xs font-semibold text-muted-foreground mb-2">Tags:</h6>
                            <div className="flex flex-wrap gap-1">
                              {achievement.tags.map((tag, tagIndex) => (
                                <span 
                                  key={tagIndex}
                                  className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative">
                          <div className="aspect-[4/3] relative bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-xl overflow-hidden group">
                            {/* Current Image */}
                            <div className="relative w-full h-full">
                              <Image
                                src={achievement.images[currentImageIndex[currentPage] || 0]}
                                alt={`${achievement.title} - Image ${(currentImageIndex[currentPage] || 0) + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                              
                              {/* Image overlay for better badge visibility */}
                              <div className="absolute inset-0 bg-black/10" />
                            </div>
                            
                            {/* Achievement Badge */}
                            {achievement.id === 'iit-award-2025' && (
                              <div className="absolute top-4 right-4 z-10">
                                <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                  <Award className="w-3 h-3" />
                                  1st Place
                                </div>
                              </div>
                            )}

                            {/* Image Navigation */}
                            {achievement.images.length > 1 && (
                              <>
                                <button
                                  onClick={() => prevImage(currentPage)}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                                >
                                  <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => nextImage(currentPage)}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </button>

                                {/* Image indicators */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                  {achievement.images.map((_, imageIndex) => (
                                    <button
                                      key={imageIndex}
                                      onClick={() => setCurrentImageIndex(prev => ({
                                        ...prev,
                                        [currentPage]: imageIndex
                                      }))}
                                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        imageIndex === (currentImageIndex[currentPage] || 0)
                                          ? 'bg-white scale-125'
                                          : 'bg-white/50 hover:bg-white/75'
                                      }`}
                                    />
                                  ))}
                                </div>

                                {/* Image counter */}
                                <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs z-10">
                                  {(currentImageIndex[currentPage] || 0) + 1} / {achievement.images.length}
                                </div>
                              </>
                            )}
                          </div>

                          {/* Conference/Event Info */}
                          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                            <h5 className="font-semibold text-foreground mb-2 text-sm">Event Details</h5>
                            <div className="space-y-1 text-xs text-muted-foreground">
                              <p><strong>Venue:</strong> {achievement.location}</p>
                              <p><strong>Type:</strong> {achievement.type}</p>
                              <p><strong>Date:</strong> {achievement.date}</p>
                            </div>
                          </div>

                          {/* Poster Link */}
                          {achievement.id !== 'graduation-2025' && (
                            <div className="mt-6">
                              <a 
                                href={achievement.id === 'iit-award-2025' 
                                  ? "https://drive.google.com/file/d/1lXP8CPdFFMPw_vkL70ryyE_EcCW0959J/view?usp=sharing"
                                  : "https://drive.google.com/file/d/1Uw_SwLxiYrWB5jkZS2NJyw9AC72JkVDl/view"
                                }
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 text-sm w-full sm:w-auto sm:justify-start"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View Poster
                              </a>
                            </div>
                          )}

                          {/* Mobile Navigation Buttons */}
                          <div className="mt-6 sm:hidden flex justify-between gap-2">
                            <button
                              onClick={prevPage}
                              disabled={currentPage === 0 || isFlipping}
                              className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 flex-1 justify-center ${
                                currentPage === 0 || isFlipping 
                                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                  : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg'
                              }`}
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span className="text-xs">Previous</span>
                            </button>
                            
                            <button
                              onClick={nextPage}
                              disabled={currentPage === achievements.length - 1 || isFlipping}
                              className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 flex-1 justify-center ${
                                currentPage === achievements.length - 1 || isFlipping
                                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                  : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg'
                              }`}
                            >
                              <span className="text-xs">Next</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-6 right-8 hidden sm:flex items-center gap-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 0 || isFlipping}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === 0 || isFlipping 
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-sm">Previous</span>
              </button>
              
              <button
                onClick={nextPage}
                disabled={currentPage === achievements.length - 1 || isFlipping}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === achievements.length - 1 || isFlipping
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                <span className="text-sm">Next Achievement</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in Research Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing research opportunities in AI, distributed systems, and scalable data management. 
              Feel free to reach out to explore potential collaborations.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}