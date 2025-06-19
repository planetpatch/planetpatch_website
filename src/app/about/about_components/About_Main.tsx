import { gemunuLibre } from "@/components/ui/fonts";
import Link from "next/link";
import { teamMembers } from "@/app/lib/InfoArrays";
import { modernButtonBase, donateButtonStyles } from "@/components/ui/buttons";

const About_Main = () => {
  // NEW: Corrected leaf animation loop
  const themedAnimatedBg =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3Cstyle%3E.leaf%7Bfill:%2366bb6a%7D.vine%7Bstroke:%2316a34a%7D@media(prefers-color-scheme:dark)%7B.leaf%7Bfill:%2386efac%7D.vine%7Bstroke:%239ccc65%7D%7D%3C/style%3E%3Cpath id='leaf' class='leaf' d='M0,0 C-5,5 -5,15 0,20 C5,15 5,5 0,0 Z'/%3E%3C/defs%3E%3C!-- Animated Vine --%3E%3Cpath id='vinePath' class='vine' d='M-100,300 Q150,50 400,300 T900,300 T1300,300' stroke-width='4' fill='none' style='stroke-dasharray: 1800; stroke-dashoffset: 1800;'%3E%3Canimate id='vineAnim' attributeName='stroke-dashoffset' from='1800' to='0' dur='20s' repeatCount='indefinite'/%3E%3C/path%3E%3C!-- Sprouting Leaves --%3E%3Cg opacity='0'%3E%3Cuse href='%23leaf' x='220' y='140' transform='rotate(45 220 140)'/%3E%3Cuse href='%23leaf' x='400' y='300' transform='rotate(-30 400 300)'/%3E%3Cuse href='%23leaf' x='580' y='460' transform='rotate(120 580 460)'/%3E%3Cuse href='%23leaf' x='750' y='300' transform='rotate(60 750 300)'/%3E%3Cuse href='%23leaf' x='920' y='140' transform='rotate(-50 920 140)'/%3E%3Cuse href='%23leaf' x='1100' y='300' transform='rotate(30 1100 300)'/%3E%3Canimate attributeName='opacity' dur='20s' repeatCount='indefinite' keyTimes='0;0.15;0.2;0.95;1' values='0;0;1;1;0' begin='vineAnim.begin'/%3E%3C/g%3E%3C/svg%3E\")";

  return (
    <>
      <main className="bg-gray-50 dark:bg-slate-900">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-28 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
          }}
        >
          <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1
              className={`text-6xl md:text-7xl lg:text-8xl font-bold text-white ${gemunuLibre.className}`}
            >
              About PlanetPatch
            </h1>
          </div>
        </section>

        {/* Origins & Direction - NEW Themed Animated Background */}
        <section
          className="relative py-20 md:py-28 bg-gray-50 dark:bg-slate-900"
          style={{ backgroundImage: themedAnimatedBg, backgroundSize: "cover" }}
        >
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white/95 dark:bg-slate-800/95 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="text-center text-slate-800 dark:text-slate-100">
                <h2
                  className={`text-4xl md:text-5xl font-bold text-green-800 dark:text-green-300 mb-6 ${gemunuLibre.className}`}
                >
                  Origins & Direction
                </h2>
                <p
                  className={`text-2xl md:text-3xl font-bold text-green-700 dark:text-green-400 mb-8 ${gemunuLibre.className}`}
                >
                  We need to democratize climate resilience.
                </p>
                <p className="text-lg mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
                  The founding principle of PlanetPatch is to empower individuals to
                  take collective climate action.
                </p>
                <p
                  className={`text-2xl md:text-3xl font-bold my-8 text-green-800 dark:text-green-300 ${gemunuLibre.className}`}
                >
                  That’s me. That’s you. That’s us!
                </p>
                <p className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                  Millions care about climate change but feel overwhelmed. That’s
                  why we founded PlanetPatch—to give you and your community the
                  tools, knowledge, and clear steps to drive real, collective
                  solutions.
                </p>

                <h3
                  className={`text-3xl font-semibold text-green-800 dark:text-green-300 mt-12 mb-4 ${gemunuLibre.className}`}
                >
                  How?
                </h3>
                <p className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                  We’ll build interactive online spaces to inspire and equip young
                  adults and everyday people to foster resilience at home, within
                  families, and across communities.
                </p>
                <p className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                  Today’s climate info is scattered and daunting. Our “Take
                  Action” tools streamline economic, social, and political
                  initiatives to strengthen resilience—starting now.
                </p>

                <h3
                  className={`text-3xl font-semibold text-green-800 dark:text-green-300 mt-12 mb-4 ${gemunuLibre.className}`}
                >
                  Direction
                </h3>
                <p className="text-lg mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
                  Our first projects will:
                </p>
                <ul className="list-disc list-inside text-left mx-auto max-w-2xl space-y-2 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  <li>
                    Craft software that empowers everyday people to learn and
                    implement collective climate solutions.
                  </li>
                  <li>
                    Boost community organizations’ technical capacity to build
                    climate resilience.
                  </li>
                </ul>
                <p className="text-lg leading-relaxed mt-6 text-slate-700 dark:text-slate-300">
                  Next we'll form neighborhood resiliency networks, pool resources
                  for resilient technologies, and support partners in
                  decarbonization and infrastructure upgrades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-slate-900">
          <div className="container mx-auto px-6 lg:px-8">
            <h2
              className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-10 text-left ${gemunuLibre.className}`}
            >
              Who We Are
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="w-32 h-32 rounded-full mb-4 object-cover shadow"
                  />
                  <h4
                    className={`text-xl font-bold mb-1 ${gemunuLibre.className}`}
                  >
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

        {/* Contribute */}
        <section className="py-8 md:py-16 bg-gray-50 dark:bg-slate-900">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 md:order-last">
                <img
                  src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Wind turbines in a green field, symbolizing climate resilience"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="md:w-2/3 md:order-first">
                <h2
                  className={`text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-6 ${gemunuLibre.className}`}
                >
                  Contribute
                </h2>
                <p className="text-lg mb-4 leading-relaxed">
                  Your support is crucial. Volunteer, donate, or partner with us
                  to scale PlanetPatch’s impact.
                </p>
                <p className="text-lg mb-8 leading-relaxed">
                  Every action brings us closer to a world where people and
                  nature thrive.
                </p>
                <div>
                  <Link
                    href="/donate"
                    className={`${modernButtonBase} ${donateButtonStyles} text-lg`}
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
  );
};

export default About_Main;