
"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
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
  {
    title: "EcoTrack",
    description: "An app for tracking personal carbon footprint and promoting sustainable habits.",
    image: "https://placehold.co/1200x800.png",
    tags: ["React Native", "Firebase", "API"],
    liveLink: "#",
    githubLink: "#",
    aiHint: "sustainability environment"
  }
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
            <div className="bg-background/30 backdrop-blur-sm p-6 rounded-lg mb-6 border border-white/10">
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
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute -inset-8 bg-primary/10 rounded-xl blur-2xl -z-10"></div>
            <Link href={featuredProject.liveLink} target="_blank">
                <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    width={1200}
                    height={800}
                    className="relative rounded-xl border-2 border-primary/20 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                    data-ai-hint={featuredProject.aiHint}
                />
            </Link>
          </motion.div>
        </motion.div>
      )}
      
      {/* Other Projects */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {otherProjects.map((project, index) => {
          // Odd-numbered projects (0, 2, 4...) get the elaborate layout
          if (index % 2 === 0) {
            return (
              <motion.div 
                key={project.title}
                variants={itemVariants}
                className="md:col-span-2 lg:col-span-3"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div 
                    variants={itemVariants} 
                    className={cn("relative", index % 4 === 0 ? "lg:order-last" : "lg:order-first")}
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
                            className={cn(
                              "relative rounded-xl border-2 border-primary/20 shadow-2xl transform hover:rotate-0 transition-transform duration-300",
                              index % 4 === 0 ? "-rotate-2" : "rotate-2"
                            )}
                            data-ai-hint={project.aiHint}
                        />
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants} className={index % 4 === 0 ? "lg:order-first" : "lg:order-last"}>
                    <h3 className="text-3xl font-bold font-headline mb-4">{project.title}</h3>
                    <div className="bg-background/30 backdrop-blur-sm p-6 rounded-lg mb-6 border border-white/10">
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                       <Link href={project.liveLink} target="_blank" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors">
                          <LinkIcon className="h-5 w-5" /> Live
                        </Link>
                        <Link href={project.githubLink} target="_blank" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors">
                          <Github className="h-5 w-5" /> Code
                        </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          } 
          // Even-numbered projects (1, 3, 5...) get the compact card layout
          else {
            return (
              <motion.div key={project.title} variants={itemVariants} className="md:col-span-1">
                <Card className="bg-background border-2 border-transparent h-full overflow-hidden group transition-all duration-300 hover:border-primary hover:shadow-glow flex flex-col">
                  <div className="overflow-hidden">
                     <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.aiHint}
                    />
                  </div>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">
                        {project.title}
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm flex-grow mb-4">{project.description}</p>
                     <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 flex items-center justify-between">
                     <Link href={project.liveLink} target="_blank" className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:underline">
                        View Project <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link href={project.githubLink} target="_blank" className="text-sm font-semibold text-muted-foreground inline-flex items-center gap-1 hover:text-primary transition-colors">
                        <Github className="h-4 w-4" /> Code
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          }
        })}
      </motion.div>
    </SectionWrapper>
  );
}
