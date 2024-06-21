// routes.js
import React from "react";

// Lazy loading all the page components
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const ProcessingButtonPage = React.lazy(() =>
  import("./pages/Experiments/ProcessingButtonPage/ProcessingButtonPage")
);
const SpotifyFiltersPage = React.lazy(() =>
  import("./pages/Experiments/SpotifyFiltersPage/SpotifyFiltersPage")
);
const VercelFeedbackPage = React.lazy(() =>
  import("./pages/Experiments/VercelFeebbackPage/VercelFeebbackPage")
);
const InteractiveLinksPage = React.lazy(() =>
  import("./pages/Experiments/InteractiveLinksPage/InteractiveLinksPage")
);
const SystemStatusPage = React.lazy(() =>
  import("./pages/Experiments/SystemStatusPage/SystemStatusPage")
);
const AppleNotesMenuPage = React.lazy(() =>
  import("./pages/Experiments/AppleNotesMenuPage/AppleNotesMenuPage")
);
const TabSwitcherPage = React.lazy(() =>
  import("./pages/Experiments/TabSwitcherPage/TabSwitcherPage")
);
const SliderButtonPage = React.lazy(() =>
  import("./pages/Experiments/SliderButtonPage/SliderButtonPage")
);
const MultiSelectOptionsPage = React.lazy(() =>
  import("./pages/Experiments/MultiSelectOptionsPage/MultiSelectOptionsPage")
);
const InstagramOptionsPage = React.lazy(() =>
  import("./pages/Experiments/InstagramOptionsPage/InstagramOptionsPage")
);
const CalendarAppPage = React.lazy(() =>
  import("./pages/Experiments/CalendarAppPage/CalendarAppPage")
);
const Playground = React.lazy(() => import("./pages/Playground/Playground"));
const RadialMenuPage = React.lazy(() =>
  import("./pages/Experiments/RadialMenuPage/RadialMenuPage")
);
const WordModalPage = React.lazy(() =>
  import("./pages/Experiments/WordModalPage/WordModalPage")
);
const ProgressiveBlurPage = React.lazy(() =>
  import("./pages/Experiments/ProgressiveBlurPage/ProgressiveBlurPage")
);
const SliderGalleryPage = React.lazy(() =>
  import("./pages/Experiments/SliderGalleryPage/SliderGalleryPage")
);
const TLDR = React.lazy(() => import("./pages/TLDR/TLDR"));

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/exp/dynamic-button", element: <ProcessingButtonPage /> },
  { path: "/exp/spotify-filters", element: <SpotifyFiltersPage /> },
  { path: "/exp/vercel-feedback", element: <VercelFeedbackPage /> },
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
  { path: "/exp/progressive-blur", element: <ProgressiveBlurPage /> },
  { path: "/exp/gallery", element: <SliderGalleryPage /> },
  { path: "/tldr", element: <TLDR /> },
];

export default routes;
