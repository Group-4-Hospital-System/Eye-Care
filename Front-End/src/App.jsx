import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"; // صفحة البداية
import Login from "./features/auth/Login"; // مكون تسجيل الدخول
import Register from "./features/auth/Register"; // مكون التسجيل
import CheckoutPage from "./pages/Checkout";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/Profil" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
