import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AnimatedText } from "./ui/animated-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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
      "פלטפורמה לבניית אתרים מרשימים לאירועים מיוחדים כמו חתונות, בר מצוות ואירועים משפחתיים",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552",
    tags: ["React", "Supabase", "Stripe", "shadcn/ui"],
    path: "/projects/event-websites",
  },
  {
    id: "5",
    title: "פורטפוליו אישי",
    description:
      "אתר תדמית מודרני להצגת פרויקטים, יצירת קשר עם לקוחות פוטנציאליים וקבלת הצעות מחיר",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["React", "Vite", "Tailwind", "shadcn/ui"],
    path: "/projects/portfolio",
  },
  {
    id: "6",
    title: "מערכת ניהול תוכן",
    description:
      "מערכת CMS מודרנית המאפשרת ניהול תוכן, משתמשים והרשאות בצורה פשוטה ואינטואיטיבית",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    tags: ["React", "Supabase", "shadcn/ui", "Realtime"],
    path: "/projects/cms",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-card border-border group hover:border-primary/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-accent/80 rounded-full text-sm text-accent-foreground"
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

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            שאלות נפוצות
          </h2>
          <Accordion type="single" collapsible className="w-full text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>איך מתחילים פרויקט חדש?</AccordionTrigger>
              <AccordionContent>
                <div className="text-xl">
                  התהליך מתחיל בפגישת ייעוץ ראשונית בה נבין את הצרכים והמטרות
                  שלך. לאחר מכן נגבש הצעת מחיר מפורטת ונתחיל בתכנון ואפיון
                  הפרויקט.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>כמה זמן לוקח לבנות אפליקציה?</AccordionTrigger>
              <AccordionContent>
                <div className="text-xl">
                  משך הפיתוח תלוי בגודל ומורכבות הפרויקט. פרויקט בסיסי יכול לקחת
                  כחודש, בעוד פרויקטים מורכבים יותר עשויים להימשך מספר חודשים.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                האם אתם מספקים תמיכה לאחר השקת האפליקציה?
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-xl">
                  כן, אנחנו מציעים חבילות תמיכה ותחזוקה שונות הכוללות עדכונים,
                  תיקון באגים, וסיוע טכני שוטף בהתאם לצרכי הלקוח.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                האם האפליקציות שלכם מותאמות למובייל?
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-xl">
                  כל האפליקציות שלנו מפותחות בגישת Mobile First ומותאמות באופן
                  מלא למכשירים ניידים, טאבלטים ומחשבים שולחניים.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            אודות
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText text="Byte מתמחה בבניית אפליקציות web מודרניות ונוחות למשתמש, תוך שימוש בטכנולוגיות המתקדמות ביותר בתעשייה." />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            צור קשר
          </h2>
          <form className="space-y-6 bg-card p-6 rounded-lg shadow-sm border border-border/50">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Input placeholder="שם" className="bg-background" />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="אימייל"
                  className="bg-background"
                />
              </div>
            </div>
            <div>
              <Textarea
                placeholder="ההודעה שלך"
                className="min-h-[150px] bg-background"
              />
            </div>
            <Button className="w-full">שלח הודעה</Button>
          </form>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="quote" className="py-16 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            בקש הצעת מחיר
          </h2>
          <form className="space-y-6 bg-card p-6 rounded-lg shadow-sm border border-border/50">
            <div className="grid grid-cols-1 gap-6">
              <Input placeholder="שם הפרויקט" className="bg-background" />
              <Textarea
                placeholder="תאר את דרישות הפרויקט והרעיונות שלך"
                className="min-h-[150px] bg-background"
              />
              <Input placeholder="טווח תקציב" className="bg-background" />
              <Input
                type="email"
                placeholder="אימייל ליצירת קשר"
                className="bg-background"
              />
            </div>
            <Button className="w-full">שלח בקשה</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
