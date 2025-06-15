"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Brain,
  Utensils,
  Calendar,
  Sparkles,
  Zap,
  Globe,
  Code,
} from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "SignEase",
      subtitle: "Real-time Sign Language Translator",
      description:
        "An innovative application that bridges communication gaps by translating sign language in real-time using advanced machine learning technologies.",
      icon: Brain,
      projectUrl: "https://github.com/vedant-bahadure2003/SignEase",

      color: "blue",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      technologies: [
        "TensorFlow",
        "Python",
        "JavaScript",
        "Google Translate API",
      ],
      features: [
        "Built using TensorFlow for gesture recognition",
        "Integrated TTS (Google, IBM Watson, Azure) for audio feedback",
        "Enabled multilingual support via Google Translate",
        "Real-time processing and translation",
      ],
      type: "Machine Learning",
      status: "Featured",
    },
    {
      title: "BalancedBite by VedFits",
      subtitle: "Personalized Dietary Platform",
      description:
        "A comprehensive health and wellness platform that provides personalized dietary recommendations based on individual health metrics and goals.",
      icon: Utensils,
      projectUrl: "https://github.com/vedant-bahadure2003/BalenceBite",

      color: "emerald",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      features: [
        "BMI calculator integrated to generate dietary suggestions",
        "Personalized meal planning system",
        "Nutritional information and tracking",
        "Responsive design for all devices",
      ],
      type: "Web Application",
      status: "Live",
    },
    {
      title: "EventPlaza by VedEvents",
      subtitle: "Event Discovery Platform",
      description:
        "A community-focused platform designed to help users discover, organize, and participate in local events with an emphasis on user experience.",
      icon: Calendar,
      projectUrl: "#",

      color: "purple",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      features: [
        "Enhanced UX for local community event discovery",
        "Event listing and management system",
        "Interactive event calendar",
        "Community engagement features",
      ],
      type: "Web Platform",
      status: "Development",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
        icon: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
        badge:
          "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
        button:
          "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
        border: "border-blue-200 dark:border-blue-800",
      },
      emerald: {
        bg: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
        icon: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
        badge:
          "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
        button:
          "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600",
        border: "border-emerald-200 dark:border-emerald-800",
      },
      purple: {
        bg: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
        icon: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
        badge:
          "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
        button:
          "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600",
        border: "border-purple-200 dark:border-purple-800",
      },
    };
    return colors[color as keyof typeof colors];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="projects"
      className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
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
            Featured{" "}
            <span className="gradient-text dark:gradient-text-dark">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving
            through diverse web applications
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colorClasses = getColorClasses(project.color);

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                }}
                className="bg-white dark:bg-dark-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-dark-600 group"
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-br ${colorClasses.bg} p-8 relative overflow-hidden`}
                >
                  {/* Animated Background Pattern */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-0 right-0 w-32 h-32 opacity-10"
                  >
                    <IconComponent size={128} />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`p-4 rounded-2xl ${colorClasses.icon}`}
                      >
                        <IconComponent size={32} />
                      </motion.div>
                      <div className="flex space-x-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.badge}`}
                        >
                          {project.type}
                        </span>
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Featured"
                              ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                              : project.status === "Live"
                              ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                              : "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
                          }`}
                        >
                          {project.status === "Featured" && (
                            <Sparkles className="inline w-3 h-3 mr-1" />
                          )}
                          {project.status === "Live" && (
                            <Zap className="inline w-3 h-3 mr-1" />
                          )}
                          {project.status === "Development" && (
                            <Globe className="inline w-3 h-3 mr-1" />
                          )}
                          {project.status}
                        </motion.span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Code className="mr-2" size={16} />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-dark-500 transition-colors duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          whileHover={{ x: 5 }}
                          className="flex items-start space-x-3 text-gray-600 dark:text-gray-300 text-sm"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: featureIndex * 0.3,
                            }}
                            className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mt-2 flex-shrink-0`}
                          />
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 px-6 py-3 ${colorClasses.button} text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}
                    >
                      <ExternalLink size={18} />
                      <span>View Project</span>
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-3 border-2 border-gray-300 dark:border-dark-500 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-400 dark:hover:border-dark-400 transition-all duration-300"
                    >
                      <Link href="https://github.com/vedant-bahadure2003">
                        {" "}
                        <Github size={18} />
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
