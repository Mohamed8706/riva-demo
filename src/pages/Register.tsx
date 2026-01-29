// RegisterPage.tsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Upload, Clock, DollarSign, User, Heart, Stethoscope } from 'lucide-react';
import { Navigation } from '../components/utils/Navigation';
import registerbg from '../../public/register.png';

export default function RegisterPage() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role')?.toLowerCase() || 'patient'; // fallback

  const [formData, setFormData] = useState({
    profilePhoto: null as File | null,
    fullName: '',
    yearsExperience: '',
    about: '',
    hourlyFee: '',
    workingHours: '',
    specialties: [] as string[],
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Common specialties / working areas per role
  const roleConfig = {
    doctor: {
      title: 'Doctor',
      icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
      subtitle: 'Join our medical network and provide expert diagnosis & follow-up care',
      specialties: [
        'General Medicine',
        'Cardiology',
        'Neurology',
        'Pediatrics',
        'Geriatrics',
        'Post-Op Care',
        'Chronic Disease Management',
      ],
      showExperience: true,
      showHourlyFee: false, // Doctors might have fixed consultation fees or none
      showWorkingAreas: true,
    },
    caregiver: {
      title: 'Caregiver',
      icon: <Heart className="w-10 h-10 text-teal-600" />,
      subtitle: 'Become a registered caregiver and connect with families',
      specialties: [
        'Senior Care',
        'Special Needs',
        'Post-Op Recovery',
        'Dementia Care',
        'Light Housekeeping',
        'Mobility Assistance',
        'Medication Reminders',
      ],
      showExperience: true,
      showHourlyFee: true,
      showWorkingAreas: true,
    },
    patient: {
      title: 'Patient',
      icon: <User className="w-10 h-10 text-cyan-600" />,
      subtitle: 'Join to manage your health, medications & appointments',
      specialties: [], // Patients usually don't select specialties
      showExperience: false,
      showHourlyFee: false,
      showWorkingAreas: false,
    },
  };

  const config = roleConfig[role as keyof typeof roleConfig] || roleConfig.patient;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, specialties: [...prev.specialties, value] };
      }
      return { ...prev, specialties: prev.specialties.filter((s) => s !== value) };
    });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 2 * 1024 * 1024 && ['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      setFormData((prev) => ({ ...prev, profilePhoto: file }));
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert('File must be JPG, PNG or GIF and max 2MB');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here: send to backend (FormData with file + JSON fields)
    console.log('Submitting for role:', role, formData);
    // Example: navigate to dashboard or show success
  };

  useEffect(() => {
    // Clean up preview URL
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-12 px-6">
      <Navigation />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header / Hero */}
        <div className="relative h-64">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${registerbg})` }} />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <div className="mb-4 inline-block p-4 bg-white/20 backdrop-blur-md rounded-full">
                {config.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Join as {config.title}
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {config.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
          {/* Profile Photo */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-800">
              Profile Photo
            </label>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 bg-gray-100 flex items-center justify-center">
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-16 h-16 text-gray-400" />
                )}
              </div>
              <div>
                <label className="cursor-pointer inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                  <Upload size={18} />
                  Upload New Photo
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/gif"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <p className="mt-2 text-sm text-gray-500">
                  JPG, PNG or GIF • Max 2MB
                </p>
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {config.showExperience && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  min="0"
                  placeholder="e.g. 5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            )}
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              About Description
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your caregiving philosophy, specialties, and personality..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <p className="mt-1 text-sm text-gray-500">
              Brief description for your public profile.
            </p>
          </div>

          {/* Working Areas / Specialties */}
          {config.showWorkingAreas && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Working Areas / Specialties
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {config.specialties.map((area) => (
                  <label
                    key={area}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition"
                  >
                    <input
                      type="checkbox"
                      value={area}
                      checked={formData.specialties.includes(area)}
                      onChange={handleSpecialtyChange}
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                    <span className="text-gray-700">{area}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Working Hours & Fee */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Clock size={18} className="text-gray-500" />
                Working Hours
              </label>
              <input
                type="text"
                name="workingHours"
                value={formData.workingHours}
                onChange={handleChange}
                placeholder="e.g. Mon-Fri, 8AM - 5PM"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {config.showHourlyFee && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <DollarSign size={18} className="text-gray-500" />
                  Hourly Fee ($)
                </label>
                <input
                  type="number"
                  name="hourlyFee"
                  value={formData.hourlyFee}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  placeholder="e.g. 25"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required={config.showHourlyFee}
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Complete Registration
            </button>
          </div>
        </form>

        <footer className="py-6 bg-gray-50 text-center text-sm text-gray-500 border-t">
          © 2023 CareConnect Network. All rights reserved.
        </footer>
      </div>
    </div>
  );
}