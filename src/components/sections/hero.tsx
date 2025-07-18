"use client";

import ParticlesBackground from "@/components/ui/particles-background";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-5xl lg:text-7xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-br from-primary via-purple-400 to-indigo-400 leading-tight"
              variants={itemVariants}
            >
              Hey, I’m Naga Sheshadri.
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              CSE Undergrad · Web Developer · Hackathon Enthusiast
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
            >
              <Button asChild size="lg" className="btn-capsule">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="#contact">
                  Reach Out <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="relative h-64 w-64 md:h-80 md:w-80 justify-self-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <Image
              src="https://images.unsplash.com/photo-1655669832303-58be6a0e42ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB3aXRoJTIwcHVycGxlJTIwbGlnaHRpbmd8ZW58MHx8fHwxNzUyNDk1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Naga Sheshadri's profile picture"
              width={400}
              height={400}
              priority
              className="relative rounded-full object-cover border-4 border-primary/50 shadow-glow"
              data-ai-hint="profile picture"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
