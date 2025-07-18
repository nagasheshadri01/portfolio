
import { ProjectDetailed } from "@/components/sections/projects";
import { projects } from "@/lib/project-data";
import SectionWrapper from "@/components/ui/section-wrapper";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AllProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <SectionWrapper id="all-projects" className="bg-gradient-to-br from-[#1A0534] to-[#3D0C6B] !py-16 md:!py-24">
          <div className="text-center mb-12">
            <Link href="/#projects" className="inline-block mb-8">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4" style={{textShadow: '0 0 15px rgba(255,255,255,0.2)'}}>
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Here's a complete collection of my work.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <ProjectDetailed key={project.title} project={project} index={index} />
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
