import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Stethoscope, Users, User, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type UserRole = "doctor" | "caregiver" | "patient" | null;

const roles = [
  {
    id: "doctor" as const,
    title: "Doctor",
    titleArabic: "طبيب",
    icon: Stethoscope,
    color: "bg-blue-500"
  },
  {
    id: "caregiver" as const,
    title: "Caregiver",
    titleArabic: "مقدم رعاية",
    icon: Users,
    color: "bg-green-500"
  },
  {
    id: "patient" as const,
    title: "Patient",
    titleArabic: "مريض",
    icon: User,
    color: "bg-purple-500"
  }
];

export function MultiStageLogin() {
  const [stage, setStage] = useState(1);
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
    specialization: "",
    licenseNumber: ""
  });

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setTimeout(() => setStage(2), 300);
  };

  const handleNext = () => {
    if (stage < 3) setStage(stage + 1);
  };

  const handleBack = () => {
    if (stage > 1) setStage(stage - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { selectedRole, ...formData });
    // Handle form submission
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`size-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  stage >= step
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {stage > step ? (
                  <CheckCircle className="size-5" />
                ) : (
                  <span>{step}</span>
                )}
              </div>
              {step < 3 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    stage > step ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Select Role</span>
          <span>Basic Info</span>
          <span>Details</span>
        </div>
      </div>

      {/* Stage Content */}
      <AnimatePresence mode="wait">
        {stage === 1 && (
          <motion.div
            key="stage1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl text-gray-900 mb-2">Choose Your Role</h3>
              <p className="text-gray-600">Select how you want to join our platform</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <motion.button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      selectedRole === role.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-white hover:border-blue-300"
                    }`}
                  >
                    <div className={`${role.color} text-white p-4 rounded-full w-fit mx-auto mb-4`}>
                      <Icon className="size-8" />
                    </div>
                    <h4 className="text-xl text-gray-900 mb-1">{role.title}</h4>
                    <p className="text-sm text-gray-600" dir="rtl">{role.titleArabic}</p>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div
            key="stage2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl text-gray-900 mb-2">Basic Information</h3>
              <p className="text-gray-600">Enter your credentials to continue</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex-1"
              >
                <ArrowLeft className="size-4 mr-2" />
                Back
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Next
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {stage === 3 && (
          <motion.div
            key="stage3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl text-gray-900 mb-2">Additional Details</h3>
              <p className="text-gray-600">Complete your profile information</p>
            </div>

            <div className="space-y-4">
              {selectedRole === "doctor" && (
                <>
                  <div>
                    <Label htmlFor="specialization" className="text-gray-700">Specialization</Label>
                    <Input
                      id="specialization"
                      type="text"
                      placeholder="e.g., Cardiology, Pediatrics"
                      value={formData.specialization}
                      onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="licenseNumber" className="text-gray-700">Medical License Number</Label>
                    <Input
                      id="licenseNumber"
                      type="text"
                      placeholder="License #"
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </>
              )}

              {selectedRole === "caregiver" && (
                <>
                  <div>
                    <Label htmlFor="experience" className="text-gray-700">Years of Experience</Label>
                    <Input
                      id="experience"
                      type="number"
                      placeholder="5"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="certification" className="text-gray-700">Certification</Label>
                    <Input
                      id="certification"
                      type="text"
                      placeholder="CNA, HHA, etc."
                      className="mt-1"
                    />
                  </div>
                </>
              )}

              {selectedRole === "patient" && (
                <>
                  <div>
                    <Label htmlFor="dob" className="text-gray-700">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="insurance" className="text-gray-700">Insurance Provider (Optional)</Label>
                    <Input
                      id="insurance"
                      type="text"
                      placeholder="Insurance company name"
                      className="mt-1"
                    />
                  </div>
                </>
              )}

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex-1"
              >
                <ArrowLeft className="size-4 mr-2" />
                Back
              </Button>
              <Button
                type="submit"
                onClick={handleSubmit}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                Complete Registration
                <CheckCircle className="size-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
