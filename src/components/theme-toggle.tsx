"use client"

import * as React from "react"
import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isPulling, setIsPulling] = useState(false)

  const handleClick = () => {
    setIsPulling(true)
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark")
      setIsPulling(false)
    }, 200)
  }

  return (
    <div className="relative">
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-background text-foreground border border-border/30 ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        aria-label="Toggle theme"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: isPulling ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {/* Rope */}
        <motion.div
          className="absolute -top-8 left-1/2 w-1 bg-gradient-to-b from-amber-600 to-amber-800 transform -translate-x-1/2"
          animate={{
            height: isPulling ? "40px" : "32px",
            opacity: isHovered || isPulling ? 1 : 0.3,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
        
        {/* Rope end knot */}
        <motion.div
          className="absolute -top-10 left-1/2 w-3 h-3 bg-amber-700 rounded-full transform -translate-x-1/2 border-2 border-amber-900"
          animate={{
            y: isPulling ? -8 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        />
        
        {/* Icons with rope-pulling animation */}
        <motion.div
          className="relative"
          animate={{
            rotate: isPulling ? (theme === "dark" ? 180 : -180) : 0,
            scale: isPulling ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute top-0 left-0 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </motion.div>

        {/* Rope segments for more realistic effect */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 w-0.5 h-2 bg-amber-700/60 transform -translate-x-1/2"
            style={{ top: -32 + (i * 8) }}
            animate={{
              y: isPulling ? -8 : 0,
              rotate: isPulling ? Math.random() * 10 - 5 : 0,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25, 
              delay: i * 0.05 
            }}
          />
        ))}
      </motion.button>

      {/* Tooltip - only show in light mode */}
      <AnimatePresence>
        {isHovered && theme !== "dark" && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.8 }}
            className="absolute top-full mt-2 right-0 sm:-left-2 sm:-translate-x-full bg-white text-gray-900 px-2 py-1 sm:px-3 sm:py-2 rounded-md shadow-xl border border-gray-200 text-xs sm:text-sm w-[100px] sm:w-[200px] text-center sm:text-left leading-tight z-[100] pointer-events-none"
            transition={{ duration: 0.2 }}
          >
            <span className="block sm:inline">Turn Dark mode for</span>
            <span className="block sm:inline"> a better experience</span>
            <div className="absolute -top-1 right-4 sm:left-4 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45 transform -translate-y-1"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}