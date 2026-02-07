# Component Guide - Riva Platform

Complete guide to understanding and using each component in the Riva platform.

## Table of Contents
1. [Navigation Components](#navigation-components)
2. [Home Page Components](#home-page-components)
3. [Authentication Components](#authentication-components)
4. [Dashboard Components](#dashboard-components)

---

## Navigation Components

### 1. Navbar.tsx
**Location:** `/src/app/components/Navbar.tsx`

**Purpose:** Main navigation bar that appears on all pages

**Features:**
- Responsive design (mobile hamburger menu)
- Logo with Riva branding
- Dynamic buttons based on current route
- Sticky positioning at top
- Animated entry with Motion

**Props:** None (uses React Router's useLocation)

**Usage:**
```tsx
import Navbar from "@/app/components/Navbar";

function MyPage() {
  return (
    <>
      <Navbar />
      {/* Page content */}
    </>
  );
}
```

**Customization Points:**
- Line 7: Logo import (`figma:asset/...`)
- Lines 26-45: Desktop navigation buttons
- Lines 48-78: Mobile menu

---

### 2. Footer.tsx
**Location:** `/src/app/components/Footer.tsx`

**Purpose:** Site footer with links and contact information

**Features:**
- 4-column grid layout (responsive)
- Logo and brand description
- Quick links section
- Contact information
- Copyright notice

**Props:** None

**Usage:**
```tsx
import Footer from "@/app/components/Footer";

function MyPage() {
  return (
    <>
      {/* Page content */}
      <Footer />
    </>
  );
}
```

**Customization Points:**
- Line 6: Logo import
- Lines 15-20: Brand description text
- Lines 26-31: Quick links
- Lines 38-42: Contact information

---

## Home Page Components

### 3. HeroSection.tsx
**Location:** `/src/app/components/home/HeroSection.tsx`

**Purpose:** Landing page hero section with animated background

**Features:**
- Animated background blobs (3 floating elements)
- Floating icons (Heart, Pill, Activity)
- Main headline with gradient text
- Statistics display (10K+ seniors, 500+ doctors, 24/7)
- CTA buttons (Get Started, Sign In)
- Doctor images with floating cards
- Fully animated with Motion

**Props:** None

**Key Elements:**
- **Lines 12-68:** Animated background blobs and icons
- **Lines 77-108:** Text content with animations
- **Lines 111-122:** Statistics grid
- **Lines 127-140:** CTA buttons
- **Lines 145-240:** Doctor images with floating health cards

**Customization:**
```tsx
// Change headline
<h1>Your Custom Headline</h1>

// Change stats
<div>
  <h3>Custom Number</h3>
  <p>Custom Description</p>
</div>

// Change doctor images
<ImageWithFallback src="YOUR_IMAGE_URL" />
```

---

### 4. HowItWorksSection.tsx
**Location:** `/src/app/components/home/HowItWorksSection.tsx`

**Purpose:** Display the 3-step process

**Features:**
- 3 cards with icons
- Step numbers in orange badges
- Hover animations
- Background pattern
- Viewport-triggered animations

**Props:** None

**Steps Array (Lines 7-31):**
```tsx
const steps = [
  {
    icon: Activity,
    title: "Track Health",
    description: "Monitor vital signs automatically with AI",
    color: "from-sky-400 to-sky-500",
    delay: 0.2
  },
  // Add more steps...
];
```

**Customization:**
- Add/remove steps in the array
- Change icons (import from lucide-react)
- Modify colors (Tailwind gradient classes)

---

### 5. FeaturesSection.tsx
**Location:** `/src/app/components/home/FeaturesSection.tsx`

**Purpose:** Showcase key platform features

**Features:**
- 2x2 grid of feature cards
- Color-coded icons (alternating sky/orange)
- Hover lift effect
- Animated background blob

**Props:** None

**Features Array (Lines 7-31):**
```tsx
const features = [
  {
    icon: Pill,
    title: "Medication Management",
    description: "Large, clear reminders with simple Taken/Missed buttons",
    color: "sky" // or "orange"
  },
  // Add more features...
];
```

**Customization:**
- Add/remove features
- Change grid layout (currently `grid-cols-2`)
- Modify icon colors

---

### 6. DoctorsSection.tsx
**Location:** `/src/app/components/home/DoctorsSection.tsx`

**Purpose:** Display featured doctors with images

**Features:**
- 3-column grid of doctor cards
- Real doctor images
- 5-star ratings
- Hover scale animation
- Image zoom on hover

**Props:** None

**Doctors Array (Lines 8-35):**
```tsx
const doctors = [
  {
    image: "https://images.unsplash.com/...",
    name: "Dr. Michael Chen",
    specialty: "Cardiologist",
    experience: "15+ years"
  },
  // Add more doctors...
];
```

**Customization:**
- Replace with real doctor data from backend
- Change grid columns (currently 3)
- Modify card styling

---

### 7. CTASection.tsx
**Location:** `/src/app/components/home/CTASection.tsx`

**Purpose:** Final call-to-action section

**Features:**
- Gradient background (sky → orange)
- Animated blob background
- Two CTA buttons
- Centered content

**Props:** None

**Customization:**
```tsx
// Change headline (Line 30)
<h2>Your Custom CTA Headline</h2>

// Change buttons (Lines 41-54)
<Link to="/your-route">Your Button Text</Link>
```

---

## Authentication Components

### 8. Login.tsx
**Location:** `/src/app/pages/Login.tsx`

**Purpose:** User authentication page

**Features:**
- Email and password inputs
- Show/hide password toggle
- Remember me checkbox
- Forgot password link
- Animated background
- Form validation

**State:**
```tsx
const [formData, setFormData] = useState({
  email: "",
  password: ""
});
```

**Backend Integration (Line 23):**
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // TODO: Add your authentication API call here
  navigate("/dashboard");
};
```

**Customization:**
- Add form validation
- Connect to your auth API
- Add social login buttons
- Customize error messages

---

### 9. SignUp.tsx
**Location:** `/src/app/pages/SignUp.tsx`

**Purpose:** New user registration

**Features:**
- Full name, email, phone inputs
- Password and confirm password
- Terms & conditions checkbox
- Form validation
- Animated background

**State:**
```tsx
const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: ""
});
```

**Backend Integration (Line 26):**
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // TODO: Add your registration API call here
  navigate("/dashboard");
};
```

**Customization:**
- Add password strength indicator
- Add email verification
- Add phone number formatting
- Add more fields (date of birth, etc.)

---

## Dashboard Components

### 10. DashboardSidebar.tsx
**Location:** `/src/app/components/dashboard/DashboardSidebar.tsx`

**Purpose:** Dashboard navigation sidebar

**Features:**
- User profile display
- 5 navigation items
- Active tab highlighting
- Logout button
- Fixed width (w-72)

**Props:**
```tsx
interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
```

**Navigation Items (Lines 22-28):**
```tsx
const navItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "appointments", label: "Appointments", icon: Calendar },
  { id: "medications", label: "Medications", icon: Pill },
  { id: "chat", label: "AI Assistant", icon: MessageCircle },
  { id: "profile", label: "Profile", icon: User }
];
```

**Customization:**
- Add/remove nav items
- Change user info (currently hardcoded)
- Modify logout handler
- Add role-based navigation

---

### 11. DashboardHeader.tsx
**Location:** `/src/app/components/dashboard/DashboardHeader.tsx`

**Purpose:** Dashboard page header

**Features:**
- Welcome message
- Health summary text
- Notification bell with badge
- Hover animations

**Props:** None

**Customization:**
```tsx
// Change welcome message (Line 15)
<h1>Welcome back, {userName} 👋</h1>

// Add notification count
<span className="badge">{notificationCount}</span>
```

---

### 12. OverviewTab.tsx
**Location:** `/src/app/components/dashboard/OverviewTab.tsx`

**Purpose:** Dashboard overview with health metrics

**Features:**
- 3 health metric cards (Heart Rate, Blood Pressure, Blood Sugar)
- Color-coded gradients (red, sky, green)
- Status indicators
- Today's schedule section
- Hover animations

**Props:** None

**Metrics Display (Lines 15-81):**
- Each metric card has:
  - Icon with gradient background
  - Large value display
  - Status badge
  - Hover lift effect

**Backend Integration:**
```tsx
// Fetch health metrics
useEffect(() => {
  const fetchMetrics = async () => {
    const data = await fetch('/health/metrics');
    setMetrics(data);
  };
  fetchMetrics();
}, []);
```

---

### 13. AppointmentsTab.tsx
**Location:** `/src/app/components/dashboard/AppointmentsTab.tsx`

**Purpose:** View and manage appointments

**Features:**
- Doctor images and info
- Date and time display
- 5-star ratings
- "Join Call" button
- "Book New" button

**Props:** None

**Doctors Array (Lines 8-29):**
```tsx
const doctors = [
  {
    image: "URL",
    name: "Dr. Name",
    specialty: "Specialty",
    date: "Feb 15, 2026",
    time: "2:00 PM"
  }
];
```

**Backend Integration:**
```tsx
// Fetch appointments
useEffect(() => {
  const fetchAppointments = async () => {
    const data = await fetch('/appointments');
    setAppointments(data);
  };
  fetchAppointments();
}, []);
```

---

### 14. MedicationsTab.tsx ⭐ **MOST IMPORTANT**
**Location:** `/src/app/components/dashboard/MedicationsTab.tsx`

**Purpose:** Medication tracking with LARGE buttons

**Features:**
- ✅ **HUGE Green "Taken" button** (px-12 py-6)
- ❌ **HUGE Red "Missed" button** (px-12 py-6)
- Clear medication names (text-3xl)
- Dose and time info
- Click handlers for backend integration

**Props:** None

**Medications Array (Lines 8-12):**
```tsx
const medications = [
  { name: "Aspirin", dose: "100mg", time: "Morning" },
  { name: "Metformin", dose: "500mg", time: "Morning" },
  { name: "Lisinopril", dose: "10mg", time: "Evening" }
];
```

**Backend Integration (Lines 14-26):**
```tsx
const handleTaken = (medName: string) => {
  // TODO: Call your API
  console.log(`${medName} marked as taken`);
};

const handleMissed = (medName: string) => {
  // TODO: Call your API
  console.log(`${medName} marked as missed`);
};
```

**Button Styling:**
```tsx
// Taken Button (Green)
className="px-12 py-6 bg-gradient-to-br from-green-500 to-green-600 
           text-white rounded-2xl font-bold text-2xl"

// Missed Button (Red)
className="px-12 py-6 bg-gradient-to-br from-red-500 to-red-600 
           text-white rounded-2xl font-bold text-2xl"
```

---

### 15. ChatTab.tsx
**Location:** `/src/app/components/dashboard/ChatTab.tsx`

**Purpose:** AI health assistant chat interface

**Features:**
- Chat message display
- AI avatar (sky gradient circle)
- Message input field
- Send button
- Auto-scroll chat

**Props:** None

**State:**
```tsx
const [message, setMessage] = useState("");
```

**Backend Integration (Line 12):**
```tsx
const handleSend = () => {
  // TODO: Send to AI API
  console.log("Message sent:", message);
  setMessage("");
};
```

**Customization:**
- Add message history
- Add typing indicator
- Add message timestamps
- Add file upload

---

### 16. ProfileTab.tsx
**Location:** `/src/app/components/dashboard/ProfileTab.tsx`

**Purpose:** User profile management

**Features:**
- Full name input
- Email input
- Phone input
- Save button
- Form validation

**Props:** None

**State:**
```tsx
const [formData, setFormData] = useState({
  fullName: "Ahmed Hassan",
  email: "ahmed@example.com",
  phone: "+20 123 456 7890"
});
```

**Backend Integration (Line 16):**
```tsx
const handleSave = (e: React.FormEvent) => {
  e.preventDefault();
  // TODO: Update profile API
  console.log("Profile updated:", formData);
};
```

---

## Common Patterns

### Animation Pattern
All components use Motion for animations:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### Button Pattern
Standard button styling:
```tsx
<button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 
                   text-white rounded-xl font-bold text-lg 
                   hover:shadow-lg transition-all">
  Button Text
</button>
```

### Card Pattern
Standard card styling:
```tsx
<div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
  {/* Card content */}
</div>
```

### Input Pattern
Standard input styling:
```tsx
<input
  type="text"
  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl 
             font-['Inter',sans-serif] text-lg 
             focus:border-sky-500 focus:outline-none"
  placeholder="Your text"
/>
```

---

## Color System

### Primary Colors
- **Sky Blue**: `from-sky-500 to-sky-600` (buttons, primary actions)
- **Orange**: `from-orange-500 to-orange-600` (secondary actions, accents)
- **Green**: `from-green-500 to-green-600` (success, "taken" medication)
- **Red**: `from-red-500 to-red-600` (danger, "missed" medication)

### Background Colors
- **Light Gray**: `bg-gray-100` (page backgrounds)
- **White**: `bg-white` (cards, forms)
- **Dark Gray**: `bg-gray-900` (footer)

### Gradient Backgrounds
- **Sky Gradient**: `bg-gradient-to-br from-sky-50 to-blue-50`
- **Orange Gradient**: `bg-gradient-to-br from-orange-50 to-amber-50`
- **Multi Gradient**: `bg-gradient-to-br from-sky-500 via-sky-600 to-orange-500`

---

## Typography

All components use Inter font:
```css
font-['Inter',sans-serif]
```

### Text Sizes (Senior-Friendly)
- **Headlines**: `text-4xl` to `text-7xl`
- **Body**: `text-lg` to `text-2xl`
- **Small**: `text-sm` to `text-base`

### Font Weights
- **Bold**: `font-bold` (headlines, buttons)
- **Semibold**: `font-semibold` (labels, sub-headers)
- **Normal**: Default (body text)

---

## Responsive Design

### Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` prefix (≥ 768px)
- **Desktop**: `lg:` prefix (≥ 1024px)

### Grid Patterns
```tsx
// Mobile: 1 column, Desktop: 3 columns
className="grid grid-cols-1 md:grid-cols-3 gap-8"
```

---

## Best Practices

1. **Always add TODO comments** where backend integration is needed
2. **Use Motion animations** for smooth transitions
3. **Follow the color system** for consistency
4. **Use large text and buttons** for accessibility
5. **Test on mobile** devices
6. **Add loading states** for async operations
7. **Handle errors gracefully**
8. **Use TypeScript** types for props

---

## Quick Reference

### Import Statements
```tsx
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
```

### State Management
```tsx
import { useState, useEffect } from "react";

const [data, setData] = useState(initialValue);
```

### Navigation
```tsx
const navigate = useNavigate();
navigate("/dashboard");
```

---

**For more details, see README.md and API_DOCUMENTATION.md**
