"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface PhilosophyProps {
  scrollProgress: MotionValue<number>;
}

const philosophies = [
  "I build things I’d actually use",
  "I care about behavior and not just output",
  "If it breaks under pressure, it wasn’t built right",
  "If it’s hard to use, it’s not done",
  "I move fast, but I pay attention",
];

export default function Philosophy({ scrollProgress }: PhilosophyProps) {
  const containerOpacity = useTransform(
    scrollProgress,
    [0.38, 0.42, 0.55, 0.57],
    [0, 1, 1, 0]
  );
  const containerY = useTransform(scrollProgress, [0.4, 0.57], [80, -80]);

  // Counter-scroll animation for right side elements
  const counterY = useTransform(scrollProgress, [0.4, 0.57], [-80, 80]);

  return (
    <motion.div
      style={{ opacity: containerOpacity }}
      className="absolute inset-0 flex items-center justify-center px-4"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">
        {/* Left side - philosophies */}
        <motion.div
          style={{ y: containerY }}
          className="flex-1 space-y-8"
        >
          <div className="max-w-xl text-left space-y-10 pl-8">
            {philosophies.map((philosophy, index) => {
              const itemOpacity = useTransform(
                scrollProgress,
                [
                  0.40 + index * 0.032,
                  0.42 + index * 0.032,
                  0.52 + index * 0.01,
                  0.55 + index * 0.01,
                ],
                [0, 1, 1, 0]
              );

              return (
                <motion.p
                  key={index}
                  style={{ opacity: itemOpacity }}
                  className="text-2xl sm:text-3xl font-light tracking-tight text-[#1a1a1a] leading-snug"
                >
                  {philosophy}
                </motion.p>
              );
            })}
          </div>
        </motion.div>

        {/* Right side - modern cloud/computing icons in a line */}
        <motion.div
          style={{ y: counterY, opacity: containerOpacity }}
          className="flex-1 relative h-96 flex items-center justify-center px-8 hidden md:flex"
        >
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            {/* Icon 1: Cloud (filled, modern) */}
            <motion.svg
              className="w-24 h-24 flex-shrink-0"
              viewBox="0 0 64 64"
              fill="none"
              animate={{ y: [-6, 6, -6], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M 18 44 Q 10 44 10 34 Q 10 24 18 22 Q 20 12 32 12 Q 44 12 46 22 Q 54 24 54 34 Q 54 44 46 44 Z" stroke="#111" strokeWidth="2.5" fill="#111" fillOpacity="0.1" strokeLinejoin="round" />
            </motion.svg>

            {/* Icon 2: Server stack (modern) */}
            <motion.svg
              className="w-24 h-24 flex-shrink-0"
              viewBox="0 0 64 64"
              fill="none"
              animate={{ y: [-6, 6, -6], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <rect x="12" y="14" width="40" height="12" rx="2" stroke="#111" strokeWidth="2.5" fill="#111" fillOpacity="0.05" />
              <rect x="12" y="30" width="40" height="12" rx="2" stroke="#111" strokeWidth="2.5" fill="#111" fillOpacity="0.05" />
              <rect x="12" y="46" width="40" height="12" rx="2" stroke="#111" strokeWidth="2.5" fill="#111" fillOpacity="0.05" />
              <circle cx="18" cy="20" r="1.5" fill="#111" />
              <circle cx="18" cy="36" r="1.5" fill="#111" />
              <circle cx="18" cy="52" r="1.5" fill="#111" />
            </motion.svg>

            {/* Icon 3: Database (modern cylinder) */}
            <motion.svg
              className="w-24 h-24 flex-shrink-0"
              viewBox="0 0 64 64"
              fill="none"
              animate={{ scale: [0.92, 1.05, 0.92], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <ellipse cx="32" cy="14" rx="18" ry="5" stroke="#111" strokeWidth="2.5" fill="#111" fillOpacity="0.05" />
              <path d="M 14 14 L 14 50 Q 14 55 32 55 Q 50 55 50 50 L 50 14" stroke="#111" strokeWidth="2.5" fill="#111" fillOpacity="0.05" />
              <path d="M 14 26 Q 14 31 32 31 Q 50 31 50 26" stroke="#111" strokeWidth="2" fill="none" />
              <path d="M 14 38 Q 14 43 32 43 Q 50 43 50 38" stroke="#111" strokeWidth="2" fill="none" />
            </motion.svg>

            {/* Icon 4: Connected network nodes (modern) */}
            <motion.svg
              className="w-24 h-24 flex-shrink-0"
              viewBox="0 0 64 64"
              fill="none"
              animate={{ y: [-6, 6, -6], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <line x1="16" y1="20" x2="32" y2="32" stroke="#111" strokeWidth="2" />
              <line x1="48" y1="20" x2="32" y2="32" stroke="#111" strokeWidth="2" />
              <line x1="16" y1="48" x2="32" y2="32" stroke="#111" strokeWidth="2" />
              <line x1="48" y1="48" x2="32" y2="32" stroke="#111" strokeWidth="2" />
              <circle cx="32" cy="32" r="6" fill="#111" />
              <circle cx="16" cy="20" r="4" stroke="#111" strokeWidth="2.5" fill="#fff" />
              <circle cx="48" cy="20" r="4" stroke="#111" strokeWidth="2.5" fill="#fff" />
              <circle cx="16" cy="48" r="4" stroke="#111" strokeWidth="2.5" fill="#fff" />
              <circle cx="48" cy="48" r="4" stroke="#111" strokeWidth="2.5" fill="#fff" />
            </motion.svg>

            {/* Icon 5: CPU chip (modern computing) */}
            <motion.svg
              className="w-24 h-24 flex-shrink-0"
              viewBox="0 0 64 64"
              fill="none"
              animate={{ scale: [0.92, 1.05, 0.92], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <rect x="18" y="18" width="28" height="28" rx="3" stroke="#111" strokeWidth="2.5" fill="#111" fillOpacity="0.05" />
              <rect x="24" y="24" width="16" height="16" rx="1" stroke="#111" strokeWidth="2" fill="none" />
              <line x1="26" y1="14" x2="26" y2="18" stroke="#111" strokeWidth="2" />
              <line x1="32" y1="14" x2="32" y2="18" stroke="#111" strokeWidth="2" />
              <line x1="38" y1="14" x2="38" y2="18" stroke="#111" strokeWidth="2" />
              <line x1="26" y1="46" x2="26" y2="50" stroke="#111" strokeWidth="2" />
              <line x1="32" y1="46" x2="32" y2="50" stroke="#111" strokeWidth="2" />
              <line x1="38" y1="46" x2="38" y2="50" stroke="#111" strokeWidth="2" />
              <line x1="14" y1="26" x2="18" y2="26" stroke="#111" strokeWidth="2" />
              <line x1="14" y1="32" x2="18" y2="32" stroke="#111" strokeWidth="2" />
              <line x1="14" y1="38" x2="18" y2="38" stroke="#111" strokeWidth="2" />
              <line x1="46" y1="26" x2="50" y2="26" stroke="#111" strokeWidth="2" />
              <line x1="46" y1="32" x2="50" y2="32" stroke="#111" strokeWidth="2" />
              <line x1="46" y1="38" x2="50" y2="38" stroke="#111" strokeWidth="2" />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
