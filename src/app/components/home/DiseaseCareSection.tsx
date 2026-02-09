import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { ArrowRight, HeartPulse, Brain, Activity } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';


const images = {
  cancer: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBjb21mb3J0aW5nJTIwcGF0aWVudCUyMGNhbmNlciUyMGNhcmV8ZW58MXx8fHwxNzcwNTg1MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  alzheimers: "https://images.unsplash.com/photo-1609113006359-1e9c378ab54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBwYXRpZW50JTIwbWVtb3J5JTIwY2FyZSUyMGFsemhlaW1lcnN8ZW58MXx8fHwxNzcwNTg1MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  heart: "https://images.unsplash.com/photo-1631815582904-874a51f98dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW9sb2dpc3QlMjBjaGVja2luZyUyMGhlYXJ0JTIwcmF0ZSUyMHNlbmlvcnxlbnwxfHx8fDE3NzA1ODUyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
};

export const DiseaseCareSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider px-2">Specialized Care</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Comprehensive Support for Chronic Conditions
          </h2>
          <p className="text-lg text-gray-600">
            We provide dedicated care plans and specialized support for seniors facing complex health challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cancer Care Card */}
          <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <ImageWithFallback 
                src={images.cancer} 
                alt="Doctor comforting patient" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg inline-flex items-center justify-center mb-2">
                  <Activity className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Cancer Care</h3>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <p className="text-gray-600 mb-6 flex-1">
                Compassionate support for oncology patients, including medication management, symptom monitoring, and emotional support for families.
              </p>
              <Link to="/cancer-care">
                <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors justify-between cursor-pointer">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Alzheimer's Card */}
          <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <ImageWithFallback 
                src={images.alzheimers} 
                alt="Senior patient memory care" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20">
                 <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg inline-flex items-center justify-center mb-2">
                  <Brain className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Alzheimer's Care</h3>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <p className="text-gray-600 mb-6 flex-1">
                Specialized memory care focused on safety, routine, and cognitive engagement to support patients with dementia and Alzheimer's.
              </p>
              <Link to="/alzheimers-care">
                <Button variant="outline" className="w-full group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-200 transition-colors justify-between cursor-pointer">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Heart Disease Card */}
          <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <ImageWithFallback 
                src={images.heart} 
                alt="Cardiologist checking heart rate" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20">
                 <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg inline-flex items-center justify-center mb-2">
                  <HeartPulse className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Heart Disease</h3>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <p className="text-gray-600 mb-6 flex-1">
                Continuous cardiac monitoring and lifestyle management to promote heart health and prevent complications for cardiac patients.
              </p>
              <Link to="/heart-disease-care">
                <Button variant="outline" className="w-full group-hover:bg-red-50 group-hover:text-red-600 group-hover:border-red-200 transition-colors justify-between cursor-pointer">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
