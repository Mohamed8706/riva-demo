export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This AI assistant has been a game-changer for my dad. It reminds him to take his medication and even detects when something's wrong.",
      name: "Sarah Chen",
      role: "Daughter"
    },
    {
      quote: "The peace of mind knowing that someone is always watching over my mom is priceless. Highly recommend!",
      name: "Michael Torres",
      role: "Son"
    }
  ];

  return (
    <section id='reviews' className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            What Our Families Say
          </h2>
          <p className="font-['Inter',sans-serif] text-lg md:text-xl text-gray-600">
            Real stories from real people who trust us with their care
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-12">
            {/* Decorative image */}
            <div className="lg:col-span-1 mt-8 hidden md:flex justify-start">
             <div className="w-auto hover:scale-[103%] transform transition-transform cursor-pointer">
                <img 
                src="/robot.png"
                alt="Decoration" 
                className="w-full h-auto object-contain"
                />
             </div>
            </div>

          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="lg:col-span-2 bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl
              shadow-2xl px-8 py-6 hover:scale-[103%] transform transition-transform cursor-pointer"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 14.3917L15.15 17.5L13.7833 11.6417L18.3333 7.7L12.3417 7.19167L10 1.66667L7.65833 7.19167L1.66667 7.7L6.21667 11.6417L4.85 17.5L10 14.3917Z" />
                  </svg>
                ))}
              </div>
              
              <p className="plus-jakarta-sans font-semibold text-sm
              lg:text-[16px] text-gray-800 mb-6 md:mb-8 leading-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img 
                    src="/frame.png" 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-['Inter',sans-serif] font-semibold text-base md:text-lg text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="font-['Inter',sans-serif] text-sm md:text-base text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}