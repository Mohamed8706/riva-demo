import robot from '../../../public/robot.png';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does the AI assistant work?",
      answer:
        "Our AI assistant uses advanced natural language processing to understand your symptoms, medical history, and questions. It provides guidance based on established medical knowledge and always recommends consulting a real doctor when needed.",
    },
    {
      question: "Is my health data secure?",
      answer:
        "Yes — we take data privacy very seriously. All data is encrypted in transit and at rest, we comply with HIPAA/GDPR standards (where applicable), and we never sell your personal information.",
    },
    {
      question: "What happens in an emergency?",
      answer:
        "In life-threatening situations, our AI will immediately instruct you to call emergency services (e.g., 112 / 999 / 911). It is not a substitute for professional emergency care.",
    },
    {
      question: "How much does it cost?",
      answer:
        "The basic version is free. Premium features (like priority responses, detailed reports, and integration with wearables) start at $4.99/month or $49/year. No hidden fees.",
    },
  ];

  return (
    <section className="relative py-12 md:py-20 px-4 md:px-8">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-sky-500 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-80 right-20 w-48 h-48 md:w-96 md:h-96 bg-blue-300 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left side - Title and image */}
          <div className="space-y-6">
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="hidden md:flex justify-center lg:justify-start">
              <div className="w-64 md:w-80 hover:scale-[103%] transform transition-transform cursor-pointer">
                <img
                  src={robot}
                  alt="FAQ illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right side - FAQ items using shared Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/50 
                  rounded-3xl overflow-hidden shadow-md hover:shadow-lg hover:bg-white/40 transition-all"
                >
                  <AccordionTrigger className="w-full p-6 md:p-8 text-left group hover:bg-white/40 transition-colors">
                    <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl lg:text-2xl text-gray-800 pr-4">
                      {item.question}
                    </h3>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 text-gray-700 text-base md:text-lg leading-relaxed">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}