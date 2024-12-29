import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={cn("text-lg text-muted-foreground", className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            "inline-block transition-all duration-700 opacity-0 translate-y-2",
            isVisible && "opacity-100 translate-y-0",
            word === "Byte" && "text-primary font-bold",
          )}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );
};
