// ============================================
// DOCTORS SECTION - Meet our doctors
// ============================================
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function DoctorsSection() {
  const doctors = [
    {
      image: "https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDM5MjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      experience: "15+ years"
    },
    {
      image: "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBkb2N0b3IlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc3MDM5MjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Dr. Ahmed Hassan",
      specialty: "General Physician",
      experience: "10+ years"
    },
    {
      image: "https://images.unsplash.com/photo-1625134673337-519d4d10b313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwd2hpdGUlMjBjb2F0JTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzcwMzkyMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Dr. James Wilson",
      specialty: "Endocrinologist",
      experience: "12+ years"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inter-sans font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Meet Our Doctors
          </h2>
          <p className="inter-sans text-xl text-gray-600">
            Certified healthcare professionals dedicated to your care
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100">
                {/* Doctor Image */}
                <div className="relative overflow-hidden h-80">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Doctor Info */}
                <div className="p-6">
                  <h3 className="inter-sans font-bold text-xl text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="inter-sans text-sky-600 font-semibold mb-2">
                    {doctor.specialty}
                  </p>
                  <p className="inter-sans text-sm text-gray-600">
                    {doctor.experience} experience
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
