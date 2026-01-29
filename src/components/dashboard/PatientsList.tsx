import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const patients: Array<{
  id: number;
  name: string;
  condition: string;
  status: keyof typeof statusConfig;
  avatar: string;
  lastVisit: string;
}> = [
  {
    id: 1,
    name: "Alice Cooper",
    condition: "Hypertension",
    status: "stable",
    avatar: "AC",
    lastVisit: "2 days ago"
  },
  {
    id: 2,
    name: "Robert Lee",
    condition: "Diabetes Type 2",
    status: "monitoring",
    avatar: "RL",
    lastVisit: "1 week ago"
  },
  {
    id: 3,
    name: "Linda Martinez",
    condition: "Asthma",
    status: "critical",
    avatar: "LM",
    lastVisit: "Today"
  },
  {
    id: 4,
    name: "David Kim",
    condition: "Post-Surgery",
    status: "stable",
    avatar: "DK",
    lastVisit: "3 days ago"
  },
  {
    id: 5,
    name: "Maria Garcia",
    condition: "Cardiac Monitor",
    status: "monitoring",
    avatar: "MG",
    lastVisit: "Yesterday"
  }
];

const statusConfig = {
  stable: { color: "text-green-500", label: "Stable" },
  monitoring: { color: "text-yellow-500", label: "Monitoring" },
  critical: { color: "text-red-500", label: "Critical" }
} as const satisfies Record<string, { color: string; label: string }>;

export function PatientsList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg text-gray-900">Recent Patients</h2>
      </div>

      <div className="p-6 space-y-4">
        {patients.map((patient, index) => {
          const status = statusConfig[patient.status];
          return (
            <motion.div
              key={patient.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="size-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm shrink-0">
                {patient.avatar}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm text-gray-900 truncate">{patient.name}</h3>
                  <Circle className={`size-2 fill-current ${status.color}`} />
                </div>
                <p className="text-xs text-gray-600 mb-1">{patient.condition}</p>
                <p className="text-xs text-gray-400">{patient.lastVisit}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
