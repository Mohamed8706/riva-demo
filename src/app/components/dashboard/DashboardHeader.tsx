// ============================================
// DASHBOARD HEADER - Top header with notifications
// ============================================
import { motion } from "motion/react";
import { Bell } from "lucide-react";

export default function DashboardHeader() {
  return (
    <motion.header 
      className="bg-white border-b border-gray-200 px-8 py-6 shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="inter-sans font-bold text-3xl text-gray-900">
            Welcome back, Ahmed 👋
          </h1>
          <p className="inter-sans text-lg text-gray-600 mt-1">
            Here's your health summary for today
          </p>
        </div>
        
        {/* Notification Bell */}
        <motion.button 
          className="relative p-3 text-gray-400 hover:text-sky-600 rounded-xl hover:bg-sky-50 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Bell className="w-7 h-7" />
          <span className="absolute top-2 right-2 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></span>
        </motion.button>
      </div>
    </motion.header>
  );
}
