'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/vedant-bahadure2003',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white',
      bg: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/vedant-bahadure',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      icon: Mail,
      href: 'mailto:vedantbahadure@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500',
      bg: 'hover:bg-red-50 dark:hover:bg-red-900/20'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-12">
          {/* Left Section - Name and Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold mb-4 gradient-text-dark"
            >
              Vedant Bahadure
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer passionate about creating exceptional digital experiences 
              with modern technologies and user-centered design.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-2 mt-4 justify-center md:justify-start"
            >
              <Code size={16} className="text-blue-400" />
              <span className="text-sm text-gray-400">Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Center Section - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-gray-800 dark:bg-dark-800 rounded-2xl transition-all duration-300 hover:bg-gray-700 dark:hover:bg-dark-700 ${link.color} border border-gray-700 dark:border-dark-600`}
                  aria-label={link.label}
                >
                  <IconComponent size={24} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Right Section - Back to Top */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 mb-4 bg-gray-800 dark:bg-dark-800 px-6 py-3 rounded-xl hover:bg-gray-700 dark:hover:bg-dark-700 border border-gray-700 dark:border-dark-600"
            >
              <ArrowUp size={20} />
              <span>Back to Top</span>
            </motion.button>
            <p className="text-gray-400 text-sm">
              Let's build something amazing together
            </p>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 dark:border-dark-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Vedant Bahadure. All rights reserved.
            </p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-gray-400 text-sm flex items-center space-x-2"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="text-red-500" size={16} />
              </motion.div>
              <span>using Next.js & Tailwind CSS</span>
              <Coffee className="text-amber-500" size={16} />
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer