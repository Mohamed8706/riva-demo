// ============================================
// CAREGIVER APPOINTMENTS TAB - Manage appointments for people under care
// ============================================
import { motion } from "motion/react";
import { Calendar, Clock, User, AlertCircle } from "lucide-react";

export default function CaregiverAppointmentsTab() {
  const appointments = [
    {
      id: 1,
      careeName: "Mary Johnson (Mother)",
      doctorName: "Dr. Sarah Mitchell",
      time: "10:00 AM",
      date: "Today",
      type: "Cardiology Check-up",
      location: "City Medical Center",
      status: "Confirmed",
    },
    {
      id: 2,
      careeName: "Robert Johnson (Father)",
      doctorName: "Dr. James Wilson",
      time: "2:30 PM",
      date: "Today",
      type: "Physical Therapy",
      location: "Wellness Clinic",
      status: "Confirmed",
    },
    {
      id: 3,
      careeName: "Lisa Chen (Grandmother)",
      doctorName: "Dr. Emily Brown",
      time: "11:00 AM",
      date: "Tomorrow",
      type: "Follow-up Consultation",
      location: "Senior Care Center",
      status: "Pending",
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="inter-sans font-bold text-3xl text-gray-900">Managed Appointments</h2>
        <motion.button
          className="px-6 py-3 bg-sky-600 text-white rounded-xl inter-sans font-bold hover:bg-sky-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule New
        </motion.button>
      </div>

      <div className="space-y-4">
        {appointments.map((apt) => (
          <motion.div
            key={apt.id}
            className={`rounded-3xl p-6 border-2 ${
              apt.status === "Confirmed"
                ? "bg-blue-50 border-blue-200"
                : "bg-yellow-50 border-yellow-200"
            }`}
            whileHover={{ scale: 1.01 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="inter-sans font-bold text-gray-900 mb-1">{apt.careeName}</p>
                <p className="inter-sans text-sm text-gray-600">With: {apt.doctorName}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="inter-sans font-semibold text-gray-900">{apt.time}</span>
                </div>
                <p className="inter-sans text-sm text-gray-600">{apt.date}</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="inter-sans font-semibold text-gray-900 mb-1">{apt.type}</p>
                  <p className="inter-sans text-sm text-gray-600">{apt.location}</p>
                </div>
                <span className={`inter-sans text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                  apt.status === "Confirmed"
                    ? "bg-blue-200 text-blue-800"
                    : "bg-yellow-200 text-yellow-800"
                }`}>
                  {apt.status}
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-2 pt-4 border-t border-gray-200">
              <button className="flex-1 py-2 bg-sky-600 text-white rounded-xl inter-sans font-semibold hover:bg-sky-700 transition text-sm">
                View Details
              </button>
              <button className="flex-1 py-2 border-2 border-gray-300 text-gray-700 rounded-xl inter-sans font-semibold hover:bg-gray-50 transition text-sm">
                Reschedule
              </button>
              <button className="py-2 px-4 bg-red-50 text-red-600 rounded-xl inter-sans font-semibold hover:bg-red-100 transition text-sm">
                Cancel
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Important Reminders */}
      <motion.div
        className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <p className="inter-sans font-bold text-amber-900 mb-2">Reminder:</p>
            <ul className="inter-sans text-sm text-amber-800 space-y-1 list-disc list-inside">
              <li>Mary needs medication 1 hour before her cardiology appointment</li>
              <li>Robert should bring his insurance card to the therapy session</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
