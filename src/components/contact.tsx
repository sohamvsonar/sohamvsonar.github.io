"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"

export function Contact() {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:soham.sonar427@gmail.com",
      color: "hover:text-red-500"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sohamsonar23/",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: Github, 
      href: "https://github.com/sohamvsonar",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      name: "X",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "https://x.com/SohamSonar", 
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Get In <span className="bg-gradient-to-r from-blue-500 to-primary bg-clip-text text-transparent">Touch</span>
          </h2>

          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg mb-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                I&apos;m currently looking for <span className="font-semibold text-primary">Full Time Job opportunities</span> to 
                work as a <span className="font-semibold">Software Engineer</span>, <span className="font-semibold">AI Engineer</span>, 
                or <span className="font-semibold">Machine Learning Engineer</span> for 2025. Open to all locations in the 
                United States/remote, my inbox is always open.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                I have a genuine interest in connecting with new people and exchange innovative thoughts and concepts. 
                Please feel free to reach out to me!
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} min-w-[80px] sm:min-w-[100px]`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {social.name === "X" ? <social.icon /> : <social.icon className="w-6 h-6 sm:w-8 sm:h-8" />}
                <span className="text-xs sm:text-sm font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Additional Contact Info */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">United States (Open to all locations)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="text-sm">soham.sonar427@gmail.com</span>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-16 pt-8 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm">
              Designed & Built by <span className="text-primary font-medium">Soham Sonar</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}