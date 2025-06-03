// components/ProjectsDisplay.tsx (or wherever you've placed it)
import React from 'react';
import Image from 'next/image'; // Import Image
import Link from 'next/link';   // Import Link
import type { ProjectPost } from '../lib/InfoArrays'; // Import the type

// Define the props interface
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
    <>
      {/* Projects Grid */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => ( // Use the 'posts' prop
              <article
                key={post.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"} // Assuming placeholder.svg is in public
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes prop
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
       

                </div>

                <div className="p-6">
                  {/* Title */}
                  <h2
                    className={`text-xl font-bold text-slate-800 dark:text-white mb-3 leading-tight hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer ${fontClassName}`}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{post.excerpt}</p>

                  {/* Read More Link */}
                  <Link
                    href={post.href}
                    target="_blank" // Keep if links are external
                    rel="noopener noreferrer" // Keep for external links
                    className={`${buttonBaseStyles.trim()} ${buttonSpecificStyles.trim()} mt-auto self-start text-center w-full sm:w-auto`} 
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsDisplay;