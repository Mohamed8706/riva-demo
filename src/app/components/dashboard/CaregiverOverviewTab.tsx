// ============================================
// CAREGIVER OVERVIEW TAB - Caregiver dashboard
// ============================================
import { motion } from "motion/react";
import { Users, AlertCircle, Clock, Heart } from "lucide-react";

export default function CaregiverOverviewTab() {
  const stats = [
    { label: "People Under Care", value: "3", icon: Users, color: "sky" },
    { label: "Urgent Tasks", value: "2", icon: AlertCircle, color: "red" },
    { label: "Upcoming Appointments", value: "4", icon: Clock, color: "orange" },
    { label: "Health Alerts", value: "1", icon: Heart, color: "pink" },
  ];

  const managedPeople = [
    { name: "Mary Johnson", relationship: "Mother", status: "Stable", lastCheck: "1 hour ago" },
    { name: "Robert Johnson", relationship: "Father", status: "Needs medication", lastCheck: "3 hours ago" },
    { name: "Lisa Chen", relationship: "Grandmother", status: "Stable", lastCheck: "30 min ago" },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="inter-sans font-bold text-3xl text-gray-900">Caregiver Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          const colorClass = {
            sky: "from-sky-100 to-sky-50",
            orange: "from-orange-100 to-orange-50",
            red: "from-red-100 to-red-50",
            pink: "from-pink-100 to-pink-50",
          }[stat.color] || "from-sky-100 to-sky-50";

          const iconColorClass = {
            sky: "text-sky-600",
            orange: "text-orange-600",
            red: "text-red-600",
            pink: "text-pink-600",
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

      {/* People Under Care */}
      <motion.div
        className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="inter-sans font-bold text-2xl text-gray-900 mb-6">People Under Your Care</h3>
        <div className="space-y-4">
          {managedPeople.map((person, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border-2 ${
                person.status === "Needs medication"
                  ? "bg-red-50 border-red-200"
                  : "bg-green-50 border-green-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="inter-sans font-bold text-gray-900">{person.name}</p>
                  <p className="inter-sans text-sm text-gray-600">{person.relationship}</p>
                </div>
                <span className={`inter-sans text-xs font-bold px-3 py-1 rounded-full ${
                  person.status === "Needs medication"
                    ? "bg-red-200 text-red-800"
                    : "bg-green-200 text-green-800"
                }`}>
                  {person.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="inter-sans text-xs text-gray-600">Last checked: {person.lastCheck}</p>
                <button className="text-sky-600 hover:text-sky-700 inter-sans text-sm font-semibold">
                  Check Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
