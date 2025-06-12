import { gemunuLibre } from "@/components/ui/fonts";
import Link from "next/link";
import { teamMembers, projectPosts } from "@/app/lib/InfoArrays";
import { modernButtonBase, donateButtonStyles } from "@/components/ui/buttons";
import ProjectsDisplay from "@/app/projects/ProjectsDisplay";

const About_Main = () => {
    return (
        <>
            {/* Main Page Content Area */}
            <main className="bg-gray-50 dark:bg-slate-900">
                
                {/* Centered Page Heading - UPDATED with background image and text color */}
                <section 
                    className="relative py-20 md:py-28 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
                >
                    <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
                    <div className="relative z-10 container mx-auto px-6 text-center">
                        <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold text-white ${gemunuLibre.className}`}>
                            About PlanetPatch
                        </h1>
                    </div>
                </section>

                {/* Section 1: Origins & Direction - UPDATED with new background image and subtle vine texture */}
                <section 
                    className="py-20 md:py-28 bg-cover bg-center relative"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
                >
                    {/* Updated: Subtle vine texture layer - positioned behind the main overlay but in front of the background image */}
                    <div
                        className="absolute inset-0 z-0" // z-0 ensures it's behind the white/dark overlay
                        style={{
                            backgroundImage: "url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", // Vine image URL
                            backgroundSize: "cover", // Cover the entire section
                            backgroundRepeat: "no-repeat", // Don't repeat the image
                            backgroundPosition: "center",
                            opacity: 0.25, // Increased opacity to make it more noticeable
                        }}
                    ></div>

                    {/* Existing: Overlay changed from black to a light, semi-transparent white (now with z-10) */}
                    <div className="absolute inset-0 bg-white bg-opacity-80 dark:bg-slate-800 dark:bg-opacity-80 z-10"></div>
                    
                    {/* Main content, now needs z-20 to be on top of both overlays */}
                    <div className="container mx-auto px-6 lg:px-8 relative z-20 text-slate-800 dark:text-slate-100 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className={`text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-6 ${gemunuLibre.className}`}>
                                Origins & Direction
                            </h2>
                            <p className={`text-2xl md:text-3xl font-bold text-green-600 dark:text-green-300 mb-8 ${gemunuLibre.className}`}>
                                We need to democratize climate resilience.
                            </p>
                            
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                The founding principle of PlanetPatch is to empower individuals to take collective climate action.
                            </p>
                            
                            <p className={`text-2xl md:text-3xl font-bold my-8 text-green-700 dark:text-green-400 ${gemunuLibre.className}`}>
                                That’s me. That’s you. That’s us!
                            </p>

                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                There are millions of people who feel climate change is important to address but feel like the task is daunting
                                and they don’t know where to put their efforts. We felt the same way.
                                That’s why we founded PlanetPatch - we want to build a movement where you and your community have access to the information, the tools
                                and clear actionable steps to be the force behind real climate solutions.
                            </p>

                            <h3 className={`text-3xl font-semibold text-green-700 dark:text-green-400 mt-12 mb-4 ${gemunuLibre.className}`}>
                                How?
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                We will build interactive spaces online that infuse young adults and everyday people (you!) with the knowledge,
                                tools, and inspiration to build climate resilience in your home, within your family, and within your community.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                The current information landscape about dealing with climate change is scattered, hard to find,
                                and leaves us feeling overwhelmed. With our take action tools, you will be empowered to promote economic, social, and political
                                changes that will improve climate resilience today!
                            </p>

                            <h3 className={`text-3xl font-semibold text-green-700 dark:text-green-400 mt-12 mb-4 ${gemunuLibre.className}`}>
                                Direction
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                Our initial projects will focus on:
                            </p>
                                <ul className="list-disc list-inside inline-block text-left mx-auto my-2 space-y-1 text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    <li>Crafting software that empowers young adults and everyday people to learn and implement collective climate solutions in their daily lives.</li>
                                    <li>Increase community organizations&apos; technical capacity to build climate resilience.</li>
                                </ul>
                            
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                We hope to expand by building neighborhood resiliency networks, define and craft programs that pool our collective energy, time, and resources together to buy climate resilient technologies for the resiliency networks, and support companies and large organizations who want to invest in climate resilient infrastructure and decarbonization.
                            </p>
                        </div>
                    </div>
                </section>

               {/* Section 2: Who We Are */}
               <section className="py-12 md:py-20 bg-gray-50 dark:bg-slate-900">
                    <div className="container mx-auto px-6 lg:px-8">
                        <h2 className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-10 md:mb-12 text-left ${gemunuLibre.className}`}>
                            Who We Are
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                                    <img
                                        src={member.image}
                                        alt={`Portrait of ${member.name}`}
                                        className="w-32 h-32 rounded-full mb-5 object-cover shadow-md"
                                    />
                                    <h4 className={`text-xl font-bold text-slate-800 dark:text-white mb-1 ${gemunuLibre.className}`}>
                                        {member.name}
                                    </h4>
                                    <p className="text-green-600 dark:text-green-400 text-sm">
                                        {member.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Section 4: Contribute - UPDATED with reduced size */}
                <section className="py-8 md:py-16 bg-gray-50 dark:bg-slate-900">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            {/* UPDATED: Image container width reduced */}
                            <div className="md:w-1/3 md:order-last">
                                <img
                                    src='https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    alt="Wind turbines in a green field, symbolizing climate resilience"
                                    className="w-full rounded-lg shadow-xl object-cover"
                                />
                            </div>
                            {/* UPDATED: Text container width increased */}
                            <div className="md:w-2/3 md:order-first">
                                <h2 className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-6 ${gemunuLibre.className}`}>
                                    Contribute
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Your support is crucial to our mission. Whether you&apos;re looking to volunteer your time, make a donation, or partner with us, there are many ways to contribute to PlanetPatch&apos;s efforts and help scale our impact.
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                                    Join us in crafting a resilient future. Every action, big or small, helps us move closer to a world where both people and nature thrive.
                                </p>
                                <div className="flex">
                                    <Link
                                        href="/donate"
                                        className={`${modernButtonBase} ${donateButtonStyles} text-lg text-center`}
                                    >
                                        Donate Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default About_Main
