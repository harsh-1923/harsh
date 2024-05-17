import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import ProcessingButtonPage from "./pages/Experiments/ProcessingButtonPage/ProcessingButtonPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/exp/processing-button", element: <ProcessingButtonPage /> },
];

function App() {
  return (
    <main className="app">
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </main>
  );
}

export default App;
