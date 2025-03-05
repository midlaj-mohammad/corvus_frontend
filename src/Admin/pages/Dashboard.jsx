import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import ServiceManagement from "../components/ServiceManagement";
import BookingManagement from "../components/BookingManagement";
import WorkerManagement from "../components/WorkerManagement";
import UserManagement from "../components/UserManagement";
import PaymentsandTransaction from "../components/PaymentsandTransaction";
import SubServices from "./SubServices";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard"); // Default section

  return (
    <div className="flex">
      {/* <SideBar setActiveSection={setActiveSection} />  */}
      <div className="flex-1">
        {/* <Navbar /> */}
        
      
      </div>
    </div>
  );
};

export default Dashboard;
