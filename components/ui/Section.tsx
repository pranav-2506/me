"use client";

import { ReactNode } from "react";
import MotionWrapper from "./MotionWrapper";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-4xl">
        <MotionWrapper>{children}</MotionWrapper>
      </div>
    </section>
  );
}
