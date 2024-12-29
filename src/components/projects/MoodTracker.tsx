import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Heart, LineChart, Calendar } from "lucide-react";

const MoodTracker = () => {
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
            יומן מצב רוח אישי
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            אפליקציה למעקב אחר מצבי רוח, זיהוי דפוסים רגשיים וניהול יומן אישי
            לשיפור הבנת הרגשות שלך
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Heart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">מעקב רגשות</h3>
            <p className="text-gray-600">
              תיעוד יומי של מצבי רוח ורגשות, עם אפשרות להוספת הערות ותובנות
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <LineChart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">ניתוח דפוסים</h3>
            <p className="text-gray-600">
              זיהוי דפוסים רגשיים וגורמים משפיעים על מצב הרוח לאורך זמן
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">יומן אישי</h3>
            <p className="text-gray-600">
              כתיבת יומן מפורט עם אפשרות לתיוג רגשות ואירועים משמעותיים
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
                <li>• React - לבניית ממשק משתמש אינטואיטיבי</li>
                <li>• shadcn/ui - לעיצוב מודרני ונקי</li>
                <li>• D3.js - להצגת ניתוחים ודפוסים רגשיים</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js - לניהול הלוגיקה העסקית</li>
                <li>• Supabase - לאחסון מאובטח של נתונים אישיים</li>
                <li>• ML Models - לניתוח דפוסים וזיהוי מגמות</li>
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
            src="https://images.unsplash.com/photo-1486748719772-dac71e23eaa1"
            alt="Mood Tracking Interface"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1517697471339-4aa32003c11a"
            alt="Analytics Dashboard"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
