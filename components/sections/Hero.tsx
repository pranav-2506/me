"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface HeroProps {
  scrollProgress: MotionValue<number>;
}

export default function Hero({ scrollProgress }: HeroProps) {
  const opacity = useTransform(scrollProgress, [0, 0.15, 0.18], [1, 1, 0]);
  const y = useTransform(scrollProgress, [0, 0.2], [0, -80]);

  const nameOpacity = useTransform(
    scrollProgress,
    [0, 0.02, 0.05, 0.18],
    [1, 1, 1, 0]
  );
  const nameY = useTransform(scrollProgress, [0, 0.2], [0, -60]);

  const subtitleOpacity = useTransform(
    scrollProgress,
    [0, 0.02, 0.08, 0.18],
    [1, 1, 1, 0]
  );
  const subtitleY = useTransform(scrollProgress, [0, 0.2], [0, -80]);

  const taglineOpacity = useTransform(
    scrollProgress,
    [0, 0.02, 0.1, 0.18],
    [1, 1, 1, 0]
  );
  const taglineY = useTransform(scrollProgress, [0, 0.2], [0, -100]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
        }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Left side - text content */}
      <div className="absolute inset-0 left-0 w-full md:w-1/2 flex items-center justify-center px-4 z-10">
        <div className="max-w-xl text-center">
          <motion.h1
            style={{ opacity: nameOpacity, y: nameY }}
            className="text-6xl sm:text-7xl font-medium tracking-tight mb-4 bg-gradient-to-br from-white via-[#eaeaea] to-[#888] bg-clip-text text-transparent"
          >
            Pranav Chandar Sridar
          </motion.h1>

          <motion.p
            style={{ opacity: subtitleOpacity, y: subtitleY }}
            className="text-lg sm:text-xl text-[#b0b0b0] mb-6"
          >
            Computer Engineering · Systems · AI
          </motion.p>

          {/* Animated divider */}
          <motion.div
            style={{ opacity: taglineOpacity }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.div>

          <motion.p
            style={{ opacity: taglineOpacity, y: taglineY }}
            className="text-base sm:text-lg text-[#888888] leading-relaxed"
          >
            Building distributed systems, performance-critical infrastructure, and AI-driven products.
          </motion.p>

          <motion.p
            style={{ opacity: taglineOpacity, y: taglineY }}
            className="text-sm text-[#666666] leading-relaxed mt-4"
          >
            Computer engineering student focused on systems, infrastructure, and AI. Jazz pianist. Train seriously.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity: taglineOpacity }}
            className="mt-12 flex flex-col items-center gap-2"
          >
            <motion.div
              className="w-5 h-8 rounded-full border border-[#444] flex items-start justify-center pt-1.5"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-1.5 rounded-full bg-cyan-400"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <span className="text-xs text-[#555] tracking-widest uppercase">Scroll</span>
          </motion.div>
        </div>
      </div>

      {/* Right side - graduation photo with vignette */}
      <motion.div
        style={{ opacity: taglineOpacity }}
        className="absolute inset-y-0 right-0 w-1/2 overflow-hidden hidden md:block"
      >
        <img
          src="/graduation.jpg"
          alt="Pranav Chandar"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.5,
            filter: "saturate(0.8) brightness(0.9) contrast(1.05)",
          }}
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </motion.div>
    </motion.div>
  );
}
