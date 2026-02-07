// ============================================
// DASHBOARD PAGE - Main dashboard container
// ============================================
import { useState } from "react";
import { motion } from "motion/react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import OverviewTab from "../components/dashboard/OverviewTab";
import AppointmentsTab from "../components/dashboard/AppointmentsTab";
import MedicationsTab from "../components/dashboard/MedicationsTab";
import ChatTab from "../components/dashboard/ChatTab";
import DoctorOverviewTab from "../components/dashboard/DoctorOverviewTab";
import DoctorAppointmentsTab from "../components/dashboard/DoctorAppointmentsTab";
import DoctorRecordsTab from "../components/dashboard/DoctorRecordsTab";
import CaregiverOverviewTab from "../components/dashboard/CaregiverOverviewTab";
import CaregiverAppointmentsTab from "../components/dashboard/CaregiverAppointmentsTab";
import CaregiverMedicationsTab from "../components/dashboard/CaregiverMedicationsTab";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [userRole, setUserRole] = useState("caregiver"); // TODO: load from auth context (patient, doctor, caregiver)

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} userRole={userRole} />
      </motion.div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto ml-16 md:ml-0">
        <DashboardHeader />

        {/* Tab Content */}
        <div className="p-4 md:p-8">
          {/* PATIENT TABS */}
          {userRole === "patient" && (
            <>
              {activeTab === "overview" && <OverviewTab />}
              {activeTab === "appointments" && <AppointmentsTab />}
              {activeTab === "medications" && <MedicationsTab />}
              {activeTab === "chat" && <ChatTab />}
            </>
          )}

          {/* DOCTOR TABS */}
          {userRole === "doctor" && (
            <>
              {activeTab === "overview" && <DoctorOverviewTab />}
              {activeTab === "appointments" && <DoctorAppointmentsTab />}
              {activeTab === "medications" && <DoctorRecordsTab />}
              {activeTab === "chat" && <ChatTab />}
            </>
          )}

          {/* CAREGIVER TABS */}
          {userRole === "caregiver" && (
            <>
              {activeTab === "overview" && <CaregiverOverviewTab />}
              {activeTab === "appointments" && <CaregiverAppointmentsTab />}
              {activeTab === "medications" && <CaregiverMedicationsTab />}
              {activeTab === "chat" && <ChatTab />}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
