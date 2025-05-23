import Footer from "@/components/Footer";
import Hero from "@/components/home_components/Hero";
import Home_Approach from "@/components/home_components/Home_Approach";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home_Approach />
      <Footer/>
    </>

  );
}
