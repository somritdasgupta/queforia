"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Changed to true to prevent re-renders
    threshold: 0.1, // Reduced threshold for better mobile performance
  });

  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: shouldReduceMotion ? 0 : 0.5,
    ease: "easeOut",
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(400px circle at left top, rgba(139, 92, 246, 0.15), transparent 80%)",
                "radial-gradient(400px circle at right bottom, rgba(244, 114, 182, 0.15), transparent 80%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-white to-fuchsia-200">
            Start The Journey
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50 mx-auto mb-8 blur-sm" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ ...transition, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -left-20 -top-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" />
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[100px]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/[0.03] border border-white/10 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Let's Connect
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  Share your vision and let's create something extraordinary
                  together. Your journey into the mysterious begins here.
                </p>
              </div>

              <div className="space-y-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Your name"
                        className="w-full px-4 h-12 bg-white/[0.03] border border-white/10 rounded-xl 
                          focus:outline-none focus:ring-2 focus:ring-violet-500/50 
                          transition-all duration-300 placeholder:text-white/30 text-white/80
                          hover:bg-white/[0.05]"
                      />
                    </div>
                    <div className="space-y-2">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="Your email"
                        className="w-full px-4 h-12 bg-white/[0.03] border border-white/10 rounded-xl 
                          focus:outline-none focus:ring-2 focus:ring-violet-500/50 
                          transition-all duration-300 placeholder:text-white/30 text-white/80
                          hover:bg-white/[0.05]"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      rows={4}
                      placeholder="Your message"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl 
                        focus:outline-none focus:ring-2 focus:ring-violet-500/50 
                        transition-all duration-300 placeholder:text-white/30 text-white/80
                        hover:bg-white/[0.05]"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 w-full rounded-full bg-white/5 border border-white/10 
                      text-white/80 hover:bg-white/10 transition-all duration-300 
                      inline-flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.div>
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
