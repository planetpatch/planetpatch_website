import Image from 'next/image';
import StarsBackground from '@/components/ui/StarsBackground';
import { gemunuLibre } from '@/components/ui/fonts';

export default function EnergyTracker() {
    return (
        // Set background colors for light and dark modes
         <main className="relative overflow-hidden bg-gradient-to-b from-sky-500 to-slate-900 dark:bg-gradient-to-b dark:from-slate-900 dark:to-sky-900 min-h-screen">
           <StarsBackground />
        <article className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 
        max-w-3xl my-16 bg-slate-900/30 dark:bg-slate-900/30 
 rounded-lg shadow-xl backdrop-blur-sm border border-white/10">
                {/* Image at the top */}
                <div className="mb-8">
                    <Image
                        src="/energy_tracker.png" 
                        alt="Energy Tracker Blog Header"
                        width={800}
                        height={400}
                        layout="responsive"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* H1 with dark mode text color */}
                 <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">
          Energy Tracker
        </h1>


                {/* H2 with dark mode text color */}
             <h2 className="text-xl text-slate-200 mb-6 font-semibold">
          The Energy Tracker is created to show you exactly how much of your electricity is renewable vs. non-renewable.
        </h2>

        <h3 className="text-lg text-slate-300 mb-8 leading-relaxed">
          With that information, you can Take Action by ordering a <span className="font-bold text-green-400">FREE</span> Focus on Energy box to make your home
          more energy efficient. You can also comment on the <span className="font-bold text-blue-400">Public Service Commission</span> docket influencing Dane County&apos;s electric
          future.
        </h3>

        <p className="text-base text-slate-300 mb-4">
            The Energy Tracker is currently live and can be accessed by clicking the button below:
          </p>
          
          <a href='https://energy-tracker.planetpatch.dev'
            target="_blank"
            rel="noopener noreferrer"
            className={` pixel-button-base  text-green-700  ${gemunuLibre.className} bg-white text-decoration-underline w-full h-full flex items-center rounded-sm justify-center text-2xl`} >
            https://energy-tracker.planetpatch.dev</a>

        <p className="text-sm text-slate-400 mt-8 italic border-t border-slate-700 pt-4">
          Thank you to The City of Madison, United Way of Dane County, By Youth For Youth, and UW-Extension for your support in making climate
          resilience accessible!
        </p>
      </article>
        </main>
    );
}