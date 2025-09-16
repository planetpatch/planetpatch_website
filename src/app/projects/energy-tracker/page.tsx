import Image from 'next/image';
import StarsBackground from '@/components/ui/StarsBackground';
import { gemunuLibre } from '@/components/ui/fonts';
import CollapsibleSection from '../project_components/CollapsibleSection';



export default function EnergyTracker() {
    return (
        <main className="relative overflow-hidden bg-gradient-to-b from-sky-500 to-slate-900 dark:bg-gradient-to-b dark:from-slate-900 dark:to-sky-900 min-h-screen">
           <StarsBackground />
        <article className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 
        max-w-3xl my-16 bg-slate-900/30 dark:bg-slate-900/30 
 rounded-lg shadow-xl backdrop-blur-sm border border-white/10">
                
                {/* --- (STATIC) TITLE SECTION --- */}
                <div className="mb-8 text-center">
                    <Image
                        src="/energy_tracker.png" 
                        alt="Energy Tracker Blog Header"
                        width={800}
                        height={400}
                        priority // Prioritize loading the main image
                        className="rounded-lg shadow-lg"
                    />
                     <h1 className="text-4xl font-extrabold text-white mt-6 mb-4 leading-tight">
                        Energy Tracker
                    </h1>
                </div>

                {/* --- INTRODUCTION --- */}
              
                    <h2 className="text-xl text-slate-200 mb-6 font-semibold">
                        The Energy Tracker is created to show you exactly how much of your electricity is renewable vs. non-renewable.
          </h2>
           <p className="text-base text-slate-300 mb-4">
                        The Energy Tracker is currently live and can be accessed by clicking the button below:
                    </p>
                    <a href='https://energy-tracker.planetpatch.dev'
                        target="_blank"
                        rel="noopener noreferrer"
              className={` pixel-button-base text-green-700 ${gemunuLibre.className}
                         bg-white w-full h-full mb-6 flex items-center rounded-sm justify-center text-2xl no-underline`} >
                        https://energy-tracker.planetpatch.dev
                    </a>
        
                    <h3 className="text-lg text-slate-300 mb-8 leading-relaxed">
              With that information, you can Take Action by ordering a
              <span className="font-bold text-green-400">FREE</span> Focus on Energy box to make your home more energy efficient. You can also
              <span className="font-bold text-blue-400">Follow PlanetPatch</span> on Instagram and learn about
              <span className="font-bold text-green-400">Renewable Energy Credits </span> that can push our utilities to adopt renewable energy faster! 🏎️
              Finally, you can learn more about how PlanetPatch put together this application and how our energy system works at a larger scale.
                    </h3>
                   

          {/* --- TAKE ACTION --- */}

          <CollapsibleSection id="take-action" title="Take Action">
                      This section gives more information on how our Take Action items lead to better climate outcomes for our communities!
            <CollapsibleSection id="take-action-energy-box" title="FREE Focus on Energy Box" level="sub" defaultOpen={false}>
              
              <p>Focus on Energy is Wisconsin&apos;s statewide program for energy efficiency.
                They offer free kits with items like LED light bulbs, smart power strips, and efficient showerheads to
                help you save energy and money at home.
              </p>
                    </CollapsibleSection>
                    <CollapsibleSection id="take-action-follow" title="Follow PlanetPatch" level="sub" defaultOpen={false}>
              <p>Stay up to date with our latest projects, learn more about local climate solutions, and join a community of people
                making a difference. Follow us on Instagram!</p>
                    </CollapsibleSection>
                    <CollapsibleSection id="take-action-credits" title="Renewable Energy Credits" level="sub" defaultOpen={false}>
              <p>For a small amount on your monthly bill, you can purchase Renewable Energy Credits (RECs). This tells your
                utility to buy more power from renewable sources like wind and solar, directly supporting the growth of clean energy in our region.</p>
                    <div className="z-[1001]  ">
        <div className="flex justify-around items-center h-12 p-2 space-x-2">
                              <a href='https://energy-tracker.planetpatch.dev'
                        target="_blank"
                        rel="noopener noreferrer"
              className={` pixel-button-base text-green-700 ${gemunuLibre.className}
                         bg-white w-full h-full mb-6 flex items-center rounded-sm justify-center text-2xl no-underline`} >
            MGE Renewable Credits
          </a>
                             <a href='https://energy-tracker.planetpatch.dev'
                        target="_blank"
                        rel="noopener noreferrer"
              className={` pixel-button-base text-green-700 ${gemunuLibre.className}
                         bg-white w-full h-full mb-6 flex items-center rounded-sm justify-center text-2xl no-underline`} >
            Alliant Renewable Credits
          </a>
        </div>
      </div>
                    </CollapsibleSection>
                    {/* <CollapsibleSection id="take-action-learn-more" title="Learn More" level="sub" defaultOpen={false}>
                        <p>Dive into the data behind this project, understand the complexities of our energy grid, and explore the steps we can take together to build a more sustainable and resilient future for Dane County.</p>
                    </CollapsibleSection> */}
                </CollapsibleSection>

                {/* --- A DEEPER DIVE --- */}
                <CollapsibleSection id="deeper-dive" title="A Deeper Dive">
            <p>This project was built to demystify our local energy grid. By combining publicly available data from the U.S.
              Energy Information Administration (EIA) with service territory maps from local utilities, we can visualize where our power comes from.
              The goal is to empower residents with knowledge, making the abstract concept of &quot;the grid&quot; tangible and local.</p>
                </CollapsibleSection>

                {/* --- FOOTER --- */}
                <CollapsibleSection id="footer" title="Acknowledgments & Sources">
                    <p className="text-sm text-slate-400 italic mb-4">
              Thank you to The City of Madison, United Way of Dane County, By Youth For Youth, and UW-Extension
              for your support in making climate resilience accessible!
                    </p>
                    <h4 className="text-md font-semibold text-slate-200 mb-2">Sources:</h4>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                        <li>U.S. Energy Information Administration (EIA)</li>
                        <li>Madison Gas & Electric (MGE)</li>
                        <li>Alliant Energy</li>
                    </ul>
                </CollapsibleSection>
      </article>
        </main>
    );
}