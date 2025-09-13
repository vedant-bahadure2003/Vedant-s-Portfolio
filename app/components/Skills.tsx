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
  Server,
  Settings,
  Palette,
  Database,
} from "lucide-react";

const Skills = () => {
  const otherSkills = [
    {
      name: "Postman",
      level: 75,
      color: "from-orange-400 to-orange-600", // Postman orange
      icon: Settings,
    },
    {
      name: "GitHub",
      level: 75,
      color: "from-gray-700 to-black", // GitHub dark theme
      icon: Code,
    },
    {
      name: "SEO",
      level: 80,
      color: "from-emerald-400 to-green-600", // Growth / search-friendly green
      icon: Target,
    },
    {
      name: "VS Code",
      level: 75,
      color: "from-sky-500 to-blue-700", // VS Code blue
      icon: Code,
    },
  ];

  const backend = [
    {
      name: "Node.js",
      level: 86,
      color: "from-green-500 to-emerald-700", // Node green
      icon: Server,
    },
    {
      name: "Express.js",
      level: 83,
      color: "from-gray-500 to-gray-800", // Minimal grayscale (Express)
      icon: Server,
    },
    {
      name: "MongoDB",
      level: 78,
      color: "from-emerald-500 to-green-700", // Mongo green
      icon: Database,
    },
    {
      name: "SQL",
      level: 75,
      color: "from-blue-500 to-indigo-700", // Database blue
      icon: Database,
    },
    {
      name: "Python",
      level: 80,
      color: "from-yellow-400 to-blue-600", // Python yellow + blue
      icon: Code,
    },
  ];

  const frontend = [
    {
      name: "Next.js",
      level: 85,
      color: "from-gray-800 to-black", // Next.js dark theme
      icon: Code,
    },
    {
      name: "React",
      level: 92,
      color: "from-cyan-400 to-blue-600", // React cyan glow
      icon: Code,
    },
    {
      name: "JavaScript",
      level: 88,
      color: "from-yellow-400 to-orange-500", // JS yellow-orange
      icon: Code,
    },
    {
      name: "TypeScript",
      level: 84,
      color: "from-sky-500 to-blue-700", // TS blue
      icon: Code,
    },
    {
      name: "Tailwind CSS",
      level: 93,
      color: "from-teal-400 to-cyan-600", // Tailwind teal-cyan
      icon: Palette,
    },
    {
      name: "Material UI",
      level: 82,
      color: "from-indigo-500 to-blue-600", // MUI indigo-blue
      icon: Palette,
    },
    {
      name: "HTML5",
      level: 95,
      color: "from-orange-500 to-red-600", // HTML orange-red
      icon: Code,
    },
    {
      name: "CSS3",
      level: 90,
      color: "from-blue-500 to-sky-600", // CSS blue-sky
      icon: Palette,
    },
    {
      name: "Bootstrap",
      level: 87,
      color: "from-purple-600 to-indigo-700", // Bootstrap purple-indigo
      icon: Palette,
    },
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
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
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
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              My Capabilities
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills &{" "}
            <span className="gradient-text dark:gradient-text-dark">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and
            professional capabilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Frontend Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="lg:col-span-4 bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-dark-600"
          >
            <div className="flex items-center space-x-3 mb-8">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl"
              >
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Frontend
              </h3>
            </div>

            <div className="space-y-5">
              {frontend.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="font-medium text-gray-900 dark:text-white text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 overflow-hidden">
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
                );
              })}
            </div>
          </motion.div>

          {/* Backend & Other Skills */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Backend Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-dark-600"
            >
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl"
                >
                  <Server
                    className="text-green-600 dark:text-green-400"
                    size={24}
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Backend
                </h3>
              </div>

              <div className="space-y-5">
                {backend.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          <span className="font-medium text-gray-900 dark:text-white text-sm">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 overflow-hidden">
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
                  );
                })}
              </div>
            </motion.div>

            {/* Other Tools */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-dark-600"
            >
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl"
                >
                  <Settings
                    className="text-purple-600 dark:text-purple-400"
                    size={24}
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Tools & Others
                </h3>
              </div>

              <div className="space-y-5">
                {otherSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          <span className="font-medium text-gray-900 dark:text-white text-sm">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 overflow-hidden">
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
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Soft Skills & Professional Qualities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="lg:col-span-4 space-y-8"
          >
            {/* Soft Skills */}
            <div className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-dark-600">
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl"
                >
                  <Brain
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Soft Skills
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                      className="bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 rounded-xl p-2 hover:shadow-lg transition-all duration-300 group col-span-2 sm:col-span-1"
                    >
                      <div className="flex flex-col items-center gap-2 space-x-2">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg group-hover:from-blue-200 group-hover:to-indigo-200 dark:group-hover:from-blue-800/30 dark:group-hover:to-indigo-800/30 transition-all duration-300"
                        >
                          <IconComponent
                            className="text-blue-600 dark:text-blue-400"
                            size={18}
                          />
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {skill.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-xs">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Professional Qualities */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Star
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </motion.div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                  Professional Approach
                </h4>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Continuous learning mindset",
                  "User-centered design thinking",
                  "Collaborative team player",
                  "Quality-focused development",
                ].map((quality, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full"
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
