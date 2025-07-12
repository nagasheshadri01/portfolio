import { cn } from "@/lib/utils";
import React from "react";

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ id, children, className }: SectionWrapperProps) => {
  return (
    <section id={id} className={cn("w-full py-20 lg:py-28 overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
