import { gemunuLibre } from "@/components/ui/fonts"
import ProgramCards from "./resources_components/ProgramCards"
import { mgePrograms,alliantPrograms,govtPrograms,floodingInfo } from "./resources_components/resources_programs"
import PageHero from "@/components/ui/PageHero"

export default function Resources() {
  return (
    <>
      <PageHero
        badge="TOOLS & GUIDES"
        title="Community Resources"
        description="Use these curated guides, tools, and statewide programs to start making an impact today."
      />
      

      <section className="py-8 md:py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 lg:px-8">

    
          <div id="renewables">
            <h2 className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-10 ${gemunuLibre.className}`}>
            Invest in Renewable Energy
            </h2>

            {/* Section for MGE */}
            <ProgramCards 
              programs={mgePrograms} 
              sectionTitle="Madison Gas and Electric (MG&E) Renewable Energy Offerings" 
            />

            {/* Visual separator */}
            <div className="my-12 md:my-16 border-t border-gray-200 dark:border-gray-700"></div>

            {/* Section for Alliant */}
            <ProgramCards 
              programs={alliantPrograms} 
              sectionTitle="Alliant Energy Renewable Energy Offerings" 
            />
            
            {/* Visual separator */}
            <div className="my-12 md:my-16 border-t border-gray-200 dark:border-gray-700"></div>

            {/* Section for Government Incentives */}
            <ProgramCards 
              programs={govtPrograms} 
              sectionTitle="City & State Renewable Energy Incentives" 
            />
          </div>
    
          {/* Visual separator */}
          <div className="my-12 md:my-16 border-t border-gray-200 dark:border-gray-700"></div>

          <div id="resilience">
            <h2 className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-10 ${gemunuLibre.className}`}>
            Build Your Climate Resilience 
            </h2>
            
            <ProgramCards programs={floodingInfo} sectionTitle="Flooding Prevention" />
          </div>
          
        </div>
      </section>
    </>
  )
}
