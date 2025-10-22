"use client";
import { motion } from "framer-motion";
import React from "react";

export default function FloatingBadge({
  className,
  icon,
  text,
}: {
  className?: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`pointer-events-none absolute select-none rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur ${className}`}
    >
      <span className="inline-flex items-center gap-2">{icon}{text}</span>
    </motion.div>
  );
}
