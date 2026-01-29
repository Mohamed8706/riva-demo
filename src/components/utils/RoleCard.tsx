import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


interface RoleCardProps {
  title: string;
  descriptionArabic: string;
  imageUrl: string;
  delay?: number;
  
}

export function RoleCard({ 
  title, 
  descriptionArabic, 
  imageUrl, 
  delay = 0,
  
}: RoleCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -10}}
      className="relative w-80 h-125 rounded-[40px] overflow-hidden shadow-2xl cursor-pointer"
      style={{ 
        transformOrigin: "center center",
        background: "linear-gradient(135deg, #d4f1f9 0%, #a8dce8 50%, #7ec8d8 100%)"
      }}
      onClick={() => navigate('/signup')}
    >
      {/* Background Image - positioned to show person */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover opacity-90"
          style={{ objectPosition: "center 20%" }}
        />
        {/* Gradient overlay to blend with background */}
        <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-gray-900/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* RIVA Logo at top */}
        <div className="pt-6 px-6 text-center">
          <div className="text-white text-2xl tracking-wider drop-shadow-lg font-bold">
            RIVA
          </div>
        </div>

        {/* Title and Description */}
        <div className="px-8 pt-6">
          <h1 className="text-[#196aa0] text-3xl font-semibold mb-2 drop-shadow-sm">
            {title}
          </h1>
          <div className="text-white text-2xl font-semibold" >
            <p className="text-sm mt-1 drop-shadow-sm">{descriptionArabic}</p>
          </div>
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-1" />

        {/* Button at bottom */}
        <div className="px-8 pb-8">
          <button className="w-full bg-white hover:bg-blue-50 text-blue-700 py-4 rounded-full transition-all duration-300 text-lg shadow-lg">
            تسجيل
          </button>
        </div>
      </div>
    </motion.div>
  );
}