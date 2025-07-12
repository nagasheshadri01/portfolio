"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


export default function About() {
  return (
    <SectionWrapper id="about" className="bg-card">
      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center md:text-left">
          <h2 className="text-4xl font-bold font-headline mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground mb-4">
            I'm a passionate second-year Computer Science student at MVGR College of Engineering. With a foundation from Greenwood and Crescent, I've embraced the world of coding with enthusiasm.
          </p>
          <p className="text-lg text-muted-foreground">
            I proudly call myself a "self-taught vibe-coded website builder", constantly exploring new technologies and building projects that are both functional and visually appealing. I thrive in collaborative environments and love tackling challenges in hackathons.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="relative h-80 w-80 mx-auto">
          <Image 
            src="https://placehold.co/600x600.png"
            alt="Abstract art representing technology"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-glow"
            data-ai-hint="abstract technology"
          />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
