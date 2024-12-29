import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Accessibility,
  ZoomIn,
  ZoomOut,
  Type,
  Contrast,
  MousePointer2,
  RotateCcw,
} from "lucide-react";
import { useTheme } from "./theme-provider";

export function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [biggerCursor, setBiggerCursor] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const { theme } = useTheme();

  // Calculate icon size based on font size (inverse relationship)
  const getIconSize = (baseFontSize: number) => {
    const maxIconSize = 24;
    const minIconSize = 12;
    const scale = (200 - baseFontSize) / (200 - 75);
    return Math.round(minIconSize + (maxIconSize - minIconSize) * scale);
  };

  const adjustFontSize = (increment: boolean) => {
    setFontSize((current) => {
      const step = 25;
      const newSize = increment ? current + step : current - step;
      return Math.min(Math.max(newSize, 75), 200); // Clamp between 75 and 200
    });
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;

    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }

    if (biggerCursor) {
      document.body.classList.add("bigger-cursor");
    } else {
      document.body.classList.remove("bigger-cursor");
    }

    if (dyslexicFont) {
      document.documentElement.classList.add("dyslexic-font");
    } else {
      document.documentElement.classList.remove("dyslexic-font");
    }
  }, [fontSize, highContrast, biggerCursor, dyslexicFont]);

  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
    setBiggerCursor(false);
    setDyslexicFont(false);
  };

  const iconSize = getIconSize(fontSize);

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`h-10 w-10 rounded-full bg-background ${theme === "light" ? "border-primary border-2 text-primary hover:text-primary hover:bg-primary/10" : ""}`}
          >
            <Accessibility className="h-5 w-5" />
            <span className="sr-only">פתח תפריט נגישות</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-80 p-4"
          side="top"
          align="start"
          alignOffset={-40}
        >
          <div className="space-y-4" dir="rtl">
            <h2 className="font-semibold text-lg mb-2">הגדרות נגישות</h2>

            {/* Font Size Control */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>גודל טקסט</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
                    {fontSize}%
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => adjustFontSize(true)}
                    className="hover:bg-accent"
                  >
                    <ZoomIn
                      style={{
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                      }}
                    />
                  </Button>
                  <Slider
                    min={75}
                    max={200}
                    step={25}
                    value={[fontSize]}
                    onValueChange={([value]) => setFontSize(value)}
                    className="w-24"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => adjustFontSize(false)}
                    className="hover:bg-accent"
                  >
                    <ZoomOut
                      style={{
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                      }}
                    />
                  </Button>
                </div>
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Contrast className="h-4 w-4" />
                <Label>ניגודיות גבוהה</Label>
              </div>
              <Switch
                checked={highContrast}
                onCheckedChange={setHighContrast}
              />
            </div>

            {/* Bigger Cursor */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MousePointer2 className="h-4 w-4" />
                <Label>סמן גדול</Label>
              </div>
              <Switch
                checked={biggerCursor}
                onCheckedChange={setBiggerCursor}
              />
            </div>

            {/* Dyslexic Font */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                <Label>פונט לדיסלקטים</Label>
              </div>
              <Switch
                checked={dyslexicFont}
                onCheckedChange={setDyslexicFont}
              />
            </div>

            {/* Reset Button */}
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={resetSettings}
            >
              <RotateCcw className="h-4 w-4 ml-2" />
              אפס הגדרות
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
