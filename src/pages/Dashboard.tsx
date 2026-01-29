import { useState } from "react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { StatsCard } from "../components/dashboard/StatsCard";
import { AppointmentsList } from "../components/dashboard/AppointmentsList";
import { PatientsList } from "../components/dashboard/PatientsList";
import { 
  Users, 
  Calendar, 
  Activity, 
  Clock
} from "lucide-react";

const stats = [
  {
    title: "Total Patients",
    value: "1,234",
    change: "+12%",
    trend: "up" as const,
    icon: Users,
    color: "bg-blue-500"
  },
  {
    title: "Appointments Today",
    value: "28",
    change: "+5",
    trend: "up" as const,
    icon: Calendar,
    color: "bg-green-500"
  },
  {
    title: "Active Cases",
    value: "156",
    change: "-3%",
    trend: "down" as const,
    icon: Activity,
    color: "bg-purple-500"
  },
  {
    title: "Pending Reviews",
    value: "12",
    change: "2 urgent",
    trend: "neutral" as const,
    icon: Clock,
    color: "bg-orange-500"
  }
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <StatsCard key={stat.title} {...stat} />
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Appointments - Takes 2 columns */}
              <div className="lg:col-span-2">
                <AppointmentsList />
              </div>

              {/* Patients List - Takes 1 column */}
              <div>
                <PatientsList />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
