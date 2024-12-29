import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectLayoutProps {
  title: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  technologies: Array<{
    category: string;
    items: string[];
  }>;
  screenshots: Array<{
    src: string;
    alt: string;
  }>;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  title,
  description,
  features,
  technologies,
  screenshots,
}) => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            className="mb-4 flex items-center gap-2 text-foreground hover:text-foreground/90"
            onClick={() => window.history.back()}
          >
            חזרה
            <ArrowRight className="h-4 w-4" />
          </Button>

          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {description}
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            טכנולוגיות
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {tech.category}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          תצוגה מקדימה
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot.src}
              alt={screenshot.alt}
              className="rounded-lg shadow-md border border-border"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
