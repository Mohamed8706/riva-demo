import { motion } from "framer-motion";
import { Clock, MapPin, MoreVertical, Video } from "lucide-react";
import { Button } from "../ui/button";

const appointments = [
  {
    id: 1,
    patientName: "John Smith",
    time: "09:00 AM",
    type: "Check-up",
    status: "confirmed",
    avatar: "JS",
    location: "Room 201"
  },
  {
    id: 2,
    patientName: "Emma Wilson",
    time: "10:30 AM",
    type: "Follow-up",
    status: "in-progress",
    avatar: "EW",
    location: "Video Call"
  },
  {
    id: 3,
    patientName: "Michael Brown",
    time: "11:45 AM",
    type: "Consultation",
    status: "confirmed",
    avatar: "MB",
    location: "Room 105"
  },
  {
    id: 4,
    patientName: "Sarah Davis",
    time: "02:00 PM",
    type: "Emergency",
    status: "urgent",
    avatar: "SD",
    location: "ER"
  },
  {
    id: 5,
    patientName: "James Johnson",
    time: "03:30 PM",
    type: "Routine",
    status: "confirmed",
    avatar: "JJ",
    location: "Room 303"
  }
];

const statusColors = {
  confirmed: "bg-green-100 text-green-700",
  "in-progress": "bg-blue-100 text-blue-700",
  urgent: "bg-red-100 text-red-700"
};

export function AppointmentsList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-lg text-gray-900">Today's Appointments</h2>
        <Button variant="ghost" size="sm" className="text-blue-600">
          View All
        </Button>
      </div>

      <div className="p-6 space-y-4">
        {appointments.map((appointment, index) => (
          <motion.div
            key={appointment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="size-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shrink-0">
              {appointment.avatar}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm text-gray-900 truncate">{appointment.patientName}</h3>
                <span className={`px-2 py-0.5 rounded-full text-xs ${statusColors[appointment.status as keyof typeof statusColors]}`}>
                  {appointment.status}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {appointment.time}
                </span>
                <span className="flex items-center gap-1">
                  {appointment.location.includes("Video") ? (
                    <Video className="size-3" />
                  ) : (
                    <MapPin className="size-3" />
                  )}
                  {appointment.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start
              </Button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="size-4 text-gray-400" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
