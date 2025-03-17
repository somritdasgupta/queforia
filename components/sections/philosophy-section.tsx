"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function PhilosophySection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/5 via-transparent to-indigo-900/5" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-rose-200">
            Notions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            The guiding principles that shape our vision and drive our pursuit of the extraordinary.
          </p>
        </motion.div>

        <motion.div
          variants={quoteVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-12"
        >
          <div className="text-6xl text-indigo-300/30 mb-6">"</div>
          <blockquote className="text-xl md:text-2xl text-white/80 italic mb-8 leading-relaxed">
            The ordinary exists in abundance. We seek the extraordinary—the moments, ideas, and creations that challenge
            perception and elevate existence. In the space between what is and what could be, we find our purpose: to
            bring the extra before the ordinary.
          </blockquote>
          <div className="flex items-center justify-end">
            <div>
              <div className="text-white/90 font-semibold">Queforia Manifesto</div>
              <div className="text-white/40 text-sm">Extra, Before Ordinary</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="M8 15h8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white/90">Curiosity</h3>
            <p className="text-white/60">
              We embrace the unknown with open minds, constantly questioning and exploring beyond conventional
              boundaries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-6">
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
                <path d="M12 3c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C10.21 6.04 10 5.53 10 5c0-.53.21-1.04.59-1.41C10.96 3.21 11.47 3 12 3z" />
                <path d="M12 14c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59z" />
                <path d="M12 19c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59z" />
                <path d="M12 8c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C10.21 11.04 10 10.53 10 10c0-.53.21-1.04.59-1.41C10.96 8.21 11.47 8 12 8z" />
                <path d="M19 3c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C17.21 6.04 17 5.53 17 5c0-.53.21-1.04.59-1.41C17.96 3.21 18.47 3 19 3z" />
                <path d="M19 14c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59z" />
                <path d="M19 8c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C17.21 11.04 17 10.53 17 10c0-.53.21-1.04.59-1.41C17.96 8.21 18.47 8 19 8z" />
                <path d="M5 3c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C3.21 6.04 3 5.53 3 5c0-.53.21-1.04.59-1.41C3.96 3.21 4.47 3 5 3z" />
                <path d="M5 14c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C3.21 17.04 3 16.53 3 16c0-.53.21-1.04.59-1.41C3.96 14.21 4.47 14 5 14z" />
                <path d="M5 8c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C3.21 11.04 3 10.53 3 10c0-.53.21-1.04.59-1.41C3.96 8.21 4.47 8 5 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white/90">Innovation</h3>
            <p className="text-white/60">
              We challenge established norms and create new possibilities through bold thinking and creative vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-6">
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
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white/90">Passion</h3>
            <p className="text-white/60">
              We infuse everything we create with deep emotion and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

