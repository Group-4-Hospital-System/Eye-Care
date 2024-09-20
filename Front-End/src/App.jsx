import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"; // صفحة البداية

import Login from "./pages/Login"; // مكون تسجيل الدخول
import Register from "./pages/Register"; // مكون التسجيل

import CheckoutPage from "./pages/Checkout";
{
  /* Admin Dashboard */
}
import Dashboard from "./pages/Admin-Dashboard/Page/Home/Home";
import UserDashboard from "./pages/Admin-Dashboard/Page/Users/UserDashboard";
import DoctorsDashboard from "./pages/Admin-Dashboard/Page/Doctors/DoctorsDashboard";
import ContactUsDashboard from "./pages/Admin-Dashboard/Page/ContactUs/ContactUsDashboard";
import AppointmentsDashboard from "./pages/Admin-Dashboard/Page/Appointments/Appointments";
{
  /* End Of Admin Dashboard */
}
import DoctorDashboard from "./pages/doctorDashboard/doctor";
import "./index.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route
          path="/Dashboard/DoctorDashboard"
          element={<DoctorDashboard />}
        />
        {/* Admin Dashboard */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/users" element={<UserDashboard />} />
        <Route path="/Dashboard/Doctors" element={<DoctorsDashboard />} />
        <Route
          path="/Dashboard/Appointments"
          element={<AppointmentsDashboard />}
        />
        <Route path="/Dashboard/ContactUS" element={<ContactUsDashboard />} />
        {/* End Of Admin Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;