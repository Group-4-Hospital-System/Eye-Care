import React, { useState } from "react";
import {
  Home,
  Users,
  Settings,
  HelpCircle,
  Menu,
  BriefcaseMedical,
  Contact,
  LogOut,
  ShoppingBag,
  CalendarCog,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // استيراد useLocation من react-router-dom

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: Home, text: "Home", path: "/Dashboard" },
    { icon: Users, text: "Users", path: "/Dashboard/users" },
    { icon: BriefcaseMedical, text: "Doctors", path: "/Dashboard/Doctors" },
    { icon: CalendarCog, text: "Appointments", path: "/Dashboard/Appointments" },
    { icon: Contact, text: "Contact Us", path: "/Dashboard/ContactUS" },
    
  ];

  return (
    <>
      <button
        className="md:hidden fixed top-1 left-1 z-20 bg-[#1f7b6f] text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        <Menu />
      </button>
      <div
        className={`bg-[#232323] text-white h-screen w-64 fixed left-0 top-0 p-4 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-10`}
      >
        <div>
          <h2
            className={`text-2xl font-bold mb-6 md:mt-0 ${
              isOpen ? "mt-7" : ""
            }`}
          >
            Dashboard
          </h2>
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-2 rounded transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "bg-[#1f7b6f] text-white"
                        : "hover:bg-[#1f7b6f] text-gray-300"
                    }`}
                  >
                    <item.icon className="mr-2" /> {item.text}
                  </Link>
                </li>
              ))}
              <Link
                to="/LogIn"
                className={`flex items-center p-2 rounded transition-colors duration-200 hover:bg-[#ff0000] text-gray-300`}
              >
                <LogOut className="mr-2" />Log Out
              </Link>
            </ul>
          </nav>
        </div>

        <div className="pt-6 border-t border-gray-700">
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold">Abdulrahman</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
