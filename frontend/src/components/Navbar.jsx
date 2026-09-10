import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  const [menuOpen, setmenuOpen] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);


  //handle Logout function:-
  const HandleLogout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("userName");
    navigate("/login");
  }

  //useEffect for the refersh the button from logout to signup and login:-
  useEffect(() => {
    const checktoken = () => {
    const token = localStorage.getItem("Token");

    if(!token){
      setloggedIn(false);
      return;
    }
    const decodedToken = jwtDecode(token);

    if(decodedToken.exp * 1000 > Date.now()){
      setloggedIn(true);
    }else{
      localStorage.removeItem("Token");
      localStorage.removeItem("userName");
      setloggedIn(false);
    }
  };
  checktoken();
  const interval = setInterval(checktoken, 1000);
  return () => clearInterval(interval); 
 }, []);
  
  return (
    <div className='flex justify-between items-center gap-5 bg-gradient-to-r from-violet-950 to-purple-950 p-3 px-8'>
        <NavLink onClick={()=>{navigate("/")}} className='flex flex-col text-center gap-2'>
        <p className='md:text-4xl text-2xl text-white font-semibold'>KJ&SK</p>
        <p className='md:text-lg text-base font-bold bg-gradient-to-r from-violet-700 to-slate-700 bg-clip-text text-transparent'>Apply Your Own Leave</p>
        </NavLink>


        {/* mobile-hamburger */}
        <div className="mobile-hamburger md:hidden text-3xl" onClick={()=>{setmenuOpen(!menuOpen)}}>{menuOpen?<FaXmark/>:<FaBars/>}</div>

        <nav className='hidden md:flex md:justify-between md:items-center gap-8'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/services"}>Services</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        
        {loggedIn? (<button className={"bg-gradient-to-r from-slate-700 to-gray-800 hover:border border-gray-900 p-4 rounded-xl hover:rounded-full px-8 hover:transition-all hover:duration-700 hover:ease-in-out"} onClick={HandleLogout}>Logout</button>):(<>
        <NavLink className={"bg-gradient-to-r from-slate-700 to-gray-800 hover:border border-gray-900 p-4 rounded-xl hover:rounded-full px-8 hover:transition-all hover:duration-700 hover:ease-in-out"} to={"/login"}>Login</NavLink>
        <NavLink className={"bg-gradient-to-r from-slate-700 to-gray-800 hover:border border-gray-900 p-4 rounded-xl hover:rounded-full px-8 hover:transition-all hover:duration-700 hover:ease-in-out"} to={"/signup"}>Signup</NavLink></>)}
      </nav>


      {/* mobile-navbar */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 right-7 w-full mx-auto h-auto flex flex-col justify-center items-center gap-6 mt-2 p-6 border border-gray-900 rounded-md bg-gradient-to-r from-slate-950 to-gray-900">
          <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/services"}>Services</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        
        {loggedIn? (<button className={"bg-gradient-to-r from-slate-700 to-gray-800 hover:border border-gray-900 p-4 rounded-xl hover:rounded-full px-8 hover:transition-all hover:duration-700 hover:ease-in-out"} onClick={HandleLogout}>Logout</button>):(<>
        <NavLink className={"bg-gradient-to-r from-slate-700 to-gray-800 hover:border border-gray-900 p-4 rounded-xl hover:rounded-full px-8 hover:transition-all hover:duration-700 hover:ease-in-out"} to={"/login"}>Login</NavLink>
        <NavLink className={"bg-gradient-to-r from-slate-700 to-gray-800 hover:border border-gray-900 p-4 rounded-xl hover:rounded-full px-8 hover:transition-all hover:duration-700 hover:ease-in-out"} to={"/signup"}>Signup</NavLink></>)}
        </div>
      )}
    </div>
  )
}

export default Navbar
