// ============================================
// DOCTOR RECORDS TAB - Manage patient medical records
// ============================================
import { motion } from "motion/react";
import { FileText, Download, Upload, Search } from "lucide-react";
import { useState } from "react";

export default function DoctorRecordsTab() {
  const [searchTerm, setSearchTerm] = useState("");

  const records = [
    {
      id: 1,
      patientName: "Sarah Johnson",
      recordType: "Lab Results",
      date: "2026-02-07",
      status: "Reviewed",
      file: "lab_results_sarah.pdf",
    },
    {
      id: 2,
      patientName: "Mike Chen",
      recordType: "X-Ray Scan",
      date: "2026-02-06",
      status: "Pending Review",
      file: "xray_mike.pdf",
    },
    {
      id: 3,
      patientName: "Emma Brown",
      recordType: "Blood Work",
      date: "2026-02-05",
      status: "Reviewed",
      file: "bloodwork_emma.pdf",
    },
    {
      id: 4,
      patientName: "John Smith",
      recordType: "Consultation Notes",
      date: "2026-02-04",
      status: "Reviewed",
      file: "notes_john.pdf",
    },
  ];

  const filteredRecords = records.filter(
    (r) =>
      r.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.recordType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="inter-sans font-bold text-3xl text-gray-900">Patient Records</h2>
        <motion.button
          className="px-6 py-3 bg-sky-600 text-white rounded-xl inter-sans font-bold hover:bg-sky-700 transition flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Upload className="w-4 h-4" />
          Upload Record
        </motion.button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by patient name or record type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl inter-sans text-gray-900 focus:border-sky-500 focus:outline-none"
        />
      </div>

      {/* Records Table */}
      <motion.div
        className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left inter-sans font-bold text-gray-900">Patient Name</th>
                <th className="px-6 py-4 text-left inter-sans font-bold text-gray-900">Record Type</th>
                <th className="px-6 py-4 text-left inter-sans font-bold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left inter-sans font-bold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left inter-sans font-bold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 inter-sans text-gray-900">{record.patientName}</td>
                  <td className="px-6 py-4 inter-sans text-gray-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-600" />
                    {record.recordType}
                  </td>
                  <td className="px-6 py-4 inter-sans text-gray-600">{record.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inter-sans text-xs font-bold px-3 py-1 rounded-full ${
                      record.status === "Reviewed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-sky-600 hover:bg-sky-50 rounded-lg transition">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="text-sm inter-sans font-semibold text-sky-600 hover:text-sky-700">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {filteredRecords.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="inter-sans text-gray-600">No records found matching your search.</p>
        </div>
      )}
    </motion.div>
  );
}
