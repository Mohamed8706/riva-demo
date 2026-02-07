// ============================================
// NAVBAR COMPONENT - Responsive navigation bar
// ============================================
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = location.pathname === "/";

  return (
    <motion.nav 
      className="w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img 
              src="/logo.png"
              alt="Riva Logo"
              className="h-18 w-18 object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {isHome && (
              <>
                <Link 
                  to="/login"
                  className="px-6 py-3 inter-sans font-semibold text-gray-700 hover:text-sky-600 transition-colors rounded-xl hover:bg-gray-50"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup"
                  className="px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl inter-sans font-bold hover:shadow-lg transition-all hover:scale-105 shadow-md"
                >
                  Get Started
                </Link>
              </>
            )}
            
            {!isHome && location.pathname !== "/dashboard" && (
              <>
                <Link 
                  to="/"
                  className="px-6 py-3 inter-sans font-semibold text-gray-700 hover:text-sky-600 transition-colors rounded-xl hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link 
                  to="/dashboard"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl inter-sans font-bold hover:shadow-lg transition-all hover:scale-105 shadow-md"
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {isHome && (
              <>
                <Link 
                  to="/login"
                  className="block px-6 py-3 inter-sans font-semibold text-gray-700 hover:bg-gray-50 rounded-xl text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup"
                  className="block px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl inter-sans font-bold text-center shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
            
            {!isHome && location.pathname !== "/dashboard" && (
              <>
                <Link 
                  to="/"
                  className="block px-6 py-3 inter-sans font-semibold text-gray-700 hover:bg-gray-50 rounded-xl text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/dashboard"
                  className="block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl inter-sans font-bold text-center shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
