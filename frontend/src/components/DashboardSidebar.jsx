import { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { MdDashboard, MdEventAvailable, MdFactCheck, MdHowToReg, MdPostAdd, MdSpaceDashboard } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const DashboardSidebar = ({role}) => {
    const [openDashboard, setopenDashboard] = useState(false);

    //Employee dashboard components:-
        const employeeOpen = [
            {
             icon: <CgProfile/>,
             name: "Profile",
             path: "profile"
            },
            {
             icon: <MdPostAdd/>,
             name: "Apply Leave",
             path: "applyleave"
            },
            {
             icon: <MdEventAvailable/>,
             name: "My Leaves",
             path: "allLeaves"
            }
        ]

    
    //Manager Dashboard Components:-
    const managerOpen = [
        {
        icon: <CgProfile/>,
        name: "Profile",
        path: "profile"
        },
        {
         icon: <MdHowToReg/>,
         name: "Leave Approval",
         path: "approvalManagerleave"
        },
        {
        icon: <MdFactCheck/>,
        name: "Leave History",
        path: "AllHistory"
        }
    ]

    const menu = role === "manager"?managerOpen:employeeOpen;

  return (
    <div>
    
       {/* dashboard hamburger for mobile */}
       <button onClick={() => setopenDashboard(!openDashboard)} className='md:hidden fixed top-4 z-60'>
        {openDashboard ? <FaXmark className='text-3xl text-white fixed left-1' /> : <FaBars className='text-3xl text-white' />}
      </button>
      <div className={`sidebar bg-gradient-to-r from-slate-300 to-cyan-400 md:w-[25vw] w-[75vw] min-h-screen fixed md:static z-50 transition-all duration-200 ${openDashboard ? "left-0" : "left-[-300px] md:left-0"}`}>

            <header className='md:text-2xl text-xl text-black font-semibold flex justify-center items-center flex-col-reverse pt-7'>{role === "manager"?"Manager Dashboard":"Employee Dashboard"}{role === "manager"?<MdSpaceDashboard/>:<MdDashboard/>} </header>
        
        
        {/* main-content rendering section */}
        <main className='main-content'>
            <div className="dashboard-design flex flex-col items-center justify-between gap-5 mt-10">
            {menu.map((item, index) => (
                <div key={index} className="flex justify-center items-center gap-5 bg-gradient-to-r from-slate-500 to-gray-400 rounded-full p-4 md:w-[15vw] w-[62vw] font-semibold">
                    <p>{item.icon}</p>
                    <NavLink to={item.path}>{item.name}</NavLink>
                </div>
            ))}
        </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardSidebar
