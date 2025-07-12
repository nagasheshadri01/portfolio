"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RadialProgressProps {
  percentage: number;
  label: string;
  icon: React.ReactNode;
}

export default function RadialProgress({ percentage, label, icon }: RadialProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <div className="relative h-40 w-40">
        <svg className="w-full h-full" viewBox="0 0 150 150">
          <circle
            cx="75"
            cy="75"
            r={radius}
            strokeWidth="10"
            className="stroke-secondary"
            fill="transparent"
          />
          <motion.circle
            cx="75"
            cy="75"
            r={radius}
            strokeWidth="10"
            className="stroke-primary"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
            transition={{ duration: 1.5, ease: "circOut" }}
            transform="rotate(-90 75 75)"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-primary h-10 w-10">{icon}</div>
            <span className="mt-1 text-xl font-bold">{percentage}%</span>
        </div>
      </div>
      <p className="text-lg font-semibold font-headline">{label}</p>
    </div>
  );
}
