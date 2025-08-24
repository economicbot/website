import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");

  // Update page title based on current section
  useEffect(() => {
    const titles = {
      home: "Dr. Academic - Home",
      about: "Dr. Academic - About",
      research: "Dr. Academic - Research",
      publications: "Dr. Academic - Publications",
      teaching: "Dr. Academic - Teaching",
      contact: "Dr. Academic - Contact",
    };
    document.title = titles[currentSection as keyof typeof titles] || "Dr. Academic";
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <HeroSection onSectionChange={setCurrentSection} />;
      case "about":
        return <AboutSection />;
      case "research":
      case "publications":
        return <ResearchSection />;
      case "teaching":
        return (
          <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Teaching</h2>
              <p className="text-lg text-muted-foreground">Teaching section coming soon...</p>
            </div>
          </section>
        );
      case "contact":
        return <ContactSection />;
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
