
"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, Blocks } from "lucide-react";
import React from "react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code2 className="h-12 w-12 text-primary drop-shadow-[0_4px_12px_rgba(168,85,247,0.24)]" />,
    skills: ["Next.js", "React", "TypeScript", "Python", "C++", "C"],
  },
  {
    title: "Backend & Platforms",
    icon: <Server className="h-12 w-12 text-primary drop-shadow-[0_4px_12px_rgba(168,85,247,0.24)]" />,
    skills: ["Firebase", "Vercel", "Node.js"],
  },
  {
    title: "AI & Development",
    icon: <BrainCircuit className="h-12 w-12 text-primary drop-shadow-[0_4px_12px_rgba(168,85,247,0.24)]" />,
    skills: ["Genkit", "Google AI Studio", "LangChain"],
  },
  {
    title: "Core Concepts",
    icon: <Blocks className="h-12 w-12 text-primary drop-shadow-[0_4px_12px_rgba(168,85,247,0.24)]" />,
    skills: ["Data Structures", "Algorithms", "Object-Oriented Programming"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
       <div className="relative">
        <div
            className="pointer-events-none absolute z-0 top-0 left-1/2 -translate-x-1/2 w-full h-[420px]"
            style={{ background: "radial-gradient(circle 650px at 50% -10%, hsl(var(--primary) / 0.2), hsl(var(--background)) 85%)" }}
        />
        <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl font-bold font-headline mb-4">My Tech Toolbox</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of the primary tools, technologies, and concepts I leverage to build modern, efficient applications.
            </p>
        </div>
        <motion.div
            className="grid md:grid-cols-2 gap-10 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {skillCategories.map((category) => (
            <motion.div
                key={category.title}
                variants={itemVariants}
                className="relative flex flex-row items-center bg-gradient-to-br from-[#25104a]/80 to-[#21123b]/80 rounded-2xl p-8 shadow-2xl overflow-hidden min-h-[180px] hover:scale-[1.015] transition-transform"
            >
                <div className="relative w-20 h-20 mr-6 flex-shrink-0 flex items-center justify-center">
                    {category.icon}
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-sm font-medium bg-primary/10 text-primary border-primary/20">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
                <div className="absolute w-[90%] h-full top-0 left-0 bg-gradient-to-br from-[#8369fd33] via-transparent to-[#9340fc0c] pointer-events-none opacity-60 rounded-2xl z-0" />
            </motion.div>
            ))}
        </motion.div>
       </div>
    </SectionWrapper>
  );
}
