import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { RobotAssistant } from './components/utils/robot';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import RoleCards from './pages/RoleCards';

export default function App() {
  return (
    <Router>
      <RobotAssistant />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/roles" element={<RoleCards />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
