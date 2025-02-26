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
      <SideBar setActiveSection={setActiveSection} /> {/* Pass setActiveSection */}
      <div className="flex-1">
        <Navbar />
        
        {/* Conditionally Render Content */}
        {activeSection === "dashboard" && <MainContent />}
        {activeSection === "service" && <ServiceManagement />}
        {activeSection === "subservice" && <SubServices />}
        {activeSection === "booking" && <BookingManagement />}
        {activeSection === "worker" && <WorkerManagement />}
        {activeSection === "user" && <UserManagement />}
        {activeSection === "payments" && <PaymentsandTransaction />}
      </div>
    </div>
  );
};

export default Dashboard;
