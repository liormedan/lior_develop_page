import { Calendar, Gift, Camera } from "lucide-react";
import ProjectLayout from "./ProjectLayout";

const EventWebsites = () => {
  return (
    <ProjectLayout
      title="אתרי אירועים מיוחדים"
      description="פלטפורמה לבניית אתרים מרשימים לאירועים מיוחדים כמו חתונות, בר מצוות ואירועים משפחתיים"
      features={[
        {
          icon: <Calendar className="h-12 w-12" />,
          title: "ניהול הזמנות",
          description:
            "מערכת RSVP מתקדמת עם אפשרות לניהול רשימת אורחים והעדפות תפריט",
        },
        {
          icon: <Gift className="h-12 w-12" />,
          title: "רשימת מתנות",
          description:
            "ניהול רשימת מתנות אינטראקטיבית עם אפשרויות תשלום מובנות",
        },
        {
          icon: <Camera className="h-12 w-12" />,
          title: "גלריית תמונות",
          description:
            "שיתוף תמונות מהאירוע בזמן אמת ואפשרות להעלאת תמונות על ידי האורחים",
        },
      ]}
      technologies={[
        {
          category: "Frontend",
          items: [
            "React - לבניית ממשק משתמש דינמי",
            "Vite - לפיתוח מהיר ויעיל",
            "shadcn/ui - לעיצוב מודרני ומרשים",
          ],
        },
        {
          category: "Backend",
          items: [
            "Supabase - לניהול משתמשים ונתונים",
            "Storage API - לניהול תמונות וקבצים",
            "Stripe - לעיבוד תשלומים מאובטח",
          ],
        },
      ]}
      screenshots={[
        {
          src: "https://images.unsplash.com/photo-1519741497674-611481863552",
          alt: "Event Landing Page",
        },
        {
          src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
          alt: "RSVP System",
        },
      ]}
    />
  );
};

export default EventWebsites;
