import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"
import Layout from "./Layout";
import UserDashboard from "./Pages/UserDashboard";
import ManagerDashboard from "./Pages/ManagerDashboard";
import EmployeeProfile from "./components/Employee/EmployeeProfile";
import ApplyLeave from "./components/Employee/ApplyLeave";
import MyLeaves from "./components/Employee/MyLeaves";
import ManagerProfile from "./components/Manager/ManagerProfile";
import ManagerAprrovalLeave from "./components/Manager/ManagerAprrovalLeave";
import EmployeeHome from "./components/Employee/EmployeeHome";
import ManagerHome from "./components/Manager/ManagerHome";
import ManagermanageLeaveList from "./components/Manager/ManagermanageLeaveList";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,

      children: [
        {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/about",
      element: <><About/></>
    },
    {
      path: "/services",
      element: <><Services/></>
    },
    {
      path: "/contact",
      element: <><Contact/></>
    },
    {
      path: "/login",
      element: <><Login/></>
    },
    {
      path: "/signup",
      element: <><Signup/></>
    }
      ]
    },
    {
      path: "/employee-Dashboard",
      element: <UserDashboard/>,

      children: [
        {
          index: true,
          element: <EmployeeHome/>
        },
        {
          path: "profile",
          element: <><EmployeeProfile/></>
        },
        {
          path: "applyleave",
          element: <><ApplyLeave/></>
        },
        {
          path: "allLeaves",
          element: <><MyLeaves/></>
        }
      ]
    },
    {
      path: "/manager-Dashboard",
      element: <ManagerDashboard/>,

      children: [
        {
          index: true,
          element: <ManagerHome/>
        },
        {
          path: "profile",
          element: <><ManagerProfile/></>
        },
        {
          path: "approvalManagerleave",
          element: <><ManagerAprrovalLeave/></>
        },
        {
          path: "AllHistory",
          element: <><ManagermanageLeaveList/></>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
