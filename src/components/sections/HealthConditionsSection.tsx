import robot from '../../../public/robot-with-light.png';
import { Heart, Brain, Droplet } from "lucide-react";
export default function HealthConditionsSection() {
  const conditions = [
    {
      icon: Brain,
      title: "Alzheimer's Care",
      description: "Memory support and cognitive wellness",
      color: "blue",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-500"
    },
    {
      icon: Heart,
      title: "Heart Health",
      description: "Cardiovascular monitoring and care",
      color: "red",
      bgColor: "bg-red-100",
      borderColor: "border-gray-300"
    },
    {
      icon: Droplet,
      title: "Diabetes Management",
      description: "Blood sugar monitoring and nutrition",
      color: "green",
      bgColor: "bg-green-100",
      borderColor: "border-gray-300"
    }
  ];

  return (
    <section id='features' className="relative py-12 md:py-20 px-4 md:px-8">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-sky-500 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-80 right-20 w-48 h-48 md:w-96 md:h-96 bg-blue-300 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            Health Conditions We Support
          </h2>
          <p className="font-['Inter',sans-serif] text-lg md:text-xl text-gray-600">
            Expert guidance for the most common senior health challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Condition Cards */}
          <div className="space-y-4 md:space-y-6">
            {conditions.map((condition, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm ${condition.borderColor} border-l-8 
                rounded-3xl p-6 md:p-8 hover:scale-[101%] transform transition-transform
                shadow-2xl   cursor-pointer`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className={`${condition.bgColor} rounded-2xl p-3 md:p-4 shrink-0`}>
                    <condition.icon className={`w-6 h-6 md:w-8 md:h-8 text-${condition.color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-['Inter',sans-serif] font-bold text-xl md:text-2xl text-gray-800 mb-2">
                      {condition.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] text-base md:text-lg text-gray-600">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image */}
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-md hover:scale-[103%] transform transition-transform cursor-pointer">
              <img 
                src={robot} 
                alt="Healthcare support" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}