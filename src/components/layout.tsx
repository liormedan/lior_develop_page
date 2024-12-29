import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    console.log("[Layout] Component mounted");
  }, []);

  const location = useLocation();
  console.log(`[Layout] Current location: ${location.pathname}`);
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header Section */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900">
                ליאור מדן
              </Link>
              <ThemeToggle />
            </div>
            {isHomePage ? (
              <div className="flex items-center space-x-reverse space-x-4">
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("projects")}
                >
                  פרויקטים
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("about")}
                >
                  אודות
                </Button>
                <Button onClick={() => scrollToSection("contact")}>
                  צור קשר
                </Button>
              </div>
            ) : null}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center space-x-reverse space-x-6 mb-8">
            <a
              href="https://github.com/liomedan"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/liomedan"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:liomedan@gmail.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-center text-base text-gray-400">
              © 2024 ליאור מדן. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
