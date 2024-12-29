import * as React from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: string;
  storageKey?: string;
} & React.HTMLAttributes<HTMLDivElement>;

type ThemeProviderState = {
  theme: string;
  setTheme: (theme: string) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext =
  React.createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(() => {
    console.log("[ThemeProvider] Initializing theme");
    const savedTheme = localStorage.getItem(storageKey);
    console.log("[ThemeProvider] Saved theme:", savedTheme);
    return savedTheme || defaultTheme;
  });

  React.useEffect(() => {
    console.log(`[ThemeProvider] Theme changed to: ${theme}`);
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      console.log(`[ThemeProvider] System theme detected: ${systemTheme}`);
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: string) => {
      console.log(`[ThemeProvider] Setting new theme: ${theme}`);
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
