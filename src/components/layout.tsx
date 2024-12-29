import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  MessageCircle,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Home,
  ScrollText,
  Receipt,
  HelpCircle,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Layout = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("[Layout] Component mounted");

    const handleScroll = () => {
      const sections = ["projects", "contact", "quote", "faq"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(`[Layout] Current location: ${location.pathname}`);
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const menuItems = [
    {
      id: "projects",
      label: "פרויקטים",
      icon: <Briefcase className="h-4 w-4" />,
      variant: "ghost",
    },
    {
      id: "contact",
      label: "צור קשר",
      icon: <MessageCircle className="h-4 w-4" />,
      variant: "ghost",
    },
    {
      id: "faq",
      label: "שאלות נפוצות",
      icon: <HelpCircle className="h-4 w-4" />,
      variant: "ghost",
    },
    {
      id: "quote",
      label: "הצעת מחיר",
      icon: <Receipt className="h-4 w-4" />,
      variant: "default",
    },
    {
      id: "docs",
      label: "מסמכים",
      icon: <ScrollText className="h-4 w-4" />,
      variant: "ghost",
      onClick: () => navigate("/docs/faq"),
    },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  const handleForward = () => {
    navigate(1);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header Section */}
      <header className="bg-background border-b border-border fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-bold text-foreground hover:text-muted-foreground transition-colors"
            >
              Byte
            </Link>
            <div
              className="text-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <h1 className="text-2xl font-bold text-foreground">
                Byte | פיתוח אפליקציות web
              </h1>
              <p className="text-sm text-muted-foreground">
                בניית אפליקציות מודרניות באמצעות React, Node.js וטכנולוגיות ענן
              </p>
            </div>
            <div className="w-[100px]"></div> {/* Spacer for alignment */}
          </nav>
        </div>
      </header>

      {/* Side Menu */}
      <div
        className={cn(
          "fixed right-0 top-0 h-screen bg-card shadow-sm transition-all duration-300 ease-in-out hover:shadow-md border-l border-border z-40",
          isMenuCollapsed ? "w-12" : "w-40 p-4",
        )}
      >
        <div className="pt-20">
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-background border border-border shadow-sm hover:bg-accent"
            onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
          >
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                isMenuCollapsed ? "rotate-0" : "rotate-180",
              )}
            />
          </Button>

          <div className="flex flex-col space-y-4">
            {/* Navigation Controls */}
            <div className="flex flex-col space-y-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        if (location.pathname !== "/") {
                          navigate("/");
                        }
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={cn(
                        "flex items-center justify-center w-full",
                        isMenuCollapsed && "w-8 h-8 p-0",
                      )}
                    >
                      <Home className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="ml-2">
                    דף הבית
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleBack}
                      className={cn(
                        "flex items-center justify-center w-full mt-2",
                        isMenuCollapsed && "w-8 h-8 p-0",
                      )}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="ml-2">
                    חזור
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleForward}
                      className={cn(
                        "flex items-center justify-center w-full mt-2",
                        isMenuCollapsed && "w-8 h-8 p-0",
                      )}
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="ml-2">
                    קדימה
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="border-t border-border pt-4">
              <TooltipProvider>
                {menuItems.map((item) => (
                  <Tooltip key={item.id}>
                    <TooltipTrigger asChild>
                      <Button
                        variant={item.variant as "ghost" | "default"}
                        onClick={() => {
                          if (item.onClick) {
                            item.onClick();
                          } else {
                            scrollToSection(item.id);
                          }
                          setIsMenuCollapsed(true);
                        }}
                        className={cn(
                          "flex items-center gap-2 transition-all w-full mb-2",
                          item.variant === "ghost" &&
                            "hover:bg-accent text-foreground",
                          item.variant === "default" &&
                            "hover:bg-primary/90 text-primary-foreground",
                          activeSection === item.id &&
                            (item.variant === "ghost"
                              ? "bg-accent font-medium"
                              : "bg-primary/90"),
                          isMenuCollapsed && "w-8 h-8 p-0",
                        )}
                      >
                        {item.icon}
                        {!isMenuCollapsed && item.label}
                      </Button>
                    </TooltipTrigger>
                    {isMenuCollapsed && (
                      <TooltipContent side="left" className="ml-2">
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>

            {/* Theme Toggle at the bottom */}
            <div className="mt-auto pt-4 border-t border-border">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "flex items-center gap-2",
                      isMenuCollapsed ? "justify-center" : "justify-between",
                    )}
                  >
                    {!isMenuCollapsed && (
                      <span className="text-sm text-muted-foreground">מצב</span>
                    )}
                    <ThemeToggle />
                  </div>
                </TooltipTrigger>
                {isMenuCollapsed && (
                  <TooltipContent side="left" className="ml-2">
                    החלף מצב
                  </TooltipContent>
                )}
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20 pr-12">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="bg-background border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center space-x-reverse space-x-6 mb-8">
            <a
              href="https://github.com/liomedan"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/liomedan"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:liomedan@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-center text-base text-muted-foreground">
              © 2024 Byte. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
