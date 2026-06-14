import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const CV_PATH = "/lovable-uploads/Shraddha_Yadav_CV.pdf";

const CVSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">CV</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Curriculum vitae
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href={CV_PATH} download="Shraddha_Yadav_CV.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        <Card className="shadow-lg border-primary/10 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
            <FileText className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Shraddha Yadav — CV</span>
          </div>
          <iframe
            src={CV_PATH}
            title="Shraddha Yadav CV"
            className="w-full h-[75vh] min-h-[500px] bg-background"
          />
        </Card>
      </div>
    </section>
  );
};

export default CVSection;
