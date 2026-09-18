'use client'; 

import React, { useState, useEffect } from 'react';
import { Section } from '@/app/lib/toc';

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    const handleScroll = () => {
      // Find the section that is currently closest to the top of the viewport
      const currentSection = sections.findLast(section => {
        const element = document.getElementById(section.id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        // The element is considered active if its top is at or above the 150px mark
        return rect.top <= 150;
      });
      setActiveId(currentSection ? currentSection.id : (sections[0]?.id || ''));
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <aside className="sticky top-24 self-start w-64 max-h-[calc(100vh-8rem)] overflow-y-auto p-5 rounded-xl shadow-xl
                      bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-white/10
                      hidden lg:block">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-white/10 pb-2">
        On This Page
      </h2>
      <ul className="space-y-1.5 text-sm">
        {sections.map((section) => (
          <li key={section.id} className={section.level === 'sub' ? 'ml-3' : ''}>
            <a
              href={`#${section.id}`}
              className={`block py-1 transition-colors leading-snug rounded px-1.5 ${
                activeId === section.id
                  ? 'text-green-600 dark:text-green-400 font-semibold bg-green-50/50 dark:bg-green-950/30'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/30'
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;