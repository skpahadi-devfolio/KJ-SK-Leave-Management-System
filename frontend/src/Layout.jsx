import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <div className='bg-gradient-to-r from-violet-950 to-slate-950 min-h-screen w-full overflow-hidden'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
