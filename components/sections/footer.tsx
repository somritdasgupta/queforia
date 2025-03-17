"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4"
    >
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        className="relative max-w-7xl mx-auto mb-6 px-8 py-3 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/10"
      >
        {/* Gradient background effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 via-transparent to-fuchsia-500/10 opacity-50" />

        {/* Animated glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 animate-pulse" />

        {/* Content */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-prompt text-white/40">
              © {currentYear}
            </span>
            <motion.span
              className="text-sm font-prompt text-white/80"
              whileHover={{ scale: 1.05 }}
            >
              Queforia
            </motion.span>
          </div>

          <div className="flex items-center gap-6 text-[10px] text-white/40">
            <span>All Rights Reserved</span>
            <span className="hidden sm:inline">|</span>
            <span>Crafted with ♥ in the void</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
