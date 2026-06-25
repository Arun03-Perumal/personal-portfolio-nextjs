import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function SectionContainer({
  id,
  className = "",
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}