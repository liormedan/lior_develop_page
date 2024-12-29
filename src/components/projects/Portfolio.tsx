import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Layout, Code, Palette } from "lucide-react";

const Portfolio = () => {
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
            פורטפוליו אישי
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            אתר תדמית מודרני להצגת פרויקטים, יצירת קשר עם לקוחות פוטנציאליים
            וקבלת הצעות מחיר
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Layout className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">תצוגת פרויקטים</h3>
            <p className="text-gray-600">
              הצגה מרשימה של פרויקטים קודמים עם תיאורים מפורטים וטכנולוגיות
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Code className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">טכנולוגיות מתקדמות</h3>
            <p className="text-gray-600">
              שימוש בטכנולוגיות החדשניות ביותר לביצועים מהירים ועיצוב מרשים
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Palette className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">עיצוב מותאם אישית</h3>
            <p className="text-gray-600">
              עיצוב מודרני ונקי המותאם לצרכים הספציפיים של הפרויקט
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
                <li>• React - לבניית ממשק משתמש מודרני</li>
                <li>• Vite - לביצועים מהירים</li>
                <li>• Tailwind CSS - לעיצוב גמיש ומותאם אישית</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">UI Components</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• shadcn/ui - לרכיבי UI מודרניים</li>
                <li>• Lucide Icons - לאייקונים וקטוריים</li>
                <li>• Responsive Design - להתאמה לכל המסכים</li>
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Portfolio Home"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt="Projects Grid"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
