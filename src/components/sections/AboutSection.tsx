// AboutUsSection.tsx
import { Bot, Heart } from "lucide-react"; // Bot for robot/AI, Heart for love/care
import robot from '../../../public/robot-heart.png';
export default function AboutUsSection() {
  const features = [
    {
      title: "Personalized care just for you.",
      icon: <Bot className="w-10 h-10 text-white" />,
      bg: "bg-blue-500",
    },
    {
      title: "Simple technology... for great results.",
      icon: <Bot className="w-10 h-10 text-white" />,
      bg: "bg-cyan-500",
    },
    {
      title: "Peace of mind for those you love.",
      icon: <Heart className="w-10 h-10 text-white" />,
      bg: "bg-red-400",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-linear-to-br from-blue-50 via-cyan-50 to-teal-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-gray-800 mb-12 md:mb-16">
          About Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Feature cards */}
          <div className="space-y-6 md:space-y-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-5 ${feature.bg} text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="shrink-0 p-3 bg-white/20 rounded-full">
                  {feature.icon}
                </div>
                <p className="text-xl md:text-2xl font-medium leading-tight">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Main text + bubble */}
          <div className="relative space-y-8">
            {/* Main content card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100">
              <p className="text-gray-800 text-xl md:text-2xl leading-relaxed font-medium">
                We believe every patient is unique, so we've designed a system that
                understands your needs and lovingly reminds you of every detail of
                your day.
              </p>
            </div>

            {/* Small quote bubble at bottom-right */}
            <div className="absolute -bottom-6 right-4 md:right-12 lg:-bottom-8 lg:right-0 bg-white rounded-2xl p-5 shadow-lg border border-blue-200 max-w-70 md:max-w-xs">
              <p className="text-blue-700 text-base md:text-lg font-medium italic">
                "Don't worry, I can remind you to take your medicine on time!"
              </p>
              {/* Optional: small tail for bubble look */}
              <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
            </div>

        
            <div className="absolute -top-12 md:right-[50%] transform translate-x-1/2 opacity-80 pointer-events-none hidden md:block">
              <div className="md:w-22 md:h-22 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                <img src={robot} alt="Robot Illustration" className="w-16 h-16 md:w-20 md:h-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}