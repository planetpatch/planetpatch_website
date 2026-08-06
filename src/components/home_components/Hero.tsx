"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gemunuLibre } from '../ui/fonts';
import Logo from '../navigation/navbar/Logo';
import { Icon } from "@iconify/react";

const sliderItems = [
  {
    title: "Community Eco-Practices",
    description: "With a focus on innovation and eco-friendly practices, we strive to lead the way in community climate resilience.",
  },
  {
    title: "Rain Garden Systems",
    description: "Designing native rain gardens that manage stormwater runoff, reduce urban flooding, and restore biodiversity.",
  },
  {
    title: "Energy & Carbon Tracking",
    description: "Deploying accessible digital tools to help households monitor, optimize, and reduce energy consumption.",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
  };

  return (
    <section className="relative w-full py-8 md:py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-[#0c180e] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          
          {/* Card 1: Main Welcome & Headline Card (Top-Left: 7 cols) */}
          <div className="md:col-span-7 bg-[#c5f874] dark:bg-[#16331c] text-slate-900 dark:text-slate-100 rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group min-h-[380px] sm:min-h-[420px]">
            {/* Background Topography Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] dark:bg-[radial-gradient(#86efac_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Card Header: Logo & Badge */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <Logo />
              <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-slate-900/10 dark:bg-green-400/20 text-slate-800 dark:text-green-300 backdrop-blur-sm">
                Climate Resilience
              </span>
            </div>

            {/* Main Headline & Intro */}
            <div className="relative z-10 my-6 sm:my-8">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight ${gemunuLibre.className}`}>
                Welcome to Clean Energy & Resilience
              </h1>
              <p className="mt-4 text-base sm:text-lg font-medium opacity-90 max-w-xl">
                Powering the Future, Sustainably. Enabling everyday people to take small, actionable steps to build community climate resilience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/donate"
                className="px-7 py-3.5 rounded-full text-sm sm:text-base font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-green-500 dark:text-slate-950 dark:hover:bg-green-400 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider"
              >
                DONATE NOW
              </Link>
              <Link
                href="/projects"
                className="px-7 py-3.5 rounded-full text-sm sm:text-base font-bold bg-white/80 hover:bg-white text-slate-900 dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider border border-slate-900/10 dark:border-slate-700"
              >
                OUR PROJECTS
              </Link>
            </div>
          </div>

          {/* Card 2: Main Featured Hero Image Card (Top-Right: 5 cols) */}
          <div className="md:col-span-5 relative rounded-3xl overflow-hidden shadow-sm group min-h-[300px] sm:min-h-[360px] md:min-h-[420px] bg-slate-200 dark:bg-slate-800">
            <Image
              src="/home_assets/clean_energy_hero.png"
              alt="Clean Energy Wind and Solar Solutions"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            {/* Subtle Gradient Overlay & Badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white">
                <span className="inline-block px-3 py-1 bg-green-500/90 text-slate-950 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                  Featured Initiative
                </span>
                <h3 className={`text-2xl sm:text-3xl font-bold ${gemunuLibre.className}`}>
                  Renewable Energy Landscapes
                </h3>
              </div>
            </div>
          </div>

          {/* Card 3: Secondary Feature Image Card (Bottom-Left: 4 cols) */}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden shadow-sm group min-h-[220px] sm:min-h-[240px] bg-slate-200 dark:bg-slate-800">
            <Image
              src="/rain-garden.jpg"
              alt="Rain Garden Community Project"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full mb-1">
                  Local Impact
                </span>
                <h4 className={`text-xl font-bold text-white ${gemunuLibre.className}`}>
                  Rain Garden Systems
                </h4>
              </div>
            </div>
          </div>

          {/* Card 4: Interactive Mission & Highlights Card (Bottom-Middle: 5 cols) */}
          <div className="md:col-span-5 bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                  {sliderItems[activeSlide].title}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  0{activeSlide + 1} / 0{sliderItems.length}
                </span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                {sliderItems[activeSlide].description}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="/about"
                className="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-1.5"
              >
                Learn About Our Mission
                <Icon icon="heroicons:arrow-right-16-solid" width="16" height="16" />
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors focus:outline-none"
                >
                  <Icon icon="heroicons:chevron-left-16-solid" width="18" height="18" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors focus:outline-none"
                >
                  <Icon icon="heroicons:chevron-right-16-solid" width="18" height="18" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 5: Community Stat & Callout Card (Bottom-Right: 3 cols) */}
          <div className="md:col-span-3 bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Community Driven
              </span>
              <div className="my-3">
                <span className={`text-4xl sm:text-5xl font-extrabold text-green-700 dark:text-green-400 tracking-tight ${gemunuLibre.className}`}>
                  100%
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 leading-snug">
                Actionable solutions building local climate resilience.
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="/updates"
                className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400 hover:underline flex items-center justify-between"
              >
                <span>SEE STATISTICS</span>
                <Icon icon="heroicons:arrow-up-right-16-solid" width="16" height="16" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
