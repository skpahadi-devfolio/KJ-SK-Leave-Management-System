import { ToastContainer } from "react-toastify";
import managerLeavehistoryHook from "../../Hooks/managerHook/managerLeavehistoryHook";


const ManagermanageLeaveList = () => {

  const {leavesHistory, addhistory} = managerLeavehistoryHook();
  
  return (
    <div>

      <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />

      <h1 className='md:text-2xl text-xl pt-7 text-white font-semibold'>{addhistory?"All Leaved History":"No History Available"}</h1>

     {/* main-content */}
      <main className="leave-content">

        {/* divided into section */}
        <section className="first-section grid grid-cols-1 w-full gap-6 p-4 overflow-y-scroll h-[82vh]">
          {leavesHistory.map((item, index) => (
            <div key={item.historyid} className="flex flex-col md:gap-0 bg-gradient-to-r from-slate-950 to-gray-700 p-4 rounded-md text-white animate-pulse">
              <div className="border border-gray-800 flex flex-col p-2 gap-3 md:gap-1 rounded-3xl">
                <p>LeaveHistory:- {index + 1}</p>
              <p>Name:- {item.name}</p>
              <p>Designation:- {item.designation}</p>
              <p>Department:- {item.department}</p>
              <p>Leave Reason:- {item.leavereason}</p>
              <p>Leave Status:- {item.status}</p>
              <p>Leave Approval:- {item.leaveapproval}</p>

              <div className="checkings-status text-center mt-4">
                {item.status === "Accepted"?(<button className="bg-gradient-to-r from-gren-600 to-green-800 p-4 w-full rounded-3xl">Completed</button>):(<button className="bg-gradient-to-r from-red-600 to-red-800 p-4 w-full rounded-3xl">Incompleted</button>)}
              </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default ManagermanageLeaveList
