import { DocsLayout } from "./DocsLayout";

export default function Intro() {
  return (
    <DocsLayout currentChapter="intro">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold mb-8">מבוא לפיתוח</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">תהליך הפיתוח</h2>
          <p className="text-xl">
            תהליך הפיתוח שלנו מתחיל בהבנה מעמיקה של צרכי הלקוח. אנחנו מאמינים
            בגישה איטרטיבית, שבה כל שלב מתוכנן ומבוצע בקפידה תוך שיתוף פעולה מלא
            עם הלקוח.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">טכנולוגיות</h2>
          <p className="text-xl">
            אנחנו משתמשים בטכנולוגיות המתקדמות ביותר בתעשייה, כולל:
          </p>
          <ul className="list-disc list-inside text-xl space-y-2 pr-6">
            <li>React לפיתוח ממשק משתמש</li>
            <li>Node.js לצד השרת</li>
            <li>Supabase לניהול נתונים</li>
            <li>Tailwind CSS לעיצוב</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">מתודולוגיית עבודה</h2>
          <p className="text-xl">
            אנו עובדים בשיטת Agile, המאפשרת גמישות ותגובתיות לשינויים. כל פרויקט
            מחולק לספרינטים קצרים, עם משוב ועדכונים שוטפים.
          </p>
        </section>
      </div>
    </DocsLayout>
  );
}
