// ============================================
// OVERVIEW TAB - Dashboard overview with health metrics
// ============================================
import { motion } from "motion/react";
import { Heart, Activity, Droplet, Pill, Video, TrendingUp, CheckCircle, Clock } from "lucide-react";

export default function OverviewTab() {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Health Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Heart Rate */}
        <motion.div 
          className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl shadow-lg p-8 border border-red-100"
          whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-5 h-5" />
              <span className="inter-sans font-semibold text-sm">Normal</span>
            </div>
          </div>
          <h3 className="inter-sans font-bold text-5xl text-gray-900 mb-2">
            72 <span className="text-2xl text-gray-600">bpm</span>
          </h3>
          <p className="inter-sans text-lg text-gray-700 font-semibold">Heart Rate</p>
        </motion.div>

        {/* Blood Pressure */}
        <motion.div 
          className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl shadow-lg p-8 border border-sky-100"
          whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="inter-sans font-semibold text-sm">Good</span>
            </div>
          </div>
          <h3 className="inter-sans font-bold text-5xl text-gray-900 mb-2">
            120/80
          </h3>
          <p className="inter-sans text-lg text-gray-700 font-semibold">Blood Pressure</p>
        </motion.div>

        {/* Blood Sugar */}
        <motion.div 
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-lg p-8 border border-green-100"
          whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Droplet className="w-8 h-8 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="inter-sans font-semibold text-sm">Normal</span>
            </div>
          </div>
          <h3 className="inter-sans font-bold text-5xl text-gray-900 mb-2">
            95 <span className="text-2xl text-gray-600">mg/dL</span>
          </h3>
          <p className="inter-sans text-lg text-gray-700 font-semibold">Blood Sugar</p>
        </motion.div>
      </div>

      {/* Today's Schedule */}
      <motion.div 
        className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="inter-sans font-bold text-2xl text-gray-900 mb-6">
          Today's Schedule
        </h2>
        <div className="space-y-4">
          {/* Morning Medication */}
          <motion.div 
            className="flex items-center gap-5 p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl border border-sky-100"
            whileHover={{ x: 5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Pill className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="inter-sans font-bold text-xl text-gray-900">
                Morning Medication
              </h3>
              <p className="inter-sans text-gray-600 mt-1">
                Take 2 pills with breakfast
              </p>
            </div>
            <span className="inter-sans font-bold text-xl text-sky-600">
              8:00 AM
            </span>
          </motion.div>

          {/* Doctor Appointment */}
          <motion.div 
            className="flex items-center gap-5 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100"
            whileHover={{ x: 5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Video className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="inter-sans font-bold text-xl text-gray-900">
                Dr. Michael Chen
              </h3>
              <p className="inter-sans text-gray-600 mt-1">
                Video consultation
              </p>
            </div>
            <span className="inter-sans font-bold text-xl text-orange-600">
              2:00 PM
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
