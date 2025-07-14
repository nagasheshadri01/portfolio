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
    <SectionWrapper id="skills" className="bg-background">
       <div className="relative">
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
                className="relative flex flex-row items-center bg-card rounded-2xl p-8 shadow-lg overflow-hidden min-h-[180px] border-2 border-transparent hover:scale-105 hover:shadow-glow transition-all duration-300"
            >
                <div className="relative w-20 h-20 mr-6 flex-shrink-0 flex items-center justify-center">
                    {category.icon}
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-sm font-medium bg-primary/10 text-primary border-primary/20">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </motion.div>
            ))}
        </motion.div>
       </div>
    </SectionWrapper>
  );
}
