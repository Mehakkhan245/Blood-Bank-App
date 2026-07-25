import { useState } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
 import StatsCards from "../components/StatsCards";
import HowItWorks from "../components/HowItWork";
import BloodCompatibility from "../components/BloodCompatibility";
import Features from "../components/Features";
import About from "../components/About";
import Footer from "../components/Footer";
function Home() {
  const [showBar, setShowBar] = useState(true);

  return (
    <>
      {showBar && (
        <AnnouncementBar
          onClose={() => setShowBar(false)}
        />
      )}

      <Navbar showBar={showBar} />

      <div className={showBar ? "pt-28" : "pt-20"}>
        <Hero />
<StatsCards />
<HowItWorks />
<BloodCompatibility />
<Features />
<About />
<Footer />
      </div>
    </>
  );
}

export default Home;