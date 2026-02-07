// ============================================
// DOCTOR APPOINTMENTS TAB - Manage patient appointments
// ============================================
import { motion } from "motion/react";
import { Calendar, Clock, User, Phone } from "lucide-react";

export default function DoctorAppointmentsTab() {
  const appointments = [
    {
      id: 1,
      patientName: "Sarah Johnson",
      time: "10:00 AM",
      date: "Today",
      reason: "Follow-up consultation",
      phone: "+1 (555) 123-4567",
      status: "Confirmed",
    },
    {
      id: 2,
      patientName: "Mike Chen",
      time: "11:30 AM",
      date: "Today",
      reason: "Initial diagnosis",
      phone: "+1 (555) 234-5678",
      status: "Pending",
    },
    {
      id: 3,
      patientName: "Emma Brown",
      time: "2:00 PM",
      date: "Tomorrow",
      reason: "Lab results review",
      phone: "+1 (555) 345-6789",
      status: "Confirmed",
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
        <h2 className="inter-sans font-bold text-3xl text-gray-900">Patient Appointments</h2>
        <motion.button
          className="px-6 py-3 bg-sky-600 text-white rounded-xl inter-sans font-bold hover:bg-sky-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule New
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {appointments.map((apt) => (
          <motion.div
            key={apt.id}
            className={`rounded-3xl p-6 border-2 transition ${
              apt.status === "Confirmed"
                ? "bg-green-50 border-green-200"
                : "bg-orange-50 border-orange-200"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="inter-sans font-bold text-lg text-gray-900 mb-1">{apt.patientName}</p>
                <span className={`inline-block inter-sans text-xs font-bold px-3 py-1 rounded-full ${
                  apt.status === "Confirmed"
                    ? "bg-green-200 text-green-800"
                    : "bg-orange-200 text-orange-800"
                }`}>
                  {apt.status}
                </span>
              </div>
              <Calendar className={apt.status === "Confirmed" ? "text-green-600" : "text-orange-600"} />
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-4 h-4" />
                <span className="inter-sans text-sm font-medium">{apt.time} - {apt.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <User className="w-4 h-4" />
                <span className="inter-sans text-sm">{apt.reason}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span className="inter-sans text-sm">{apt.phone}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-sky-600 text-white rounded-xl inter-sans font-semibold hover:bg-sky-700 transition text-sm">
                View Details
              </button>
              <button className="flex-1 py-2 border-2 border-gray-300 text-gray-700 rounded-xl inter-sans font-semibold hover:bg-gray-50 transition text-sm">
                Reschedule
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
