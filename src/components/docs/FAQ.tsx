import { DocsLayout } from "./DocsLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQ() {
  return (
    <DocsLayout currentChapter="faq">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold mb-8">שאלות נפוצות</h1>

        <Accordion type="single" collapsible className="w-full text-xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>איך מתחילים פרויקט חדש?</AccordionTrigger>
            <AccordionContent>
              <div className="text-xl">
                התהליך מתחיל בפגישת ייעוץ ראשונית בה נבין את הצרכים והמטרות שלך.
                לאחר מכן נגבש הצעת מחיר מפורטת ונתחיל בתכנון ואפיון הפרויקט.
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>כמה זמן לוקח לבנות אפליקציה?</AccordionTrigger>
            <AccordionContent>
              <div className="text-xl">
                משך הפיתוח תלוי בגודל ומורכבות הפרויקט. פרויקט בסיסי יכול לקחת
                כחודש, בעוד פרויקטים מורכבים יותר עשויים להימשך מספר חודשים.
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              האם אתם מספקים תמיכה לאחר השקת האפליקציה?
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-xl">
                כן, אנחנו מציעים חבילות תמיכה ותחזוקה שונות הכוללות עדכונים,
                תיקון באגים, וסיוע טכני שוטף בהתאם לצרכי הלקוח.
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              האם האפליקציות שלכם מותאמות למובייל?
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-xl">
                כל האפליקציות שלנו מפותחות בגישת Mobile First ומותאמות באופן מלא
                למכשירים ניידים, טאבלטים ומחשבים שולחניים.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </DocsLayout>
  );
}
