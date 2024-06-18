import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import ProcessingButtonPage from "./pages/Experiments/ProcessingButtonPage/ProcessingButtonPage";
import SpotifyFiltersPage from "./pages/Experiments/SpotifyFiltersPage/SpotifyFiltersPage";
import VercelFeebbackPage from "./pages/Experiments/VercelFeebbackPage/VercelFeebbackPage";
import InteractiveLinksPage from "./pages/Experiments/InteractiveLinksPage/InteractiveLinksPage";
import SystemStatusPage from "./pages/Experiments/SystemStatusPage/SystemStatusPage";
import AppleNotesMenuPage from "./pages/Experiments/AppleNotesMenuPage/AppleNotesMenuPage";
import TabSwitcherPage from "./pages/Experiments/TabSwitcherPage/TabSwitcherPage";

import { Analytics } from "@vercel/analytics/react";

import { Toaster, toast } from "sonner";
import SliderButtonPage from "./pages/Experiments/SliderButtonPage/SliderButtonPage";
import MultiSelectOptionsPage from "./pages/Experiments/MultiSelectOptionsPage/MultiSelectOptionsPage";
import InstagramOptionsPage from "./pages/Experiments/InstagramOptionsPage/InstagramOptionsPage";
import CalendarAppPage from "./pages/Experiments/CalendarAppPage/CalendarAppPage";
import Playground from "./pages/Playground/Playground";
import RadialMenuPage from "./pages/Experiments/RadialMenuPage/RadialMenuPage";
import ScrollToTop from "./components/ScrollToTop";
import WordModalPage from "./pages/Experiments/WordModalPage/WordModalPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/exp/dynamic-button", element: <ProcessingButtonPage /> },
  { path: "/exp/spotify-filters", element: <SpotifyFiltersPage /> },
  { path: "/exp/vercel-feedback", element: <VercelFeebbackPage /> },
  { path: "/exp/interactive-links", element: <InteractiveLinksPage /> },
  { path: "/exp/system-status", element: <SystemStatusPage /> },
  { path: "/exp/apple-notes-menu", element: <AppleNotesMenuPage /> },
  { path: "/exp/tab-switcher", element: <TabSwitcherPage /> },
  { path: "/exp/slider-button", element: <SliderButtonPage /> },
  { path: "/exp/multi-select", element: <MultiSelectOptionsPage /> },
  { path: "/exp/ig-chat-options", element: <InstagramOptionsPage /> },
  { path: "/exp/calendar-event", element: <CalendarAppPage /> },
  { path: "/exp/playground", element: <Playground /> },
  { path: "/exp/radial-menu", element: <RadialMenuPage /> },
  { path: "/exp/word-modal", element: <WordModalPage /> },
];

function App() {
  return (
    <main className="app">
      <Header />
      <ScrollToTop />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Toaster
        richColors
        toastOptions={{
          className: "toast",
        }}
      />
      <Analytics />
    </main>
  );
}

export default App;
