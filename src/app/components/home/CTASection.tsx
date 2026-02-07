// ============================================
// CTA SECTION - Call to action with gradient background
// ============================================
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-sky-500 via-sky-600 to-orange-500 relative overflow-hidden">
      {/* Animated Background Blob */}
      <motion.div 
        className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h2 className="inter-sans font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to Start Your Health Journey?
          </h2>
          
          {/* Description */}
          <p className="inter-sans text-xl text-white/90 mb-10">
            Join thousands of seniors living healthier, happier lives
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup"
              className="group px-10 py-5 bg-white text-sky-600 rounded-2xl inter-sans font-bold text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/dashboard"
              className="px-10 py-5 bg-transparent border-3 border-white text-white rounded-2xl inter-sans font-bold text-lg hover:bg-white/10 transition-all hover:scale-105"
            >
              View Dashboard
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
