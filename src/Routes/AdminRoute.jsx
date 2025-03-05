import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Admin/pages/Dashboard'
import SideBar from '../Admin/components/SideBar'
import Navbar from '../Admin/components/Navbar'
import ServiceManagement from '../Admin/components/ServiceManagement'
import SubServices from '../Admin/pages/SubServices'
import BookingManagement from '../Admin/components/BookingManagement'
import WorkerManagement from '../Admin/components/WorkerManagement'
import UserManagement from '../Admin/components/UserManagement'
import PaymentsandTransaction from '../Admin/components/PaymentsandTransaction'
import MainContent from '../Admin/components/MainContent'
import Jobs from '../Admin/components/Jobs'
import Schedule from '../Admin/components/Bookings/schedule'
import Progress from '../Admin/components/Bookings/progress'
import Complete from '../Admin/components/Bookings/Complete'
import BookingDetail from '../Admin/components/Bookings/BookingDetails'


const AdminRoute = () => {
  return (
    <div className='flex'>
        <SideBar />
      <div className='flex-1'>
      <Navbar />
      <Routes>
              <Route path="dashboard" element={<MainContent />} />
              <Route path="service" element={<ServiceManagement />} />
        <Route path="subservice" element={<SubServices />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="booking/schedule" element={<Schedule />} />
        <Route path="booking/progress" element={<Progress />} />
        <Route path="/booking/complete" element={<Complete />} />

        <Route path="booking/bookingdetails" element={<BookingDetail />} />
        <Route path="booking" element={<BookingManagement />} />
        <Route path="worker" element={<WorkerManagement />} />
        <Route path="user" element={<UserManagement />} />
        <Route path="payments" element={<PaymentsandTransaction />} />

        </Routes>
      </div>
     
    </div>
  )
}

export default AdminRoute