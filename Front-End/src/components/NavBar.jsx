// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react"; // Import useState and useEffect
// import logo from "../assets/logo.png";

// const NavBar = () => {
//   const [scrolled, setScrolled] = useState(false); // Initialize scrolled state

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     document.addEventListener("scroll", handleScroll);
//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolled]);

//   return (
//     <nav
//       className={`py-2 fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="text-mint text-xl font-bold">
//           <Link to="/">
//             <img src={logo} alt="Logo" width="70px" />
//           </Link>
//         </div>

//         {/* Nav Links */}
//         <div className="space-x-6">
//           {["/", "/profile", "/appointments", "/billing", "/admin"].map(
//             (path, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="inline-block"
//               >
//                 <Link
//                   to={path}
//                   className="text-mintD font-bold text-l hover:text-mint transition duration-300"
//                 >
//                   {path === "/"
//                     ? "Home"
//                     : path.split("/")[1].charAt(0).toUpperCase() +
//                       path.split("/")[1].slice(1)}
//                 </Link>
//               </motion.div>
//             )
//           )}
//         </div>

//         {/* Login Button */}
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="inline-block"
//         >
//           <Link
//             to="/login"
//             className="px-4 py-2 bg-mintD text-white rounded-md hover:bg-mint transition duration-300"
//           >
//             Login
//           </Link>
//         </motion.div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Helper function to get the value of a specific cookie
  const getCookieValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Check for the cookie when the component mounts
    const checkLoginStatus = () => {
      const cookieValue = getCookieValue(""); // Replace "authToken" with your actual cookie name
      console.log("Cookie Value:", cookieValue); // Debugging: Check if the cookie is present
      setIsLoggedIn(!!cookieValue); // Set isLoggedIn based on whether the cookie exists
    };

    document.addEventListener("scroll", handleScroll);
    checkLoginStatus(); // Run the check on component mount

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`py-2 fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-mint text-xl font-bold">
          <Link to="/">
            <img src={logo} alt="Logo" width="70px" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="space-x-6">
          {["/", "/profile", "/appointments", "/Contactus", "/admin"].map(
            (path, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="inline-block"
              >
                <Link
                  to={path}
                  className="text-mintD font-bold text-l hover:text-mint transition duration-300"
                >
                  {path === "/"
                    ? "Home"
                    : path.split("/")[1].charAt(0).toUpperCase() +
                      path.split("/")[1].slice(1)}
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* Login/Logout Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block"
        >
          <Link
            to={isLoggedIn ? "/logout" : "/login"}
            className="px-4 py-2 bg-mintD text-white rounded-md hover:bg-mint transition duration-300"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
