import React from 'react';

// Define the structure for a single section link, including its level
interface Section {
  id: string;
  title: string;
  level: 'main' | 'sub';
}

// The component will receive an array of these section objects as a prop
interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  return (
    // The 'sticky' class keeps the sidebar in view while scrolling.
    // It's hidden on smaller screens and appears on large (lg) screens.
    <aside className="sticky top-24 self-start w-64 p-4 rounded-lg shadow-xl
                      bg-slate-900/30 backdrop-blur-sm border border-white/10
                      hidden lg:block">
      <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
        On This Page
      </h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          // Apply a left margin to subsections for a clear visual hierarchy
          <li key={section.id} className={section.level === 'sub' ? 'ml-4' : ''}>
            <a
              href={`#${section.id}`}
              className="text-slate-300 hover:text-white transition-colors text-sm"
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