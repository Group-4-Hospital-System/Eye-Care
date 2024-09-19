import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"; // صفحة البداية
import Login from "./features/auth/Login"; // مكون تسجيل الدخول
import Register from "./features/auth/Register"; // مكون التسجيل
import CheckoutPage from "./pages/Checkout";
{
  /* Admin Dashboard */
}
import Dashboard from "./pages/Admin-Dashboard/Page/Home/Home";
import UserDashboard from "./pages/Admin-Dashboard/Page/Users/UserDashboard";
import DoctorsDashboard from "./pages/Admin-Dashboard/Page/Doctors/DoctorsDashboard";
import ContactUsDashboard from "./pages/Admin-Dashboard/Page/ContactUs/ContactUsDashboard";
import AppointmentsDashboard from "./pages/Admin-Dashboard/Page/Appointments/Appointments";
import DoctorDashboard from "./pages/doctorDashboard/doctor";
{
  /* End Of Admin Dashboard */
}
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        {/* Admin Dashboard */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/users" element={<UserDashboard />} />
        <Route path="/Dashboard/Doctors" element={<DoctorsDashboard />} />
        <Route
          path="/Dashboard/Appointments"
          element={<AppointmentsDashboard />}
        />
        <Route path="/Dashboard/ContactUS" element={<ContactUsDashboard />} />
        <Route
          path="/Dashboard/DoctorDashboard"
          element={<DoctorDashboard />}
        />
        {/* End Of Admin Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
