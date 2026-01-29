// RoleSelection.tsx
import { ChevronRight, Facebook, Heart, Instagram, Stethoscope, Twitter, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RoleCards() {
  const roles = [
    {
      title: 'Doctor',
      description: 'Patient follow-up and diagnosis',
      icon: <Stethoscope className="w-5 h-5 text-cyan-500" />,
      image: '/doctors.png', 
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Caregiver',
      description: 'Continuous patient monitoring',
      icon: <Heart className="w-5 h-5 text-cyan-500" />,
      image: '/caregiver.png', 
      color: 'from-teal-500 to-teal-600',
    },
    {
      title: 'Patient',
      description: 'Health and medication management',
      icon: <User className="w-5 h-5 text-cyan-500" />,
      image: '/patient.png', 
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-6">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              PORTAL ACCESS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Role
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your profile type to continue to the dashboard.
            </p>
          </div>

          {/* Role cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {roles.map((role, index) => (
              <div
                key={index}
                onClick={() => navigate(`/register?role=${role.title.toLowerCase()}`)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
              >
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${role.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  {/* Your image goes here */}
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  
                  <div className="absolute bottom-2 left-4 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                      {role.icon}
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{role.title}</h3>
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Help link */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Need help?{' '}
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Help Center
            </a>
          </div>

          <div className="flex gap-5">
            <Instagram className="w-5 h-5 hover:text-blue-600 transition-colors cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-blue-600 transition-colors cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-blue-600 transition-colors cursor-pointer" />
          </div>

          <p>© 2023 All Rights Reserved — RIVA</p>
        </div>
      </footer>
    </div>
  );
}