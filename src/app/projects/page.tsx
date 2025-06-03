
import { gemunuLibre } from "@/components/ui/fonts";
// Image and Link are no longer directly used in this file's JSX for the grid
// import Image from "next/image";
// import Link from "next/link";
import { modernButtonBase, donateButtonStyles } from "@/components/ui/buttons";
import { projectPosts } from "../lib/InfoArrays"; // Ensure this path is correct

// Import the new component
import ProjectsDisplay from "./ProjectsDisplay"; // Adjust path to where you saved ProjectsDisplay.tsx

// export const getCategoryColor = (category: ProjectPost["category"]) => {
//   switch (category) {
//     case "Tech":
//       return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
//     case "Research":
//       return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
//     case "Community":
//       return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
//     case "Partnership":
//       return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
//     default:
//       return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
//   }
// };

export default function Projects() {
  return (
    <>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-slate-800 dark:to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1
              className={`text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 ${gemunuLibre.className}`}
            >
              Projects
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Stay informed about our latest projects!
            </p>
          </div>
        </div>
      </section>

      {/* Use the new ProjectsDisplay component */}
      <ProjectsDisplay
        posts={projectPosts}
        fontClassName={gemunuLibre.className}
        buttonBaseStyles={modernButtonBase}
        buttonSpecificStyles={donateButtonStyles}
      />


    </>
  );
}