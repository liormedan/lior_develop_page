import { Heart, LineChart, Calendar } from "lucide-react";
import ProjectLayout from "./ProjectLayout";

const MoodTracker = () => {
  return (
    <ProjectLayout
      title="יומן מצב רוח אישי"
      description="אפליקציה למעקב אחר מצבי רוח, זיהוי דפוסים רגשיים וניהול יומן אישי לשיפור הבנת הרגשות שלך"
      features={[
        {
          icon: <Heart className="h-12 w-12" />,
          title: "מעקב רגשות",
          description:
            "תיעוד יומי של מצבי רוח ורגשות, עם אפשרות להוספת הערות ותובנות",
        },
        {
          icon: <LineChart className="h-12 w-12" />,
          title: "ניתוח דפוסים",
          description:
            "זיהוי דפוסים רגשיים וגורמים משפיעים על מצב הרוח לאורך זמן",
        },
        {
          icon: <Calendar className="h-12 w-12" />,
          title: "יומן אישי",
          description:
            "כתיבת יומן מפורט עם אפשרות לתיוג רגשות ואירועים משמעותיים",
        },
      ]}
      technologies={[
        {
          category: "Frontend",
          items: [
            "React - לבניית ממשק משתמש אינטואיטיבי",
            "shadcn/ui - לעיצוב מודרני ונקי",
            "D3.js - להצגת ניתוחים ודפוסים רגשיים",
          ],
        },
        {
          category: "Backend",
          items: [
            "Node.js - לניהול הלוגיקה העסקית",
            "Supabase - לאחסון מאובטח של נתונים אישיים",
            "ML Models - לניתוח דפוסים וזיהוי מגמות",
          ],
        },
      ]}
      screenshots={[
        {
          src: "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1",
          alt: "Mood Tracking Interface",
        },
        {
          src: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a",
          alt: "Analytics Dashboard",
        },
      ]}
    />
  );
};

export default MoodTracker;
