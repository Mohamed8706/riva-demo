import { Calendar, Mail, Phone } from 'lucide-react';
import robot from '../../../public/robot-heart.png';
import logo from '../../../public/logo.png';
function CTASection() {
  return (
    <section id='contact' className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - CTA content */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-16 md:w-24 shrink-0">
                <img 
                  src={logo} 
                  alt="Care icon" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 px-6 md:px-8 py-3 
                md:py-4 bg-blue-500 text-white rounded-2xl plus-jakarta-sans cursor-pointer
                font-semibold text-base md:text-lg shadow-lg hover:bg-blue-600 transition-colors">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
                <button className="flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4
                bg-green-600 text-white rounded-2xl plus-jakarta-sans font-semibold text-base 
                md:text-lg shadow-lg hover:bg-green-700 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </button>
              </div>
              
              <button className="w-full flex items-center justify-center gap-3 px-6 md:px-8 py-4 
              md:py-5 bg-orange-500 text-white rounded-3xl plus-jakarta-sans font-bold cursor-pointer
              text-lg md:text-xl lg:text-2xl shadow-xl hover:bg-orange-600 transition-colors">
                <Phone className="w-6 h-6" />
                Emergency Call - Available 24/7
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="hidden md:flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <img 
                src={robot} 
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
export default CTASection;