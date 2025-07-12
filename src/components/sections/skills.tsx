"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import RadialProgress from "@/components/ui/radial-progress";
import { motion } from "framer-motion";
import { CppIcon, PythonIcon } from "@/components/icons";
import { Code, BrainCircuit } from 'lucide-react';

const skills = [
  { name: "C", percentage: 90, icon: <Code className="w-full h-full" /> },
  { name: "C++", percentage: 85, icon: <CppIcon className="w-full h-full p-2" /> },
  { name: "Python", percentage: 80, icon: <PythonIcon className="w-full h-full p-1" /> },
  { name: "DSA", percentage: 95, icon: <BrainCircuit className="w-full h-full" /> },
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
      <div className="text-center">
        <h2 className="text-4xl font-bold font-headline mb-4">My Skills</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I have a strong foundation in core computer science concepts and I'm proficient in several programming languages.
        </p>
      </div>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <RadialProgress
              percentage={skill.percentage}
              label={skill.name}
              icon={skill.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
