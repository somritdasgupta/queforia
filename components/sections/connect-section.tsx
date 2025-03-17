"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  RiInstagramFill,
  RiStore2Line,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { siteConfig } from "@/config/site";

export default function ConnectSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const socials = [
    {
      name: "Shop",
      icon: RiStore2Line,
      url: siteConfig.links.shop,
      description: "Discover the collection of extraordinary taste",
      gradient: "from-violet-500/20 via-fuchsia-500/20 to-pink-500/20",
      glowColor: "group-hover:shadow-violet-500/25",
      featured: true,
    },
    {
      name: "Instagram",
      icon: RiInstagramFill,
      url: siteConfig.links.social.instagram,
      description: "Follow the visual journey",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      shadowColor: "shadow-pink-500/25",
    },
    {
      name: "YouTube",
      icon: RiYoutubeFill,
      url: siteConfig.links.social.youtube,
      description: "Watch the story unfold",
      gradient: "from-red-500 via-rose-500 to-orange-500",
      shadowColor: "shadow-red-500/25",
    },
    {
      name: "Twitter",
      icon: RiTwitterXFill,
      url: siteConfig.links.social.twitter,
      description: "Join the conversation",
      gradient: "from-slate-500 via-grey-500 to-sky-500",
      shadowColor: "shadow-blue-500/25",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(600px circle at left top, rgba(139, 92, 246, 0.15), transparent 80%)",
              "radial-gradient(600px circle at right bottom, rgba(139, 92, 246, 0.15), transparent 80%)",
              "radial-gradient(600px circle at left top, rgba(139, 92, 246, 0.15), transparent 80%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-white to-fuchsia-200">
            Explore the World
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50 mx-auto mb-8 blur-sm" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
          {/* Featured Shop Card */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-2xl p-8 md:p-12
              bg-white/[0.03] backdrop-blur-[12px]
              border border-white/[0.08]
              transition-colors duration-300
              hover:bg-white/[0.05]
              hover:border-white/[0.15]
              hover:shadow-2xl hover:shadow-violet-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5" />

            <div className="relative md:grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-3 bg-white/5 rounded-full px-4 py-1.5 border border-white/10">
                  <span className="text-sm text-white/70">Official Store</span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-white mb-4">
                    Discover the Collection
                  </h3>

                  <p className="text-lg text-white/60 leading-relaxed">
                    Explore the curated selection of extraordinary designs that
                    challenge the ordinary.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 
                    text-white/80 hover:bg-white/10 transition-all duration-300 
                    inline-flex items-center space-x-2"
                >
                  <span>Visit Store</span>
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
              </div>

              <div className="hidden md:block">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 1, 0, -1, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex items-center justify-center rounded-full p-12"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 rounded-full blur-3xl" />
                    <RiStore2Line className="w-40 h-40 text-white/40" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Social Links Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {socials
              .filter((social) => !social.featured)
              .map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl p-6
                  bg-white/[0.03] backdrop-blur-sm
                  border border-white/[0.08]
                  transition-all duration-300
                  hover:bg-white/[0.05]
                  hover:border-white/[0.15]
                  hover:scale-[1.02]"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.gradient} p-2.5 mb-4
                  transition-transform duration-300 group-hover:scale-110`}
                  >
                    <social.icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {social.name}
                  </h3>
                  <p className="text-white/60 mb-4">{social.description}</p>

                  <div className="inline-flex items-center text-white/80 text-sm">
                    <span>Learn more</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="ml-2"
                    >
                      →
                    </motion.div>
                  </div>
                </motion.a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
