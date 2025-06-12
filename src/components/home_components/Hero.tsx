"use client";

// components/Hero.tsx
import Image from 'next/image'; // Import the Image component
import Link from 'next/link';
import { gemunuLibre } from '../ui/fonts';
import styles from '@/app/styles/stars.module.css'; // Import the new CSS module

// Button styles for Hero section
const heroButtonBase = `
  px-6 py-3 text-xl font-bold rounded-md shadow-md 
  transform transition-all duration-200 ease-in-out 
  hover:scale-[1.03] hover:shadow-lg 
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
`;

const primaryHeroButtonStyles = `
bg-green-600 border border-green-600  text-white
hover:text-green-600 hover:bg-white
focus-visible:ring-green-500`;

const secondaryHeroButtonStyles = `bg-white text-green-600 
border border-green-600
hover:border-green-600
focus-visible:ring-green-500`;

const Hero = () => {
  return (
    // Add 'relative' and 'overflow-hidden' to contain the stars
    <section
      className={`
        relative overflow-hidden
        min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-9rem)]
        flex flex-col justify-center items-center
        py-16 md:py-24 px-6
        /* Changed 'from-white' to 'from-sky-200' for a smoother blue fade in light mode */
        bg-gradient-to-b from-sky-200 to-sky-700
        dark:bg-gradient-to-b dark:from-slate-900 dark:to-sky-900
        ${gemunuLibre.variable} font-sans
      `}
    >
      {/* Container for the pure CSS stars using the imported styles */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Existing star layers */}
        <div className={styles.stars1}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
        {/* Additional star layers for more density */}
        <div className={styles.stars4}></div>
        <div className={styles.stars5}></div>
        <div className={styles.stars6}></div>
      </div>

      {/* Main content, needs 'relative' and 'z-10' to be on top of the stars */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
        <div className="w-full max-w-5xl mb-12 md:mb-16 lg:mb-20">
          
          {/* Flex container to hold the logo and headline */}
          <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
            <Image
              src="/home_assets/hero_image.png" 
              alt="PlanetPatch Logo"
              width={500} // Adjust size as needed
              height={500}
              className="w-16 h-16 md:w-20 md:h-20" // Responsive sizing
            />
            <h1
              className={`
                font-gemunu text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                font-bold text-green-800 dark:text-slate-100
                leading-tight ${gemunuLibre.className}
              `}
            >
              Crafting Climate Resilience
            </h1>
          </div>

          <p className="mt-4 text-lg md:text-xl text-slate-800 dark:text-slate-200 max-w-3xl mx-auto">
            Drive everyday people to take small, actionable steps to build climate resilience through engaging software
          </p>
        </div>
        <div className="mt-6 px-6 py-4 rounded-xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm shadow-md flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
  <Link
    href="/donate"
    className={`${heroButtonBase.trim()} ${gemunuLibre.className} ${primaryHeroButtonStyles}`}
  >
    DONATE
  </Link>
  <Link
    href="/projects"
    className={`${heroButtonBase.trim()} ${gemunuLibre.className} ${secondaryHeroButtonStyles}`}
  >
    OUR PROJECTS
  </Link>
</div>
      </div>
    </section>
  );
};

export default Hero;
