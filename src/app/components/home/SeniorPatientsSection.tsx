// ============================================
// SENIOR PATIENTS SECTION - Urgent support section
// ============================================
import { motion } from "motion/react";
import { Phone, AlertCircle, Clock } from "lucide-react";

export default function SeniorPatientsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Urgent Call Card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 opacity-100" />
          
          {/* Animated Blobs */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-12 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Message */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-white animate-pulse" />
                  <p className="inter-sans text-sm font-bold text-white/90 uppercase tracking-wider">
                    24/7 Emergency Support
                  </p>
                </div>
                <h2 className="inter-sans font-bold text-4xl md:text-5xl text-white mb-4">
                  Need Help Right Now?
                </h2>
                <p className="inter-sans text-lg text-white/95 mb-8">
                  Senior patients can reach our dedicated support team instantly. Whether it's a medical concern or you need to speak with a healthcare professional, we're here for you 24/7.
                </p>
                
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-white" />
                  <p className="inter-sans text-white font-semibold">Available anytime, day or night</p>
                </div>
              </div>

              {/* Right Side - Phone CTA */}
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 backdrop-blur-lg rounded-full p-8 mb-6 border-2 border-white/30">
                  <Phone className="w-16 h-16 text-white" />
                </div>
                
                <p className="inter-sans text-white/80 text-lg mb-3">Call Our Hotline</p>
                <motion.a
                  href="tel:+1-800-RIVA-911"
                  className="inter-sans font-bold text-5xl md:text-6xl text-white mb-6 cursor-pointer hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1-800-RIVA-911
                </motion.a>
                
                <motion.button
                  className="px-8 py-4 bg-white text-orange-600 rounded-xl inter-sans font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Support Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "📞",
              title: "Instant Connection",
              description: "Get connected to a healthcare professional immediately, no wait times.",
            },
            {
              icon: "🏥",
              title: "Experienced Team",
              description: "Our team specializes in senior patient care and emergency response.",
            },
            {
              icon: "🛡️",
              title: "Confidential & Safe",
              description: "All calls are confidential and recorded for your safety and quality assurance.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <p className="text-4xl mb-4">{feature.icon}</p>
              <h3 className="inter-sans font-bold text-lg text-gray-900 mb-3">{feature.title}</h3>
              <p className="inter-sans text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
