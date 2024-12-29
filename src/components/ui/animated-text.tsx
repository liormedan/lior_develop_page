import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
}) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent animate-gradient",
        className,
      )}
    >
      {text}
    </span>
  );
};
