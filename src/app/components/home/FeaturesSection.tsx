// ============================================
// FEATURES SECTION - Key features grid
// ============================================
import { motion } from "motion/react";
import { Pill, Video, Activity, Phone } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Pill,
      title: "Medication Management",
      description: "Large, clear reminders with simple Taken/Missed buttons",
      color: "sky"
    },
    {
      icon: Video,
      title: "Video Consultations",
      description: "Easy one-click video calls with doctors",
      color: "orange"
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Track heart rate, blood pressure, blood sugar",
      color: "sky"
    },
    {
      icon: Phone,
      title: "Emergency Access",
      description: "24/7 emergency support with one tap",
      color: "orange"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-sky-50 relative overflow-hidden">
      {/* Animated Background Blob */}
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inter-sans font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="inter-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Designed specifically for seniors and their families
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color === 'sky' ? 'from-sky-400 to-sky-500' : 'from-orange-400 to-orange-500'} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Title & Description */}
              <h3 className="inter-sans font-bold text-2xl text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="inter-sans text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
