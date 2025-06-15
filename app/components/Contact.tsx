"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageCircle,
  User,
  AtSign,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyWiQDFS0LlTAZC3PWsAAl_ZeNDj3BtTvU_Ui5hsJgM05vjuBq0g33Ko157qxQTwCiY/exec",
        {
          method: "POST",
          body: form,
        }
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vedantbahadure@gmail.com",
      href: "mailto:vedantbahadure@gmail.com",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8830981720",
      href: "tel:+918830981720",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    },
  ];

  const services = [
    "Frontend Development Projects",
    "Full-Stack Web Applications",
    "UI/UX Implementation",
    "Technical Consulting",
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
      id="contact"
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
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
            Get In{" "}
            <span className="gradient-text dark:gradient-text-dark">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate or have a question? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're looking for a developer to join your team, need
                help with a project, or just want to say hello, I'm always
                excited to connect with fellow developers and potential
                collaborators.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-6 p-6 bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 rounded-2xl bg-gradient-to-r ${info.color}`}
                    >
                      <IconComponent className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {info.label}
                      </p>
                      {info.href === "#" ? (
                        <span className="text-gray-900 dark:text-white font-semibold text-lg">
                          {info.value}
                        </span>
                      ) : (
                        <a
                          href={info.href}
                          className="text-gray-900 dark:text-white font-semibold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <MessageCircle
                    className="text-blue-600 dark:text-blue-400"
                    size={28}
                  />
                </motion.div>
                <h4 className="font-bold text-gray-900 dark:text-white text-xl">
                  What I Can Help With
                </h4>
              </div>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    />
                    <span className="text-gray-600 dark:text-gray-300">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-dark-700 rounded-3xl p-10 shadow-2xl border border-gray-200 dark:border-dark-600"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Send a Message
            </h3>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl flex items-center space-x-4"
              >
                <CheckCircle
                  className="text-green-600 dark:text-green-400"
                  size={24}
                />
                <span className="text-green-800 dark:text-green-300 font-medium">
                  Message sent successfully! I'll get back to you soon.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                >
                  Your Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-dark-500 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-dark-600 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                >
                  Email Address
                </label>
                <div className="relative">
                  <AtSign
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-dark-500 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-dark-600 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageCircle
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-dark-500 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-dark-600 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-8 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-dots">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
