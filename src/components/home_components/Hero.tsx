// components/Hero.tsx
import Link from 'next/link';
import { gemunuLibre } from '../ui/fonts';




// Button styles for Hero section (can be adapted from Navbar's modernButtonBase)
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
focus-visible:ring-green-500`


const Hero = () => {
  return (
    <section
      className={`
        min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-9rem)] /* Adjust based on actual navbar height */
        flex flex-col justify-center items-center
        py-16 md:py-24 px-6
        bg-gradient-to-b from-white to-sky-700
        dark:from-gray-900 dark:to-sky-900
        ${gemunuLibre.variable} font-sans
      `}
    >
      <div className="container mx-auto flex flex-col items-center text-center">


        {/* Main content wrapper with spacing */}
        <div className="w-full max-w-4xl mb-12 md:mb-16 lg:mb-20">


         
          <h1
            className={`
              font-gemunu text-5xl sm:text-6xl md:text-7xl lg:text-8xl /* Reverted to larger font sizes */
              font-bold text-green-800 dark:text-slate-100
              leading-tight text-center ${gemunuLibre.className}
            `}
          >
            Crafting Climate Resilience
          </h1>
         
          <p className="mt-4 text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto"> {/* Reverted to larger font sizes */}
            Drive everyday people to take small, actionable steps to build climate resilience through engaging software
          </p>


        </div>


        {/* Bottom Section: CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <Link
            href="/donate"
            className={`${heroButtonBase.trim()} ${gemunuLibre.className}  ${primaryHeroButtonStyles}`}
          >
            DONATE
          </Link>
          <Link
            href="/projects"
            className={`${heroButtonBase.trim()} ${gemunuLibre.className}  ${secondaryHeroButtonStyles}`}
          >
            OUR PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
};


export default Hero;


