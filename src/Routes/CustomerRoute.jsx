import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SubCategory from "../pages/SubCategory";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/NavBar";

const CustomerRoute = () => {
  return (
    <div>
           <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subCategory" element={<SubCategory />} />
    
    </Routes>
    <Footer />
    </div>
  );
};

export default CustomerRoute;
