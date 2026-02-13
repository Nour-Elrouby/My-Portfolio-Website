import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import EducationPage from "./pages/EducationPage";
import FreelancingPage from "./pages/FreelancingPage";
import ContactPage from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import "./index.css";

function AppContent() {
  const location = useLocation();

  const hideNavOn = ["/"];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {!hideNavOn.includes(location.pathname) && <Navigation />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/freelancing" element={<FreelancingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router basename="/My-Portfolio-Website">
      <AppContent />
    </Router>
  );
}

export default App;

/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import "./index.css";

function AppContent() {
  const location = useLocation();

  const hideNavOn = ["/My-Portfolio-Website"];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {!hideNavOn.includes(location.pathname) && <Navigation />}
      <Routes>
        <Route path="My-Portfolio-Website" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
// AppContent component handles the main content and navigation
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;*/

//import ExperiencePage from "./pages/ExperiencePage";
//import FreelancingPage from "./pages/FreelancingPage";

/*
//import React from "react";
//import { AnimatePresence } from "framer-motion"; // Importing framer-motion for animations
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//<BrowserRouter basename="/The_Portfolio"></BrowserRouter>;
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />
        <Routes>
          <Route path="My-Portfolio-Website" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/about"
            element={
              <>
                <Navigation />
                <AboutPage />
              </>
            }
          />
          <Route
            path="/skills"
            element={
              <>
                <Navigation />
                <SkillsPage />
              </>
            }
          />
          {/* <Route
            path="/experience"
            element={
              <>
                <Navigation />
                <ExperiencePage />
              </>
            }
          />
          <Route
            path="/freelancing"
            element={
              <>
                <Navigation />
                <FreelancingPage />
              </>
            }
          /> }
          <Route
            path="/projects"
            element={
              <>
                <Navigation />
                <ProjectsPage />
              </>
            }
          />
          <Route
            path="/education"
            element={
              <>
                <Navigation />
                <EducationPage />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navigation />
                <ContactPage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/
