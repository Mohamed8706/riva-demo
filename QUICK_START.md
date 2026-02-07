# Quick Start Guide - Riva Platform

Get your Riva healthcare platform up and running in minutes!

## 📋 Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Your backend API ready (or use mock data initially)
- Basic knowledge of React and TypeScript

## 🚀 Quick Start (5 Minutes)

### Step 1: Copy Files to Your Project

Copy all files from this codebase to your project:

```
your-project/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   ├── home/
│       │   │   ├── HeroSection.tsx
│       │   │   ├── HowItWorksSection.tsx
│       │   │   ├── FeaturesSection.tsx
│       │   │   ├── DoctorsSection.tsx
│       │   │   └── CTASection.tsx
│       │   └── dashboard/
│       │       ├── DashboardSidebar.tsx
│       │       ├── DashboardHeader.tsx
│       │       ├── OverviewTab.tsx
│       │       ├── AppointmentsTab.tsx
│       │       ├── MedicationsTab.tsx
│       │       ├── ChatTab.tsx
│       │       └── ProfileTab.tsx
│       ├── pages/
│       │   ├── Home.tsx
│       │   ├── Login.tsx
│       │   ├── SignUp.tsx
│       │   └── Dashboard.tsx
│       └── App.tsx
├── README.md
├── API_DOCUMENTATION.md
├── COMPONENT_GUIDE.md
└── package.json (already exists)
```

### Step 2: Verify Dependencies

All required packages are already installed in your project:
- ✅ `motion` (animations)
- ✅ `react-router-dom` (routing)
- ✅ `lucide-react` (icons)
- ✅ `tailwindcss` (styling)

### Step 3: Test the Application

Run your development server:
```bash
npm run dev
# or
pnpm run dev
```

Visit `http://localhost:5173` (or your configured port)

### Step 4: Navigate Through Pages

Test all routes:
- 🏠 Home: `http://localhost:5173/`
- 🔐 Login: `http://localhost:5173/login`
- 📝 Sign Up: `http://localhost:5173/signup`
- 📊 Dashboard: `http://localhost:5173/dashboard`

---

## ⚡ Quick Backend Integration

### Option 1: Start with Mock Data (Recommended)

The application works out-of-the-box with console logs. Perfect for:
- Frontend testing
- UI/UX demonstrations
- Design reviews

**No changes needed!** Just use the app as-is.

### Option 2: Connect Your Backend (Production)

Search for `TODO: Backend` comments in your code:

```bash
# Find all backend integration points
grep -r "TODO: Backend" src/
```

Replace mock handlers with real API calls:

```typescript
// BEFORE (Mock)
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  navigate("/dashboard");
};

// AFTER (Real API)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('YOUR_API_URL/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    localStorage.setItem('authToken', data.token);
    navigate("/dashboard");
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

---

## 🎨 Quick Customization

### 1. Change Branding (2 minutes)

Replace logo in these files:
- `/src/app/components/Navbar.tsx` (line 7)
- `/src/app/components/Footer.tsx` (line 4)
- `/src/app/pages/Login.tsx` (line 6)
- `/src/app/pages/SignUp.tsx` (line 6)
- `/src/app/components/dashboard/DashboardSidebar.tsx` (line 4)

```typescript
// Replace this line:
import logo from "figma:asset/8f66293efd02e8bab8eb07ed233d3c0cc97fa9f5.png";

// With your logo:
import logo from "/path/to/your/logo.png";
```

### 2. Update Site Name (1 minute)

Search and replace "Riva" with your site name:
```bash
# In VS Code: Cmd/Ctrl + Shift + F
# Search: "Riva"
# Replace: "YourSiteName"
```

### 3. Change Colors (Optional)

Main colors are defined in Tailwind classes:
- **Sky Blue**: `from-sky-500 to-sky-600` → Change to your primary color
- **Orange**: `from-orange-500 to-orange-600` → Change to your secondary color

Example:
```typescript
// BEFORE
className="bg-gradient-to-r from-sky-500 to-sky-600"

// AFTER (Purple theme)
className="bg-gradient-to-r from-purple-500 to-purple-600"
```

---

## 📱 Test Checklist

Before going live, test these features:

### Home Page
- [ ] Hero section loads with animations
- [ ] All navigation buttons work
- [ ] Doctor images display correctly
- [ ] Footer links work
- [ ] Mobile menu opens/closes
- [ ] Smooth scrolling between sections

### Authentication
- [ ] Login form accepts input
- [ ] Sign up form validates fields
- [ ] Password show/hide works
- [ ] Navigation to/from auth pages works
- [ ] "Back to home" link works

### Dashboard
- [ ] Sidebar navigation switches tabs
- [ ] Health metrics display correctly
- [ ] Appointments show doctor images
- [ ] **Medication buttons are LARGE and clear**
- [ ] ✅ "Taken" button works
- [ ] ❌ "Missed" button works
- [ ] AI chat interface loads
- [ ] Profile form saves data
- [ ] Logout redirects to home

### Responsive Design
- [ ] Desktop view (> 1024px)
- [ ] Tablet view (768px - 1024px)
- [ ] Mobile view (< 768px)
- [ ] Mobile menu works
- [ ] All text is readable
- [ ] Buttons are tappable

---

## 🔧 Common Issues & Solutions

### Issue 1: Logo Not Showing
**Problem:** Logo doesn't appear

**Solution:**
```typescript
// Make sure your logo path is correct
import logo from "/assets/logo.png"; // Adjust path
```

### Issue 2: Animations Not Working
**Problem:** Components appear without animations

**Solution:**
Check that Motion is imported:
```typescript
import { motion } from "motion/react";
```

### Issue 3: Routing Not Working
**Problem:** Routes show 404

**Solution:**
Make sure BrowserRouter is set up in App.tsx:
```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

### Issue 4: Images Not Loading
**Problem:** Doctor images don't display

**Solution:**
Replace Unsplash URLs with your own images:
```typescript
const doctors = [
  {
    image: "/images/doctor1.jpg", // Use your own images
    name: "Dr. Name",
    // ...
  }
];
```

### Issue 5: Buttons Too Small on Mobile
**Problem:** Medication buttons hard to tap

**Solution:**
The buttons are already optimized with:
```typescript
className="px-12 py-6" // Already VERY large
```

If you need even larger:
```typescript
className="px-16 py-8" // Extra large
```

---

## 📚 Next Steps

### Phase 1: Frontend Only (Week 1)
1. ✅ Copy all files
2. ✅ Test all pages
3. ✅ Customize branding
4. ✅ Review with stakeholders

### Phase 2: Backend Integration (Week 2)
1. Set up authentication API
2. Connect health metrics endpoint
3. Implement medication tracking
4. Add appointments API
5. Integrate AI chat

### Phase 3: Testing & Launch (Week 3)
1. End-to-end testing
2. User acceptance testing
3. Performance optimization
4. Security audit
5. Deploy to production

---

## 🎯 Priority Integration Order

Integrate backend features in this order:

1. **Authentication (Day 1-2)**
   - Login
   - Sign up
   - Logout
   - Token management

2. **Dashboard Overview (Day 3-4)**
   - Health metrics display
   - Today's schedule

3. **Medications (Day 5-6)** ⭐ **MOST IMPORTANT**
   - List medications
   - Mark as taken
   - Mark as missed
   - Notification system

4. **Appointments (Day 7-8)**
   - List appointments
   - Book new appointment
   - Cancel appointment
   - Video call links

5. **AI Chat (Day 9-10)**
   - Send messages
   - Receive responses
   - Message history

6. **Profile (Day 11-12)**
   - View profile
   - Update information
   - Change password

---

## 💡 Pro Tips

### Tip 1: Use Environment Variables
```typescript
// Create .env file
VITE_API_URL=https://api.riva.care/v1

// Use in code
const API_URL = import.meta.env.VITE_API_URL;
```

### Tip 2: Add Loading States
```typescript
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  setLoading(true);
  try {
    await apiCall();
  } finally {
    setLoading(false);
  }
};
```

### Tip 3: Error Handling
```typescript
const [error, setError] = useState<string | null>(null);

try {
  await apiCall();
} catch (err) {
  setError('Something went wrong. Please try again.');
}
```

### Tip 4: TypeScript Types
```typescript
interface User {
  id: string;
  fullName: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);
```

### Tip 5: Context for Global State
```typescript
// Create AuthContext.tsx
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // ...
}
```

---

## 📞 Support & Resources

### Documentation Files
- **README.md** - Complete project overview
- **API_DOCUMENTATION.md** - All API endpoints with examples
- **COMPONENT_GUIDE.md** - Detailed component documentation
- **QUICK_START.md** - This file

### Code Comments
Every file has detailed comments explaining:
- Purpose of the component
- Props and state
- Backend integration points
- Customization options

### TODO Comments
Search for `TODO:` to find integration points:
```bash
# Find all TODOs
grep -r "TODO" src/
```

---

## ✅ Final Checklist

Before deploying:
- [ ] All routes tested
- [ ] Backend integrated
- [ ] Logo updated
- [ ] Site name changed
- [ ] Colors customized (optional)
- [ ] Mobile responsive
- [ ] Loading states added
- [ ] Error handling implemented
- [ ] Authentication working
- [ ] Medication tracking working
- [ ] Security measures in place
- [ ] Performance optimized

---

## 🎉 You're Ready!

Your Riva platform is now ready for development and deployment.

**Happy coding!** 🚀

---

**Need help?** Check the documentation files or review the code comments in each component.
