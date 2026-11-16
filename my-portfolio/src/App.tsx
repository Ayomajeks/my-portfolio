
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./Pages/ProjectDetails";

import "./index.css";

function ScrollToSection() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative isolate min-h-screen">
        <div className="fixed inset-0 -z-20 bg-woodsmoke" />
        <div className="fixed inset-0 -z-10 grid-bg opacity-50" />
        <div className="ambientGlow -top-25 -left-25" />
        <div className="ambientGlow bgImage top-[23%] -right-50" />

        <ScrollToSection/>
 
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <About />
                <Projects />
                <Contact />
              </main>
            }
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
