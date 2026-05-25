"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface ContactProps {
  scrollProgress: MotionValue<number>;
}

export default function Contact({ scrollProgress }: ContactProps) {
  const opacity = useTransform(
    scrollProgress,
    [0.925, 0.96, 0.99, 1],
    [0, 1, 1, 1]
  );
  const y = useTransform(scrollProgress, [0.925, 1], [80, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center px-4 pointer-events-auto"
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-3xl text-center space-y-10 relative z-10">
        <h2 className="text-5xl sm:text-7xl font-medium tracking-tight bg-gradient-to-br from-white via-[#eaeaea] to-[#888] bg-clip-text text-transparent">
          Let's build something real.
        </h2>

        <p className="text-base sm:text-lg text-[#888] max-w-xl mx-auto">
          Always open to interesting conversations, ambitious projects, and people who care about how things actually work.
        </p>

        {/* Apple-style minimal links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4 pointer-events-auto text-base">
          <a
            href="mailto:pranav.umd22@gmail.com"
            className="group flex items-center gap-2 text-[#eaeaea] hover:text-cyan-400 transition-colors duration-300 pointer-events-auto cursor-pointer"
          >
            <span>Email</span>
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
          </a>

          <span className="text-[#333] hidden sm:inline">·</span>

          <a
            href="https://github.com/pranav-2506"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#eaeaea] hover:text-cyan-400 transition-colors duration-300 pointer-events-auto cursor-pointer"
          >
            <span>GitHub</span>
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>

          <span className="text-[#333] hidden sm:inline">·</span>

          <a
            href="https://www.linkedin.com/in/pranav-chandar-sridar-190938291/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#eaeaea] hover:text-cyan-400 transition-colors duration-300 pointer-events-auto cursor-pointer"
          >
            <span>LinkedIn</span>
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>

          <span className="text-[#333] hidden sm:inline">·</span>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#eaeaea] hover:text-cyan-400 transition-colors duration-300 pointer-events-auto cursor-pointer"
          >
            <span>Resume</span>
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
        </div>

        {/* Footer */}
        <div className="pt-8 text-xs text-[#555] tracking-wide font-mono">
          pranav.umd22@gmail.com
        </div>
      </div>
    </motion.div>
  );
}
