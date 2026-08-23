import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Code,
  FolderOpen,
  GraduationCap,
  Home,
  Laptop,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/about", label: "About", icon: User },
    { id: "/skills", label: "Skills", icon: Code },
    { id: "/freelancing", label: "Freelancing", icon: Laptop },
    { id: "/projects", label: "Projects", icon: FolderOpen },
    { id: "/education", label: "Education", icon: GraduationCap },
    { id: "/contact", label: "Contact", icon: Mail },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    closeMobileMenu();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        aria-label="Primary navigation"
        className="portfolio-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="portfolio-nav__inner">
            <Link
              to="/"
              onClick={closeMobileMenu}
              aria-label="Nour El-Rouby - Home"
              className="portfolio-nav__logo"
            >
              Nour El-Rouby
            </Link>

            <div className="portfolio-nav__links">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.id;
                return (
                  <Link
                    key={item.id}
                    to={item.id}
                    aria-current={isActive ? "page" : undefined}
                    className={`portfolio-nav__link ${
                      isActive
                        ? "portfolio-nav__link--active"
                        : ""
                    }`}
                  >
                    <Icon className="portfolio-nav__link-icon" aria-hidden="true" />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="portfolio-nav__toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
              id="mobile-navigation"
              className="portfolio-nav__mobile"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="portfolio-nav__mobile-inner">
                <div className="portfolio-nav__mobile-links">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.id;
                    return (
                      <Link
                        key={item.id}
                        to={item.id}
                        onClick={closeMobileMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={`portfolio-nav__mobile-link ${
                          isActive
                            ? "portfolio-nav__mobile-link--active"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
