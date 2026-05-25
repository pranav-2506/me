"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface WorkProps {
  scrollProgress: MotionValue<number>;
}

const experiences = [
  {
    name: "Hughes Network Systems",
    role: "Software Engineer Intern",
    year: "2025",
    description:
      "Worked on containerized 5G systems at scale. Focused on performance tuning, DPDK, SR-IOV, and debugging multi-node distributed environments under real-time constraints.",
    tech: ["5G", "DPDK", "SR-IOV", "Kubernetes", "C++"],
  },
  {
    name: "Terrapin Works (University of Maryland)",
    role: "Backend Engineer",
    year: "2025-2026",
    description:
      "Built backend systems for a platform serving 25+ campus labs. Worked with GraphQL, OpenSearch, AWS Step Functions, and distributed workflows.",
    tech: ["GraphQL", "OpenSearch", "AWS", "Node.js"],
  },
];

const projects = [
  {
    name: "Dataflow Pipeline",
    description:
      "Built a modular actor-based system in C++ for high-throughput image processing. Optimized execution using Linux perf and event-driven scheduling.",
    tech: ["C++", "Linux perf", "Actor Model"],
  },
  {
    name: "Search & Optimization Engine",
    description:
      "Implemented A*, Simulated Annealing, and Genetic Algorithms with performance-focused design and benchmarking.",
    tech: ["A*", "Simulated Annealing", "Genetic Algos"],
  },
  {
    name: "Autonomous Vehicle Modeling",
    description:
      "Built probabilistic systems using Particle Filters, Kalman Filters, and Bayesian Networks.",
    tech: ["Particle Filters", "Kalman", "Bayesian Nets"],
  },
];

export default function Work({ scrollProgress }: WorkProps) {
  // Header "Experience" phase
  const headerOpacity = useTransform(
    scrollProgress,
    [0.65, 0.67, 0.684, 0.696],
    [0, 1, 1, 0]
  );

  // Horizontal scroll experiences
  const experiencesContainerOpacity = useTransform(
    scrollProgress,
    [0.696, 0.71, 0.776, 0.79],
    [0, 1, 1, 0]
  );

  const experiencesX = useTransform(scrollProgress, [0.71, 0.776], ["0vw", "-100vw"]);

  // Projects header phase
  const projectsHeaderOpacity = useTransform(
    scrollProgress,
    [0.792, 0.809, 0.826, 0.838],
    [0, 1, 1, 0]
  );

  // Horizontal scroll projects
  const projectsContainerOpacity = useTransform(
    scrollProgress,
    [0.838, 0.85, 0.917, 0.93],
    [0, 1, 1, 0]
  );

  const projectsX = useTransform(scrollProgress, [0.85, 0.917], ["0vw", "-200vw"]);

  // Background color for projects section (dark)
  const projectsBgColor = useTransform(
    scrollProgress,
    [0.817, 0.867],
    ["rgb(20, 20, 20)", "rgb(5, 5, 5)"]
  );

  // Text color for projects heading (remains light)
  const projectsHeadingColor = useTransform(
    scrollProgress,
    [0.817, 0.867],
    ["rgb(234, 234, 234)", "rgb(234, 234, 234)"]
  );

  return (
    <>
      {/* Header */}
      <motion.div
        style={{ opacity: headerOpacity }}
        className="absolute inset-0 flex items-center justify-center px-4"
      >
        <div className="text-center">
          <motion.p
            className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            — Where I've Been —
          </motion.p>
          <h2 className="text-5xl sm:text-7xl font-medium tracking-tight bg-gradient-to-br from-white via-[#eaeaea] to-[#666] bg-clip-text text-transparent">
            Experience
          </h2>
        </div>
      </motion.div>

      {/* Horizontal scroll experiences */}
      <motion.div
        style={{ opacity: experiencesContainerOpacity }}
        className="absolute inset-0 flex items-center overflow-hidden"
      >
        <motion.div
          style={{ x: experiencesX }}
          className="flex w-full h-full"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={`exp-${index}`}
              className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8"
            >
              <div className="max-w-2xl text-center">
                {/* Year + role - minimal Apple style */}
                <div className="flex items-center justify-center gap-3 mb-6 text-xs tracking-[0.25em] uppercase text-[#888]">
                  <span className="text-cyan-400/80">{exp.year}</span>
                  <span className="text-[#444]">·</span>
                  <span>{exp.role}</span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-medium tracking-tight bg-gradient-to-br from-white via-[#eaeaea] to-[#888] bg-clip-text text-transparent mb-6">
                  {exp.name}
                </h3>

                <p className="text-base sm:text-lg text-[#a0a0a0] leading-relaxed mb-10">
                  {exp.description}
                </p>

                {/* Tech stack - minimal dot separated */}
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs tracking-[0.15em] uppercase text-[#777]">
                  {exp.tech.map((t, i) => (
                    <span key={t} className="flex items-center gap-3">
                      <span>{t}</span>
                      {i < exp.tech.length - 1 && <span className="text-[#333]">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Header */}
      <motion.div
        style={{ opacity: projectsHeaderOpacity, backgroundColor: projectsBgColor }}
        className="absolute inset-0 flex items-center justify-center px-4"
      >
        <div className="text-center">
          <motion.p
            className="text-xs tracking-[0.3em] text-purple-400/70 uppercase mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            — What I've Built —
          </motion.p>
          <motion.h2
            style={{ color: projectsHeadingColor }}
            className="text-5xl sm:text-7xl font-medium tracking-tight bg-gradient-to-br from-white via-[#eaeaea] to-[#666] bg-clip-text text-transparent"
          >
            Projects
          </motion.h2>
        </div>
      </motion.div>

      {/* Horizontal scroll projects */}
      <motion.div
        style={{ opacity: projectsContainerOpacity }}
        className="absolute inset-0 flex items-center overflow-hidden"
      >
        <motion.div
          style={{ x: projectsX }}
          className="flex w-full h-full"
        >
          {projects.map((project, index) => (
            <motion.div
              key={`proj-${index}`}
              className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8"
            >
              <div className="max-w-2xl text-center">
                {/* Project number - minimal */}
                <div className="flex items-center justify-center gap-3 mb-6 text-xs tracking-[0.3em] uppercase text-[#666]">
                  <span className="text-purple-400/80 font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#333]">/</span>
                  <span className="font-mono">
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-medium tracking-tight bg-gradient-to-br from-white via-[#eaeaea] to-[#888] bg-clip-text text-transparent mb-6">
                  {project.name}
                </h3>

                <p className="text-base sm:text-lg text-[#a0a0a0] leading-relaxed mb-10">
                  {project.description}
                </p>

                {/* Tech - minimal dot separated */}
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs tracking-[0.15em] uppercase text-[#777]">
                  {project.tech.map((t, i) => (
                    <span key={t} className="flex items-center gap-3">
                      <span>{t}</span>
                      {i < project.tech.length - 1 && <span className="text-[#333]">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
