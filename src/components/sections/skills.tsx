"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, Blocks } from "lucide-react";
import React from "react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code2 className="h-10 w-10 text-primary" />,
    skills: ["Next.js", "React", "TypeScript", "Python", "C++", "C"],
  },
  {
    title: "Backend & Platforms",
    icon: <Server className="h-10 w-10 text-primary" />,
    skills: ["Firebase", "Vercel", "Node.js"],
  },
  {
    title: "AI & Development",
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    skills: ["Genkit", "Google AI Studio", "LangChain"],
  },
  {
    title: "Core Concepts",
    icon: <Blocks className="h-10 w-10 text-primary" />,
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
    <SectionWrapper id="skills" className="bg-card">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-headline mb-4">My Tech Toolbox</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of the primary tools, technologies, and concepts I leverage to build modern, efficient applications.
        </p>
      </div>
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={itemVariants}>
            <Card className="bg-background border-2 border-transparent hover:border-primary hover:shadow-glow transition-all duration-300 h-full">
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-2 bg-card rounded-lg">
                  {category.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm font-medium bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
