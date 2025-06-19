"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Savitribai Phule Pune University (SPPU)",
      degree: "B.Tech in Computer Science & Engineering",
      location: "Pune, Maharashtra",
      period: "Expected: June 2025",
      current: true,
      description:
        "Focusing on modern software development, algorithms, and system design",
      achievements: [
        "Dean's List",
        "Programming Club Member",
        "Hackathon Participant",
      ],
    },
    {
      institution: "Lal Bahadur Shastri School",
      degree: "Higher Secondary Certificate (HSC)",
      location: "Akot",
      period: "Completed",
      current: false,
      description: "Science stream with Mathematics and Computer Science",
      achievements: ["Top 10% of class", "Science Exhibition Winner"],
    },
    {
      institution: "Vasundhara Dnyanpeeth School",
      degree: "Secondary School Certificate (SSC)",
      location: "Akot",
      period: "Completed",
      current: false,
      description: "Strong foundation in mathematics and sciences",
      achievements: ["Academic Excellence Award", "Sports Captain"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="education"
      className="py-16 sm:py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background Element */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="gradient-text dark:gradient-text-dark">
              Education
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My educational journey that shaped my foundation in computer science
            and technology
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-white dark:bg-dark-800 rounded-3xl shadow-xl transition-all duration-300 p-6 sm:p-8 border-l-4 overflow-hidden ${
                edu.current
                  ? "border-blue-500 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/20"
                  : "border-gray-300 dark:border-dark-600"
              }`}
            >
              {/* Rotating Icon Background */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-24 h-24 opacity-10 text-blue-100 dark:text-blue-900"
              >
                <GraduationCap className="w-full h-full" />
              </motion.div>

              <div className="relative z-10">
                <div className="flex flex-col  sm:gap-6">
                  {/* Icon */}

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`p-4 rounded-2xl mb-4 sm:mb-0 w-fit ${
                          edu.current
                            ? "bg-blue-100 dark:bg-blue-900/30"
                            : "bg-gray-100 dark:bg-dark-700"
                        }`}
                      >
                        <GraduationCap
                          className={`${
                            edu.current
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-600 dark:text-gray-400"
                          }`}
                          size={28}
                        />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      {edu.current && (
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                          />
                          Current
                        </motion.span>
                      )}
                    </div>

                    <p className="text-base text-gray-700 dark:text-gray-300 font-semibold mb-2">
                      {edu.degree}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                      {edu.description}
                    </p>

                    {/* Location & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2"
                      >
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2"
                      >
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </motion.div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                        <Award size={18} />
                        Key Achievements
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-all"
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
