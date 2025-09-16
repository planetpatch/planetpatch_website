import Image from 'next/image';
import StarsBackground from '@/components/ui/StarsBackground';
import { gemunuLibre } from '@/components/ui/fonts';
import TableOfContents from '@/components/ui/TableOfContents';

// 1. UPDATED a-DATA FOR THE TABLE OF CONTENTS
const sections = [
  { id: 'intro', title: 'Introduction', level: 'main' as const },
  { id: 'take-action', title: 'Take Action', level: 'main' as const },
  { id: 'take-action-energy-box', title: 'FREE Focus on Energy Box', level: 'sub' as const },
  { id: 'take-action-follow', title: 'Follow PlanetPatch', level: 'sub' as const },
  { id: 'take-action-credits', title: 'Renewable Energy Credits', level: 'sub' as const },
  { id: 'deeper-dive', title: 'A Deeper Dive', level: 'main' as const },
  { id: 'deeper-dive-miso', title: "The Grid's Grand Conductor: MISO", level: 'sub' as const },
  { id: 'deeper-dive-psc', title: 'The Rulebook Writers: Wisconsin\'s PSC', level: 'sub' as const },
  { id: 'deeper-dive-utilities', title: 'Your Home Team: The Utilities', level: 'sub' as const },
  { id: 'deeper-dive-future', title: 'Tying It All Together for a Greener Future', level: 'sub' as const },
  { id: 'footer', title: 'Acknowledgments & Sources', level: 'main' as const },
];

export default function EnergyTracker() {
    return (
        <main className="relative bg-gradient-to-b from-sky-500 to-slate-900 min-h-screen">
           <StarsBackground />
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
                <section id="intro" className="mb-10 scroll-mt-24">
                    <h2 className={`text-3xl font-bold text-white mb-4 ${gemunuLibre.className}`}>Introduction</h2>
                    <p className="text-xl text-slate-200 mb-6 font-semibold">
                        The Energy Tracker is created to show you exactly how much of your electricity is renewable vs. non-renewable.
                    </p>
                    <a href='https://energy-tracker.planetpatch.dev'
                        target="_blank"
                        rel="noopener noreferrer"
                        className={` pixel-button-base text-green-700 ${gemunuLibre.className} bg-white w-full h-full mb-6 flex items-center rounded-sm justify-center text-2xl no-underline`} >
                        Go to the Energy Tracker
                    </a>
                </section>
        
                {/* --- TAKE ACTION --- */}
                <section id="take-action" className="mb-10 scroll-mt-24">
                    <h2 className={`text-3xl font-bold text-white mb-4 ${gemunuLibre.className}`}>Take Action</h2>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        With that information, you can Take Action by ordering a <span className="font-bold text-green-400">FREE</span> Focus on Energy box, <span className="font-bold text-blue-400">following PlanetPatch</span> on Instagram, and learning about <span className="font-bold text-green-400">Renewable Energy Credits</span> that can push our utilities to adopt renewable energy faster! 🏎️
                    </p>
                    
                    <div id="take-action-energy-box" className="mb-6 scroll-mt-24">
                      <h3 className="text-xl font-semibold text-slate-100 mb-2">FREE Focus on Energy Box</h3>
                      <p className="text-base text-slate-300">Focus on Energy is Wisconsin&apos;s statewide program for energy efficiency. They offer free kits with items like LED light bulbs, smart power strips, and efficient showerheads to help you save energy and money at home.</p>
                    </div>

                    <div id="take-action-follow" className="mb-6 scroll-mt-24">
                      <h3 className="text-xl font-semibold text-slate-100 mb-2">Follow PlanetPatch</h3>
                      <p className="text-base text-slate-300">Stay up to date with our latest projects, learn more about local climate solutions, and join a community of people making a difference. Follow us on Instagram!</p>
                    </div>

                    <div id="take-action-credits" className="mb-6 scroll-mt-24">
                        <h3 className="text-xl font-semibold text-slate-100 mb-2">Renewable Energy Credits</h3>
                        <p className="text-base text-slate-300 mb-4">For a small amount on your monthly bill, you can purchase Renewable Energy Credits (RECs). This tells your utility to buy more power from renewable sources like wind and solar, directly supporting the growth of clean energy in our region.</p>
                        <div className="flex flex-col sm:flex-row justify-around items-center p-2 space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                            <a href='https://www.mge.com/smart-energy/clean-energy/renewable-energy-programs/green-power-tomorrow'
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`pixel-button-base text-green-700 ${gemunuLibre.className} bg-white w-full h-full flex items-center rounded-sm justify-center text-lg no-underline px-2 py-2`}>
                                MGE Renewable Credits ☀️
                            </a>
                            <a href='https://www.alliantenergy.com/ways-to-save/second-nature'
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`pixel-button-base text-orange-700 ${gemunuLibre.className} bg-white w-full h-full flex items-center rounded-sm justify-center text-lg no-underline px-2 py-2`}>
                                Alliant Renewable Credits ☀️
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- A DEEPER DIVE (UPDATED) --- */}
                <section id="deeper-dive" className="mb-10 scroll-mt-24">
                    <h2 className={`text-3xl font-bold text-white mb-4 ${gemunuLibre.className}`}>A Deeper Dive: Who&apos;s Actually in Charge of Your Light Switch?</h2>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        Ever flip a light switch and wonder… where does that power *actually* come from? 🤔 It feels simple, but behind your outlet is a huge, interconnected system with some big players making decisions that affect your bill and our planet. Let&apos;s pull back the curtain and see how it all works.
                    </p>

                    <div id="deeper-dive-miso" className="mb-6 scroll-mt-24">
                        <h3 className="text-xl font-semibold text-slate-100 mb-2">The Grid&apos;s Grand Conductor: Meet MISO 🎶</h3>
                        <p className="text-base text-slate-300 mb-4">Think of MISO (Midcontinent Independent System Operator) as the &quot;air traffic control&quot; for the power grid across the Midwest, including Wisconsin. They don&apos;t own the power plants, but they direct the flow of electricity second by second to make sure there&apos;s always enough to go around, preventing blackouts. It&apos;s a massive balancing act!</p>
                        <p className="text-base text-slate-300">They manage the energy market, ensuring the cheapest available electricity (which is often wind and solar! 🌬️☀️) gets sent out first. This helps keep your costs down and integrates renewable energy into the grid on a massive scale. When we build more renewable energy in Wisconsin, MISO is the organization that helps get that clean power onto the &quot;energy highway&quot; and delivered to us.</p>
                    </div>

                    <div id="deeper-dive-psc" className="mb-6 scroll-mt-24">
                        <h3 className="text-xl font-semibold text-slate-100 mb-2">The Rulebook Writers: Wisconsin&apos;s PSC ⚖️</h3>
                        <p className="text-base text-slate-300 mb-4">The Public Service Commission of Wisconsin (PSC) is like the referee for our state&apos;s utilities (like MGE and Alliant). They are a state agency whose job is to make sure utilities are playing fair, that your rates are reasonable, and that the lights stay on.</p>
                        <p className="text-base text-slate-300">The PSC approves or denies big projects, like building a new solar farm or raising electricity prices. When MGE or Alliant wants to change how they do things, they have to get the PSC&apos;s permission first. The PSC is one of the most powerful players in deciding how quickly Wisconsin transitions to clean energy.</p>
                    </div>

                    <div id="deeper-dive-utilities" className="mb-6 scroll-mt-24">
                        <h3 className="text-xl font-semibold text-slate-100 mb-2">Your Home Team: The Utilities 🏡</h3>
                        <p className="text-base text-slate-300 mb-4">You already know them – MGE and Alliant Energy! They are the ones who own the power plants, the poles, and the wires that bring electricity directly to your home. They are on the front lines, building the new solar farms and maintaining the grid you use every day.</p>
                        <p className="text-base text-slate-300">Your choices as a customer send a powerful signal. When enough of us show we want clean energy (by participating in programs or saving energy), it helps utilities make the case to the PSC that investing in renewables is the right move for everyone.</p>
                    </div>

                    <div id="deeper-dive-future" className="mb-6 scroll-mt-24">
                        <h3 className="text-xl font-semibold text-slate-100 mb-2">Tying It All Together for a Greener Future 🌎</h3>
                        <p className="text-base text-slate-300 mb-4">So, MISO manages the regional highway, the PSC sets the speed limits and rules of the road in Wisconsin, and your local utility drives the car that delivers the power to your door.</p>
                    <p className="text-base text-slate-300 mb-4">
        This is where PlanetPatch comes in! Our goal is to give you a clear map of this complex system. By building software like the Energy Tracker, we provide the information you need to see your role in the bigger picture. We then connect you to meaningful opportunities like the <span className="font-bold text-green-400">Focus on Energy</span> program and <span className="font-bold text-green-400">Renewable Credits</span>. With your support and funding, we can continue to build tools that make climate resilience actions accessible and meaningful, especially for young people in our community.
    </p>        
                <p className="text-base text-slate-300">Building a climate-resilient future means making smart choices at every level – from MISO integrating more renewables, to the PSC approving new solar projects, to us, as customers, showing we&apos;re ready for a cleaner grid. You&apos;re not just a consumer; you&apos;re a participant in this massive team effort! 💪</p>
                    </div>
                </section>

                {/* --- FOOTER --- */}
                <section id="footer" className="scroll-mt-24">
                    <h2 className={`text-2xl font-bold text-white mb-4 ${gemunuLibre.className}`}>Acknowledgments & Sources</h2>
                    <p className="text-sm text-slate-400 italic mb-4">
                        Thank you to The City of Madison, United Way of Dane County, By Youth For Youth, and UW-Extension for your support in making climate resilience accessible!
                    </p>
                    <h4 className="text-md font-semibold text-slate-200 mb-2">Sources:</h4>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                        <li>Public Service Comission of Wisconsin</li>
                        <li>Madison Gas & Electric (MGE)</li>
                <li>Alliant Energy</li>
                <li>City of Madison</li>
                <li> <a href='https://github.com/OpenDataDE/State-zip-code-GeoJSON' className='text-green-700 underline'>OpenDataDE - State Zip Codes (GitHub)</a> </li>
                    </ul>
                </section>
            </article>
           </div>
        </main>
    );
}