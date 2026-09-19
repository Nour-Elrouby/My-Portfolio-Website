import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
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

const KaggleIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 5h3v10.3L21.2 5h4.1L14.2 16.1 25.7 27h-4.2L11 17v10H8V5Z" />
  </svg>
);

const heroRoles = [
  "Generative AI Engineer",
  "RAG & Agentic AI Engineer",
  "LLM Evaluation Engineer",
  "AI Systems Builder",
];

const MotionLink = motion.create(Link);

const LandingPage: React.FC = () => {
  const [showEnterButton, setShowEnterButton] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnterButton(true);
    }, shouldReduceMotion ? 0 : 2700);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <div className="portfolio-landing relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.25 }}
          >
            <span className="block sm:inline">Nour</span>{" "}
            <span className="block sm:inline">El-Rouby</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-8 h-8"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.75 }}
          >
            <TypewriterText
              texts={heroRoles}
              delay={2000}
              speed={80}
              startDelay={750}
            />
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-6 mb-12"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 1.35 }}
          >
            <motion.a
              href="https://github.com/Nour-Elrouby"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="hero-social-link hero-social-link--github transition-colors duration-300"
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.08 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nourelrouby/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="hero-social-link hero-social-link--linkedin transition-colors duration-300"
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.08 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              href="https://www.kaggle.com/nourdeveloper1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaggle"
              title="Kaggle"
              className="hero-social-link hero-social-link--kaggle transition-colors duration-300"
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.08 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <KaggleIcon size={32} />
            </motion.a>
            <motion.a
              href="https://medium.com/@nour.developer1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              title="Medium"
              className="hero-social-link hero-social-link--medium transition-colors duration-300"
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.08 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <MediumIcon size={32} />
            </motion.a>
          </motion.div>

          <div className="hero-entry-slot">
            {showEnterButton && (
              <MotionLink
                to="/about"
                className="hero-entry-link group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
              >
                Explore My Work
                <ArrowRight className="inline ml-2" size={20} aria-hidden="true" />
              </MotionLink>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
