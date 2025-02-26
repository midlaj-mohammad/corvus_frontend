import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import CustomerRoute from "./Routes/CustomerRoute";
import AdminRoute from "./Routes/AdminRoute";


const App = () => {
  return (
    <Router>
      <div >
    
        <Routes>
          <Route path="/*" element={<CustomerRoute />} />
          <Route path="/admin/*" element={<AdminRoute />} />
          
          {/* <Route path="/beauty" element={<Beauty />} />
          <Route path="/decor" element={<Decor />} />
          <Route path="/native" element={<Native />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
    
      </div>
    </Router>
  );
};

export default App;
