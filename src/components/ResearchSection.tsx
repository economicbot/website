import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Award, Newspaper } from "lucide-react";

const ResearchSection = () => {
  const JobMarketPaper = [
    {
      title: "Education Tracks and Attitudes Towards Women’s Participation in the Labour Force and Leadership",
      abstract: "We estimate the causal effect of general versus vocational secondary education on gender role attitudes. Using a fuzzy regression discontinuity design that exploits a preparatory exam score cutoff, we find that general secondary education substantially increases support for gender equality. General secondary graduates are 16 percentage points more likely to agree that women should be allowed to work and 24 percentage points more likely to support women in leadership, relative to vocational graduates. These effects are larger among male graduates than female graduates. Exploring mechanisms, we find evidence that track assignment operates through differences in access to higher education, exposure to female coworkers, peer composition, and curriculum content. Our findings suggest that expanding social and civic content in vocational curricula and broadening higher education pathways for vocational graduates could promote more egalitarian gender attitudes and advance gender equality.",
      coauthors: [],
      status: "Under Review",
      keywords: ["Gender role attitudes", "Vocational education"],
      link: "/main.pdf"
    }
  ]
  const workingPapers = [

    {
      title: "Cross-Tier Incumbency Spillovers: Evidence from India's State Assembly Elections",
      abstract: "We study cross-tier legislative incumbency spillovers in non-concurrent elections, a relatively understudied dimension of multi-level electoral politics in federal systems. Using a regression discontinuity design with comprehensive election data from India covering parliamentary elections (1999–2019) and state assembly elections (1994–2023), we find significant bidirectional negative spillovers. Having an incumbent member of parliament reduces the probability of that party’s candidate winning in subsequent state assembly elections by 7.2 percentage points (or by 17.6%), within that parliamentary constituency (top-down spillover). Similarly, having an incumbent Member of the Legislative Assembly reduces the party’s vote share in subsequent parliamentary elections by 2.4 percentage points (or by 6.5%), in that assembly constituency (bottom-up spillover). These spillovers compound the welfare costs of incumbency disadvantage: a party already suffering anti-incumbency at one tier faces additional disadvantage from another. Effects are concentrated among centralized parties, non-switching candidates, and both ruling and opposition parties. Spillovers are stronger in less developed states and when elections occur within 2.5 years of each other.",
      status: (
        <span>
          <em>Revise & Resubmit</em> at <strong>Public Choice</strong>
        </span>
      ),
      coauthors: ["Ajay Saharan"],
      keywords: ["Cross-tier Incumbency Spillovers", "Multi-tier Elections"],
      link: "/Incumbency_spillovers.pdf"
    },
    {
      title: "Gender-Diverse Workplaces and Men's Gender Role Attitudes Towards Working Women",
      abstract: "We assess whether the presence of female coworkers influences men’s gender role attitudes toward working women (GRAWW), particularly regarding working women balancing professional and domestic responsibilities. Using panel data from Egypt, characterized by low female labor force participation and traditional gender norms, we estimate a two-way fixed effects model. Men in gender-diverse workplaces report significantly more progressive GRAWW, higher by 0.14 standard deviations, and with larger effects where women comprise over 25% of employees. Effects are stronger among younger men and those with more traditional baseline views. Results are robust to checks for self-selection, workplace characteristics, and pre-existing trends.",
      status: "Under Review",
      coauthors: ["Ajay Saharan"],
      keywords: ["Gender Role Attitude", "Gender-diverse Workplaces"],
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5349036"
    }
    // {
    //   title: "Marriage and Gender Role Attitudes",
    //   abstract: "Despite progress towards a more gender equal society, substantial gender-based disparities persist in the division of paid and unpaid work, often underpinned by deeply rooted attitudes surrounding gender appropriate roles in work and family life. Therefore, understanding how gender role attitudes form is crucial for addressing persistent gender-based disparities in the labor market and beyond. Using longitudinal data from Egypt, this study examines how key life-events such as marriage and parenthood shape the gender role attitudes of men and women. We find that marriage leads to a significant shift towards more conservative attitudes among women, with no comparable shift observed after parenthood. For men, no statistically significant change is observed after transition to either marriage or parenthood. Notably, the observed shift towards more conservative attitudes among women is driven primarily by women who were relatively more progressive before marriage. Additionally, we find that the absolute distance between the gender role attitude index of women and their husbands declines post marriage, suggesting that women may adjust their views to align more closely with a new, gendered marital identity.",
    //   status: "Draft",
    //   coauthors: ["Kajari Saha", "Koustuv Saha"],
    //   keywords: ["Gender Role Attitudes", "Labour Market Outcomes"]
    // }
  ];

  const opEds = [
    {
      title: "A tale of two Bundelkhands: UP cuts a sorry figure compared to MP in all sectors, data shows",
      outlet: "ThePrint",
      year: "2022",
      coauthors: ["Vikash Vaibhav", "Varun Kumar Das"],
      link: "https://theprint.in/opinion/a-tale-of-two-bundelkhands-up-cuts-a-sorry-figure-compared-to-mp-in-all-sectors-data-shows/834901/",
    },
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
          

          </p>
        </div>

        {/* Job Market Paper */}
        {JobMarketPaper.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <FileText className="mr-3 h-6 w-6 text-primary" />
              Job Market Paper
            </h3>
            <div className="space-y-6">
              {JobMarketPaper.map((paper, index) => (
                <Card key={index} className="shadow-lg border-primary/20 hover:shadow-xl transition-shadow bg-gradient-to-r from-primary/5 to-transparent">
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
                    <p className="justified-prose mb-4">{paper.abstract}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.keywords.map((keyword, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    {paper.link && (
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Paper
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

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
                  <p className="justified-prose mb-4">{paper.abstract}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.keywords.map((keyword, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  {paper.link && (
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Paper
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Op-eds & Commentary */}
        {opEds.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Newspaper className="mr-3 h-6 w-6 text-primary" />
              Op-eds & Commentary
            </h3>
            <div className="space-y-4">
              {opEds.map((article, index) => (
                <Card key={index} className="shadow-md border-primary/10 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{article.title}</h4>
                        <p className="text-sm text-primary font-medium mb-2">
                          {article.outlet} · {article.year}
                        </p>
                        {article.coauthors && article.coauthors.length > 0 && (
                          <p className="text-sm text-muted-foreground mb-2">
                            Co-authors: {article.coauthors.join(", ")}
                          </p>
                        )}
                      </div>
                      {article.link && (
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shrink-0" asChild>
                          <a href={article.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Read Article
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

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