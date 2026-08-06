"use client";

import React from 'react';
import { gemunuLibre } from "../ui/fonts";
import { Icon } from "@iconify/react";

interface PillarProps {
  title: string;
  badge: string;
  description: string;
  icon: string;
  staggerClass?: string;
}

const PillarCard: React.FC<PillarProps> = ({ title, badge, description, icon, staggerClass = "" }) => {
  return (
    <div className={`group transition-all duration-300 ${staggerClass}`}>
      {/* Conic / Gradient Border Wrapper with subtle glow */}
      <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 dark:from-green-500 dark:via-emerald-400 dark:to-cyan-400 shadow-md hover:shadow-xl dark:shadow-[0_0_30px_-5px_rgba(34,197,94,0.25)] transition-all duration-300">
        {/* Inner Card Surface */}
        <div className="
          relative overflow-hidden 
          bg-white dark:bg-slate-900/95 
          p-7 sm:p-8 md:p-9 
          rounded-[23px] 
          flex flex-col justify-between 
          min-h-[260px] md:min-h-[290px]
          transition-colors duration-300
        ">
          {/* Oversized Duotone Corner Icon */}
          <div className="absolute -top-3 -right-3 text-green-600/10 dark:text-green-400/15 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 pointer-events-none">
            <Icon icon={icon} width="120" height="120" />
          </div>

          <div className="relative z-10">
            {/* Category Pill Badge */}
            <div className="mb-4 flex items-center">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-green-100 text-green-800 dark:bg-green-950/80 dark:text-green-300 dark:border dark:border-green-800/60 shadow-xs">
                {badge}
              </span>
            </div>

            {/* Pillar Title */}
            <h3 className={`
              text-2xl md:text-3xl font-bold 
              text-slate-900 dark:text-slate-100 
              mb-3 leading-tight
              ${gemunuLibre.className}
            `}>
              {title}
            </h3>

            {/* Pillar Description */}
            <p className="
              text-sm sm:text-base 
              text-slate-600 dark:text-slate-300 
              leading-relaxed font-medium
            ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home_Approach = () => {
  const pillars: PillarProps[] = [
    {
      badge: "COMMUNITY",
      title: "Building with Community",
      description:
        "From creating indigenous flora rain gardens to hosting local workshops, we collaborate hands-on with Madison residents to build tangible, green infrastructure.",
      icon: "ph:users-three-duotone",
      staggerClass: "md:translate-y-0",
    },
    {
      badge: "KNOWLEDGE",
      title: "Empowering Through Knowledge",
      description:
        "We partner with local experts and researchers to transform complex climate data into clear, actionable insights for everyone.",
      icon: "ph:book-open-duotone",
      staggerClass: "md:translate-y-8 md:mt-2", // Staggered down to break horizontal symmetry
    },
    {
      badge: "TECHNOLOGY",
      title: "Actionable Technology Tools",
      description:
        "We design and build engaging software, like our Energy Tracker app, that empowers you to make small changes that lead to a big collective impact.",
      icon: "ph:cpu-duotone",
      staggerClass: "md:translate-y-0",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-slate-50 dark:bg-[#0c180e] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14 md:mb-20">
          <span className="text-xs font-extrabold uppercase tracking-widest text-green-700 dark:text-green-400 mb-2 block">
            Three Pillars of Impact
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight ${gemunuLibre.className}`}>
            Our Approach
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We create lasting change through three interconnected pillars of action:
          </p>
        </div>

        {/* Staggered Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-10 pb-6 md:pb-12">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              badge={pillar.badge}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              staggerClass={pillar.staggerClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home_Approach;
