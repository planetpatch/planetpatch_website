// components/ProjectsDisplay.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProjectPost } from '../lib/InfoArrays';

interface ProjectsDisplayProps {
  posts: ProjectPost[];
  fontClassName: string;
  buttonBaseStyles: string;
  buttonSpecificStyles: string;
}

const ProjectsDisplay: React.FC<ProjectsDisplayProps> = ({
  posts,
  fontClassName,
  buttonBaseStyles,
  buttonSpecificStyles,
}) => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              // 1. Add `relative` to make this the positioning anchor
              className="relative bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* 2. Add extra bottom padding `pb-20` to prevent text from overlapping the button */}
              <div className="p-6 pb-20 flex-grow flex flex-col">
                <h2
                  className={`text-xl font-bold text-slate-800 dark:text-white mb-3 leading-tight hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer ${fontClassName}`}
                >
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              {/* 3. Position the button */}
              <Link
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                // Use absolute positioning relative to the article
                className={`${buttonBaseStyles.trim()} ${buttonSpecificStyles.trim()} absolute bottom-6 left-6 text-center`}
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDisplay;