import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { HeartDiseaseCare } from "./pages/HeartDisease";
import { AlzheimersCare } from "./pages/Alzheimers";
import { CancerCare } from "./pages/Cancer";
import BookConsultationPage from "./pages/BookConsultationPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cancer-care" element={<CancerCare />} />
        <Route path="/alzheimers-care" element={<AlzheimersCare />} />
        <Route path="/heart-disease-care" element={<HeartDiseaseCare />} />
        <Route path="/book-consultation" element={<BookConsultationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
