import { useState } from "react"
import { CgProfile } from 'react-icons/cg'
import { MdEventAvailable, MdPostAdd } from 'react-icons/md'
import { NavLink } from "react-router-dom"

const EmployeeHome = () => {
    const [cards, setcards] = useState([
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
      ])
  return (
      <div className="full-dashboard-employee grid grid-cols-1 md:grid-cols-3 gap-6 md:p-8 p-5 py-6 md:py-12 bg-gradient-to-r from-slate-800 to-indigo-800 rounded-2xl mt-8">
          {cards.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-5 p-6 bg-gradient-to-r from-white to-slate-400 py-14 rounded-xl">
              <p className='h-15 w-15 rounded-full border flex justify-center items-center'>{item.icon}</p>
              <NavLink to={item.path}>{item.name}</NavLink>
            </div>
          ))}
        </div>
  )
}

export default EmployeeHome
