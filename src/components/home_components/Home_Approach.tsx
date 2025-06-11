// components/Home_Approach.tsx
import { gemunuLibre } from "../ui/fonts";

interface PillarProps {
    title: string;
    description: string;
}
 
const PillarCard: React.FC<PillarProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center p-6 md:p-8 bg-green-50/50 dark:bg-green-900/20 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
            <h3 className={`text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 text-center ${gemunuLibre.className} `}>
                {title}
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                {description}
            </p>
        </div>
    );
};
 
const Home_Approach = () => {
    // --- UPDATED: The pillars array now has more direct, action-oriented content. ---
    const pillars: PillarProps[] = [
      {
        title: "Building with Community",
        description: "From creating indigenous flora rain gardens to hosting local workshops, we collaborate hands-on with Madison residents to build tangible, green infrastructure."
      },
      {
        title: "Empowering Through Knowledge",
        description: "We partner with local experts and researchers to transform complex climate data into clear, actionable insights for everyone."
      },
      {
        title: "Actionable Technology Tools",
        description: "We design and build engaging software, like our Energy Tracker app, that empowers you to make small changes that lead to a big collective impact."
      }
    ];
 
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 ${gemunuLibre.className} ` }>
                        Our Approach
                    </h2>
                    {/* --- UPDATED: The introductory paragraph is now more active. --- */}
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        We create change through three key pillars of action:
                    </p>
                </div>
 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {pillars.map((pillar) => (
                        <PillarCard
                            key={pillar.title}
                            title={pillar.title}
                            description={pillar.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
 
export default Home_Approach;
