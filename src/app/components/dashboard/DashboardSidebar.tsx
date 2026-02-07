// ============================================
// DASHBOARD SIDEBAR - Navigation sidebar
// ============================================
import { Link, useNavigate } from "react-router-dom";
import { Home, Calendar, Pill, MessageCircle, User, LogOut, Stethoscope, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole?: string;
}

export default function DashboardSidebar({ activeTab, setActiveTab, userRole = "patient" }: DashboardSidebarProps) {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    // TODO: Backend - Implement logout logic here
    // Example: await logoutUser();
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  // Base items for all users
  let navItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "chat", label: "AI Assistant", icon: MessageCircle },
  ];

  // Role-based tabs
  if (userRole === "patient") {
    navItems.splice(2, 0, { id: "medications", label: "Medications", icon: Pill });
  } else if (userRole === "doctor") {
    navItems = [
      { id: "overview", label: "Overview", icon: Home },
      { id: "appointments", label: "Appointments", icon: Calendar },
      { id: "medications", label: "Patient Records", icon: Stethoscope },
      { id: "chat", label: "AI Assistant", icon: MessageCircle },
    ];
  } else if (userRole === "caregiver") {
    navItems = [
      { id: "overview", label: "Overview", icon: Home },
      { id: "appointments", label: "Appointments", icon: Calendar },
      { id: "medications", label: "Medications", icon: Heart },
      { id: "chat", label: "AI Assistant", icon: MessageCircle },
    ];
  }


  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 w-full">
        <Link to="/" className="flex items-center justify-center w-full gap-3">
          <img src="/logo.png" alt="Riva Logo" className="h-18 w-18 object-contain" />
        </Link>
      </div>

      {/* User Info - with Dropdown Menu */}
      <div className="relative">
        <button
          onClick={() => setShowUserMenu(!showUserMenu)}
          className="w-full p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors text-left flex items-center justify-between"
        >
          <div className="flex items-center gap-3 flex-1">
            <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <User className="w-7 h-7 text-sky-600" />
            </div>
            <div className="min-w-0">
              <h3 className="inter-sans font-bold text-lg text-gray-900">Ahmed Hassan</h3>
              <p className="inter-sans text-sm text-gray-600 capitalize">{userRole}</p>
            </div>
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showUserMenu ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown Menu */}
        {showUserMenu && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-10">
            <button
              onClick={() => {
                navigate("/profile");
                setShowUserMenu(false);
              }}
              className="w-full px-6 py-3 text-left inter-sans font-semibold text-gray-900 hover:bg-sky-50 transition-colors flex items-center gap-3 border-b border-gray-100"
            >
              <User className="w-4 h-4 text-sky-600" />
              View Profile
            </button>
            <button
              onClick={() => {
                handleLogout();
                setShowUserMenu(false);
              }}
              className="w-full px-6 py-3 text-left inter-sans font-semibold text-red-600 hover:bg-red-50 transition-colors flex items-center gap-3"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl inter-sans font-semibold text-lg transition-all ${
              activeTab === item.id
                ? "bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <item.icon className="w-6 h-6" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-4 rounded-xl inter-sans font-semibold text-lg text-red-600 hover:bg-red-50 transition-all"
        >
          <LogOut className="w-6 h-6" />
          Logout
        </button>
      </div>
    </aside>
  );
}
