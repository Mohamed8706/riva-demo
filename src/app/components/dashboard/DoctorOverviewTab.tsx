// ============================================
// DOCTOR OVERVIEW TAB - Doctor dashboard overview
// ============================================
import { motion } from "motion/react";
import { Users, Calendar, Clock, TrendingUp } from "lucide-react";

export default function DoctorOverviewTab() {
  const stats = [
    { label: "Total Patients", value: "24", icon: Users, color: "sky" },
    { label: "Appointments Today", value: "5", icon: Calendar, color: "orange" },
    { label: "Pending Records", value: "12", icon: Clock, color: "red" },
    { label: "Avg Patient Satisfaction", value: "4.8/5", icon: TrendingUp, color: "green" },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="inter-sans font-bold text-3xl text-gray-900">Doctor Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          const colorClass = {
            sky: "from-sky-100 to-sky-50",
            orange: "from-orange-100 to-orange-50",
            red: "from-red-100 to-red-50",
            green: "from-green-100 to-green-50",
          }[stat.color] || "from-sky-100 to-sky-50";

          const iconColorClass = {
            sky: "text-sky-600",
            orange: "text-orange-600",
            red: "text-red-600",
            green: "text-green-600",
          }[stat.color] || "text-sky-600";

          return (
            <motion.div
              key={idx}
              className={`bg-gradient-to-br ${colorClass} rounded-3xl p-6 shadow-sm border border-gray-100`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="inter-sans text-gray-600 font-medium mb-1">{stat.label}</p>
                  <p className="inter-sans font-bold text-3xl text-gray-900">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${iconColorClass}`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <motion.div
        className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="inter-sans font-bold text-2xl text-gray-900 mb-6">Recent Patient Activity</h3>
        <div className="space-y-4">
          {[
            { name: "Sarah Johnson", action: "Completed consultation", time: "2 hours ago" },
            { name: "Mike Chen", action: "Uploaded lab results", time: "4 hours ago" },
            { name: "Emma Brown", action: "Scheduled appointment", time: "Yesterday" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold">
                {item.name[0]}
              </div>
              <div className="flex-1">
                <p className="inter-sans font-semibold text-gray-900">{item.name}</p>
                <p className="inter-sans text-sm text-gray-600">{item.action}</p>
              </div>
              <span className="inter-sans text-sm text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
