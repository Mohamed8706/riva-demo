import { motion } from "motion/react";

const roles = [
  { id: "patient", label: "Patient" },
  { id: "doctor", label: "Doctor" },
  { id: "caregiver", label: "Caregiver" },
];

export default function RoleSwitcher({ userRole, setUserRole, setActiveTab }) {
  const handleSwitch = (role) => {
    setUserRole(role);
    setActiveTab("overview"); // reset tab to avoid invalid states
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 w-56"
    >
      <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wide">
        Demo Role
      </p>

      <div className="space-y-2">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => handleSwitch(role.id)}
            className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition
              ${
                userRole === role.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
          >
            {role.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
