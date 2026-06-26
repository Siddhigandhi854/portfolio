import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ProjectDetail from "./pages/ProjectDetail";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Add a slight delay to ensure React has fully mounted and rendered elements
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Internships />
      <Projects />
      <Certifications />
      <Achievements />
      <Resume />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#050816] text-[#F8FAFC]">
        {/* Mouse Light Backdrop glow */}
        <CursorGlow />
        
        {/* Router level helper to scroll window to top on sub-navigation */}
        <ScrollToTop />
        
        {/* Navigation Sticky Blur Header */}
        <Navbar />
        
        {/* Main Content Router */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        
        {/* Page Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
