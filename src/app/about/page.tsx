import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { gemunuLibre } from "@/components/ui/fonts";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="relative bg-gray-100">
        {/* Background image with overlay */}
        <div
          className="relative h-64 w-full bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0)), url('/home_assets/hero_image.png')`,
          }}
        >
          <div className="max-w-7xl pl-16">
            <h1 className={`text-8xl font-bold text-green-700 ${gemunuLibre.className}`}>About PlanetPatch</h1>
            <div className="mt-2 text-sm text-gray-600">
              <span className="font-semibold">Home</span> &gt; About Us
            </div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="py-12 bg-white px-2 sm:px-4 lg:px-6">
          <div className="max-w-7xl flex flex-col md:flex-row pl-6">
            
            {/* Sidebar Navigation */}
            <div className="md:w-1/4 mb-10 md:mb-0 md:mr-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">About Us</h2>
              <ul className="space-y-4 text-gray-600">
              <li>
                  <Link href="#what-we-do" className="font-bold text-black hover:underline">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="#what-we-do" className="font-bold text-black hover:underline">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link href="#our-team" className="hover:text-black hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#mission-vision" className="hover:text-black hover:underline">
                    Mission / Vision / Beliefs
                  </Link>
                </li>
                <li>
                  <Link href="#data" className="hover:text-black hover:underline">
                    Annual Data
                  </Link>
                </li>
                <li>
                  <Link href="#partners" className="hover:text-black hover:underline">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-black hover:underline">
                    Contact PlanetPatch
                  </Link>
                </li>
              </ul>
            </div>

            {/* Main Section */}
            <div className="md:w-3/4">
              {/* Who We Are */}
              <div id='who-we-are' className="md:flex md:items-center mb-16">
                <img
                  src="https://www.monstertreeservice.com/cms/thumbnails/24/1080x540/images/articles/MTS_OUW_FiveTypesofFastGrowingTrees_BlogPhoto_Jun23_20230531.jpg"
                  alt="PlanetPatch team in action"
                  className="md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-10"
                />
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4 text-black">Who We Are</h2>
                  <p className="text-gray-700">
                    PlanetPatch is an environmental non-profit dedicated to building a greener
                    future through community action, youth engagement, and sustainability
                    education.
                  </p>
                </div>
              </div>

              {/* What We Do */}
              <div id='what-we-do'className="md:flex md:items-center">
                <div className="md:w-1/2 md:mr-10 order-2 md:order-1">
                  <h2 className="text-2xl font-bold mb-4 text-black">What We Do</h2>
                  <p className="text-gray-700">
                    From organizing clean-ups to running workshops, PlanetPatch empowers people of
                    all ages to make eco-conscious choices.
                  </p>
                </div>
                <img
                  src="https://www.esf.edu/ere/endreny/GICalculator/RainGardenTN.jpg"
                  alt="Community event"
                  className="md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 order-1 md:order-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
