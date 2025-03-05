import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  Build,
  EventNote,
  Dashboard,
  People,
  Person,
  Payment,
  ExpandMore,
  ExpandLess,
  Work,
  Schedule,
  QueryBuilder,
  CheckCircle
} from "@mui/icons-material";
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" },
    {
      label: "Main Service",
      icon: <Build />,
      path: "/admin/service",
      subItems: [
        { label: "Sub Services", path: "/admin/subservice", icon: <MiscellaneousServicesIcon /> },
        {
          label: "Jobs",
          icon: <Work />,
          path: "/admin/jobs",
     
        }
      ]
    },
    {
      label: "Booking",
      icon: <EventNote />,
      path: "/admin/booking",
      subItems: [
        { label: "Schedule", path: "/admin/booking/schedule", icon: <Schedule /> },
        { label: "Progress", path: "/admin/booking/progress", icon: <RestartAltSharpIcon /> },
        { label: "Complete", path: "/admin/booking/complete", icon: <CheckCircle /> }
      ]
    },
    { label: "Worker Management", icon: <People />, path: "/admin/worker" },
    { label: "User Management", icon: <Person />, path: "/admin/user" },
    { label: "Payments", icon: <Payment />, path: "/admin/payments" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 560);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    menuItems.forEach((item, index) => {
      if (location.pathname.startsWith(item.path)) {
        setActiveIndex(index);
        if (item.subItems) setExpandedMenu(index);
      }
    });
  }, [location.pathname]);

  const handleNavigation = (index, path, hasSubItems) => {
    setActiveIndex(index);
    if (hasSubItems) {
      toggleSubMenu(index);
    }
    navigate(path);
  };

  const toggleSubMenu = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  return (
    <>
      <button
        className="fixed top-5 left-5 z-50 bg-gray-800 text-white p-2 rounded-md shadow-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu fontSize="large" />
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div>
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

          <ul className="space-y-4 bg-gray-50 p-4 rounded-xl text-center shadow-md border border-gray-300">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <li
                  className={`group cursor-pointer flex items-center justify-between p-3 rounded-lg transition-all duration-300 text-gray-700 hover:bg-blue-100 hover:text-blue-700 ${
                    activeIndex === index ? "bg-blue-200 text-blue-900" : ""
                  }`}
                  onClick={() =>
                    handleNavigation(index, item.path, !!item.subItems)
                  }
                >
                  <div className="flex items-center space-x-4">
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                  {item.subItems && (
                    <span>
                      {expandedMenu === index ? <ExpandLess /> : <ExpandMore />}
                    </span>
                  )}
                </li>
                {item.subItems && expandedMenu === index && (
                  <ul className="pl-8 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`flex items-center space-x-4 cursor-pointer p-2 rounded-lg transition-all duration-300 text-gray-600 hover:bg-blue-50 hover:text-blue-800 ${
                          activeIndex === index + "-" + subIndex ? "bg-blue-100" : ""
                        }`}
                        onClick={() =>
                          handleNavigation(index + "-" + subIndex, subItem.path, !!subItem.subItems)
                        }
                      >
                        <span>{subItem.icon}</span>
                        <span className="text-sm">{subItem.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>

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
