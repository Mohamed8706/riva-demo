import { Button } from '../components/ui/button';
import { Check, Phone, Activity, HeartPulse } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Navbar from '../components/Navbar';

export const HeartDiseaseCare = () => {
  return (
    <>
      {/* Hero Section */}
      <Navbar />
      <div className="bg-stone-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 mb-6">
                <HeartPulse className="w-5 h-5 text-rose-700 fill-rose-700" />
                <span className="text-rose-900 text-base font-bold">Cardiac Recovery & Care</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Reclaim Your Life After <span className="text-rose-700">Heart Disease</span>
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                Our specialized cardiac care program supports recovery after heart surgery, heart attack, or for managing chronic conditions like CHF, all from the comfort of home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-rose-700 hover:bg-rose-800 text-white rounded-xl px-8 h-16 text-xl shadow-lg shadow-rose-900/10 transition-transform hover:-translate-y-1">
                  Start Recovery Plan
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-rose-200 text-rose-800 hover:bg-rose-50 rounded-xl px-8 h-16 text-xl">
                  <Phone className="w-6 h-6 mr-3" />
                  (555) 123-4567
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-rose-200 rounded-[2rem] transform rotate-3 scale-105 opacity-50 -z-10"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1631815582904-874a51f98dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW9sb2dpc3QlMjBjaGVja2luZyUyMGhlYXJ0JTIwcmF0ZSUyMHNlbmlvcnxlbnwxfHx8fDE3NzA1ODUyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Active senior walking outdoors"
                className="w-full h-[400px] md:h-[600px] object-cover rounded-[2rem] shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Cardiac Support</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We work with your cardiologist to implement a care plan that reduces hospital readmissions and promotes long-term heart health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Vital Sign Monitoring", desc: "Daily checks of blood pressure, pulse, and oxygen levels." },
              { title: "Medication Management", desc: "Ensuring complex heart medication regimens are followed correctly." },
              { title: "Heart-Healthy Diet", desc: "Preparation of low-sodium, heart-friendly meals." },
              { title: "Exercise Assistance", desc: "Support with doctor-prescribed physical activity and mobility." },
              { title: "Symptom Tracking", desc: "Watching for signs of fluid retention or condition worsening." },
              { title: "Post-Surgery Care", desc: "Wound care and assistance after bypass or stent procedures." }
            ].map((item, i) => (
              <div key={i} className="bg-rose-50 p-8 rounded-2xl border border-rose-100 hover:border-rose-300 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Activity className="w-6 h-6 text-rose-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-700 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-stone-200 max-w-4xl mx-auto relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-rose-600"></div>
             <div className="flex flex-col md:flex-row gap-8 items-center">
               <div className="flex-shrink-0">
                 <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 text-2xl font-bold">
                   BW
                 </div>
               </div>
               <div>
                 <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-2xl">★</span>)}
                 </div>
                 <blockquote className="text-2xl font-medium text-slate-900 leading-relaxed mb-4">
                   "After my dad's bypass surgery, we were overwhelmed. The caregivers helped with everything from diet to getting him moving again. He's stronger than ever now."
                 </blockquote>
                 <cite className="not-italic text-lg text-slate-600 font-semibold">
                   — Barbara Williams, <span className="text-slate-500 font-normal">Daughter of Patient</span>
                 </cite>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-rose-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Take the First Step to Recovery</h2>
          <p className="text-xl md:text-2xl text-rose-100 mb-10 leading-relaxed">
            Contact us to learn how we can support your heart health journey at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-rose-900 hover:bg-rose-50 hover:text-rose-950 rounded-xl px-10 h-16 text-xl font-bold">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-rose-900 hover:bg-rose-50 hover:text-rose-950 rounded-xl px-10 h-16 text-xl font-bold">
              Call Us: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
