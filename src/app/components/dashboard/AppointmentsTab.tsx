// ============================================
// APPOINTMENTS TAB - View and manage appointments
// ============================================
import { motion } from "motion/react";
import { Calendar, Clock, Star, Video } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function AppointmentsTab() {
  const doctors = [
    {
      image: "https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDM5MjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      date: "Feb 15, 2026",
      time: "2:00 PM"
    },
    {
      image: "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBkb2N0b3IlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc3MDM5MjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Dr. Ahmed Hassan",
      specialty: "General Physician",
      date: "Feb 18, 2026",
      time: "10:00 AM"
    }
  ];

  return (
    <motion.div 
      className="space-y-4 md:space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with Button */}
      <div className="flex items-center justify-between">
        <h2 className="inter-sans font-bold text-lg md:text-3xl text-gray-900">
          Upcoming Appointments
        </h2>
        <button className="px-3 md:px-6 py-2 md:py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl inter-sans font-bold text-sm md:text-lg hover:shadow-lg transition-all hover:scale-105">
          Book New
        </button>
      </div>

      {/* Appointments List */}
      <div className="grid gap-4 md:gap-6">
        {doctors.map((doctor, i) => (
          <motion.div 
            key={i} 
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-8 border border-gray-100"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-start justify-between gap-3 md:gap-6">
              <div className="flex gap-3 md:gap-6">
                {/* Doctor Image */}
                <div className="w-16 md:w-24 h-16 md:h-24 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Doctor Info */}
                <div>
                  <h3 className="inter-sans font-bold text-sm md:text-2xl text-gray-900">
                    {doctor.name}
                  </h3>
                  <p className="inter-sans text-xs md:text-lg text-sky-600 font-semibold mt-1">
                    {doctor.specialty}
                  </p>
                  
                  {/* Date & Time */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 mt-2 md:mt-4 text-gray-600">
                    <span className="flex items-center gap-2 inter-sans text-xs md:text-lg">
                      <Calendar className="w-4 md:w-5 h-4 md:h-5" />
                      {doctor.date}
                    </span>
                    <span className="flex items-center gap-2 inter-sans text-xs md:text-lg">
                      <Clock className="w-5 h-5" />
                      {doctor.time}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Join Button */}
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl inter-sans font-bold text-lg hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
                <Video className="w-5 h-5" />
                Join Call
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
