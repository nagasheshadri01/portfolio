"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Top 10 Finalist",
    description: "Achieved a top 10 position in my very first hackathon, competing against 100+ teams.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Best UI/UX Design",
    description: "Awarded for creating the most intuitive and visually appealing interface at a university-level design contest.",
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: "Project of the Month",
    description: "My 'Student Companion' app was featured as the project of the month on a popular dev platform.",
  },
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

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-headline mb-4">My Achievements</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          A few milestones from my journey in tech and design.
        </p>
      </div>
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {achievements.map((achievement, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-card border-2 border-transparent hover:border-primary hover:shadow-glow transition-all duration-300 h-full text-center">
              <CardHeader className="items-center">
                <div className="p-4 bg-card rounded-full mb-4">
                  {achievement.icon}
                </div>
                <CardTitle className="font-headline">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
