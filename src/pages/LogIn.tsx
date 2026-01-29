import { useState } from 'react';
import { Eye, EyeOff, Home, Lock, Mail } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here (API call, etc.)
    console.log('Login attempt:', { email, password });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero with doctor image as background */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 blur-xs pointer-events-none"
          style={{ backgroundImage: `url(/doctor.jpg)` }}
          aria-hidden
        />

        <NavLink to="/" className="absolute top-6 left-6 z-20 cursor-pointer" aria-label="Home">
            <Home className="w-8 h-8 text-white hover:text-blue-300 transition-colors" />
        </NavLink>

        <div className="relative z-10 flex flex-col justify-center items-center text-white px-12 text-center w-full">
          {/* Logo / Brand */}
          <div className="mb-10">
            <div className="flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl font-bold">R</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">IVA</h1>
            </div>
          </div>

          {/* Welcome text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to RIVA
            <br />
            <span className="text-blue-200">Integrated Healthcare Anytime, Anywhere</span>
          </h2>

          <p className="text-xl text-blue-100 max-w-lg opacity-90">
            Connect with top-tier specialists, track your health metrics, and manage appointments seamlessly through our secure ecosystem.
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile-only logo */}
          <div className="lg:hidden flex justify-center mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                I
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Invision</h1>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">Login</h2>
            <p className="mt-2 text-gray-600">
              Enter your credentials to login to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="example@hospital.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 pr-12 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="••••••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex items-center justify-end">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>

            {/* Sign up link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{' '}
              <a href="/roles" className="text-blue-600 font-medium hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}