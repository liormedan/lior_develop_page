import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import BudgetManager from "./components/projects/BudgetManager";
import MoodTracker from "./components/projects/MoodTracker";
import FamilyWebsites from "./components/projects/FamilyWebsites";
import EventWebsites from "./components/projects/EventWebsites";
import Portfolio from "./components/projects/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/budget-manager" element={<BudgetManager />} />
          <Route path="/projects/mood-tracker" element={<MoodTracker />} />
          <Route
            path="/projects/family-websites"
            element={<FamilyWebsites />}
          />
          <Route path="/projects/event-websites" element={<EventWebsites />} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
