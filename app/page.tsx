"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
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
    [0, 0.17, 0.21, 0.47, 0.64, 0.66, 0.72, 0.86, 0.94, 1],
    [
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(245, 245, 245)",
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
          <About scrollProgress={smoothProgress} />
          <Featured scrollProgress={smoothProgress} />
          <Philosophy scrollProgress={smoothProgress} />
          <Work scrollProgress={smoothProgress} />
          <Contact scrollProgress={smoothProgress} />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative z-20 h-[600vh] pointer-events-none"
      />
    </>
  );
}
