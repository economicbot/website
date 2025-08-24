import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Mail, ExternalLink } from "lucide-react";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  const socialLinks = [
    { name: "Email", href: "mailto:your.email@university.edu", icon: Mail },
    { name: "Google Scholar", href: "#", icon: ExternalLink },
    { name: "ResearchGate", href: "#", icon: ExternalLink },
    { name: "LinkedIn", href: "#", icon: ExternalLink },
    { name: "ORCID", href: "#", icon: ExternalLink },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-academic-cream to-academic-teal-light/20">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 lg:p-12 shadow-2xl bg-card/80 backdrop-blur-sm border-2 border-primary/10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:order-1">
              <div className="relative">
                <img
                  src="/lovable-uploads/54740e95-b5dc-4bd3-867a-85d2d5c5377a.png"
                  alt="Academic Profile"
                  className="profile-image w-80 h-80 lg:w-96 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left lg:order-0">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Shraddha Yadav
              </h1>
              <h2 className="text-xl lg:text-2xl text-primary font-medium mb-6">
                Assistant Professor of Economics
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed text-foreground/80 mb-8">
                <p>
                  Welcome to my academic webpage! I am an Assistant Professor specializing in
                  <span className="text-primary font-medium"> labor economics, environmental economics, 
                  and development studies</span>.
                </p>
                <p>
                  My research focuses on understanding the intersection of economic policy, 
                  social identity, and sustainable development in emerging economies.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
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
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;