import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Admin/pages/Dashboard'


const AdminRoute = () => {
  return (
    <div>
        <Routes>
              <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
    </div>
  )
}

export default AdminRoute