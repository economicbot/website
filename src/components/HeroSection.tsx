import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Mail, ExternalLink } from "lucide-react";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  const socialLinks = [
    { name: "Email", href: "mailto:shraddhay@igidr.ac.in", icon: Mail },
    { name: "Google Scholar", href: "#", icon: ExternalLink },
    // { name: "ResearchGate", href: "#", icon: ExternalLink },
    // { name: "LinkedIn", href: "#", icon: ExternalLink },
    { name: "ORCID", href: "https://orcid.org/0009-0000-1720-6329", icon: ExternalLink },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-academic-cream to-academic-teal-light/20">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 lg:p-12 shadow-2xl bg-card/80 backdrop-blur-sm border-2 border-primary/10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Profile Image and Social Links */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative mb-6">
                <img
                  src="/lovable-uploads/54740e95-b5dc-4bd3-867a-85d2d5c5377a.png"
                  alt="Academic Profile"
                  className="profile-image w-64 h-64 lg:w-72 lg:h-72 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary academic-link"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="mr-2 h-4 w-4" />
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Shraddha Yadav
              </h1>
              <h2 className="text-xl lg:text-2xl text-primary font-medium mb-6">
                PhD Candidate in Economics
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed text-foreground/80 mb-8">
                <p>
                I am a fifth-year Ph.D. candidate in Economics at <span className="text-primary font-medium"> Indira Gandhi Institute of Development Research (IGIDR).</span>
                </p>
                <p>
                My research interests lie in the areas of Gender and Labour Economics.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => onSectionChange("research")}
                >
                  View Research
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => {
                    // Create a temporary link element to trigger download
                    const link = document.createElement('a');
                    link.href = '/Shraddha_Yadav_CV.pdf'; // Update this path to match your CV file name
                    link.download = 'Shraddha_Yadav_CV.pdf'; // This will be the downloaded file name
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;