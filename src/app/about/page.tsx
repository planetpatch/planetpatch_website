import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

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
          <h1 className="text-4xl font-bold text-gray-800">About PlanetPatch</h1>
          <div className="mt-2 text-sm text-gray-600">
          <span className="font-semibold">Home</span> &gt; About Us
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-12 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Who We Are */}
            <div className="md:flex md:items-center mb-16">
              <img
                src="https://www.monstertreeservice.com/cms/thumbnails/24/1080x540/images/articles/MTS_OUW_FiveTypesofFastGrowingTrees_BlogPhoto_Jun23_20230531.jpg"
                alt="PlanetPatch team in action"
                className="md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-10"
              />
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-black">Who We Are</h2>
                <p className="text-gray-700">
                  PlanetPatch is an environmental non-profit dedicated to building a greener future
                  through community action, youth engagement, and sustainability education. We
                  believe every patch of the planet matters—and with your help, we can restore them
                  one step at a time.
                </p>
              </div>
            </div>

            {/* What We Do */}
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 md:mr-10 order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4 text-black">What We Do</h2>
                <p className="text-gray-700">
                  From organizing local clean-ups to running educational workshops in schools,
                  PlanetPatch empowers people of all ages to make eco-conscious choices. We plant
                  trees, restore habitats, and advocate for green policies to make a lasting
                  impact—locally and globally.
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
      <Footer />
    </>
  );
}
