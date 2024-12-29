import { PieChart, DollarSign, TrendingUp } from "lucide-react";
import ProjectLayout from "./ProjectLayout";

const BudgetManager = () => {
  return (
    <ProjectLayout
      title="מערכת ניהול תקציב אישי"
      description="אפליקציה חכמה לניהול פיננסי אישי, המאפשרת מעקב אחר הוצאות והכנסות ותכנון תקציבי חכם"
      features={[
        {
          icon: <DollarSign className="h-12 w-12" />,
          title: "מעקב הוצאות והכנסות",
          description:
            "תיעוד פשוט ומהיר של כל התנועות הכספיות שלך, עם קטגוריות מותאמות אישית",
        },
        {
          icon: <PieChart className="h-12 w-12" />,
          title: "ניתוח תקציבי",
          description:
            "גרפים וניתוחים מתקדמים המציגים את דפוסי ההוצאה וההכנסה שלך",
        },
        {
          icon: <TrendingUp className="h-12 w-12" />,
          title: "תכנון פיננסי",
          description: "הגדרת יעדים פיננסיים והתראות חכמות לעמידה בתקציב",
        },
      ]}
      technologies={[
        {
          category: "Frontend",
          items: [
            "React - לבניית ממשק משתמש דינמי ומהיר",
            "Tailwind CSS - לעיצוב מודרני ומותאם אישית",
            "Chart.js - להצגת גרפים וניתוחים ויזואליים",
          ],
        },
        {
          category: "Backend",
          items: [
            "Node.js - לביצועים מהירים בצד השרת",
            "Supabase - לאחסון נתונים מאובטח ואמין",
            "REST API - לתקשורת יעילה בין הצד הקדמי לשרת",
          ],
        },
      ]}
      screenshots={[
        {
          src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
          alt: "Dashboard",
        },
        {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
          alt: "Analytics",
        },
      ]}
    />
  );
};

export default BudgetManager;
