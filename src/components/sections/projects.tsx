"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { projects } from "@/lib/project-data";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export const ProjectDetailed = ({ project, index }: { project: any, index: number }) => (
  <motion.div
    className="grid md:grid-cols-2 gap-12 items-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <motion.div
      variants={itemVariants}
      className={cn("relative group w-full max-w-lg mx-auto", index % 2 !== 0 && "md:order-last")}
    >
        <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl -z-10 opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
        <Link href={project.liveLink} target="_blank" className="block">
          <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={600}
              className="relative rounded-2xl shadow-2xl w-full"
              data-ai-hint={project.aiHint}
          />
        </Link>
    </motion.div>
    <motion.div 
      variants={itemVariants} 
      className="flex flex-col justify-center"
    >
      {project.featured && <p className="text-primary font-semibold uppercase tracking-widest mb-2">Featured Project</p>}
      <h3 className="text-3xl font-bold font-headline mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E0AAFF] to-[#9D4EDD]">
        {project.title}
      </h3>
      <div className="bg-purple-800/20 backdrop-blur-sm p-6 rounded-xl mb-4 border border-purple-800/30">
        <p className="text-muted-foreground text-base">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-3 mb-4">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-gradient-to-r from-primary to-purple-600 text-primary-foreground border-transparent text-sm">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex items-center gap-6">
          <Link href={project.liveLink} target="_blank" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors group">
            <LinkIcon className="h-5 w-5 group-hover:text-primary transition-colors" />
             Live Demo
          </Link>
          <Link href={project.githubLink} target="_blank" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors group">
            <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
             Source Code
          </Link>
      </div>
    </motion.div>
  </motion.div>
);

export default function Projects() {
  const projectsToShow = projects.slice(0, 3);

  return (
    <SectionWrapper id="projects" className="bg-gradient-to-br from-[#1A0534] to-[#3D0C6B] !py-16 md:!py-24">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white mb-16" style={{textShadow: '0 0 15px rgba(255,255,255,0.2)'}}>
            My Projects
        </h2>
      </div>

      <div className="space-y-24">
        {projectsToShow.map((project, index) => (
          <ProjectDetailed key={project.title} project={project} index={index} />
        ))}
      </div>
      
      <div className="text-center mt-24">
        <Button asChild size="lg" className="btn-capsule shadow-glow">
          <Link href="/projects">
            View More <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
