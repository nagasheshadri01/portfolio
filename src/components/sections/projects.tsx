
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
    className="flex justify-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <div className="relative max-w-4xl w-full">
      <motion.div
        variants={itemVariants}
        className="relative group w-full"
      >
        <Link href={project.liveLink} target="_blank" className="block">
            <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={600}
                className={cn(
                  "relative rounded-xl border-2 border-primary/20 shadow-2xl transition-transform duration-300 w-full",
                )}
                data-ai-hint={project.aiHint}
            />
        </Link>
      </motion.div>
      <motion.div 
        variants={itemVariants} 
        className="relative z-10 bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-lg lg:absolute lg:bottom-12 lg:left-12 lg:w-1/2"
      >
        {project.featured && <p className="text-primary font-semibold mb-2">Featured Project</p>}
        <h3 className="text-2xl lg:text-3xl font-bold font-headline mb-4">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-sm">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4">
            <Link href={project.liveLink} target="_blank" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors">
              <LinkIcon className="h-5 w-5" /> Live Demo
            </Link>
            <Link href={project.githubLink} target="_blank" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" /> Source Code
            </Link>
        </div>
      </motion.div>
    </div>
  </motion.div>
);


export default function Projects() {
  const projectsToShow = projects.slice(0, 3);

  return (
    <SectionWrapper id="projects" className="bg-card">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-headline mb-12">My Projects</h2>
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
