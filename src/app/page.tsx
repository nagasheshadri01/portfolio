import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Achievements from '@/components/sections/achievements';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import ScrollToTop from '@/components/ui/scroll-to-top';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
