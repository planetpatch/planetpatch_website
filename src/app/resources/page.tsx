import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { gemunuLibre } from "@/components/ui/fonts"
import ProgramCards from "./resources_components/ProgramCards"
import { mgePrograms,alliantPrograms,govtPrograms,floodingInfo } from "./resources_components/resources_programs"


export default function Updates() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-slate-800 dark:to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1
              className={`text-4xl md:text-6xl font-bold text-green-800 dark:text-white mb-6 ${gemunuLibre.className}`}
            >
              Resources
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Use these resources to start making a difference today!
            </p>
          </div>
        </div>
      </section>
      

      <section className="py-8 md:py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 lg:px-8">

    
          <div id="renewables">
          <h2 className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2 ${gemunuLibre.className}`}>
          Invest in Renewable Energy
          </h2>


          <ProgramCards 
        programs={mgePrograms} 
        sectionTitle="Madison Gas and Electric (MG&E) Renewable Energy Offerings" 
      />

          <ProgramCards 
        programs={alliantPrograms} 
        sectionTitle="Alliant Energy Renewable Energy Offerings" 
      />

<ProgramCards 
        programs={govtPrograms} 
        sectionTitle="City & State Renewable Energy Incentives" 
      />
</div>
    

          <div id="resilience">
          
          <h2 className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2 ${gemunuLibre.className}`}>
          Build Your Climate Resilience 
            </h2>
            
            <ProgramCards programs={floodingInfo} sectionTitle="Flooding Prevention" />
          </div>


          

          

    


          

          
          </div>


      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-50 dark:bg-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 ${gemunuLibre.className}`}>
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates on climate resilience initiatives and community
            impact stories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
