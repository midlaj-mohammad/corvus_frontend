import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <Outlet /> {/* This will render the current page */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
