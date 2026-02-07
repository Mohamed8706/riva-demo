// ============================================
// LOGIN PAGE - User authentication
// ============================================
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend - Implement authentication logic here
    // Example: await loginUser(formData.email, formData.password);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      {/* Login Form Container */}
      <motion.div 
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <motion.img 
              src="/logo.png"
              alt="Riva Logo"
              className="h-18 w-18 object-contain"
              whileHover={{ scale: 1.1 }}
            />
          </Link>
          <h1 className="inter-sans font-bold text-4xl text-gray-900 mb-3">
            Welcome Back
          </h1>
          <p className="inter-sans text-lg text-gray-600">
            Sign in to continue your health journey
          </p>
        </div>

        {/* Form Card */}
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block inter-sans font-semibold text-gray-900 mb-3 text-lg">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl inter-sans text-gray-900 text-lg focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block inter-sans font-semibold text-gray-900 mb-3 text-lg">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl inter-sans text-gray-900 text-lg focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500" />
                <span className="inter-sans text-gray-700">Remember me</span>
              </label>
              <Link to="/forgot-password" className="inter-sans text-sky-600 hover:text-sky-700 font-semibold">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="group w-full py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl inter-sans font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="inter-sans text-gray-600 text-lg">
              Don't have an account?{" "}
              <Link to="/signup" className="text-sky-600 hover:text-sky-700 font-bold">
                Sign up free
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Back to Home Link */}
        <div className="mt-6 text-center">
          <Link to="/" className="inter-sans text-gray-600 hover:text-gray-900 font-semibold">
            ← Back to home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
