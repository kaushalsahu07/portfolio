import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Snowfall from "react-snowfall";
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
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        radius={[0.5, 1.5]}
        snowflakeCount={50}
      />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </HashRouter>
  </StrictMode>
);
