"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#recent-achievements" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    console.log('Attempting to scroll to:', href)
    
    // Close mobile menu first
    setIsOpen(false)
    
    // Small delay to allow menu to close
    setTimeout(() => {
      const element = document.querySelector(href) as HTMLElement
      console.log('Found element:', element)
      
      if (element) {
        const headerOffset = 20; // Account for fixed header + extra spacing
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        console.log('Scrolling to position:', offsetPosition)
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        console.error('Element not found for selector:', href)
      }
    }, 300) // Wait for menu animation to complete
  }

  return (
    <motion.header
      className={`fixed w-full z-50 ${
        scrolled || isOpen
          ? "top-0 bg-background/90 backdrop-blur-md border-b border-border"
          : "top-0 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span className="text-xl font-bold text-white group-hover:scale-110 transition-transform duration-200">
                S
              </span>
              
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 blur-sm group-hover:blur-md transition-all duration-300" />
              
              {/* Corner accent */}
              <div className="absolute top-1 right-1 w-2 h-2 bg-white/20 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="block w-full text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded hover:bg-muted/50 cursor-pointer touch-manipulation"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}