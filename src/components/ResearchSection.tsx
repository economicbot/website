import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Award } from "lucide-react";

const ResearchSection = () => {
  const workingPapers = [
    {
      title: "Gender-Diverse Workplaces and Men's Gender Role Attitudes Towards Working Women",
      abstract: "We assess whether the presence of female coworkers influences men’s gender role attitudes toward working women (GRAWW), particularly regarding working women balancing professional and domestic responsibilities. Using panel data from Egypt, characterized by low female labor force participation and traditional gender norms, we estimate a two-way fixed effects model. Men in gender-diverse workplaces report significantly more progressive GRAWW, higher by 0.14 standard deviations, and with larger effects where women comprise over 25% of employees. Effects are stronger among younger men and those with more traditional baseline views. Results are robust to checks for self-selection, workplace characteristics, and pre-existing trends.",
      status: "Under Review",
      coauthors: ["Ajay Saharan"],
      keywords: ["Gender Role Attitude", "Gender-diverse Workplaces"]
    },
    {
      title: "Education Tracks and Attitudes Toward Women’s Leadership Roles",
      abstract: "This study examines the causal impact of secondary education tracks—general versus vocational—on attitudes toward women's leadership roles in Egypt. Using data from the Egypt Labor Market Panel Survey (ELMPS) 2012 and 2018, we apply a fuzzy regression discontinuity design based on a cutoff in preparatory exam scores that channel students into vocational or general secondary education. The results indicate that individuals who complete the general secondary track are 32 percentage points more likely to support the idea of women in leadership roles. In addition, this influence appears to be stronger among male graduates compared to their female counterparts. Investigation of potential mechanisms suggests that the impact of general secondary education on these attitudes may operate through increased access to higher education and a higher probability of exposure to female colleagues in the workplace. The findings suggest that placing greater focus on broader social discussions in vocational education curricula and expanding opportunities for vocational graduates to pursue higher education could promote more egalitarian attitudes and contribute to advancing gender equality in leadership roles.",
      coauthors: [],
      status: "Working Paper",
      keywords: ["Female leadership", "Vocational education", "Gender role attitudes"]
    },
    {
      title: "Marriage and Gender Role Attitudes",
      abstract: "Despite progress towards a more gender equal society, substantial gender-based disparities persist in the division of paid and unpaid work, often underpinned by deeply rooted attitudes surrounding gender appropriate roles in work and family life. Therefore, understanding how gender role attitudes form is crucial for addressing persistent gender-based disparities in the labor market and beyond. Using longitudinal data from Egypt, this study examines how key life-events such as marriage and parenthood shape the gender role attitudes of men and women. We find that marriage leads to a significant shift towards more conservative attitudes among women, with no comparable shift observed after parenthood. For men, no statistically significant change is observed after transition to either marriage or parenthood. Notably, the observed shift towards more conservative attitudes among women is driven primarily by women who were relatively more progressive before marriage. Additionally, we find that the absolute distance between the gender role attitude index of women and their husbands declines post marriage, suggesting that women may adjust their views to align more closely with a new, gendered marital identity.",
      status: "Draft",
      coauthors: ["Kajari Saha", "Koustuv Saha"],
      keywords: ["Gender Role Attitudes", "Labour Market Outcomes"]
    }
  ];

  const publications = [
    // {
    //   title: "Climate Change Adaptation in Small-Scale Agriculture",
    //   journal: "Journal of Development Economics",
    //   year: "2023",
    //   volume: "Vol. 156",
    //   coauthors: ["Dr. Sarah Wilson", "Prof. Michael Brown"],
    //   link: "#"
    // },
    // {
    //   title: "Gender Gaps in Agricultural Productivity: A Meta-Analysis",
    //   journal: "Economic Development Quarterly",
    //   year: "2022",
    //   volume: "Vol. 36(2)",
    //   coauthors: ["Dr. Emma Davis"],
    //   link: "#"
    // }
  ];

  const awards = [
    {
      title: "Research For Impact Fellowship",
      organization: "J-PAL/CLEAR South Asia",
      year: "2024"
    },
    {
      title: "UGC-NET cum Junior Research Fellowship",
      organization: [],
      year: "2017"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Research</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          My research examines the interaction between gender and labour markets, 
          with a particular focus on how socio-economic determinants shape Gender Role 
          Attitudes (GRAs) and, in turn, how these attitudes influence labour market outcomes.


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
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5349036" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Paper
                    </a>
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