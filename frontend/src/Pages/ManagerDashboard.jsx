import DashboardSidebar from '../components/DashboardSidebar'
import {  Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ManagerDashboard = () => {
  
  const [userName, setuserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    setuserName(name);
  }, [])
  
  
  return (
    <div className='flex bg-gradient-to-r from-indigo-950 to-slate-950'>
      <DashboardSidebar role={"manager"}/>

      {/* full-design of manager role */}

      <main className='flex-1 p-6 overflow-y-auto'>

      <h1 className='md:text-2xl text-xl text-center md:text-3xl font-semibold px-4 text-white'>Welcome to {userName} Dashboard</h1>
        
        {/* rendering the child component of manager */}
        <Outlet/>
      </main>
    </div>
  )
}

export default ManagerDashboard
