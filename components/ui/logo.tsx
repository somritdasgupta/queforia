"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type LogoProps = {
  className?: string;
  showGradient?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
};

export default function Logo({
  className,
  showGradient = true,
  size = "md",
}: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-block relative"
    >
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-rose-500/30 rounded-full" />
      )}
      <div
        className={cn(
          "relative px-6 py-2",
          showGradient &&
            "border border-white/10 rounded-full bg-black/30"
        )}
      >
        <span
          className={cn(
            "font-['Prompt'] font-bold tracking-wide",
            showGradient
              ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300"
              : "text-white",
            sizes[size],
            className
          )}
        >
          Queforia
        </span>
      </div>
    </motion.div>
  );
}
