// components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import { gemunuLibre } from '../ui/fonts';


// Button styles for Hero section (can be adapted from Navbar's modernButtonBase)
// Adding back transform and scale for a modern feel, adjust as needed.
const heroButtonBase = `
  px-6 py-3 text-xl font-bold rounded-md shadow-md 
  transform transition-all duration-200 ease-in-out 
  hover:scale-[1.03] hover:shadow-lg 
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
`;
// Note: The green glow from navbar buttons is not included here by default,
// but can be added if you want visual consistency in that aspect.

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
      <div className="container mx-auto flex flex-col items-center text-center md:text-left">
        {/* Top Section: Headline and Image */}
        <div className="flex flex-col md:flex-row items-center justify-around w-full mb-12 md:mb-16 lg:mb-20">
          {/* Headline */}
          <div className="md:w-1/2 lg:w-2/5 mb-10 md:mb-0 md:pr-8">
            <h1 
              className={`
                font-gemunu text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
                font-bold text-green-800 dark:text-slate-100 
                leading-tight ${gemunuLibre.className} 
              `}
              // Using text-slate-800 for better contrast on white/light blue gradient
            >
              Crafting Climate Resilience
            </h1>
          </div>

          {/* Globe Image */}
          <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-start">
            {/* Replace with your actual globe image path and alt text */}
            <Image
              src="/home_assets/hero_image.png" // Example path - make sure this image exists in your public/images folder
              alt="Globe representing climate action"
              width={400} // Adjust width as needed
              height={400} // Adjust height as needed
              className="object-contain" // Ensures the image scales nicely
            />
          </div>
        </div>

        {/* Bottom Section: CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <Link
            href="/how-can-i-help" // Update with actual link
            className={`${heroButtonBase.trim()} ${gemunuLibre.className}  ${primaryHeroButtonStyles}`}
          >
            START CRAFTING
          </Link>
          <Link
            href="/energy-tracker" // Update with actual link
            className={`${heroButtonBase.trim()} ${gemunuLibre.className}  ${secondaryHeroButtonStyles}`}
          >
            ENERGY TRACKER
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
