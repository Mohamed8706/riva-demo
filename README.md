# Riva - AI Healthcare Companion for Seniors

A modern, accessible healthcare platform designed specifically for seniors with AI-powered features, medication management, and video consultations.

## 🎨 Design Features

- **Baby Blue & Orange Color Scheme**: Calm, senior-friendly colors
- **Large Buttons & Text**: Easy to read and interact with
- **Smooth Animations**: Powered by Motion (Framer Motion)
- **Responsive Design**: Works on all devices
- **Accessible UI**: High contrast, clear spacing

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx              # Main navigation bar
│   │   ├── Footer.tsx              # Site footer
│   │   ├── home/
│   │   │   ├── HeroSection.tsx     # Landing hero section
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── DoctorsSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── dashboard/
│   │       ├── DashboardSidebar.tsx
│   │       ├── DashboardHeader.tsx
│   │       ├── OverviewTab.tsx
│   │       ├── AppointmentsTab.tsx
│   │       ├── MedicationsTab.tsx  # Large Taken/Missed buttons
│   │       ├── ChatTab.tsx         # AI Assistant
│   │       └── ProfileTab.tsx
│   ├── pages/
│   │   ├── Home.tsx                # Main landing page
│   │   ├── Login.tsx               # User login
│   │   ├── SignUp.tsx              # User registration
│   │   └── Dashboard.tsx           # Main dashboard
│   └── App.tsx                     # Root component with routing
```

## 🚀 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with features & doctors |
| `/login` | Login | User authentication |
| `/signup` | SignUp | New user registration |
| `/dashboard` | Dashboard | Patient health dashboard |

## 🏥 Dashboard Features

### Overview Tab
- Real-time health metrics (Heart Rate, Blood Pressure, Blood Sugar)
- Today's schedule with medications and appointments
- Color-coded cards with gradients

### Appointments Tab
- View upcoming doctor appointments
- Doctor profiles with images
- One-click video call join button

### Medications Tab
- **LARGE BUTTONS** for seniors:
  - ✅ **Green "Taken" button** (12px padding)
  - ❌ **Red "Missed" button** (12px padding)
- Clear medication names and dosages
- Easy to tap/click interface

### AI Assistant Tab
- Chat interface with health AI
- Ask health-related questions
- Get instant responses

### Profile Tab
- Edit personal information
- Update contact details
- Save changes

## 🔧 Backend Integration Guide

### Authentication (Login/SignUp)

```typescript
// In Login.tsx (line 23)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // TODO: Replace with your backend API
  try {
    const response = await fetch('YOUR_API_URL/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });
    
    const data = await response.json();
    // Store auth token
    localStorage.setItem('authToken', data.token);
    navigate("/dashboard");
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

### Medication Tracking

```typescript
// In MedicationsTab.tsx (line 20-27)
const handleTaken = async (medName: string) => {
  try {
    await fetch('YOUR_API_URL/medications/mark-taken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        medicationName: medName,
        timestamp: new Date().toISOString(),
        status: 'taken'
      })
    });
  } catch (error) {
    console.error('Failed to mark medication:', error);
  }
};
```

### Health Metrics

```typescript
// Fetch health data for OverviewTab.tsx
const fetchHealthMetrics = async () => {
  try {
    const response = await fetch('YOUR_API_URL/health/metrics', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    });
    const data = await response.json();
    // Update state with real data
    setHealthMetrics(data);
  } catch (error) {
    console.error('Failed to fetch metrics:', error);
  }
};
```

### AI Chat

```typescript
// In ChatTab.tsx (line 12-18)
const handleSend = async () => {
  try {
    const response = await fetch('YOUR_API_URL/ai/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    // Display AI response
    setMessages([...messages, { text: data.reply, from: 'ai' }]);
  } catch (error) {
    console.error('AI chat failed:', error);
  }
};
```

## 🎯 Key Components to Customize

### 1. Logo
Replace the logo in:
- `Navbar.tsx` (line 7)
- `Footer.tsx` (line 4)
- `Login.tsx` (line 6)
- `SignUp.tsx` (line 6)
- `DashboardSidebar.tsx` (line 4)

### 2. Colors
Main colors used:
- **Sky Blue**: `from-sky-500 to-sky-600`
- **Orange**: `from-orange-500 to-orange-600`
- **Gray**: `bg-gray-100` (backgrounds)

### 3. API Endpoints
Search for `TODO: Backend` comments throughout the code to find all places where you need to integrate your API.

## 📦 Dependencies

All required packages are already installed:
- `motion` - Animations
- `react-router-dom` - Routing
- `lucide-react` - Icons
- `tailwindcss` - Styling

## 🚀 Getting Started

1. **Copy all files** to your codebase
2. **Replace TODO comments** with your backend API calls
3. **Update logo imports** with your actual logo path
4. **Test authentication** flow
5. **Connect health metrics** API
6. **Test medication** tracking
7. **Integrate AI** chat API

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation
- **Mobile**: Hamburger menu in Navbar
- **Tablets**: Optimized grid layouts

## ♿ Accessibility Features

- Large text (text-lg, text-xl, text-2xl)
- High contrast colors
- Clear button states
- Keyboard navigation support
- Screen reader friendly

## 🎨 Animation Details

All animations use Motion (Framer Motion):
- Page transitions
- Hover effects
- Floating elements
- Smooth scroll reveals

## 📝 Notes for Backend Team

1. **User Model** should include: name, email, phone, password
2. **Medications** need: name, dose, time, status, timestamp
3. **Appointments** need: doctorName, specialty, date, time, videoLink
4. **Health Metrics** need: heartRate, bloodPressure, bloodSugar, timestamp
5. **AI Chat** needs: message history, context awareness

## 🔐 Security Recommendations

- Use HTTPS for all API calls
- Implement JWT token authentication
- Store tokens securely
- Validate all user inputs
- Implement rate limiting
- Use environment variables for API URLs

## 💡 Future Enhancements

- Push notifications for medications
- Family member access
- Export health reports
- Multiple language support
- Dark mode option

---

**Built with ❤️ for Seniors**
