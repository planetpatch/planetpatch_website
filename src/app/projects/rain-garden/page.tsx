import Image from 'next/image';
import StarsBackground from '@/components/ui/StarsBackground';


export default function RainGarden() {
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
                        src="/rain-garden.jpg" 
                        alt="Rain Garden Blog Header"
                        width={800}
                        height={400}
                        layout="responsive"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* H1 with dark mode text color */}
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                    Indigenous Flora Rain Garden
                </h1>

                {/* H2 with dark mode text color */}
                <h2 className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
                   Through Our Indigenous Flora Rain Garden project, we built 10 rain gardens around the city of Madison with the help of 
                    youth contributors and volunteers.
                </h2>

                {/* H3 with dark mode text color and highlighted spans */}
                <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Rain Gardens will play a vital role in building Madison&apos;s climate resilience since they act like a strong sponge 
                    during heavy storms. There will be greater chances of flooding in Madison in the upcoming years and Indigenous Flora Rain Garden&apos;s
                    will be one of Madison&apos;s safeguard against the damage.
                </h3>
                
                /* {/* P with dark mode text color */}
                <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    We will have a map showing the relative area of our rain gardens by September 31st. Stay tuned!
                </p> */

                {/* Footer P with dark mode text and border color */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 italic border-t border-gray-200 dark:border-gray-700 pt-4">
                    Thank you to The City of Madison, United Way of Dane County, By Youth For Youth, and UW-Extension for your support in making climate
                    resilience accessible!
                </p>
            </article>
        </main>
    );
}
