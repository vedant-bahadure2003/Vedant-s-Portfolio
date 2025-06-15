"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Zap,
  Code,
  Globe,
  Users,
} from "lucide-react";

const Experience = () => {
  const projects = [
    {
      name: "Uzbekistan MBBS Consultancy Website",
      url: "uzbekistanmedi.com",
      description:
        "Developed a comprehensive consultancy platform using Next.js with focus on performance , SEO (Search Engine Optimization) and user engagement",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Led 80% of the website development, focusing on performance and responsiveness",
        "Implemented SEO strategies to enhance visibility and user engagement",
        "Integrated consultation booking system with real-time availability",
      ],
      relatedLinks: [
        { name: "Georgia MBBS Site", url: "https://georgiamedi.com" },
        { name: "Russia MBBS Site", url: "https://russiamedi.com" },
        { name: "Tajikistan MBBS Site", url: "https://tajikistanmedi.com" },
      ],
    },

    {
      name: "Official Company Website",
      url: "infusyx.com",
      description:
        "Built and maintained the official company website using Next.js, Tailwind CSS, and Framer Motion",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Created a professional, responsive UI aligned with branding and company values",
        "Focused on optimizing page load speed and contact form integration",
        "Implemented advanced animations and micro-interactions",
      ],
    },
    {
      name: "KHATMED University Website",
      url: "khatmeduni.tj/",
      description:
        "Contributed to a multi-language university platform using Next.js, Tailwind, and Headless CMS",
      icon: Users,
      color: "from-emerald-500 to-teal-500",
      achievements: [
        "Implemented components for course listings, academic staff, and campus life gallery",
        "Ensured accessibility, clean structure, and responsive layout for students and faculty",
        "Integrated multi-language support for international students",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work{" "}
            <span className="gradient-text dark:gradient-text-dark">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the projects I've contributed to
          </p>
        </motion.div>

        {/* Current Role */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-dark-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-8 mb-12 border-l-4 border-blue-500 relative overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-40 h-40 opacity-5"
          >
            <Briefcase size={160} />
          </motion.div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
              <div className="flex items-start space-x-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl"
                >
                  <Briefcase
                    className="text-blue-600 dark:text-blue-400"
                    size={32}
                  />
                </motion.div>
                <div>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Full-Stack Developer Intern
                    </h3>
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-2 h-2 bg-green-500 rounded-full mr-2"
                      />
                      Current
                    </motion.span>
                  </div>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    Infusyx Services
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-3 sm:space-y-0 text-gray-500 dark:text-gray-400">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <MapPin size={18} />
                      <span>Office</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <Calendar size={18} />
                      <span>Dec 2024 - Present</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="space-y-8"
            >
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Zap className="mr-3 text-yellow-500" size={28} />
                Key Projects
              </h4>

              <div className="grid gap-8">
                {projects.map((project, index) => {
                  const IconComponent = project.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                      }}
                      className="bg-gray-50 dark:bg-dark-700 rounded-2xl p-8 hover:bg-white dark:hover:bg-dark-600 transition-all duration-300 border border-gray-200 dark:border-dark-600 group"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`p-3 bg-gradient-to-r ${project.color} rounded-xl`}
                          >
                            <IconComponent className="text-white" size={24} />
                          </motion.div>
                          <div>
                            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                              {project.name}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>
                        <motion.a
                          href={`https://${project.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200"
                        >
                          <span>{project.url}</span>
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>

                      <div className="space-y-3">
                        {project.achievements.map(
                          (achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              whileHover={{ x: 5 }}
                              className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                            >
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: achievementIndex * 0.5,
                                }}
                                className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 flex-shrink-0`}
                              />
                              <span className="text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>

                      {project.relatedLinks && (
                        <div className="pt-4">
                          <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Related Websites
                          </h6>
                          <ul className="space-y-2">
                            {project.relatedLinks.map((link, i) => (
                              <li key={i}>
                                <motion.a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ x: 4 }}
                                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-2"
                                >
                                  <ExternalLink size={14} />
                                  <span>{link.name}</span>
                                </motion.a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
