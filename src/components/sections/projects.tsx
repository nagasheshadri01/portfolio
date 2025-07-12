"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "LuxeEstate",
    description: "A luxury real estate platform with immersive property tours and advanced filtering.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Prisma"],
    link: "#",
    aiHint: "luxury real estate"
  },
  {
    title: "SmileCraft",
    description: "AI-powered dental simulation app for visualizing cosmetic procedures.",
    image: "https://placehold.co/600x400.png",
    tags: ["Python", "TensorFlow", "React Native"],
    link: "#",
    aiHint: "dental technology"
  },
  {
    title: "Student Companion",
    description: "An all-in-one app for students to manage schedules, assignments, and notes.",
    image: "https://placehold.co/600x400.png",
    tags: ["Flutter", "Firebase", "Dart"],
    link: "#",
    highlight: true,
    aiHint: "student productivity"
  },
  {
    title: "WellnessPortal",
    description: "A health and wellness tracking dashboard with personalized meal and workout plans.",
    image: "https://placehold.co/600x400.png",
    tags: ["Vue.js", "Chart.js", "Node.js", "MongoDB"],
    link: "#",
    aiHint: "health dashboard"
  },
  {
    title: "AiCareer",
    description: "AI career path suggestion tool based on user skills and interests.",
    image: "https://placehold.co/600x400.png",
    tags: ["AI", "React", "Python", "Scikit-learn"],
    link: "#",
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

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-headline mb-4">My Projects</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in web development and beyond.
        </p>
      </div>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <Card className="bg-card border-2 border-card h-full overflow-hidden group transition-all duration-300 hover:border-primary hover:shadow-glow">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 pb-2 flex-grow">
                <CardTitle className="font-headline text-2xl mb-2 flex items-center justify-between">
                  {project.title}
                  {project.highlight && <Trophy className="h-6 w-6 text-yellow-400" />}
                </CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-2 flex flex-col items-start gap-4">
                 <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={project.link} target="_blank" className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:underline">
                    View Project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
