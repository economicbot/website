import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import TeachingSection from "@/components/TeachingSection";
import CVSection from "@/components/CVSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");

  // Update page title based on current section
  useEffect(() => {
    const titles = {
      home: "Shraddha Yadav",
      about: "Shraddha Yadav - Bio",
      research: "Shraddha Yadav - Research",
      teaching: "Shraddha Yadav - Teaching",
      cv: "Shraddha Yadav - CV",
    };
    document.title = titles[currentSection as keyof typeof titles] || "Shraddha Yadav";
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <HeroSection onSectionChange={setCurrentSection} />;
      case "about":
        return <AboutSection />;
      case "research":
        return <ResearchSection />;
      case "teaching":
        return <TeachingSection />;
      case "cv":
        return <CVSection />;
      default:
        return <HeroSection onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="pt-16">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
