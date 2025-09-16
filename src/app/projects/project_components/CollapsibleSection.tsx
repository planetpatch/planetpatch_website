// src/components/ui/CollapsibleSection.tsx
'use client';

import React, { useState, ReactNode } from 'react';

interface CollapsibleSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  level?: 'main' | 'sub'; // New prop for styling
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  id, 
  title, 
  children, 
  defaultOpen = true,
  level = 'main' // Default to main section styling
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Determine title styling based on the level
  const TitleTag = level === 'main' ? 'h2' : 'h3';
  const titleClasses = level === 'main' 
    ? "text-2xl font-bold text-white" 
    : "text-xl font-semibold text-slate-100";

  return (
    <section id={id} className="border-b border-white/10 py-4 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
      >
        <TitleTag className={titleClasses}>{title}</TitleTag>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-6 h-6 text-slate-300 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen && (
        <div id={`content-${id}`} className="mt-4 text-slate-300 leading-relaxed space-y-4">
          {children}
        </div>
      )}
    </section>
  );
};

export default CollapsibleSection;