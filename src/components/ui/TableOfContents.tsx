'use client'; 

import React, { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
  level: 'main' | 'sub';
}

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Find the section that is currently closest to the top of the viewport
      const currentSection = sections.findLast(section => {
        const element = document.getElementById(section.id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        // The element is considered active if its top is at or above the 150px mark
        return rect.top <= 150;
      });
      setActiveId(currentSection ? currentSection.id : '');
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    // These CSS classes are the key to making the component "follow" you.
    // 'sticky' tells it to scroll until it hits the 'top-24' position, then stick.
    // 'self-start' is crucial in a flex layout to allow sticky positioning.
    <aside className="sticky top-24 self-start w-64 p-4 rounded-lg shadow-xl
                      bg-slate-900/30 backdrop-blur-sm border border-white/10
                      hidden lg:block">
      <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
        On This Page
      </h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id} className={section.level === 'sub' ? 'ml-4' : ''}>
            <a
              href={`#${section.id}`}
              className={`transition-colors text-sm ${
                activeId === section.id
                  ? 'text-white font-bold' // Style for the active link
                  : 'text-slate-300 hover:text-white' // Default style
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