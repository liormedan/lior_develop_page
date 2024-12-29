import { DocsLayout } from "./DocsLayout";

export default function Collaboration() {
  return (
    <DocsLayout currentChapter="collaboration">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold mb-8">עבודה משותפת</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">תהליך העבודה</h2>
          <p className="text-xl">
            אנחנו מאמינים בשיתוף פעולה הדוק עם הלקוח לאורך כל תהליך הפיתוח. זה
            כולל:
          </p>
          <ul className="list-disc list-inside text-xl space-y-2 pr-6">
            <li>פגישות שבועיות לעדכון התקדמות</li>
            <li>שיתוף גרסאות בטא לבדיקה</li>
            <li>תקשורת שוטפת דרך ערוצי התקשורת המועדפים</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">כלי ניהול</h2>
          <p className="text-xl">אנחנו משתמשים במגוון כלים לניהול הפרויקט:</p>
          <ul className="list-disc list-inside text-xl space-y-2 pr-6">
            <li>Jira לניהול משימות</li>
            <li>GitHub לניהול קוד</li>
            <li>Figma לעיצוב ותכנון ממשק</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">תקשורת</h2>
          <p className="text-xl">אנחנו זמינים לתקשורת דרך:</p>
          <ul className="list-disc list-inside text-xl space-y-2 pr-6">
            <li>Slack לתקשורת שוטפת</li>
            <li>Zoom לפגישות וידאו</li>
            <li>אימייל לתקשורת רשמית</li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
}
