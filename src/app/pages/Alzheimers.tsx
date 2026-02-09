import { Button } from '../components/ui/button';
import { Check, Phone, Brain, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Navbar from '../components/Navbar';

export const AlzheimersCare = () => {
  return (
    <>
      {/* Hero Section */}
      <Navbar />
      <div className="bg-stone-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-6">
                <Brain className="w-5 h-5 text-purple-700 fill-purple-700" />
                <span className="text-purple-900 text-base font-bold">Specialized Memory Care</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Compassionate Care for <span className="text-purple-700">Alzheimer's & Dementia</span>
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                We provide a safe, structured, and engaging environment for seniors with memory loss, allowing them to age in place with dignity while giving families peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-8 h-16 text-xl shadow-lg shadow-purple-900/10 transition-transform hover:-translate-y-1">
                  Request Assessment
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-200 text-purple-800 hover:bg-purple-50 rounded-xl px-8 h-16 text-xl">
                  <Phone className="w-6 h-6 mr-3" />
                  (555) 123-4567
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-purple-200 rounded-[2rem] transform -rotate-3 scale-105 opacity-50 -z-10"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1609113006359-1e9c378ab54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBwYXRpZW50JTIwbWVtb3J5JTIwY2FyZSUyMGFsemhlaW1lcnN8ZW58MXx8fHwxNzcwNTg1MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Senior couple smiling"
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Safe, Engaging Support</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our caregivers are trained in dementia best practices to reduce anxiety and promote cognitive engagement through daily routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "24/7 Safety Monitoring", desc: "Constant supervision to prevent wandering and ensure home safety." },
              { title: "Cognitive Therapy", desc: "Engaging activities like puzzles and memory games to stimulate the mind." },
              { title: "Routine Management", desc: "Establishing predictable daily schedules to reduce confusion and anxiety." },
              { title: "Medication Reminders", desc: "Timely administration of medications to manage symptoms." },
              { title: "Personal Care", desc: "Assistance with bathing, dressing, and grooming with dignity." },
              { title: "Family Respite", desc: "Giving family members time to rest and recharge." }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:border-purple-300 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Check className="w-6 h-6 text-purple-700" />
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
             <div className="absolute top-0 left-0 w-full h-2 bg-purple-600"></div>
             <div className="flex flex-col md:flex-row gap-8 items-center">
               <div className="flex-shrink-0">
                 <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 text-2xl font-bold">
                   MK
                 </div>
               </div>
               <div>
                 <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-2xl">★</span>)}
                 </div>
                 <blockquote className="text-2xl font-medium text-slate-900 leading-relaxed mb-4">
                   "It was impossible to keep Dad safe at home until we found this team. Their patience and understanding of dementia behaviors is incredible."
                 </blockquote>
                 <cite className="not-italic text-lg text-slate-600 font-semibold">
                   — Michael King, <span className="text-slate-500 font-normal">Son of Patient</span>
                 </cite>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Get Support for Your Loved One</h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed">
            Let us help you create a safe and nurturing environment. Contact us today for a free assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 hover:text-purple-950 rounded-xl px-10 h-16 text-xl font-bold">
              Book Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white  text-purple-900 hover:bg-purple-50 hover:text-purple-950 rounded-xl px-10 h-16 text-xl font-bold">
              Call Us: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
