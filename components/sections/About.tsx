"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface AboutProps {
  scrollProgress: MotionValue<number>;
}

interface AboutItem {
  text: string;
  icon: React.ReactNode;
}

const items: AboutItem[] = [
  {
    text: "A computer engineering student focused on systems, infrastructure, and AI.",
    // CPU chip icon
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="18" y="18" width="28" height="28" rx="3" stroke="#1d1d1f" strokeWidth="2" fill="none" />
        <rect x="24" y="24" width="16" height="16" rx="1" stroke="#1d1d1f" strokeWidth="1.5" fill="none" />
        <line x1="26" y1="14" x2="26" y2="18" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="32" y1="14" x2="32" y2="18" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="38" y1="14" x2="38" y2="18" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="26" y1="46" x2="26" y2="50" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="32" y1="46" x2="32" y2="50" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="38" y1="46" x2="38" y2="50" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="14" y1="26" x2="18" y2="26" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="14" y1="32" x2="18" y2="32" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="14" y1="38" x2="18" y2="38" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="46" y1="26" x2="50" y2="26" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="46" y1="32" x2="50" y2="32" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="46" y1="38" x2="50" y2="38" stroke="#1d1d1f" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    text: "Drawn to distributed systems where behavior under load is the real test.",
    // Network nodes icon
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <line x1="16" y1="20" x2="32" y2="32" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="48" y1="20" x2="32" y2="32" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="16" y1="48" x2="32" y2="32" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="48" y1="48" x2="32" y2="32" stroke="#1d1d1f" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="5" fill="#1d1d1f" />
        <circle cx="16" cy="20" r="3.5" stroke="#1d1d1f" strokeWidth="1.5" fill="#fff" />
        <circle cx="48" cy="20" r="3.5" stroke="#1d1d1f" strokeWidth="1.5" fill="#fff" />
        <circle cx="16" cy="48" r="3.5" stroke="#1d1d1f" strokeWidth="1.5" fill="#fff" />
        <circle cx="48" cy="48" r="3.5" stroke="#1d1d1f" strokeWidth="1.5" fill="#fff" />
      </svg>
    ),
  },
  {
    text: "More interested in how systems behave than how they look.",
    // Waveform/oscilloscope icon
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path
          d="M 8 32 L 16 32 L 20 20 L 24 44 L 28 16 L 32 48 L 36 24 L 40 40 L 44 32 L 56 32"
          stroke="#1d1d1f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    text: "Off the keyboard, non-functional jazz and reharmonization. It shapes how I think about patterns and control.",
    // Piano keys icon
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="10" y="18" width="44" height="28" rx="1.5" stroke="#1d1d1f" strokeWidth="1.5" fill="none" />
        <line x1="18" y1="18" x2="18" y2="46" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="26" y1="18" x2="26" y2="46" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="32" y1="18" x2="32" y2="46" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="38" y1="18" x2="38" y2="46" stroke="#1d1d1f" strokeWidth="1.5" />
        <line x1="46" y1="18" x2="46" y2="46" stroke="#1d1d1f" strokeWidth="1.5" />
        <rect x="14" y="18" width="6" height="16" fill="#1d1d1f" />
        <rect x="22" y="18" width="6" height="16" fill="#1d1d1f" />
        <rect x="34" y="18" width="6" height="16" fill="#1d1d1f" />
        <rect x="42" y="18" width="6" height="16" fill="#1d1d1f" />
      </svg>
    ),
  },
  {
    text: "Train seriously. The discipline carries over.",
    // Dumbbell icon
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="6" y="24" width="6" height="16" rx="1" fill="#1d1d1f" />
        <rect x="12" y="20" width="5" height="24" rx="1" fill="#1d1d1f" />
        <rect x="17" y="29" width="30" height="6" rx="1" fill="#1d1d1f" />
        <rect x="47" y="20" width="5" height="24" rx="1" fill="#1d1d1f" />
        <rect x="52" y="24" width="6" height="16" rx="1" fill="#1d1d1f" />
      </svg>
    ),
  },
];

export default function About({ scrollProgress }: AboutProps) {
  // About window: [0.15, 0.30]
  const opacity = useTransform(
    scrollProgress,
    [0.14, 0.18, 0.27, 0.30],
    [0, 1, 1, 0]
  );

  const labelOpacity = useTransform(
    scrollProgress,
    [0.14, 0.17, 0.27, 0.30],
    [0, 1, 1, 0]
  );

  const lineWidth = useTransform(
    scrollProgress,
    [0.15, 0.20],
    ["0px", "40px"]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8"
    >
      {/* Eyebrow label */}
      <motion.div
        style={{ opacity: labelOpacity }}
        className="flex flex-col items-center gap-4 mb-10 sm:mb-16"
      >
        <p className="text-[30px] tracking-[0.4em] text-[#999] uppercase font-medium">
          About
        </p>
        <motion.div
          style={{ width: lineWidth }}
          className="h-px bg-[#bbb]"
        />
      </motion.div>

      {/* Columns grid: 5 cols desktop, 1 col mobile, 2 cols tablet */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6 sm:gap-x-4 lg:gap-x-6">
        {items.map((item, index) => {
          // Each column rises from below, staggered
          const colOpacity = useTransform(
            scrollProgress,
            [
              0.17 + index * 0.012,
              0.21 + index * 0.012,
              0.27,
              0.30,
            ],
            [0, 1, 1, 0]
          );

          const colY = useTransform(
            scrollProgress,
            [0.17 + index * 0.012, 0.23 + index * 0.012],
            [80, 0]
          );

          return (
            <motion.div
              key={index}
              style={{ opacity: colOpacity, y: colY }}
              className="flex flex-col items-center text-center px-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 sm:w-24 sm:h-24 mb-7 sm:mb-8">
                {item.icon}
              </div>

              {/* Wrapped text */}
              <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light text-[#1d1d1f] leading-[1.55] tracking-tight max-w-[240px] mx-auto">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
