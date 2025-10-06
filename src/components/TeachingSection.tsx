import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, MapPin } from "lucide-react";

const TeachingSection = () => {
  const teachingExperience = [
    {
      role: "Teaching Assistant",
      level: "Graduate-level",
      institution: "Indira Gandhi Institute of Development Research (IGIDR)",
      period: "2021 - Present",
      location: "Mumbai, India",
      courses: [
        "Econometrics I - Fall, 2025 (Compulsory)",
        "Applied Econometrics - Spring, 2023 (Elective)",
        "Causal Inference - Spring 2019 (Elective)"
      ]
    }
  ];

  const teachingPhilosophy = [
    "Interactive learning through real-world applications",
    // "Emphasis on critical thinking and analytical skills",
    // "Integration of current research findings into coursework",
    "Supportive environment for diverse learning styles"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Teaching</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {/* I am passionate about creating an engaging learning environment that connects 
            theoretical concepts with real-world applications in economics. */}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Teaching Experience */}
          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <Users className="mr-3 h-6 w-6" />
                Teaching Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {teachingExperience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <Badge variant="outline" className="border-primary text-primary text-xs">
                      {exp.level}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium">{exp.institution}</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1 mb-3">
                    <span className="mr-3">{exp.period}</span>
                    <MapPin className="mr-1 h-3 w-3" />
                    <span>{exp.location}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Courses Taught:</h4>
                    <ul className="space-y-1">
                      {exp.courses.map((course, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Teaching Philosophy */}
          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <BookOpen className="mr-3 h-6 w-6" />
                Teaching Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teachingPhilosophy.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-foreground/80">{principle}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <Card className="shadow-lg border-primary/10 bg-gradient-to-r from-primary/5 to-academic-teal-light/10">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              Student Support & Mentoring
            </h3>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              {/* I am committed to supporting students in their academic journey, providing guidance 
              on research projects, thesis work, and career development in economics. I welcome 
              opportunities to mentor students interested in gender economics, labor economics, 
              and development research. */}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeachingSection; 