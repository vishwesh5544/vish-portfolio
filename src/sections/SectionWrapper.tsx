import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <section className={`w-full px-4 md:px-12 py-10`}>
      <div className={`max-w-screen-xl mx-auto ${className}`}>
        {children}
      </div>
    </section>
  );
}
