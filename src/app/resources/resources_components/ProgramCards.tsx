import Link from 'next/link';
import { gemunuLibre } from "@/components/ui/fonts"; // Assuming this is your font import path
import { modernButtonBase,donateButtonStyles } from '@/components/ui/buttons';
// --- Define the structure for a single program ---
interface Program {
  id: number | string; // Allow string for ID if needed, e.g., from a CMS
  title: string;
  description: string;
  href: string;
  linkText: string;
}

// --- Define the props for the ProgramCards component ---
interface ProgramCardsProps {
  programs: Program[];
  sectionTitle?: string; // Optional title for the whole section
}

const ProgramCards: React.FC<ProgramCardsProps> = ({ programs, sectionTitle }) => {
    return (
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Optional: Title for the section, now passed as a prop */}
        {sectionTitle && (

                
                <h3 className={`text-3xl md:text-3xl font-bold text-green-800 dark:text-green-400 mb-5 ${gemunuLibre.className}`}>
                {sectionTitle}
              </h3>
                
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Map over the 'programs' prop instead of a hardcoded array */}
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <h3 className={`text-2xl font-bold text-green-700 dark:text-green-500 mb-4 ${gemunuLibre.className}`}>
                {program.title}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                {program.description}
              </p>
              <Link
                href={program.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${modernButtonBase.trim()} ${donateButtonStyles.trim()} mt-auto self-start text-center w-full sm:w-auto`}
              >
                {program.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProgramCards;