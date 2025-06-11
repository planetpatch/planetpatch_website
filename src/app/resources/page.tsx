import { gemunuLibre } from "@/components/ui/fonts"
import ProgramCards from "./resources_components/ProgramCards"
import { mgePrograms,alliantPrograms,govtPrograms,floodingInfo } from "./resources_components/resources_programs"


export default function Updates() {
  return (
    <>
      {/* Hero Section - UPDATED with a background image */}
      <section 
        className="relative py-20 md:py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-slate-800 bg-opacity-60"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center">
            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-6 ${gemunuLibre.className}`}
            >
              Resources
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Use these resources to start making a difference today!
            </p>
          </div>
        </div>
      </section>
      

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

            {/* UPDATED: Added a visual separator */}
            <div className="my-12 md:my-16 border-t border-gray-200 dark:border-gray-700"></div>

            {/* Section for Alliant */}
            <ProgramCards 
              programs={alliantPrograms} 
              sectionTitle="Alliant Energy Renewable Energy Offerings" 
            />
            
            {/* UPDATED: Added a visual separator */}
            <div className="my-12 md:my-16 border-t border-gray-200 dark:border-gray-700"></div>

            {/* Section for Government Incentives */}
            <ProgramCards 
              programs={govtPrograms} 
              sectionTitle="City & State Renewable Energy Incentives" 
            />
          </div>
    
          {/* UPDATED: Added a visual separator */}
          <div className="my-12 md:my-16 border-t border-gray-200 dark:border-gray-700"></div>

          <div id="resilience">
            <h2 className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-10 ${gemunuLibre.className}`}>
            Build Your Climate Resilience 
            </h2>
            
            <ProgramCards programs={floodingInfo} sectionTitle="Flooding Prevention" />
          </div>
          
        </div>
      </section>

      {/* REMOVED: The "Stay Updated" newsletter signup section has been deleted. */}
    </>
  )
}
