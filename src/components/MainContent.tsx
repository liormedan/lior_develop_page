import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const projects = [
  {
    id: "1",
    title: "מערכת ניהול תקציב אישי",
    description:
      "אפליקציה לניהול והתנהלות פיננסית חכמה, מעקב אחר הוצאות והכנסות, ותכנון תקציבי",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    tags: ["React", "Node.js", "Supabase", "Tailwind"],
    path: "/projects/budget-manager",
  },
  {
    id: "2",
    title: "יומן מצב רוח אישי",
    description:
      "אפליקציה למעקב אחר מצבי רוח, זיהוי דפוסים רגשיים וניהול יומן אישי",
    imageUrl: "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1",
    tags: ["React", "Node.js", "Supabase", "shadcn/ui"],
    path: "/projects/mood-tracker",
  },
  {
    id: "3",
    title: "אתרי משפחות",
    description:
      "בניית אתרים מותאמים אישית למשפחות, לשיתוף זכרונות, אירועים ותמונות משפחתיות",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
    tags: ["React", "Supabase", "Tailwind", "Next.js"],
    path: "/projects/family-websites",
  },
  {
    id: "4",
    title: "אתרי אירועים מיוחדים",
    description:
      "פלטפורמה לבניית אתרים לאירועים מיוחדים כמו חתונות, בר מצוות ואירועים משפחתיים",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552",
    tags: ["React", "Vite", "Tailwind", "shadcn/ui"],
    path: "/projects/event-websites",
  },
  {
    id: "5",
    title: "פורטפוליו אישי",
    description:
      "אתר תדמית אישי להצגת פרויקטים ויצירת קשר עם לקוחות פוטנציאליים",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["React", "Vite", "Tailwind", "shadcn/ui"],
    path: "/projects/portfolio",
  },
];

const MainContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("[MainContent] Component mounted");
    console.log("[MainContent] Projects data:", projects);
    return () => {
      console.log("[MainContent] Component unmounted");
    };
  }, []);

  return (
    <div className="w-full bg-background" dir="rtl">
      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          פרויקטים נבחרים
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden bg-card">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-accent rounded-full text-sm text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  className="w-full"
                  onClick={() => navigate(project.path)}
                >
                  צפה בפרויקט
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            אודות
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              אני מפתח Full Stack עם ניסיון של מעל 5 שנים בבניית אפליקציות ווב
              מודרניות. מתמחה ב-React, Node.js וטכנולוגיות ענן, עם התמקדות
              ביצירת פתרונות מדרגיים וידידותיים למשתמש עבור עסקים בכל הגדלים.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            צור קשר
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Input placeholder="שם" />
              </div>
              <div>
                <Input type="email" placeholder="אימייל" />
              </div>
            </div>
            <div>
              <Textarea placeholder="ההודעה שלך" className="min-h-[150px]" />
            </div>
            <Button className="w-full">שלח הודעה</Button>
          </form>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="quote" className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            בקש הצעת מחיר
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Input placeholder="שם הפרויקט" />
              <Textarea
                placeholder="תאר את דרישות הפרויקט והרעיונות שלך"
                className="min-h-[150px]"
              />
              <Input placeholder="טווח תקציב" />
              <Input type="email" placeholder="אימייל ליצירת קשר" />
            </div>
            <Button className="w-full">שלח בקשה</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
