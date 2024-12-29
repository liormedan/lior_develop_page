import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Users, Image, Share2 } from "lucide-react";

const FamilyWebsites = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <div className="bg-white border-b pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Button
            variant="ghost"
            className="mb-8 flex items-center gap-2"
            onClick={() => window.history.back()}
          >
            חזרה
            <ArrowRight className="h-4 w-4" />
          </Button>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">אתרי משפחות</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            בניית אתרים מותאמים אישית למשפחות, המאפשרים שיתוף זכרונות, אירועים
            ותמונות משפחתיות בצורה פרטית ומאובטחת
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">אלבום משפחתי</h3>
            <p className="text-gray-600">
              שיתוף תמונות וזכרונות משפחתיים בצורה מאובטחת עם אפשרויות ארגון
              מתקדמות
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Image className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">עץ משפחה</h3>
            <p className="text-gray-600">
              יצירת ותצוגת עץ משפחה אינטראקטיבי עם אפשרות להוספת מידע ותמונות
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Share2 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">לוח אירועים</h3>
            <p className="text-gray-600">
              ניהול ותיאום אירועים משפחתיים עם התראות ואפשרויות RSVP
            </p>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">טכנולוגיות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React - לבניית ממשק משתמש נוח ואינטואיטיבי</li>
                <li>• Next.js - לביצועים מהירים ו-SEO מותאם</li>
                <li>• Tailwind CSS - לעיצוב מותאם אישית</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Supabase - לאחסון מאובטח ואימות משתמשים</li>
                <li>• Storage API - לניהול קבצים ותמונות</li>
                <li>• Real-time Updates - לעדכונים מיידיים</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">תצוגה מקדימה</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300"
            alt="Family Album"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1509924603848-aca5e5f276d7"
            alt="Family Tree"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FamilyWebsites;
