import { Database, Users, Settings, Zap } from "lucide-react";
import ProjectLayout from "./ProjectLayout";

const CMS = () => {
  return (
    <ProjectLayout
      title="מערכת ניהול תוכן"
      description="מערכת CMS מודרנית המאפשרת ניהול תוכן, משתמשים והרשאות בצורה פשוטה ואינטואיטיבית"
      features={[
        {
          icon: <Database className="h-12 w-12" />,
          title: "ניהול תוכן",
          description:
            "ממשק אינטואיטיבי לניהול תוכן עם תמיכה בעורך WYSIWYG ותצוגה מקדימה בזמן אמת",
        },
        {
          icon: <Users className="h-12 w-12" />,
          title: "ניהול משתמשים והרשאות",
          description:
            "מערכת הרשאות גמישה המאפשרת הגדרת תפקידים מותאמים אישית ובקרת גישה מדויקת",
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "עדכונים בזמן אמת",
          description:
            "שינויים מתעדכנים מיידית בכל המערכת עם תמיכה בביטול פעולות ושחזור גרסאות",
        },
      ]}
      technologies={[
        {
          category: "Frontend",
          items: [
            "React - לבניית ממשק משתמש מודרני ומגיב",
            "shadcn/ui - לעיצוב עקבי ונגיש",
            "TipTap - לעריכת תוכן עשיר",
          ],
        },
        {
          category: "Backend",
          items: [
            "Supabase - לניהול נתונים ואימות משתמשים",
            "Row Level Security - לאבטחת מידע ברמת השורה",
            "Realtime - לעדכונים בזמן אמת",
          ],
        },
      ]}
      screenshots={[
        {
          src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
          alt: "ממשק ניהול תוכן",
        },
        {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
          alt: "ניהול משתמשים",
        },
      ]}
    />
  );
};

export default CMS;
