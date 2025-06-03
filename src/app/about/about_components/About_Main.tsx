import { gemunuLibre } from "@/components/ui/fonts";
import Link from "next/link";
import { teamMembers, projectPosts } from "@/app/lib/InfoArrays";
import { modernButtonBase, donateButtonStyles } from "@/components/ui/buttons";
import ProjectsDisplay from "@/app/projects/ProjectsDisplay";
import { getCategoryColor } from "@/app/projects/page";

const About_Main = () => {
    return (
        <>
            {/* Main Page Content Area */}
            <main className="bg-gray-50 dark:bg-slate-900">
                {/* Centered Page Heading */}
                <div className="py-12 md:py-16 text-center">
                    <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold text-green-700 ${gemunuLibre.className}`}>
                        About PlanetPatch
                    </h1>
                </div>

                {/* Section 1: Origins & Direction (Image Left, Text Right) */}
                <section className="py-12 md:py-20 bg-white dark:bg-slate-800">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12"> {/* Changed items-center to items-start for better text alignment with image */}
                            <div className="md:w-1/2">
                                <img
                                    src="https://www.monstertreeservice.com/cms/thumbnails/24/1080x540/images/articles/MTS_OUW_FiveTypesofFastGrowingTrees_BlogPhoto_Jun23_20230531.jpg" // Placeholder, adjust aspect ratio as needed
                                    alt="PlanetPatch vision or inspirational scene"
                                    className="w-full rounded-lg shadow-xl object-cover" // Adjusted to w-full for responsiveness
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-4 ${gemunuLibre.className}`}>
                                    Origins & Direction
                                </h2>
                                <p className={`text-xl font-bold text-green-700 dark:text-green-500 mb-6 ${gemunuLibre.className}`}>
                                    We need to democratize climate resilience.
                                </p>

                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    The founding principle of PlanetPatch is to empower individuals to take collective climate action.
                                    That’s not someone else: <span className='font-bold text-green-700 text-xl'>That’s me. That’s you. That’s us!</span>
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    There are millions of people who feel climate change is important to address but feel like the task is daunting
                                    and they don’t know where to put their efforts. We felt the same way.
                                    That’s why we founded PlanetPatch - we want to build a movement where you and your community have access to the information, the tools
                                    and clear actionable steps to be the force behind real climate solutions.
                                </p>

                                <h3 className={`text-2xl font-semibold text-green-800 dark:text-green-600 mt-8 mb-3 ${gemunuLibre.className}`}>
                                    How?
                                </h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    We will build interactive spaces online that infuse young adults and everyday people (you!) with the knowledge,
                                    tools, and inspiration to build climate resilience in your home, within your family, and within your community.
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    The current information landscape about dealing with climate change is scattered, hard to find,
                                    and leaves us feeling overwhelmed. With our take action tools, you will be empowered to promote economic, social, and political
                                    changes that will improve climate resilience today!
                                </p>

                                <h3 className={`text-2xl font-semibold text-green-800 dark:text-green-600 mt-8 mb-3 ${gemunuLibre.className}`}>
                                    Direction
                                </h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Our initial projects will focus on:
                                </p>
                                    <ul className="list-disc list-inside ml-4 my-2 space-y-1 text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                        <li>Crafting software that empowers young adults and everyday people to learn and implement collective climate solutions in their daily lives.</li>
                                        <li>Increase community organizations&apos; technical capacity to build climate resilience.</li>
                                    </ul>
                                
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    We hope to expand by building neighborhood resiliency networks, define and craft programs that pool our collective energy, time, and resources together to buy climate resilient technologies for the resiliency networks, and support companies and large organizations who want to invest in climate resilient infrastructure and decarbonization.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

  {/* Section 2: Who We Are (3-column, 2-row grid) */}
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

                <ProjectsDisplay
        posts={projectPosts}
        getCategoryColorFunc={getCategoryColor}
        fontClassName={gemunuLibre.className}
        buttonBaseStyles={modernButtonBase}
        buttonSpecificStyles={donateButtonStyles}
      />

                {/* Section 4: Contribute (Text Left, Image Right) */}
                <section className="py-12 md:py-20 bg-gray-50 dark:bg-slate-900">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="md:w-1/2 md:order-last">
                                <img
                                    src='https://www.monstertreeservice.com/cms/thumbnails/24/1080x540/images/articles/MTS_OUW_FiveTypesofFastGrowingTrees_BlogPhoto_Jun23_20230531.jpg'
                                    //src="https://placehold.co/600x450/54a054/FFFFFF?text=Support+Us" // Placeholder
                                    alt="Symbol of contribution or community support"
                                    className="w-full rounded-lg shadow-xl object-cover" // Adjusted
                                />
                            </div>
                            <div className="md:w-1/2 md:order-first">
                                <h2 className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-6 ${gemunuLibre.className}`}>
                                    Contribute
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Your support is crucial to our mission. Whether you&apos;re looking to volunteer your time, make a donation, or partner with us, there are many ways to contribute to PlanetPatch&apos;s efforts and help scale our impact.
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                                    Join us in crafting a resilient future. Every action, big or small, helps us move closer to a world where both people and nature thrive.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/donate"
                                        className="px-6 py-3 text-lg font-semibold rounded-md shadow-md transform transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500 text-center"
                                    >
                                        Donate Now
                                    </Link>
                                    <Link
                                        href="/volunteer"
                                        className="px-6 py-3 text-lg font-semibold rounded-md shadow-md transform transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-green-600 border border-green-600 hover:bg-green-50 hover:border-green-700 focus-visible:ring-green-500 text-center"
                                    >
                                        Become a Volunteer
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
