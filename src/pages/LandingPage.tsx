import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Github,
  Linkedin,
} from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";
import TypewriterText from "../components/TypewriterText";

const MediumIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
  >
    <circle cx="8" cy="16" r="8" />
    <ellipse cx="21" cy="16" rx="4" ry="7.5" />
    <ellipse cx="29" cy="16" rx="1.5" ry="6.5" />
  </svg>
);

const heroRoles = [
  "Generative AI Engineer",
  "RAG & Agentic AI Engineer",
  "LLM Evaluation Engineer",
  "AI Systems Builder",
];

const LandingPage: React.FC = () => {
  const [showEnterButton, setShowEnterButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnterButton(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterPortfolio = () => {
    navigate("/about");
  };

  return (
    <div className="portfolio-landing relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="block sm:inline">Nour</span>{" "}
            <span className="block sm:inline">El-Rouby</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <TypewriterText
              texts={heroRoles}
              delay={2000}
              startDelay={2000}
            />
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.a
              href="https://github.com/Nour-Elrouby"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hero-social-link hero-social-link--github transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nourelrouby/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hero-social-link hero-social-link--linkedin transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              href="https://www.kaggle.com/nourdeveloper1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaggle"
              className="hero-social-link hero-social-link--kaggle transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="hero-social-wordmark" aria-hidden="true">
                Kaggle
              </span>
            </motion.a>
            <motion.a
              href="https://medium.com/@nour.developer1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="hero-social-link hero-social-link--medium transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <MediumIcon size={32} />
            </motion.a>
          </motion.div>

          {showEnterButton && (
            <motion.button
              onClick={handleEnterPortfolio}
              className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
              <motion.div
                className="inline-block ml-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown className="inline" size={20} />
              </motion.div>
            </motion.button>
          )}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </div>
  );
};

export default LandingPage;
