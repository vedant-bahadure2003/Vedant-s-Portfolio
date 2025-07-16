"use client";

import { motion } from "framer-motion";
import {
  Code,
  Brain,
  Users,
  Lightbulb,
  Zap,
  Target,
  Rocket,
  Star,
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS3", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 88, color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", level: 84, color: "from-sky-500 to-blue-600" },
    { name: "React", level: 92, color: "from-blue-400 to-blue-600" },
    { name: "Next.js", level: 85, color: "from-gray-700 to-gray-900" },
    { name: "Tailwind CSS", level: 93, color: "from-teal-400 to-blue-500" },
    { name: "Bootstrap", level: 87, color: "from-purple-500 to-purple-700" },
    { name: "Material UI", level: 82, color: "from-blue-600 to-indigo-600" },
    { name: "Node.js", level: 86, color: "from-green-500 to-green-700" },
    { name: "Express.js", level: 83, color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", level: 78, color: "from-green-500 to-green-700" },
    { name: "SQL", level: 75, color: "from-indigo-500 to-indigo-700" },
    { name: "Python", level: 80, color: "from-yellow-600 to-yellow-800" },
    { name: "SEO", level: 80, color: "from-pink-500 to-rose-500" },
  ];

  const softSkills = [
    {
      name: "Communication",
      icon: Users,
      description:
        "Clear and effective communication with team members and clients",
    },
    {
      name: "Critical Thinking",
      icon: Brain,
      description: "Analytical approach to problem-solving and decision making",
    },
    {
      name: "Problem Solving",
      icon: Lightbulb,
      description: "Creative solutions to complex technical challenges",
    },
    {
      name: "Leadership",
      icon: Target,
      description: "Leading projects and mentoring junior developers",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
    >
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
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
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
            Skills &{" "}
            <span className="gradient-text dark:gradient-text-dark">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and soft
            skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl"
                >
                  <Code
                    className="text-blue-600 dark:text-blue-400"
                    size={32}
                  />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Technical Skills
                </h3>
              </div>
            </motion.div>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-dark-700 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-900 dark:text-white text-lg">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-3 overflow-hidden">
                    <motion.div
                      custom={skill.level}
                      variants={skillBarVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Categories */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Rocket
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Frontend
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Expert in modern frontend frameworks with focus on user
                  experience
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Zap
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Full-Stack
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  End-to-end development with database integration and
                  optimization
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl"
                >
                  <Brain
                    className="text-emerald-600 dark:text-emerald-400"
                    size={32}
                  />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Soft Skills
                </h3>
              </div>
            </motion.div>

            <div className="space-y-6">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.03,
                      rotateX: 5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    }}
                    className="bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl group-hover:from-blue-200 group-hover:to-indigo-200 dark:group-hover:from-blue-800/30 dark:group-hover:to-indigo-800/30 transition-all duration-300"
                      >
                        <IconComponent
                          className="text-blue-600 dark:text-blue-400"
                          size={24}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Professional Qualities */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-800"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Star
                    className="text-purple-600 dark:text-purple-400"
                    size={28}
                  />
                </motion.div>
                <h4 className="font-bold text-gray-900 dark:text-white text-xl">
                  Professional Approach
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Continuous learning mindset",
                  "User-centered design thinking",
                  "Collaborative team player",
                  "Quality-focused development",
                ].map((quality, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    />
                    <span>{quality}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
