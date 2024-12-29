import { Users, Image, Share2 } from "lucide-react";
import ProjectLayout from "./ProjectLayout";

const FamilyWebsites = () => {
  return (
    <ProjectLayout
      title="אתרי משפחות"
      description="בניית אתרים מותאמים אישית למשפחות, המאפשרים שיתוף זכרונות, אירועים ותמונות משפחתיות בצורה פרטית ומאובטחת"
      features={[
        {
          icon: <Users className="h-12 w-12" />,
          title: "אלבום משפחתי",
          description:
            "שיתוף תמונות וזכרונות משפחתיים בצורה מאובטחת עם אפשרויות ארגון מתקדמות",
        },
        {
          icon: <Image className="h-12 w-12" />,
          title: "עץ משפחה",
          description:
            "יצירת ותצוגת עץ משפחה אינטראקטיבי עם אפשרות להוספת מידע ותמונות",
        },
        {
          icon: <Share2 className="h-12 w-12" />,
          title: "לוח אירועים",
          description: "ניהול ותיאום אירועים משפחתיים עם התראות ואפשרויות RSVP",
        },
      ]}
      technologies={[
        {
          category: "Frontend",
          items: [
            "React - לבניית ממשק משתמש נוח ואינטואיטיבי",
            "Next.js - לביצועים מהירים ו-SEO מותאם",
            "Tailwind CSS - לעיצוב מותאם אישית",
          ],
        },
        {
          category: "Backend",
          items: [
            "Supabase - לאחסון מאובטח ואימות משתמשים",
            "Storage API - לניהול קבצים ותמונות",
            "Real-time Updates - לעדכונים מיידיים",
          ],
        },
      ]}
      screenshots={[
        {
          src: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
          alt: "Family Album",
        },
        {
          src: "https://images.unsplash.com/photo-1509924603848-aca5e5f276d7",
          alt: "Family Tree",
        },
      ]}
    />
  );
};

export default FamilyWebsites;
