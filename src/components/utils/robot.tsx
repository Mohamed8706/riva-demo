import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { motion } from 'framer-motion';


interface PageInfo {
  title: string;
  description: string;
  features?: string[];
}

const pageInfoMap: Record<string, PageInfo> = {
  '/': {
    title: 'Welcome Home',
    description: 'Welcome to our healthcare platform. This is where you can get started with our services.',
    features: [
      'Easy appointment scheduling',
      'Patient management',
      'Real-time notifications',
      'Secure data handling'
    ]
  },
  '/signup': {
    title: 'Create Your Account',
    description: 'Join our platform and get access to all features. Sign up is quick and easy.',
    features: [
      'Secure registration',
      'Email verification',
      'Profile customization',
      'Instant account activation'
    ]
  },
  '/dashboard': {
    title: 'Dashboard Overview',
    description: 'Your central hub for managing patients, appointments, and healthcare data.',
    features: [
      'Patient statistics',
      'Appointment management',
      'Health metrics tracking',
      'Quick actions and reports'
    ]
  }
};

export function RobotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentPageInfo = pageInfoMap[location.pathname] || {
    title: 'Page Info',
    description: 'Welcome to this page.',
    features: []
  };

  return (
    <>

    <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            className="fixed bottom-8 right-8 z-40 group"
            aria-label="Open page information"
          >
        <motion.div
            className="relative w-14 h-14 md:w-24 md:h-24 flex items-center justify-center cursor-pointer group-hover:scale-110"
            initial={{ opacity: 0, x: 40 }}          
            animate={{ opacity: 1, x: 0 }}  
            transition={{
                duration: 0.3,                 
                ease: "easeOut",
            }}
            >
              <img
                src="../../../public/robot.png" 
                alt="Robot Assistant"
                className="w-14 h-14 md:w-24 md:h-24 object-contain"
              />
            </motion.div>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-50 md:w-72 p-4 bg-white rounded-lg shadow-lg border-2 border-gray-200"
          side="top"
          sideOffset={2}
          align='end'
        >
          {/* Speech bubble arrow pointing down */}
          <div className="absolute bottom-[-6px] right-12 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-gray-800">{currentPageInfo.title}</h3>
            <p className="text-sm text-gray-600">{currentPageInfo.description}</p>
            {currentPageInfo.features && currentPageInfo.features.length > 0 && (
              <ul className="text-sm space-y-1 mt-3">
                {currentPageInfo.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}