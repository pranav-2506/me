"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface FeaturedProps {
  scrollProgress: MotionValue<number>;
}

export default function Featured({ scrollProgress }: FeaturedProps) {
  const opacity = useTransform(
    scrollProgress,
    [0.30, 0.37, 0.48, 0.51],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollProgress, [0.32, 0.51], [80, -80]);

  const pointerEvents = useTransform(
    scrollProgress,
    [0.25, 0.30, 0.51, 0.90],
    ['none', 'auto', 'auto', 'none']
  );

  const titleOpacity = useTransform(
    scrollProgress,
    [0.32, 0.38, 0.48, 0.51],
    [0, 1, 1, 0]
  );

  const subtitleOpacity = useTransform(
    scrollProgress,
    [0.34, 0.40, 0.48, 0.51],
    [0, 1, 1, 0]
  );

  const descOpacity = useTransform(
    scrollProgress,
    [0.36, 0.42, 0.48, 0.51],
    [0, 1, 1, 0]
  );

  const headerOpacity = useTransform(
    scrollProgress,
    [0.30, 0.34, 0.48, 0.51],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ opacity, y, pointerEvents }}
      className="absolute inset-0 flex items-center justify-center px-4"
    >
      <div className="max-w-2xl text-center relative">
        <motion.p
          style={{ opacity: headerOpacity }}
          className="text-lg sm:text-xl text-[#666666] mb-6 tracking-wide uppercase"
        >
          Featured
        </motion.p>

        <motion.h2
          style={{ opacity: titleOpacity }}
          className="text-5xl sm:text-7xl font-medium tracking-tight mb-4 bg-gradient-to-br from-[#000] via-[#222] to-[#555] bg-clip-text text-transparent"
        >
          TalkTrack
        </motion.h2>

        <motion.p
          style={{ opacity: subtitleOpacity }}
          className="text-2xl sm:text-3xl font-medium text-[#333333] mb-6 italic"
        >
          "Talk once. Track everything."
        </motion.p>

        {/* Tech stack - Apple style minimal */}
        <motion.div
          style={{ opacity: subtitleOpacity }}
          className="flex items-center justify-center gap-3 mb-8 text-xs tracking-[0.2em] uppercase text-[#666] font-medium"
        >
          {["iOS", "Android", "Expo", "AI / ML", "Voice"].map((tech, i) => (
            <span key={tech} className="flex items-center gap-3">
              <span>{tech}</span>
              {i < 4 && <span className="text-[#bbb]">·</span>}
            </span>
          ))}
        </motion.div>

        <motion.p
          style={{ opacity: descOpacity }}
          className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8"
        >
          A voice-first AI system that converts unstructured input into structured fitness, nutrition, and recovery data. Built to eliminate friction and capture long-term behavioral patterns.
        </motion.p>

        <motion.div
          style={{ opacity: descOpacity }}
        >
          <a
            href="https://drive.google.com/file/d/1o7rfMbFbM50MfcFo1hqGbuE8pSLt1U6N/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium text-sm"
          >
            Watch Demo →
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
