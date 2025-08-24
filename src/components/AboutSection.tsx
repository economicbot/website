import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      degree: "Ph.D. in Economics",
      institution: "University Name",
      year: "2020",
      location: "City, Country"
    },
    {
      degree: "M.A. in Economics",
      institution: "University Name",
      year: "2016",
      location: "City, Country"
    },
    {
      degree: "B.A. in Economics",
      institution: "University Name",
      year: "2014",
      location: "City, Country"
    }
  ];

  const positions = [
    {
      title: "Assistant Professor",
      institution: "Current University",
      period: "2021 - Present",
      location: "City, Country"
    },
    {
      title: "Visiting Research Fellow",
      institution: "Research Institute",
      period: "2020 - 2021",
      location: "City, Country"
    },
    {
      title: "Lecturer",
      institution: "Previous University",
      period: "2018 - 2020",
      location: "City, Country"
    }
  ];

  const researchInterests = [
    "Labor Economics",
    "Environmental Economics",
    "Development Economics",
    "Social Identity",
    "Agricultural Economics",
    "Policy Analysis",
    "Econometric Methods"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am a dedicated researcher and educator with a passion for understanding 
            economic systems and their impact on society and the environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <GraduationCap className="mr-3 h-6 w-6" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <span className="mr-3">{edu.year}</span>
                    <MapPin className="mr-1 h-3 w-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <Users className="mr-3 h-6 w-6" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {positions.map((pos, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <h3 className="font-semibold text-foreground">{pos.title}</h3>
                  <p className="text-primary font-medium">{pos.institution}</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <span className="mr-3">{pos.period}</span>
                    <MapPin className="mr-1 h-3 w-3" />
                    <span>{pos.location}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Research Interests */}
        <Card className="shadow-lg border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-primary">
              <BookOpen className="mr-3 h-6 w-6" />
              Research Interests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {researchInterests.map((interest, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;