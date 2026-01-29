import { useNavigate } from "react-router-dom";
import "../../styles/globals.css"
export default function HeroSection() {

  const navigate = useNavigate();
  return (
    <section className="relative min-h-150 md:min-h-175 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-sky-500 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-80 right-20 w-48 h-48 md:w-96 md:h-96 bg-blue-300 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 md:space-y-8 z-10">
            <h1 className=" font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
            text-black text-shadow-2xs leading-tight tracking-tight">
              Riva Platform...
              <br />
              Integrated Healthcare Anytime, <span className="text-[#0EA5E9]">Anywhere</span>
            </h1>
            <p className="plus-jakarta-sans font-medium text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
              Connect with top-tier specialists, track your health metrics, and manage appointments seamlessly through our secure ecosystem.
            </p>
            <div className="flex flex-col items-center md:justify-left md:flex-row gap-4 md:w-auto">
              <button onClick={() => navigate("/roles")} className="button-64" role="button"><span className="text">Get Started</span></button>
              <button className="px-6 md:px-8 py-3 md:py-4 cursor-pointer bg-white/80 border-2 border-sky-500 text-sky-500 rounded-3xl plus-jakarta-sans font-bold text-base md:text-lg shadow-lg hover:bg-sky-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative hidden md:flex justify-center lg:justify-end z-10">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl hover:scale-[103%] transform transition-transform cursor-pointer">
              <img 
                src="/robot.png" 
                alt="Healthcare professional" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
