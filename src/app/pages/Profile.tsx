// ============================================
// PROFILE PAGE - User profile & settings
// ============================================
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Phone, Save, Camera } from "lucide-react";
import { motion } from "motion/react";

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 000-0000",
    role: "patient",
  });

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setAvatarFile(file);
      const objUrl = URL.createObjectURL(file);
      setAvatarPreview(objUrl);

      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        try {
          localStorage.setItem("riva_avatar", dataUrl);
          window.dispatchEvent(new CustomEvent("riva:profile-updated", { detail: { avatar: dataUrl } }));
        } catch (err) {
          console.warn("Could not persist avatar to localStorage", err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("fullName", profile.fullName);
      form.append("email", profile.email);
      form.append("phone", profile.phone);
      form.append("role", profile.role);
      if (avatarFile) form.append("avatar", avatarFile);

      const res = await fetch("/api/profile", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Failed to save profile");
      const data = await res.json().catch(() => null);
      console.log("Saved profile response:", data);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    return () => {
      if (avatarPreview && avatarPreview.startsWith("blob:")) URL.revokeObjectURL(avatarPreview);
    };
  }, [avatarPreview]);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="inter-sans font-bold text-3xl text-gray-900">Your Profile</h1>
            <p className="inter-sans text-gray-600">View and edit your personal information and account settings.</p>
          </div>
          <div>
            <Link to="/dashboard" className="text-sky-600 hover:text-sky-700 font-semibold">← Back to dashboard</Link>
          </div>
        </div>

        <motion.div className="bg-white rounded-3xl shadow p-8 border border-gray-100" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="flex flex-col items-center md:items-start md:col-span-1">
              <div className="relative">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="avatar" className="h-32 w-32 rounded-full object-cover" />
                ) : (
                  <div className="h-32 w-32 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-2xl font-bold">{profile.fullName.split(" ")[0].charAt(0)}</div>
                )}

                <button type="button" onClick={() => fileInputRef.current?.click()} className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow hover:bg-gray-50 transition">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block inter-sans font-semibold text-gray-900 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={profile.fullName}
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl inter-sans text-gray-900 focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block inter-sans font-semibold text-gray-900 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl inter-sans text-gray-900 focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block inter-sans font-semibold text-gray-900 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl inter-sans text-gray-900 focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block inter-sans font-semibold text-gray-900 mb-2">Account Type</label>
                  <select
                    value={profile.role}
                    onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl inter-sans text-gray-900 focus:border-sky-500 focus:outline-none transition-colors"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    <option value="caregiver">Caregiver</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <motion.button
                  type="submit"
                  className="inline-flex items-center gap-2 py-3 px-5 bg-sky-600 text-white rounded-xl inter-sans font-bold shadow hover:bg-sky-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Save className="w-4 h-4" /> Save Changes
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
