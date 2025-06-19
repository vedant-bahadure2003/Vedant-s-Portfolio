"use client";

import { motion } from "framer-motion";
import { Heart, Music, Dumbbell, Code, Coffee, Gamepad2 } from "lucide-react";

const About = () => {
  const hobbies = [
    { icon: Music, name: "Playing Tabla", color: "from-blue-500 to-cyan-500" },
    {
      icon: Dumbbell,
      name: "Fitness Enthusiast",
      color: "from-emerald-500 to-teal-500",
    },
    { icon: Code, name: "Open Source", color: "from-purple-500 to-pink-500" },
    {
      icon: Coffee,
      name: "Coffee Lover",
      color: "from-amber-500 to-orange-500",
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
      id="about"
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
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-0    sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About{" "}
            <span className="gradient-text dark:gradient-text-dark">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Get to know more about who I am, what I do, and what I'm passionate
            about
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 w-[90%] mx-auto  gap-16 justify-center  items-center">
          {/* Left Column - Professional Summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Summary
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6  ">
              <motion.p
                whileHover={{ x: 10 }}
                className=" text-gray-600 dark:text-gray-300  text-lg leading-relaxed p-6  bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
              >
                I'm a dedicated Computer Science student with a passion for
                creating exceptional digital experiences. My journey in web
                development started with curiosity and has evolved into a deep
                commitment to building user-centered applications that make a
                difference.
              </motion.p>

              <motion.p
                whileHover={{ x: 10 }}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed p-6 bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500"
              >
                Currently working as a Full-Stack Developer Intern at Infusyx
                Services, where I've contributed to multiple high-impact
                projects including consultancy platforms, university websites,
                and corporate web solutions. I specialize in modern web
                technologies like React, Next.js, and Tailwind CSS.
              </motion.p>

              <motion.p
                whileHover={{ x: 10 }}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed p-6 bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500"
              >
                My approach combines technical expertise with creative
                problem-solving, always focusing on performance, accessibility,
                and user experience. I believe in writing clean, maintainable
                code and staying updated with the latest industry trends.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Personal Details & Hobbies */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Personal Details Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="bg-white dark:bg-dark-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"
                />
                Personal Details
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Location", value: "Pune, Maharashtra, India" },
                  { label: "Phone", value: "+91 8830981720" },
                  { label: "Email", value: "vedantbahadure@gmail.com" },
                  { label: "Languages", value: "Marathi, Hindi, English" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-center py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-600 transition-all duration-200"
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {item.label}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hobbies Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-700 dark:to-dark-600 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                When I'm Not Coding
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {hobbies.map((hobby, index) => {
                  const IconComponent = hobby.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="text-center group cursor-pointer"
                    >
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-r ${hobby.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="text-white" size={28} />
                      </motion.div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {hobby.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
