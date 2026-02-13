import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
//import { Home, User, Code, Briefcase, Laptop, FolderOpen, GraduationCap, Mail, Menu, X } from 'lucide-react';
import {
  Home,
  User,
  Code,
  FolderOpen,
  GraduationCap,
  Mail,
  Menu,
  Laptop,
  X,
} from "lucide-react";

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/about", label: "About", icon: User },
    { id: "/skills", label: "Skills", icon: Code },
    // { id: '/experience', label: 'Experience', icon: Briefcase },
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

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-zinc-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" onClick={closeMobileMenu} className="block">
              <div className="text-2xl font-bold text-white">Nour El-Rouby</div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.id;
                return (
                  <Link
                    key={item.id}
                    to={item.id}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 text-white"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black shadow-xl z-50 lg:hidden overflow-y-auto border-l border-zinc-800"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-zinc-800">
                  <h2 className="text-xl font-bold text-white">Navigation</h2>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg hover:bg-zinc-800 transition-colors duration-300 text-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.id;
                    return (
                      <Link
                        key={item.id}
                        to={item.id}
                        onClick={closeMobileMenu}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:text-white hover:bg-zinc-800"
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
                {/* Mobile Menu Footer */}
                <div className="mt-8 pt-6 border-t border-zinc-800">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-2">
                      Nour El-Rouby
                    </div>
                    <p className="text-sm text-gray-400">
                      AI Engineer & Data Analyst
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
