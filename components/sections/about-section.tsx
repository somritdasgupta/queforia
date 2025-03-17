"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 via-transparent to-rose-900/5" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={variants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-rose-200">
              The Essence of Queforia
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8" />
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              We exist in the space between imagination and reality, crafting experiences that transcend the ordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={variants}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-indigo-300"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m22 2-5 5" />
                  <path d="m2 22 5-5" />
                  <path d="m17 7-5 5" />
                  <path d="m7 17 5-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white/90">Mysterious</h3>
              <p className="text-white/60">
                We embrace the unknown and invite you to discover what lies beyond the veil of conventional thinking.
              </p>
            </motion.div>

            <motion.div
              variants={variants}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-violet-300"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white/90">Philosophical</h3>
              <p className="text-white/60">
                We question the nature of existence and purpose, infusing our creations with deeper meaning.
              </p>
            </motion.div>

            <motion.div
              variants={variants}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-rose-300"
                >
                  <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" />
                  <polyline points="2.32 6.16 12 11 21.68 6.16" />
                  <line x1="12" y1="22.76" x2="12" y2="11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white/90">Premium</h3>
              <p className="text-white/60">
                We craft experiences of exceptional quality, where every detail is considered and refined.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

