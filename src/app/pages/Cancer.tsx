import { Button } from '../components/ui/button';
import { Check, Phone, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Navbar from '../components/Navbar';

export const CancerCare = () => {
  return (
    <>
      {/* Hero Section - Split Layout for Better Readability */}
      <Navbar />
      <div className="bg-stone-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-6">
                <Heart className="w-5 h-5 text-blue-700 fill-blue-700" />
                <span className="text-blue-900 text-base font-bold">Specialized Oncology Support</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Compassionate Care During Your <span className="text-blue-700">Cancer Journey</span>
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                We understand the challenges of cancer treatment. Our team provides the medical support, comfort, and companionship you need to focus on healing at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl px-8 h-16 text-xl shadow-lg shadow-blue-900/10 transition-transform hover:-translate-y-1">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-200 text-blue-800 hover:bg-blue-50 rounded-xl px-8 h-16 text-xl">
                  <Phone className="w-6 h-6 mr-3" />
                  (555) 123-4567
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-blue-200 rounded-[2rem] transform rotate-3 scale-105 opacity-50 -z-10"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBjb21mb3J0aW5nJTIwcGF0aWVudCUyMGNhbmNlciUyMGNhcmV8ZW58MXx8fHwxNzcwNTg1MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Caregiver comforting patient"
                className="w-full h-[400px] md:h-[600px] object-cover rounded-[2rem] shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Clean & Clear */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How We Support You</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our comprehensive care plan focuses on symptom management, nutrition, and emotional well-being to improve quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Medication Management", desc: "Ensuring prescriptions are taken safely and on time." },
              { title: "Symptom Monitoring", desc: "Tracking vital signs and managing side effects of treatment." },
              { title: "Nutrition Support", desc: "Preparing healthy meals tailored to dietary needs and appetite." },
              { title: "Transportation", desc: "Safe rides to chemotherapy, radiation, and doctor appointments." },
              { title: "Companionship", desc: "Emotional support and engagement to reduce feelings of isolation." },
              { title: "Respite Care", desc: "Providing family caregivers with much-needed breaks." }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Check className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-700 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Trust Builder */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-stone-200 max-w-4xl mx-auto relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
             <div className="flex flex-col md:flex-row gap-8 items-center">
               <div className="flex-shrink-0">
                 <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold">
                   JD
                 </div>
               </div>
               <div>
                 <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-2xl">★</span>)}
                 </div>
                 <blockquote className="text-2xl font-medium text-slate-900 leading-relaxed mb-4">
                   "The care we received during my mother's treatment was exceptional. The caregivers didn't just help with meds; they became part of our family and gave us peace of mind."
                 </blockquote>
                 <cite className="not-italic text-lg text-slate-600 font-semibold">
                   — Sarah Johnson, <span className="text-slate-500 font-normal">Daughter of Patient</span>
                 </cite>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple & Direct */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Discuss Your Needs?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Our care coordinators are here to listen and create a plan that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 hover:text-blue-950 rounded-xl px-10 h-16 text-xl font-bold">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-blue-900 hover:bg-blue-50 hover:text-blue-950  rounded-xl px-10 h-16 text-xl font-bold">
              Call Us: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
