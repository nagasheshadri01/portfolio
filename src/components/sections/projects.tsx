
"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Link as LinkIcon, Star } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Student Companion",
    description: "An all-in-one app for students to manage schedules, assignments, and notes, enhancing productivity and organization.",
    image: "https://placehold.co/600x400.png",
    tags: ["Flutter", "Firebase", "Dart", "GetX"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    aiHint: "student productivity"
  },
  {
    title: "LuxeEstate",
    description: "A luxury real estate platform with immersive property tours and advanced filtering.",
    image: "https://placehold.co/600x400.png",
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
    image: "https://placehold.co/600x400.png",
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

export default function Projects() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <SectionWrapper id="projects" className="bg-card">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-headline mb-12">My Projects</h2>
      </div>

      {/* Featured Project */}
      {featuredProject && (
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <p className="text-primary font-semibold mb-2">Featured Project</p>
            <h3 className="text-4xl font-bold font-headline mb-4">{featuredProject.title}</h3>
            <div className="bg-background/50 p-6 rounded-lg mb-6">
              <p className="text-muted-foreground text-lg">{featuredProject.description}</p>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {featuredProject.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-4">
               <Link href={featuredProject.liveLink} target="_blank" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors">
                  <LinkIcon className="h-5 w-5" /> Live Demo
                </Link>
                <Link href={featuredProject.githubLink} target="_blank" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" /> Source Code
                </Link>
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants} 
            className="relative"
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl"></div>
            <Link href={featuredProject.liveLink} target="_blank">
                <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    width={1200}
                    height={800}
                    className="relative rounded-xl border-2 border-primary/20 shadow-2xl transform -rotate-2"
                    data-ai-hint={featuredProject.aiHint}
                />
            </Link>
          </motion.div>
        </motion.div>
      )}
      
      {/* Other Projects */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {otherProjects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <Card className="bg-background border-2 border-transparent h-full overflow-hidden group transition-all duration-300 hover:border-primary hover:shadow-glow flex flex-col">
              <CardHeader>
                  <CardTitle className="font-headline text-2xl mb-2 flex items-center justify-between">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                 <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2 flex items-center gap-4">
                 <Link href={project.liveLink} target="_blank" className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:underline">
                    View Project <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href={project.githubLink} target="_blank" className="text-sm font-semibold text-muted-foreground inline-flex items-center gap-1 hover:text-primary transition-colors">
                    <Github className="h-4 w-4" /> Code
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

