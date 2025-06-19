import { gemunuLibre } from "@/components/ui/fonts";
// Image and Link are no longer directly used in this file's JSX for the grid
// import Image from "next/image";
// import Link from "next/link";
import { modernButtonBase, donateButtonStyles } from "@/components/ui/buttons";
import { projectPosts } from "../lib/InfoArrays"; // Ensure this path is correct

// Import the new component
import ProjectsDisplay from "./ProjectsDisplay"; // Adjust path to where you saved ProjectsDisplay.tsx

// export const getCategoryColor = (category: ProjectPost["category"]) => {
//   switch (category) {
//     case "Tech":
//       return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
//     case "Research":
//       return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
//     case "Community":
//       return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
//     case "Partnership":
//       return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
//     default:
//       return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
//   }
// };

export default function Projects() {
  return (
    <main className="bg-white dark:bg-slate-900">
      {/* Hero Section */}
      {/* Updated to match the green background image and overlay from the About page */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        {/* Green overlay with opacity */}
        <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1
            // Increased margin-bottom to create more separation
            className={`text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 ${gemunuLibre.className}`}
          >
            Projects
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Stay informed about our latest projects!
          </p>
        </div>
      </section>

      {/* New: Projects Section Title moved from About_Main */}
      <div className="container mx-auto px-6 lg:px-8 pt-16 md:pt-20">
        <h2
          // Adjusted text color to a more prominent green for better blending
          className={`text-3xl md:text-4xl font-bold text-green-700 dark:text-green-300 mb-10 md:mb-12 text-left ${gemunuLibre.className}`}
        >
          Our Projects
        </h2>
      </div>

      {/* Use the new ProjectsDisplay component */}
      <ProjectsDisplay
        posts={projectPosts}
        fontClassName={gemunuLibre.className}
        buttonBaseStyles={modernButtonBase}
        buttonSpecificStyles={donateButtonStyles}
      />
    </main>
  );
}