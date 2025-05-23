// components/Home_Approach.tsx
import { gemunuLibre } from "../ui/fonts";

interface PillarProps {
    title: string;
    description: string;
  }
  
  const PillarCard: React.FC<PillarProps> = ({ title, description }) => {
    return (
      <div className="flex flex-col items-center p-6 md:p-8 bg-green-50/50 dark:bg-green-900/20 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Icon section removed */}
            <h3 className={`text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 text-center ${gemunuLibre.className} `}>
          {/* Adjusted mb-3 from mb-2 since icon is gone */}
          {title}
        </h3>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 text-center leading-relaxed">
          {description}
        </p>
      </div>
    );
  };
  
  const Home_Approach = () => {
    const pillars: PillarProps[] = [
      {
        // icon property removed
        title: "Community-Led Initiatives",
        description: "We work directly with communities to understand their specific needs and co-create tailored resilience strategies."
      },
      {
        // icon property removed
        title: "Collaborative Partnerships",
        description: "We foster partnerships with local organizations, governments, and experts to amplify our impact."
      },
      {
        // icon property removed
        title: "Innovative Solutions",
        description: "We leverage cutting-edge technology and data to implement effective and scalable solutions."
      }
    ];
  
    return (
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 ${gemunuLibre.className} ` }>
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We believe in a holistic approach to climate resilience, focusing on three key pillars:
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {pillars.map((pillar) => (
              <PillarCard
                key={pillar.title}
                // icon prop removed
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