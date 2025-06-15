'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle, Star, Trophy, Zap } from 'lucide-react'

const Certifications = () => {
  const certificationDetails = [
    'Trained in HTML, CSS, JavaScript, Tailwind CSS, and ReactJS',
    'Practical project experience with modern web technologies',
    'Responsive design proficiency across all device types',
    'Industry-standard development practices and methodologies'
  ]

  const skills = ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'ReactJS', 'Responsive Design', 'Web Standards', 'Best Practices']

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
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
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"
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
            <span className="gradient-text dark:gradient-text-dark">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise and commitment to excellence
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
            }}
            className="bg-white dark:bg-dark-800 rounded-3xl shadow-2xl p-10 border-l-4 border-blue-500 relative overflow-hidden"
          >
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-40 h-40 opacity-5"
            >
              <Award size={160} />
            </motion.div>

            <div className="relative z-10">
              <div className="flex items-start space-x-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl"
                >
                  <Award className="text-blue-600 dark:text-blue-400" size={48} />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Front-End Developer Certification
                      </h3>
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center space-x-2"
                      >
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700">
                          <Trophy className="mr-2" size={16} />
                          Certified
                        </span>
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
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
                    className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg"
                  >
                    Comprehensive certification program covering modern front-end development technologies 
                    and best practices, with emphasis on responsive design and user experience.
                  </motion.p>

                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center space-x-3 mb-6">
                        <Zap className="text-blue-600 dark:text-blue-400" size={24} />
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">Certification Highlights</h4>
                      </div>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {certificationDetails.map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-200"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            >
                              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                            </motion.div>
                            <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
                    >
                      <div className="flex items-center space-x-3 mb-6">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <Star className="text-blue-600 dark:text-blue-400" size={24} />
                        </motion.div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Skills Validated</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ 
                              scale: 1.1,
                              boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)"
                            }}
                            className="px-4 py-2 bg-white dark:bg-dark-700 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 border border-blue-200 dark:border-blue-700"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Certifications