import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage'; // Adjust paths as needed
// import LoginPage from './pages/LoginPage';
// import UserProfilePage from './pages/UserProfilePage';
// import AppointmentPage from './pages/AppointmentPage';
// import PatientRecordPage from './pages/PatientRecordPage';
// import BillingPage from './pages/BillingPage';
// import AboutUsPage from './pages/AboutUsPage';
// import ContactUsPage from './pages/ContactUsPage';
// import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
        {/* <NavBar/> */}
      <Routes>
        
         <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/records" element={<PatientRecordPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/admin" element={<AdminDashboard />} />  */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
