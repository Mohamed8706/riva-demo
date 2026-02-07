// ============================================
// FOOTER COMPONENT - Site footer with links
// ============================================
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Riva Logo" className="h-18 w-18 object-contain" />
              
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Your trusted AI healthcare companion for seniors. Making healthcare simple, accessible, and caring.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="inter-sans font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Sign In</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="inter-sans font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>support@riva.care</li>
              <li>1-800-RIVA-CARE</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2026 Riva. Dedicated to senior healthcare with compassion.</p>
        </div>
      </div>
    </footer>
  );
}
