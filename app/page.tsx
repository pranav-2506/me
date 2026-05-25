"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Philosophy from "@/components/sections/Philosophy";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.2, 0.35, 0.58, 0.6, 0.68, 0.84, 0.92, 1],
    [
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(245, 245, 245)",
      "rgb(245, 245, 245)",
      "rgb(40, 40, 40)",
      "rgb(25, 25, 25)",
      "rgb(10, 10, 10)",
      "rgb(5, 5, 5)",
      "rgb(0, 0, 0)",
    ]
  );

  return (
    <>
      <motion.div
        style={{ backgroundColor }}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="fixed inset-0 overflow-hidden">
          <Hero scrollProgress={smoothProgress} />
          <Featured scrollProgress={smoothProgress} />
          <Philosophy scrollProgress={smoothProgress} />
          <Work scrollProgress={smoothProgress} />
          <Contact scrollProgress={smoothProgress} />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative z-20 h-[500vh] pointer-events-none"
      />
    </>
  );
}
