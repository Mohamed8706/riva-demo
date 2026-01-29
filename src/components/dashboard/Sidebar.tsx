import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FileText, 
  Settings,
  LogOut,
  ChevronLeft,
  Activity,
  MessageSquare
} from "lucide-react";
import logo from "../../../public/logo.png";
import { NavLink } from "react-router-dom";
import "./dasboard.css";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true, link : "" },
  { icon: Calendar, label: "Appointments", link : "Appointments"},
  { icon: Users, label: "Patients", link : "Patients"},
  { icon: Activity, label: "Medical Records", link : "Medical_Records" },
  { icon: MessageSquare, label: "Messages", link : "Messages" },
  { icon: FileText, label: "Reports",link : "Reports" },
  { icon: Settings, label: "Settings", link : "Settings" }
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 256 : 80 }}
      className="bg-white border-r border-gray-200 relative flex flex-col"
    >
      {/* Logo */}
      <NavLink to={"/"}>
      <div className="h-16 flex items-center justify-center border-b border-gray-200 px-4">
        <img src={logo} alt="RIVA Logo" className="h-14 w-14 object-contain" />
      </div>
        </NavLink>

      {/* Menu Items */}
      <nav className="flex-1 px-3 py-4 space-y-1 menu-items">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
            to={"" + item.link}
              key={item.label}
              className={({isActive}) => `w-full flex items-center gap-3 px-3 py-3 rounded-e-full transition-colors overflow-hidden ${
                isActive
                  ? "bg-blue-50 text-[#0F766E]"
                  : "text-gray-700  hover:text-[#0F766E]"
              }`}
            >
              <Icon className="size-5 shrink-0" />
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm"
                >
                  {item.label}
                </motion.span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <LogOut className="size-5 shrink-0" />
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm"
            >
              Logout
            </motion.span>
          )}
        </button>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:shadow-md transition-shadow"
      >
        <ChevronLeft
          className={`size-4 text-gray-600 transition-transform ${
            !isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </motion.aside>
  );
}
