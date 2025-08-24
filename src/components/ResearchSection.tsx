import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Award } from "lucide-react";

const ResearchSection = () => {
  const workingPapers = [
    {
      title: "The Impact of Environmental Policies on Rural Labor Markets",
      abstract: "This paper examines how environmental regulations affect employment patterns in rural communities, with particular focus on the transition to sustainable agricultural practices.",
      status: "Under Review",
      coauthors: ["Dr. Jane Smith", "Prof. John Doe"],
      keywords: ["Environmental Economics", "Labor Markets", "Rural Development"]
    },
    {
      title: "Social Identity and Economic Decision Making in Developing Countries",
      abstract: "An empirical analysis of how cultural and social identity factors influence economic choices and outcomes in emerging markets.",
      status: "Working Paper",
      coauthors: ["Dr. Alice Johnson"],
      keywords: ["Behavioral Economics", "Development", "Social Identity"]
    },
    {
      title: "Agricultural Innovation and Farmer Welfare: Evidence from Field Experiments",
      abstract: "This study uses randomized controlled trials to assess the impact of new agricultural technologies on farmer income and well-being.",
      status: "Draft",
      coauthors: [],
      keywords: ["Agricultural Economics", "Innovation", "Field Experiments"]
    }
  ];

  const publications = [
    {
      title: "Climate Change Adaptation in Small-Scale Agriculture",
      journal: "Journal of Development Economics",
      year: "2023",
      volume: "Vol. 156",
      coauthors: ["Dr. Sarah Wilson", "Prof. Michael Brown"],
      link: "#"
    },
    {
      title: "Gender Gaps in Agricultural Productivity: A Meta-Analysis",
      journal: "Economic Development Quarterly",
      year: "2022",
      volume: "Vol. 36(2)",
      coauthors: ["Dr. Emma Davis"],
      link: "#"
    }
  ];

  const awards = [
    {
      title: "Best Paper Award",
      organization: "International Development Economics Association",
      year: "2023"
    },
    {
      title: "Early Career Research Grant",
      organization: "National Science Foundation",
      year: "2022"
    },
    {
      title: "Outstanding Dissertation Award",
      organization: "University Economics Department",
      year: "2020"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Research</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My research focuses on the intersection of economics, environment, and development, 
            with particular emphasis on understanding how policy interventions affect vulnerable populations.
          </p>
        </div>

        {/* Working Papers */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
            <FileText className="mr-3 h-6 w-6 text-primary" />
            Working Papers
          </h3>
          <div className="space-y-6">
            {workingPapers.map((paper, index) => (
              <Card key={index} className="shadow-lg border-primary/10 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-foreground">{paper.title}</CardTitle>
                    <Badge variant="outline" className="border-primary text-primary">
                      {paper.status}
                    </Badge>
                  </div>
                  {paper.coauthors.length > 0 && (
                    <p className="text-sm text-muted-foreground">
                      Co-authors: {paper.coauthors.join(", ")}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{paper.abstract}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.keywords.map((keyword, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Paper
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Publications</h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index} className="shadow-md border-primary/10">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-foreground mb-2">{pub.title}</h4>
                  <p className="text-primary font-medium mb-1">
                    {pub.journal}, {pub.year}, {pub.volume}
                  </p>
                  {pub.coauthors.length > 0 && (
                    <p className="text-sm text-muted-foreground mb-3">
                      Co-authors: {pub.coauthors.join(", ")}
                    </p>
                  )}
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto academic-link">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Publication
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
            <Award className="mr-3 h-6 w-6 text-primary" />
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="shadow-md border-primary/10 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{award.title}</h4>
                  <p className="text-primary font-medium mb-1">{award.organization}</p>
                  <p className="text-sm text-muted-foreground">{award.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;