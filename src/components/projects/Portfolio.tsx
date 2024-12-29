import { Layout, Code, Palette } from "lucide-react";
import ProjectLayout from "./ProjectLayout";

const Portfolio = () => {
  return (
    <ProjectLayout
      title="פורטפוליו אישי"
      description="אתר תדמית מודרני להצגת פרויקטים, יצירת קשר עם לקוחות פוטנציאליים וקבלת הצעות מחיר"
      features={[
        {
          icon: <Layout className="h-12 w-12" />,
          title: "תצוגת פרויקטים",
          description:
            "הצגה מרשימה של פרויקטים קודמים עם תיאורים מפורטים וטכנולוגיות",
        },
        {
          icon: <Code className="h-12 w-12" />,
          title: "טכנולוגיות מתקדמות",
          description:
            "שימוש בטכנולוגיות החדשניות ביותר לביצועים מהירים ועיצוב מרשים",
        },
        {
          icon: <Palette className="h-12 w-12" />,
          title: "עיצוב מותאם אישית",
          description: "עיצוב מודרני ונקי המותאם לצרכים הספציפיים של הפרויקט",
        },
      ]}
      technologies={[
        {
          category: "Frontend",
          items: [
            "React - לבניית ממשק משתמש מודרני",
            "Vite - לביצועים מהירים",
            "Tailwind CSS - לעיצוב גמיש ומותאם אישית",
          ],
        },
        {
          category: "UI Components",
          items: [
            "shadcn/ui - לרכיבי UI מודרניים",
            "Lucide Icons - לאייקונים וקטוריים",
            "Responsive Design - להתאמה לכל המסכים",
          ],
        },
      ]}
      screenshots={[
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
          alt: "Portfolio Home",
        },
        {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
          alt: "Projects Grid",
        },
      ]}
    />
  );
};

export default Portfolio;
