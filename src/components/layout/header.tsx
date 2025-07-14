"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-background/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#hero" className="text-3xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Naga Sheshadri
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                {item.name}
              </Link>
            ))}
            <Button asChild className="btn-capsule !text-base !font-semibold py-2 px-6">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <nav className="flex flex-col items-center space-y-4 py-4 border-t border-border">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={toggleMenu} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                {item.name}
              </Link>
            ))}
            <Button asChild className="btn-capsule !text-base !font-semibold py-2 px-6" onClick={toggleMenu}>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
