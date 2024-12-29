import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import BudgetManager from "./components/projects/BudgetManager";
import MoodTracker from "./components/projects/MoodTracker";
import FamilyWebsites from "./components/projects/FamilyWebsites";
import EventWebsites from "./components/projects/EventWebsites";
import Portfolio from "./components/projects/Portfolio";
import CMS from "./components/projects/CMS";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ui/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";
import FAQ from "./components/docs/FAQ";
import Intro from "./components/docs/Intro";
import Setup from "./components/docs/Setup";
import Collaboration from "./components/docs/Collaboration";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <TooltipProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects/budget-manager"
              element={<BudgetManager />}
            />
            <Route path="/projects/mood-tracker" element={<MoodTracker />} />
            <Route
              path="/projects/family-websites"
              element={<FamilyWebsites />}
            />
            <Route
              path="/projects/event-websites"
              element={<EventWebsites />}
            />
            <Route path="/projects/portfolio" element={<Portfolio />} />
            <Route path="/projects/cms" element={<CMS />} />
            <Route path="/docs/faq" element={<FAQ />} />
            <Route path="/docs/intro" element={<Intro />} />
            <Route path="/docs/setup" element={<Setup />} />
            <Route path="/docs/collaboration" element={<Collaboration />} />
          </Route>
        </Routes>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
