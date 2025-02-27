"use client";

import { APP_NAME_KH } from "@/config/website-detail";
import { motion } from "framer-motion";

export default function MyEndlestScroll() {
  return (
    <div className="relative w-full py-24 overflow-hidden font-serif bg-background">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span
              className="px-4 font-bold text-transparent text-7xl sm:text-8xl md:text-9xl"
              style={{
                WebkitTextStroke: "1px rgb(156 163 175)", // tailwind gray-400
              }}
            >
              {APP_NAME_KH}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
