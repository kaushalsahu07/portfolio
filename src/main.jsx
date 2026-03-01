import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";

// Web Files
import Navbar from "./components/Navbar";
import Home from "./components/Home";
const About = lazy(() => import("./components/About"));
const Project = lazy(() => import("./components/Project"));
const Contact = lazy(() => import("./components/Contact"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Navbar />
      <Home />
      <Suspense fallback={null}>
        <About />
        <Project />
        <Contact />
      </Suspense>
    </HashRouter>
  </StrictMode>
);
