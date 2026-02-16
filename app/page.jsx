// /app/page.jsx

import FinalSection from "@/components/home/final/FinalSection";
import HeroSection from "@/components/home/hero/HeroSection";
import IntroSection from "@/components/home/intro/IntroSection";
import PreviewSection from "@/components/home/preview/PreviewSection";
import WorkInProgressSection from "@/components/home/work/WorkInProgressSection";

export default function HomePage() {

  return (

    <>

      <HeroSection />

      <IntroSection />

      <PreviewSection />

      <WorkInProgressSection />

      <FinalSection />

    </>

  );

}
