"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: string;
  external?: boolean;
  className?: string;
}

export default function Link({
  href,
  children,
  external = false,
  className = "",
}: LinkProps) {
  const commonClass =
    "relative text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium";

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${commonClass} ${className}`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <NextLink href={href} className={`${commonClass} ${className}`}>
        {children}
      </NextLink>
    </motion.div>
  );
}
