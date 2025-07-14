
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
    className="grid lg:grid-cols-2 gap-12 items-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <motion.div 
      variants={itemVariants} 
      className={cn(
        "relative z-10",
        index % 2 !== 0 ? "lg:order-last lg:ml-[-20%]" : "lg:mr-[-20%]"
      )}
    >
      {project.featured && <p className="text-primary font-semibold mb-2">Featured Project</p>}
      <h3 className="text-4xl font-bold font-headline mb-4">{project.title}</h3>
      <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg mb-6 border border-primary/20 shadow-lg">
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
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
    <motion.div
      variants={itemVariants}
      className={cn(
        "relative group w-full max-w-lg",
        "justify-self-center lg:justify-self-auto",
        index % 2 !== 0 ? "lg:order-first" : ""
      )}
    >
      <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl -z-10 group-hover:blur-3xl transition-all duration-300"></div>
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
