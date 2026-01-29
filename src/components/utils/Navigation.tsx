import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

const logo = "../../../public/logo.png";

export function Navigation() {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full px-4 md:px-8 py-4 md:py-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div
            className="shrink-0 cursor-pointer"
            onClick={() => navigate("/")}
            aria-hidden
          >
            <img src={logo} alt="RIVA Logo" className="w-20 h-20 object-contain rounded-lg" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-8 plus-jakarta-sans font-medium text-slate-600">
            <a
              href="#about"
              
              className="text-sm md:text-base hover:text-sky-500 transition-colors"
            >About Us</a>
            <a
              href="#features"
              
              className="text-sm md:text-base hover:text-sky-500 transition-colors"
            >Features</a>
            <a
              href="#reviews"
              
              className="text-sm md:text-base hover:text-sky-500 transition-colors"
            >Reviews</a>
            <a
              href="#contact"
              
              className="text-sm md:text-base hover:text-sky-500 transition-colors"
            >Contact Us</a>
            <NavLink to="/dashboard" className="text-sm md:text-base hover:text-sky-500 transition-colors">Dashboard</NavLink>
          </div>
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3 md:gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-4 md:px-6 py-2 md:py-3 border-2 border-sky-500 rounded-3xl 
                font-bold text-blue-500 text-sm md:text-base
              hover:bg-sky-50 transition-colors cursor-pointer"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/roles")}
              className="px-4 md:px-6 py-2 md:py-3 bg-sky-500 rounded-3xl plus-jakarta-sans 
              font-bold text-white text-sm md:text-base shadow-lg shadow-sky-500/50
            hover:bg-sky-600 transition-colors cursor-pointer"
            >
              Create Account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={toggleMobileMenu}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <img src={logo} alt="RIVA Logo" className="h-10 w-10 object-contain" />
                <button onClick={toggleMobileMenu} className="p-2 rounded-md hover:bg-slate-100">
                  <X className="size-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <a href="#about"  className="text-lg py-3 px-4 rounded-lg text-slate-700 hover:bg-slate-100">About Us</a>
                <a href="#features" className="text-lg py-3 px-4 rounded-lg text-slate-700 hover:bg-slate-100">Features</a>
                <a href="#reviews" className="text-lg py-3 px-4 rounded-lg text-slate-700 hover:bg-slate-100">Reviews</a>
                <a href="#contact" className="text-lg py-3 px-4 rounded-lg text-slate-700 hover:bg-slate-100">Contact Us</a>

                <div className="mt-6">
                  <button onClick={() => { toggleMobileMenu(); navigate('/login'); }} className="w-full py-3 mb-3 border-2 border-sky-500 rounded-3xl text-sky-500 font-bold">Log In</button>
                  <button onClick={() => { toggleMobileMenu(); navigate('/signup'); }} className="w-full py-3 bg-sky-500 rounded-3xl text-white font-bold">Create Account</button>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
