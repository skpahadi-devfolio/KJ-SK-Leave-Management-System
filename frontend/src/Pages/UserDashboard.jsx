import DashboardSidebar from '../components/DashboardSidebar'
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const UserDashboard = () => {

  const [userName, setuserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    setuserName(name);
  }, [])
  
  
  return (
    <div className='flex bg-gradient-to-r from-indigo-700 to-indigo-950'>
      
      <DashboardSidebar role={"user"}/>

      {/* show full dashboard of employee */}
      <main className='flex-1 p-6 overflow-y-auto'>


      <h1 className='md:text-2xl text-xl text-center md:text-3xl font-semibold text-white px-4'>Welcome to {userName} Dashboard</h1>
        {/* render child components */}
        <Outlet/>
      </main>

    </div>
  )
}

export default UserDashboard
