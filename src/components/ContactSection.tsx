import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Calendar, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shraddhay@igidr.ac.in",
      href: "mailto:shraddhay@igidr.ac.in"
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "+1 (555) 123-4567",
    //   href: "tel:+15551234567"
    // },
    // {
    //   icon: MapPin,
    //   label: "Office",
    //   value: "Economics Department, Room 123\nUniversity Building\nCity, State 12345",
    //   href: "#"
    // },
    // {
    //   icon: Calendar,
    //   label: "Office Hours",
    //   value: "Tuesdays & Thursdays\n2:00 PM - 4:00 PM\n(By appointment)",
    //   href: "#"
    // }
  ];

  const socialLinks = [
    // { name: "Google Scholar", href: "#" },
    // { name: "ResearchGate", href: "#" },
    // { name: "LinkedIn", href: "#" },
    { name: "ORCID", href: "https://orcid.org/0009-0000-1720-6329" },
    // { name: "Academia.edu", href: "#" },
    { name: "Twitter", href: "https://x.com/shraddhayadv" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {/* I welcome discussions about research collaborations, academic opportunities, 
            and consultations related to my areas of expertise. */}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{item.label}</h3>
                    <div className="text-muted-foreground whitespace-pre-line">
                      {item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? (
                        <a 
                          href={item.href} 
                          className="academic-link hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Academic Profiles & Social Media */}
          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Academic Profiles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground mb-6">
                  Connect with me on various academic and professional platforms:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {link.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h4 className="font-medium text-foreground mb-2">Collaboration Interests</h4>
                <p className="text-sm text-muted-foreground">
                  {/* I am always interested in collaborating on projects related to environmental economics, 
                  development policy, and empirical research methodologies. Feel free to reach out to 
                  discuss potential partnerships or research opportunities. */}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="shadow-lg border-primary/10 bg-gradient-to-r from-primary/5 to-academic-teal-light/10">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {/* Whether you're a fellow researcher, student, or policy maker, I'd love to hear 
                about your work and explore potential collaborations. */}
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="mailto:shraddhay@igidr.ac.in">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;