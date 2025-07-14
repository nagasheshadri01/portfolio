"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
          <div className="text-center text-muted-foreground">
            {currentYear && <p>&copy; {currentYear} Naga Sheshadri. All rights reserved.</p>}
            <p>Built with ❤️ by Naga Sheshadri</p>
          </div>
          <div className="w-10 h-6 md:w-auto"></div>
        </div>
      </div>
    </footer>
  );
}
