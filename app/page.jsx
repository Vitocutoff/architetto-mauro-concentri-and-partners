// /app/page.jsx

import FinalSection from "@/components/home/FinalSection";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PreviewSection from "@/components/home/PreviewSection";
import WorkInProgressSection from "@/components/home/WorkInProgressSection";

export default function HomePage() {

  return (

    <main
      id="main-content"
      aria-label="Contenuto principale della Home Page"
      className="flex
                 flex-col
                 w-full
                 min-h-screen
                 overflow-x-hidden"
    >

      <HeroSection />

      <IntroSection />

      <PreviewSection />

      <WorkInProgressSection />

      <FinalSection />

    </main>

  );

}
