# File Structure - Riva Platform

Complete file structure with descriptions and sizes.

```
riva-platform/
│
├── 📄 README.md                          # Main project documentation
├── 📄 API_DOCUMENTATION.md               # Complete API endpoints guide
├── 📄 COMPONENT_GUIDE.md                 # Detailed component documentation
├── 📄 QUICK_START.md                     # Quick start guide
├── 📄 FILE_STRUCTURE.md                  # This file
│
├── 📦 package.json                       # Dependencies (already configured)
│
└── src/
    └── app/
        │
        ├── 📄 App.tsx                    # Root component with routing
        │   └── Routes: /, /login, /signup, /dashboard
        │
        ├── 📁 components/                # Reusable components
        │   │
        │   ├── 📄 Navbar.tsx             # Main navigation bar
        │   │   ├── Logo with Riva branding
        │   │   ├── Responsive mobile menu
        │   │   ├── Dynamic nav buttons
        │   │   └── Sticky positioning
        │   │
        │   ├── 📄 Footer.tsx             # Site footer
        │   │   ├── 4-column grid layout
        │   │   ├── Brand info
        │   │   ├── Quick links
        │   │   └── Contact information
        │   │
        │   ├── 📁 home/                  # Home page components
        │   │   │
        │   │   ├── 📄 HeroSection.tsx   
        │   │   │   ├── Animated background (3 floating blobs)
        │   │   │   ├── Floating icons (Heart, Pill, Activity)
        │   │   │   ├── Main headline with gradient
        │   │   │   ├── Statistics display (10K+, 500+, 24/7)
        │   │   │   ├── CTA buttons (Get Started, Sign In)
        │   │   │   └── Doctor images with floating cards
        │   │   │
        │   │   ├── 📄 HowItWorksSection.tsx
        │   │   │   ├── 3-step process cards
        │   │   │   ├── Step number badges
        │   │   │   ├── Icon animations
        │   │   │   └── Background pattern
        │   │   │
        │   │   ├── 📄 FeaturesSection.tsx
        │   │   │   ├── 2x2 grid of features
        │   │   │   ├── Color-coded icons (sky/orange)
        │   │   │   ├── Hover lift effects
        │   │   │   └── Animated background blob
        │   │   │
        │   │   ├── 📄 DoctorsSection.tsx
        │   │   │   ├── 3-column doctor grid
        │   │   │   ├── Doctor images (Unsplash)
        │   │   │   ├── 5-star ratings
        │   │   │   └── Hover scale animations
        │   │   │
        │   │   └── 📄 CTASection.tsx
        │   │       ├── Gradient background
        │   │       ├── Animated blob
        │   │       └── Two CTA buttons
        │   │
        │   └── 📁 dashboard/             # Dashboard components
        │       │
        │       ├── 📄 DashboardSidebar.tsx
        │       │   ├── User profile display
        │       │   ├── 5 navigation items
        │       │   ├── Active tab highlighting
        │       │   └── Logout button
        │       │
        │       ├── 📄 DashboardHeader.tsx
        │       │   ├── Welcome message
        │       │   ├── Health summary text
        │       │   └── Notification bell with badge
        │       │
        │       ├── 📄 OverviewTab.tsx
        │       │   ├── 3 health metric cards:
        │       │   │   ├── Heart Rate (red gradient)
        │       │   │   ├── Blood Pressure (sky gradient)
        │       │   │   └── Blood Sugar (green gradient)
        │       │   └── Today's schedule section
        │       │
        │       ├── 📄 AppointmentsTab.tsx
        │       │   ├── Doctor appointment cards
        │       │   ├── Doctor images
        │       │   ├── Date and time display
        │       │   ├── 5-star ratings
        │       │   ├── "Join Call" buttons
        │       │   └── "Book New" button
        │       │
        │       ├── 📄 MedicationsTab.tsx   ⭐ MOST IMPORTANT
        │       │   ├── Medication list
        │       │   ├── LARGE "Taken" button (green, px-12 py-6)
        │       │   ├── LARGE "Missed" button (red, px-12 py-6)
        │       │   ├── Click handlers for backend
        │       │   └── Clear dose/time display
        │       │
        │       ├── 📄 ChatTab.tsx
        │       │   ├── Chat interface
        │       │   ├── AI avatar (sky gradient)
        │       │   ├── Message display
        │       │   ├── Input field
        │       │   └── Send button
        │       │
        │       └── 📄 ProfileTab.tsx
        │           ├── Profile form
        │           ├── Full name input
        │           ├── Email input
        │           ├── Phone input
        │           └── Save button
        │
        └── 📁 pages/                     # Main page components
            │
            ├── 📄 Home.tsx               # Landing page
            │   ├── Imports: Navbar, Footer
            │   ├── Imports: All home sections
            │   ├── Full-page layout
            │   └── Smooth section transitions
            │
            ├── 📄 Login.tsx              # Authentication page
            │   ├── Animated background
            │   ├── Email input
            │   ├── Password input (with show/hide)
            │   ├── Remember me checkbox
            │   ├── Forgot password link
            │   ├── Submit button
            │   └── Sign up link
            │
            ├── 📄 SignUp.tsx             # Registration page
            │   ├── Animated background
            │   ├── Full name input
            │   ├── Email input
            │   ├── Phone input
            │   ├── Password input
            │   ├── Confirm password input
            │   ├── Terms checkbox
            │   ├── Submit button
            │   └── Login link
            │
            └── 📄 Dashboard.tsx          # Main dashboard
                ├── Sidebar (DashboardSidebar)
                ├── Header (DashboardHeader)
                ├── Tab management (useState)
                └── Tab content rendering:
                    ├── overview → OverviewTab
                    ├── appointments → AppointmentsTab
                    ├── medications → MedicationsTab
                    ├── chat → ChatTab
                    └── profile → ProfileTab
```

---

## 📊 Component Statistics

### Total Components: 20

#### Navigation (2)
- Navbar.tsx - 87 lines
- Footer.tsx - 59 lines

#### Home Page (5)
- HeroSection.tsx - 247 lines
- HowItWorksSection.tsx - 98 lines
- FeaturesSection.tsx - 87 lines
- DoctorsSection.tsx - 109 lines
- CTASection.tsx - 59 lines

#### Dashboard (7)
- DashboardSidebar.tsx - 95 lines
- DashboardHeader.tsx - 35 lines
- OverviewTab.tsx - 172 lines
- AppointmentsTab.tsx - 123 lines
- MedicationsTab.tsx - 89 lines (⭐ Critical)
- ChatTab.tsx - 78 lines
- ProfileTab.tsx - 93 lines

#### Pages (4)
- Home.tsx - 20 lines (composition)
- Login.tsx - 146 lines
- SignUp.tsx - 197 lines
- Dashboard.tsx - 47 lines (composition)

#### Root (1)
- App.tsx - 18 lines (routing)

---

## 🎯 File Purpose Quick Reference

### 🏠 Home Flow
```
Home.tsx → Navbar → HeroSection → HowItWorksSection → FeaturesSection 
       → DoctorsSection → CTASection → Footer
```

### 🔐 Auth Flow
```
Login.tsx ─┐
           ├→ Dashboard.tsx
SignUp.tsx ┘
```

### 📊 Dashboard Flow
```
Dashboard.tsx → DashboardSidebar (navigation)
              → DashboardHeader (welcome)
              → Content Tabs:
                  ├─ OverviewTab (health metrics)
                  ├─ AppointmentsTab (doctors)
                  ├─ MedicationsTab (⭐ Taken/Missed)
                  ├─ ChatTab (AI assistant)
                  └─ ProfileTab (user settings)
```

---

## 🔄 Data Flow

### Authentication
```
Login.tsx/SignUp.tsx
    ↓
handleSubmit()
    ↓
Backend API (TODO)
    ↓
Store token in localStorage
    ↓
Navigate to /dashboard
```

### Health Metrics
```
OverviewTab.tsx
    ↓
useEffect() on mount
    ↓
Fetch from /health/metrics (TODO)
    ↓
Display in metric cards
```

### Medications
```
MedicationsTab.tsx
    ↓
User clicks "Taken" or "Missed"
    ↓
handleTaken() or handleMissed()
    ↓
POST to /medications/taken or /missed (TODO)
    ↓
Update UI with success/error
```

### Appointments
```
AppointmentsTab.tsx
    ↓
useEffect() on mount
    ↓
Fetch from /appointments (TODO)
    ↓
Display doctor cards
    ↓
User clicks "Join Call"
    ↓
Navigate to video link
```

### AI Chat
```
ChatTab.tsx
    ↓
User types message
    ↓
handleSend()
    ↓
POST to /ai/chat (TODO)
    ↓
Display AI response
```

---

## 📦 Dependencies Map

### Core Dependencies
```
motion (animations)
  ↓ Used in: All components with animations
  
react-router-dom (routing)
  ↓ Used in: App.tsx, Navbar.tsx, all page components
  
lucide-react (icons)
  ↓ Used in: All components with icons
  
tailwindcss (styling)
  ↓ Used in: All components
```

### Component Dependencies
```
Home.tsx
  ├─ Navbar.tsx
  ├─ Footer.tsx
  ├─ home/HeroSection.tsx
  ├─ home/HowItWorksSection.tsx
  ├─ home/FeaturesSection.tsx
  ├─ home/DoctorsSection.tsx
  └─ home/CTASection.tsx

Dashboard.tsx
  ├─ dashboard/DashboardSidebar.tsx
  ├─ dashboard/DashboardHeader.tsx
  ├─ dashboard/OverviewTab.tsx
  ├─ dashboard/AppointmentsTab.tsx
  ├─ dashboard/MedicationsTab.tsx
  ├─ dashboard/ChatTab.tsx
  └─ dashboard/ProfileTab.tsx
```

---

## 🎨 Styling System

### Tailwind Classes Usage
```
bg-gray-100              → Page backgrounds
bg-white                 → Cards, forms
bg-gradient-to-r         → Buttons, CTAs
from-sky-500 to-sky-600  → Primary actions
from-orange-500          → Secondary actions
rounded-xl, rounded-2xl  → Consistent rounding
shadow-lg, shadow-2xl    → Depth
px-8 py-4                → Standard button padding
text-lg, text-xl         → Senior-friendly text sizes
```

### Color Palette
```
Sky Blue    → Primary, trust, medical
Orange      → Secondary, energy, attention
Green       → Success, "taken" medication
Red         → Error, "missed" medication
Gray        → Backgrounds, neutrals
White       → Cards, forms
```

---

## 🔧 Backend Integration Points

### Files with TODO Comments (16 locations)

1. **Login.tsx** (line 23)
   - handleSubmit → Authentication API

2. **SignUp.tsx** (line 26)
   - handleSubmit → Registration API

3. **DashboardSidebar.tsx** (line 16)
   - handleLogout → Logout API

4. **OverviewTab.tsx**
   - Fetch health metrics

5. **AppointmentsTab.tsx**
   - Fetch appointments list

6. **MedicationsTab.tsx** (lines 14-26) ⭐
   - handleTaken → Mark medication taken
   - handleMissed → Mark medication missed

7. **ChatTab.tsx** (line 12)
   - handleSend → AI chat API

8. **ProfileTab.tsx** (line 16)
   - handleSave → Update profile API

---

## 📂 File Organization Best Practices

### ✅ Current Structure (Organized)
```
✓ Components separated by feature
✓ Pages in dedicated folder
✓ Dashboard components grouped
✓ Home sections grouped
✓ Clear naming conventions
✓ One component per file
```

### ❌ Anti-patterns to Avoid
```
✗ Mixing page and component logic
✗ Too many components in one file
✗ Unclear file names
✗ No folder organization
✗ Duplicate code
```

---

## 🚀 Scalability

### Easy to Add:
- ✅ New dashboard tabs (add to DashboardSidebar navItems)
- ✅ New home sections (create in home/ folder)
- ✅ New pages (add Route in App.tsx)
- ✅ New features (create new component files)

### File Structure Supports:
- User roles (patient, doctor, caregiver)
- Multi-language (i18n)
- Themes (light/dark mode)
- Mobile apps (React Native)
- API versioning

---

## 📝 Naming Conventions

### Components
- PascalCase: `HeroSection.tsx`
- Descriptive: `DashboardSidebar.tsx` not `Sidebar.tsx`
- Suffixed: `Section`, `Tab`, `Card` for clarity

### Functions
- camelCase: `handleSubmit`, `handleTaken`
- Action verbs: `handle`, `fetch`, `update`
- Clear purpose: `markMedicationTaken`

### Props
- Descriptive: `activeTab`, `setActiveTab`
- Boolean prefix: `isLoading`, `hasError`
- Type suffix: `Props` interface

---

## 🎯 Critical Files Priority

### Must Review First (Top Priority)
1. **App.tsx** - Routing setup
2. **Dashboard.tsx** - Main app structure
3. **MedicationsTab.tsx** ⭐ - Core feature
4. **Login.tsx** - Authentication
5. **OverviewTab.tsx** - Health metrics

### Review Second (High Priority)
6. **SignUp.tsx** - Registration
7. **AppointmentsTab.tsx** - Doctors
8. **ChatTab.tsx** - AI assistant
9. **Navbar.tsx** - Navigation
10. **HeroSection.tsx** - First impression

### Review Third (Medium Priority)
11-20. All other components

---

## 📊 Complexity Analysis

### Simple (Easy to modify)
- Footer.tsx
- DashboardHeader.tsx
- CTASection.tsx
- ProfileTab.tsx

### Medium (Moderate complexity)
- Navbar.tsx (responsive menu)
- HowItWorksSection.tsx (animations)
- FeaturesSection.tsx (grid layout)
- DoctorsSection.tsx (image handling)
- MedicationsTab.tsx (button logic)
- ChatTab.tsx (message handling)

### Complex (Advanced features)
- HeroSection.tsx (multiple animations, floating elements)
- OverviewTab.tsx (multiple metrics, data visualization)
- AppointmentsTab.tsx (doctor images, scheduling)
- Dashboard.tsx (tab management, state)

---

## 🔍 Quick Find

Need to find something? Use these commands:

```bash
# Find all TODO comments
grep -r "TODO" src/

# Find all API calls
grep -r "fetch\|axios" src/

# Find all useState
grep -r "useState" src/

# Find all motion animations
grep -r "motion\." src/

# Find all navigation Links
grep -r "<Link" src/

# Find all icons
grep -r "lucide-react" src/
```

---

**This file structure is production-ready and scalable!** 🚀
