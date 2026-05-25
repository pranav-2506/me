"use client";

import { ReactNode } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface ScrollSceneProps {
  children: ReactNode;
  scrollProgress: MotionValue<number>;
  range: [number, number];
  className?: string;
}

export default function ScrollScene({
  children,
  scrollProgress,
  range,
  className = "",
}: ScrollSceneProps) {
  const [start, end] = range;

  const opacity = useTransform(scrollProgress, [start - 0.05, start, end, end + 0.05], [0, 1, 1, 0]);

  const y = useTransform(scrollProgress, [start, end], [40, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
