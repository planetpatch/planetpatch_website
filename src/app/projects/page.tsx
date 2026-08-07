import { gemunuLibre } from "@/components/ui/fonts";
import { modernButtonBase, donateButtonStyles } from "@/components/ui/buttons";
import { projectPosts } from "../lib/InfoArrays";
import ProjectsDisplay from "./ProjectsDisplay";
import PageHero from "@/components/ui/PageHero";

export default function Projects() {
  return (
    <>
      <PageHero
        badge="OUR WORK"
        title="Our Projects"
        description="Explore our community-driven initiatives built to democratize climate action."
      />
      <main className="bg-white dark:bg-slate-900">

      {/* New: Projects Section Title moved from About_Main */}
      {/* <div className="container mx-auto px-6 lg:px-8 pt-16 md:pt-20">
        <h2
          // Adjusted text color to a more prominent green for better blending
          className={`text-3xl md:text-4xl font-bold text-green-700 dark:text-green-300 mb-10 md:mb-12 text-left ${gemunuLibre.className}`}
        >
          Our Projects
        </h2>
      </div> */}

      {/* Use the new ProjectsDisplay component */}
      <ProjectsDisplay
        posts={projectPosts}
        fontClassName={gemunuLibre.className}
        buttonBaseStyles={modernButtonBase}
        buttonSpecificStyles={donateButtonStyles}
      />
    </main>
    </>
  );
}