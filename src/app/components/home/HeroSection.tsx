// ============================================
// HERO SECTION - Main landing section with animated background
// ============================================
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Heart, Pill, Activity, Zap, ArrowRight, CheckCircle, Bell, Star } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-100 via-sky-50 to-orange-50">
      {/* Animated Background Blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-20 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-sky-300/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Icons */}
      <motion.div
        className="absolute top-40 right-40 text-orange-400/30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Heart className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 text-sky-400/30"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <Pill className="w-14 h-14" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-10 text-orange-300/30"
        animate={{
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <Activity className="w-12 h-12" />
      </motion.div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-6 py-2 bg-orange-100 rounded-full"
            >
              <span className="inter-sans font-semibold text-orange-600 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                AI-Powered Healthcare
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="inter-sans font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Care Made
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-orange-500"> Simple</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="inter-sans text-xl md:text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              24/7 health monitoring, smart reminders, and instant doctor access for seniors
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div>
                <h3 className="inter-sans font-bold text-3xl text-sky-600">10K+</h3>
                <p className="inter-sans text-sm text-gray-600">Happy Seniors</p>
              </div>
              <div>
                <h3 className="inter-sans font-bold text-3xl text-orange-600">500+</h3>
                <p className="inter-sans text-sm text-gray-600">Expert Doctors</p>
              </div>
              <div>
                <h3 className="inter-sans font-bold text-3xl text-sky-600">24/7</h3>
                <p className="inter-sans text-sm text-gray-600">Available</p>
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link 
                to="/signup"
                className="group px-8 py-5 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-2xl plus-jakarta-sans font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/login"
                className="px-8 py-5 bg-white border-3 border-gray-300 text-gray-700 rounded-2xl plus-jakarta-sans font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center"
              >
                Sign In
              </Link>
            </motion.div>
          </motion.div>

          {/* Doctor Images with Floating Cards */}
          <motion.div 
            className="relative hidden lg:block h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Doctor Image */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-orange-400 rounded-3xl blur-2xl opacity-30"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDM5MjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern Male Doctor"
                  className="relative rounded-3xl shadow-2xl w-80 h-96 object-cover border-4 border-white"
                />
              </div>
            </motion.div>
            
            {/* Floating Health Card */}
            <motion.div
              className="absolute top-10 left-0 z-30 bg-white rounded-2xl shadow-2xl p-5 w-56"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="inter-sans font-bold text-sm text-gray-900">Heart Rate</p>
                  <p className="inter-sans text-xs text-gray-600">Normal</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="inter-sans font-bold text-3xl text-gray-900">72</span>
                <span className="inter-sans text-sm text-gray-600">bpm</span>
              </div>
            </motion.div>

            {/* Floating Medication Card */}
            <motion.div
              className="absolute bottom-20 right-0 z-30 bg-white rounded-2xl shadow-2xl p-5 w-56"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="inter-sans font-bold text-sm text-gray-900">Next Medication</p>
                  <p className="inter-sans text-xs text-gray-600">In 2 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="inter-sans font-semibold text-sm">Reminder Set</span>
              </div>
            </motion.div>

            {/* Floating Doctor Card */}
            <motion.div
              className="absolute top-1/2 -right-10 z-10 bg-white rounded-2xl shadow-2xl p-4 w-48"
              animate={{
                x: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBkb2N0b3IlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc3MDM5MjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Young Doctor"
                className="rounded-xl w-full h-28 object-cover mb-2"
              />
              <p className="inter-sans font-bold text-sm text-gray-900">Dr. Ahmed Hassan</p>
              <p className="inter-sans text-xs text-gray-600 mb-2">Cardiologist</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-orange-400 fill-orange-400" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
