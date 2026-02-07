// ============================================
// HOW IT WORKS SECTION - 3 step process
// ============================================
import { motion } from "motion/react";
import { Activity, MessageCircle, Bell } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Activity,
      title: "Track Health",
      description: "Monitor vital signs automatically with AI",
      color: "from-sky-400 to-sky-500",
      delay: 0.2
    },
    {
      icon: MessageCircle,
      title: "Talk to Doctors",
      description: "Connect instantly with professionals",
      color: "from-orange-400 to-orange-500",
      delay: 0.4
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss medications or appointments",
      color: "from-sky-500 to-sky-600",
      delay: 0.6
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, #0ea5e9 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inter-sans font-semibold text-sky-600 text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="inter-sans font-bold text-4xl md:text-5xl text-gray-900 mb-4 mt-2">
            Simple, Clear, Effective
          </h2>
          <p className="inter-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Three easy steps to better health monitoring
          </p>
        </motion.div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: step.delay, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Title & Description */}
                <h3 className="inter-sans font-bold text-2xl text-gray-900 text-center mb-3">
                  {step.title}
                </h3>
                <p className="inter-sans text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="inter-sans font-bold text-white text-lg">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
