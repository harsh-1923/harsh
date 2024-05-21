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
];

function App() {
  return (
    <main className="app">
      <Header />
      <Toaster
        richColors
        toastOptions={{
          className: "toast",
        }}
      />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Analytics />
    </main>
  );
}

export default App;
