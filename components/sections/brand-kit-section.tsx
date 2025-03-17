"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BrandKit } from "../brand/brand-kit";

export default function BrandKitSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-fuchsia-900/10" />
      <div className="absolute inset-0 backdrop-blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-prompt">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-white to-fuchsia-200 pb-2">
              Brand Assets
            </span>
          </h2>
          <div className="w-full max-w-md mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </motion.div>
        <div>
          <BrandKit />
        </div>
      </div>
    </section>
  );
}
