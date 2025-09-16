import Image from 'next/image';
import StarsBackground from '@/components/ui/StarsBackground';
import { gemunuLibre } from '@/components/ui/fonts';
import TableOfContents from '@/components/ui/TableOfContents'; // 1. IMPORT THE SIDEBAR

// 2. DEFINE THE DATA FOR THE TABLE OF CONTENTS
const sections = [
  { id: 'intro', title: 'Introduction', level: 'main' as const },
  { id: 'take-action', title: 'Take Action', level: 'main' as const },
  { id: 'take-action-energy-box', title: 'FREE Focus on Energy Box', level: 'sub' as const },
  { id: 'take-action-follow', title: 'Follow PlanetPatch', level: 'sub' as const },
  { id: 'take-action-credits', title: 'Renewable Energy Credits', level: 'sub' as const },
  { id: 'deeper-dive', title: 'A Deeper Dive', level: 'main' as const },
  { id: 'footer', title: 'Acknowledgments & Sources', level: 'main' as const },
];

export default function EnergyTracker() {
    return (
        <main className="relative overflow-hidden bg-gradient-to-b from-sky-500 to-slate-900 min-h-screen">
           <StarsBackground />
           {/* 3. CREATE THE TWO-COLUMN LAYOUT */}
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center gap-x-12">
              <TableOfContents sections={sections} />
              <article className="relative z-10 max-w-3xl my-16 bg-slate-900/30
                  rounded-lg shadow-xl backdrop-blur-sm border border-white/10 p-8">
                
                <div className="text-center mb-8">
                    <Image
                        src="/energy_tracker.png" 
                        alt="Energy Tracker Blog Header"
                        width={800}
                        height={400}
                        priority
                        className="rounded-lg shadow-lg"
                    />
                     <h1 className="text-4xl font-extrabold text-white mt-6 mb-4 leading-tight">
                        Energy Tracker
                    </h1>
                </div>

                {/* --- INTRODUCTION --- */}
                <section id="intro" className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                    <p className="text-xl text-slate-200 mb-6 font-semibold">
                        The Energy Tracker is created to show you exactly how much of your electricity is renewable vs. non-renewable.
                    </p>
                    <p className="text-base text-slate-300 mb-4">
                        The Energy Tracker is currently live and can be accessed by clicking the button below:
                    </p>
                    <a href='https://energy-tracker.planetpatch.dev'
                        target="_blank"
                        rel="noopener noreferrer"
                        className={` pixel-button-base text-green-700 ${gemunuLibre.className} bg-white w-full h-full mb-6 flex items-center rounded-sm justify-center text-2xl no-underline`} >
                        https://energy-tracker.planetpatch.dev
                    </a>
                </section>
        
                {/* --- TAKE ACTION --- */}
                <section id="take-action" className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">Take Action</h2>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        With that information, you can Take Action by ordering a <span className="font-bold text-green-400">FREE</span> Focus on Energy box, <span className="font-bold text-blue-400">following PlanetPatch</span> on Instagram, and learning about <span className="font-bold text-green-400">Renewable Energy Credits</span> that can push our utilities to adopt renewable energy faster! 🏎️
                    </p>
                    
                    <div id="take-action-energy-box" className="mb-6">
                      <h3 className="text-xl font-semibold text-slate-100 mb-2">FREE Focus on Energy Box</h3>
                      <p className="text-base text-slate-300">Focus on Energy is Wisconsin&apos;s statewide program for energy efficiency. They offer free kits with items like LED light bulbs, smart power strips, and efficient showerheads to help you save energy and money at home.</p>
                    </div>

                    <div id="take-action-follow" className="mb-6">
                      <h3 className="text-xl font-semibold text-slate-100 mb-2">Follow PlanetPatch</h3>
                      <p className="text-base text-slate-300">Stay up to date with our latest projects, learn more about local climate solutions, and join a community of people making a difference. Follow us on Instagram!</p>
                    </div>

                    <div id="take-action-credits" className="mb-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">Renewable Energy Credits</h3>
                                                  <div className="z-[1001]  ">
        <div className="flex justify-around items-center h-12 p-2 space-x-2 mt-6 ">
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
                
                      <p className="text-base text-slate-300">For a small amount on your monthly bill, you can purchase Renewable Energy Credits (RECs). This tells your utility to buy more power from renewable sources like wind and solar, directly supporting the growth of clean energy in our region.</p>

              
              </div>
              
                                 

              
                </section>

                {/* --- A DEEPER DIVE --- */}
                <section id="deeper-dive" className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">A Deeper Dive</h2>
                    <p className="text-base text-slate-300">This project was built to demystify our local energy grid. By combining publicly available data from the U.S. Energy Information Administration (EIA) with service territory maps from local utilities, we can visualize where our power comes from. The goal is to empower residents with knowledge, making the abstract concept of &quot;the grid&quot; tangible and local.</p>
                </section>

                {/* --- FOOTER --- */}
                <section id="footer">
                    <h2 className="text-2xl font-bold text-white mb-4">Acknowledgments & Sources</h2>
                    <p className="text-sm text-slate-400 italic mb-4">
                        Thank you to The City of Madison, United Way of Dane County, By Youth For Youth, and UW-Extension for your support in making climate resilience accessible!
                    </p>
                    <h4 className="text-md font-semibold text-slate-200 mb-2">Sources:</h4>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                        <li>U.S. Energy Information Administration (EIA)</li>
                        <li>Madison Gas & Electric (MGE)</li>
                        <li>Alliant Energy</li>
                    </ul>
                </section>
            </article>
           </div>
        </main>
    );
}