
"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export const projects = [
  {
    title: "Student Companion",
    description: "An all-in-one app for students to manage schedules, assignments, and notes, enhancing productivity and organization.",
    image: "https://placehold.co/1200x800.png",
    tags: ["Flutter", "Firebase", "Dart", "GetX"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    aiHint: "student productivity"
  },
  {
    title: "LuxeEstate",
    description: "A luxury real estate platform with immersive property tours and advanced filtering.",
    image: "https://placehold.co/1200x800.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Prisma"],
    liveLink: "#",
    githubLink: "#",
    aiHint: "luxury real estate"
  },
  {
    title: "SmileCraft",
    description: "AI-powered dental simulation app for visualizing cosmetic procedures.",
    image: "https://placehold.co/600x400.png",
    tags: ["Python", "TensorFlow", "React Native"],
    liveLink: "#",
    githubLink: "#",
    aiHint: "dental technology"
  },
  {
    title: "WellnessPortal",
    description: "A health and wellness tracking dashboard with personalized meal and workout plans.",
    image: "https://placehold.co/1200x800.png",
    tags: ["Vue.js", "Chart.js", "Node.js"],
    liveLink: "#",
    githubLink: "#",
    aiHint: "health dashboard"
  },
  {
    title: "AiCareer",
    description: "AI career path suggestion tool based on user skills and interests.",
    image: "https://placehold.co/600x400.png",
    tags: ["AI", "React", "Python", "Scikit-learn"],
    liveLink: "#",
    githubLink: "#",
    aiHint: "career guidance"
  },
];

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
    className="grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <motion.div variants={itemVariants} className={cn(index % 2 === 0 ? "lg:order-first" : "lg:order-last")}>
      {project.featured && <p className="text-primary font-semibold mb-2">Featured Project</p>}
      <h3 className="text-4xl font-bold font-headline mb-4">{project.title}</h3>
      <div className="bg-background/30 backdrop-blur-sm p-6 rounded-lg mb-6 border border-white/10 shadow-lg">
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
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="absolute -inset-8 bg-primary/10 rounded-xl blur-2xl -z-10"></div>
      <Link href={project.liveLink} target="_blank">
          <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="relative rounded-xl border-2 border-primary/20 shadow-2xl transition-transform duration-300"
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

      {projectsToShow.map((project, index) => (
        <ProjectDetailed key={project.title} project={project} index={index} />
      ))}
      <div className="text-center mt-16">
        <Button asChild size="lg" className="btn-capsule shadow-glow">
          <Link href="/projects">
            View More <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
