"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Star, Trophy, Zap } from "lucide-react";

const Certifications = () => {
  const certificationDetails = [
    "Trained in HTML, CSS, JavaScript, Tailwind CSS, and ReactJS",
    "Practical project experience with modern web technologies",
    "Responsive design proficiency across all device types",
    "Industry-standard development practices and methodologies",
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Tailwind CSS",
    "ReactJS",
    "Responsive Design",
    "Web Standards",
    "Best Practices",
  ];

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text dark:gradient-text-dark">
              Certifications
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise and
            commitment to excellence
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white dark:bg-dark-800 rounded-3xl shadow-xl p-6 sm:p-10 border-l-4 border-blue-500 relative overflow-hidden"
          >
            {/* Floating Icon in background */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-28 h-28 sm:w-40 sm:h-40 opacity-5"
            >
              <Award size="100%" />
            </motion.div>

            <div className="relative z-10">
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="p-4 sm:p-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl w-fit mb-4 sm:mb-0"
                >
                  <Award
                    className="text-blue-600 dark:text-blue-400"
                    size={40}
                  />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Front-End Developer Certification
                  </h3>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center space-x-2"
                  >
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700">
                      <Trophy className="mr-2" size={16} />
                      Certified
                    </span>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Star className="text-yellow-500" size={20} />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 dark:text-gray-300 mb-8 text-base sm:text-lg leading-relaxed"
              >
                Comprehensive certification program covering modern front-end
                development technologies and best practices, with emphasis on
                responsive design and user experience.
              </motion.p>

              {/* Certification Highlights */}
              <div className="space-y-10">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap
                      className="text-blue-600 dark:text-blue-400"
                      size={20}
                    />
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      Certification Highlights
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certificationDetails.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-700 transition"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.4,
                          }}
                        >
                          <CheckCircle
                            className="text-green-500 mt-1 flex-shrink-0"
                            size={18}
                          />
                        </motion.div>
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Star
                        className="text-blue-600 dark:text-blue-400"
                        size={20}
                      />
                    </motion.div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      Skills Validated
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)",
                        }}
                        className="px-4 py-2 bg-white dark:bg-dark-700 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700 shadow"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
