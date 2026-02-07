// ============================================
// CAREGIVER MEDICATIONS TAB - Manage medications for people under care
// ============================================
import { motion } from "motion/react";
import { Pill, AlertTriangle, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CaregiverMedicationsTab() {
  const [medications, setMedications] = useState([
    {
      id: 1,
      careeName: "Mary Johnson",
      medication: "Metoprolol",
      dosage: "50mg",
      frequency: "Twice daily",
      nextDue: "2:00 PM",
      status: "pending",
      instructions: "Take with food",
    },
    {
      id: 2,
      careeName: "Mary Johnson",
      medication: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      nextDue: "8:00 PM",
      status: "pending",
      instructions: "Take in evening",
    },
    {
      id: 3,
      careeName: "Robert Johnson",
      medication: "Ibuprofen",
      dosage: "400mg",
      frequency: "As needed",
      nextDue: "3:00 PM",
      status: "given",
      instructions: "For pain relief",
    },
    {
      id: 4,
      careeName: "Lisa Chen",
      medication: "Vitamin D",
      dosage: "1000 IU",
      frequency: "Once daily",
      nextDue: "Tomorrow",
      status: "pending",
      instructions: "Take with breakfast",
    },
  ]);

  const handleMarkGiven = (id: number) => {
    setMedications(medications.map(m => m.id === id ? { ...m, status: "given" } : m));
  };

  const pendingCount = medications.filter(m => m.status === "pending").length;

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="inter-sans font-bold text-3xl text-gray-900">Managed Medications</h2>
        <motion.button
          className="px-6 py-3 bg-sky-600 text-white rounded-xl inter-sans font-bold hover:bg-sky-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Medication
        </motion.button>
      </div>

      {/* Alert for pending medications */}
      {pendingCount > 0 && (
        <motion.div
          className="bg-red-50 border-2 border-red-200 rounded-3xl p-6 flex items-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <p className="inter-sans font-bold text-red-900">
              {pendingCount} medication{pendingCount !== 1 ? "s" : ""} pending
            </p>
            <p className="inter-sans text-sm text-red-800">Please ensure medications are given on time</p>
          </div>
        </motion.div>
      )}

      {/* Medications by Person */}
      <div className="space-y-6">
        {["Mary Johnson", "Robert Johnson", "Lisa Chen"].map((person) => {
          const personMeds = medications.filter(m => m.careeName === person);
          if (personMeds.length === 0) return null;

          return (
            <motion.div
              key={person}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="inter-sans font-bold text-xl text-gray-900 mb-4">{person}</h3>
              <div className="space-y-3">
                {personMeds.map((med) => (
                  <div
                    key={med.id}
                    className={`p-4 rounded-xl border-2 flex items-start justify-between ${
                      med.status === "given"
                        ? "bg-green-50 border-green-200"
                        : "bg-yellow-50 border-yellow-200"
                    }`}
                  >
                    <div className="flex gap-3 flex-1">
                      <Pill className={med.status === "given" ? "text-green-600" : "text-yellow-600"} />
                      <div className="flex-1">
                        <p className="inter-sans font-bold text-gray-900">{med.medication}</p>
                        <p className="inter-sans text-sm text-gray-600">{med.dosage} • {med.frequency}</p>
                        <p className="inter-sans text-xs text-gray-500 mt-1">{med.instructions}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="inter-sans text-xs text-gray-600">Next: {med.nextDue}</span>
                        </div>
                      </div>
                    </div>
                    {med.status === "pending" ? (
                      <motion.button
                        onClick={() => handleMarkGiven(med.id)}
                        className="ml-4 py-2 px-4 bg-sky-600 text-white rounded-lg inter-sans font-semibold hover:bg-sky-700 transition text-sm whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Mark Given
                      </motion.button>
                    ) : (
                      <div className="ml-4 flex items-center gap-1 text-green-700">
                        <CheckCircle className="w-5 h-5" />
                        <span className="inter-sans text-sm font-semibold">Given</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
