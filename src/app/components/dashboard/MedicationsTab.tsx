// ============================================
// MEDICATIONS TAB - Medication management with large buttons
// ============================================
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export default function MedicationsTab() {
  const medications = [
    { name: "Aspirin", dose: "100mg", time: "Morning" },
    { name: "Metformin", dose: "500mg", time: "Morning" },
    { name: "Lisinopril", dose: "10mg", time: "Evening" }
  ];

  const handleTaken = (medName: string) => {
    // TODO: Backend - Mark medication as taken
    // Example: await markMedicationTaken(medName, new Date());
    console.log(`${medName} marked as taken`);
  };

  const handleMissed = (medName: string) => {
    // TODO: Backend - Mark medication as missed
    // Example: await markMedicationMissed(medName, new Date());
    console.log(`${medName} marked as missed`);
  };

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="inter-sans font-bold text-3xl text-gray-900">
        Today's Medications
      </h2>

      {/* Medications List */}
      <div className="grid gap-6">
        {medications.map((med, i) => (
          <motion.div 
            key={i} 
            className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between gap-6">
              {/* Medication Info */}
              <div className="flex-1">
                <h3 className="inter-sans font-bold text-3xl text-gray-900 mb-2">
                  {med.name}
                </h3>
                <p className="inter-sans text-xl text-gray-600">
                  {med.dose} - {med.time}
                </p>
              </div>
              
              {/* Action Buttons - LARGE AND CLEAR */}
              <div className="flex gap-4">
                {/* Taken Button - GREEN */}
                <motion.button 
                  onClick={() => handleTaken(med.name)}
                  className="px-12 py-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl inter-sans font-bold text-2xl hover:shadow-2xl transition-all shadow-lg flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CheckCircle className="w-8 h-8" />
                  Taken
                </motion.button>
                
                {/* Missed Button - RED */}
                <motion.button 
                  onClick={() => handleMissed(med.name)}
                  className="px-12 py-6 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl inter-sans font-bold text-2xl hover:shadow-2xl transition-all shadow-lg flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-3xl">✖</span>
                  Missed
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
