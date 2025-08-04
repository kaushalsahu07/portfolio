import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";

// Web Files
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
    </HashRouter>
  </StrictMode>
);
