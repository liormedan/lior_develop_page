import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { useNavigate } from "react-router-dom";

interface DocsLayoutProps {
  children: React.ReactNode;
  currentChapter: string;
}

const chapters = [
  { id: "intro", title: "מבוא לפיתוח" },
  { id: "setup", title: "התקנה והגדרות" },
  { id: "faq", title: "שאלות נפוצות" },
  { id: "collaboration", title: "עבודה משותפת" },
];

export function DocsLayout({ children, currentChapter }: DocsLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden" dir="rtl">
      {/* Sidebar */}
      <div className="w-64 border-l bg-card">
        <ScrollArea className="h-full py-6">
          <div className="px-4 space-y-2">
            {chapters.map((chapter) => (
              <Button
                key={chapter.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  currentChapter === chapter.id && "bg-accent",
                )}
                onClick={() => navigate(`/docs/${chapter.id}`)}
              >
                {chapter.title}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto py-12 px-6">{children}</div>
      </div>
    </div>
  );
}
