"use client";

import React from 'react';
import { gemunuLibre } from "./fonts";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

const PageHero: React.FC<PageHeroProps> = ({ badge, title, description }) => {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-[#0c180e] transition-colors duration-300 overflow-hidden text-center">
      {/* Ambient background glow overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent dark:from-green-600/20 dark:via-transparent dark:to-transparent"></div>

      {/* Topography pattern overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] dark:bg-[radial-gradient(#86efac_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Category Badge */}
        <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-green-100 text-green-800 dark:bg-green-950/80 dark:text-green-300 dark:border dark:border-green-800/60 shadow-xs mb-4">
          {badge}
        </span>

        {/* Title */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-4 ${gemunuLibre.className}`}>
          {title}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
