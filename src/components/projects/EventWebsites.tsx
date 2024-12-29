import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Calendar, Gift, Camera } from "lucide-react";

const EventWebsites = () => {
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

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            אתרי אירועים מיוחדים
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            פלטפורמה לבניית אתרים מרשימים לאירועים מיוחדים כמו חתונות, בר מצוות
            ואירועים משפחתיים
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">ניהול הזמנות</h3>
            <p className="text-gray-600">
              מערכת RSVP מתקדמת עם אפשרות לניהול רשימת אורחים והעדפות תפריט
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Gift className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">רשימת מתנות</h3>
            <p className="text-gray-600">
              ניהול רשימת מתנות אינטראקטיבית עם אפשרויות תשלום מובנות
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Camera className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">גלריית תמונות</h3>
            <p className="text-gray-600">
              שיתוף תמונות מהאירוע בזמן אמת ואפשרות להעלאת תמונות על ידי האורחים
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
                <li>• React - לבניית ממשק משתמש דינמי</li>
                <li>• Vite - לפיתוח מהיר ויעיל</li>
                <li>• shadcn/ui - לעיצוב מודרני ומרשים</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Supabase - לניהול משתמשים ונתונים</li>
                <li>• Storage API - לניהול תמונות וקבצים</li>
                <li>• Stripe - לעיבוד תשלומים מאובטח</li>
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
            src="https://images.unsplash.com/photo-1519741497674-611481863552"
            alt="Event Landing Page"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
            alt="RSVP System"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default EventWebsites;
