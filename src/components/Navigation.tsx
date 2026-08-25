import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Code2,
  FolderGit2,
  GraduationCap,
  Home,
  Laptop2Icon,
  Mail,
  Menu,
  Moon,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import "./Navigation.css";

type Theme = "dark" | "light";

const getSavedTheme = (): Theme | null => {
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : null;
  } catch {
    return null;
  }
};

const getInitialTheme = (): Theme => {
  const documentTheme = document.documentElement.dataset.theme;
  if (documentTheme === "light" || documentTheme === "dark") {
    return documentTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const navItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/about", label: "About", icon: UserRound },
    { id: "/skills", label: "Skills", icon: Code2 },
    { id: "/freelancing", label: "Freelancing", icon: Laptop2Icon },
    { id: "/projects", label: "Projects", icon: FolderGit2 },
    { id: "/education", label: "Education", icon: GraduationCap },
    { id: "/contact", label: "Contact", icon: Mail },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // The selected theme still applies for this session if storage is blocked.
    }
    window.dispatchEvent(
      new CustomEvent("portfolio-theme-change", { detail: nextTheme }),
    );
  };

  useEffect(() => {
    closeMobileMenu();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const colorScheme = window.matchMedia("(prefers-color-scheme: light)");
    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
      if (getSavedTheme()) return;

      const nextTheme = event.matches ? "light" : "dark";
      setTheme(nextTheme);
      document.documentElement.dataset.theme = nextTheme;
      document.documentElement.style.colorScheme = nextTheme;
      window.dispatchEvent(
        new CustomEvent("portfolio-theme-change", { detail: nextTheme }),
      );
    };

    colorScheme.addEventListener("change", handleColorSchemeChange);
    return () =>
      colorScheme.removeEventListener("change", handleColorSchemeChange);
  }, []);

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
              <button
                type="button"
                onClick={toggleTheme}
                className="portfolio-nav__theme-toggle"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Moon aria-hidden="true" />
                ) : (
                  <Sun aria-hidden="true" />
                )}
              </button>
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
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="portfolio-nav__mobile-theme-toggle"
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  >
                    {theme === "dark" ? (
                      <Moon aria-hidden="true" />
                    ) : (
                      <Sun aria-hidden="true" />
                    )}
                    <span>
                      {theme === "dark" ? "Light mode" : "Dark mode"}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
