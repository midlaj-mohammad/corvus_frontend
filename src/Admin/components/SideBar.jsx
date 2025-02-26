import React, { useState, useEffect } from "react";
import {
  Menu,
  Build,
  EventNote,
  Dashboard,
  People,
  Person,
  Payment,
} from "@mui/icons-material";

const SideBar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Auto-hide sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 560);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Menu Button - Always Visible in Mobile View */}
      <button
        className="fixed top-5 left-5 z-50 bg-gray-800 text-white p-2 rounded-md shadow-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu fontSize="large" />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div>
          {/* Top Section - Logo */}
          <div className="flex items-center space-x-4 mb-6">
            <h2 className="text-1xl font-bold flex items-center space-x-2">
              <span className="bg-black text-white px-3 py-1 rounded-lg ml-5">
                CV
              </span>
            </h2>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Corvus</h2>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-4 bg-gray-50 p-4 rounded-xl text-center shadow-md border border-gray-300">
            <li
              className="group flex items-center space-x-4 text-gray-700 cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:text-blue-700"
              onClick={() => setActiveSection("dashboard")}
            >
              <Dashboard className="group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm">Dashboard</span>
            </li>

            <li
              className="group flex items-center space-x-4 text-gray-700 cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:text-blue-700"
              onClick={() => setActiveSection("service")}
            >
              <Build className="group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm"> Service Management</span>
            </li>
            <li
              className="group flex items-center space-x-4 text-gray-700 cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:text-blue-700"
              onClick={() => setActiveSection("subservice")}
            >
              <Build className="group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm">Sub Service</span>
            </li>


            <li
              className="group flex items-center space-x-4 text-gray-700 cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-purple-100 hover:text-purple-700"
              onClick={() => setActiveSection("booking")}
            >
              <EventNote className="group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm">Booking</span>
            </li>

            <li
              className="group flex items-center space-x-4 text-gray-700 cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-green-100 hover:text-green-700"
              onClick={() => setActiveSection("worker")}
            >
              <People className="group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm">Worker Management</span>
            </li>

            <li
              className="group flex items-center space-x-4 text-gray-700 cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-red-100 hover:text-red-700"
              onClick={() => setActiveSection("user")}
            >
              <Person className="group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm">User Management</span>
            </li>

            <li
              className="group flex items-center space-x-4 text-gray-700 cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-yellow-100 hover:text-yellow-700"
              onClick={() => setActiveSection("payments")}
            >
              <Payment className="group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm">Payments</span>
            </li>
          </ul>
        </div>

        {/* Logout Section */}
        <div className="bg-gray-50 p-4 rounded-xl text-center shadow-md border border-gray-300">
          <p className="text-gray-600 text-sm">Want to Logout?</p>
          <button className="mt-2 w-full bg-black text-white py-2 rounded-lg transition-all duration-300 hover:bg-gray-800">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
