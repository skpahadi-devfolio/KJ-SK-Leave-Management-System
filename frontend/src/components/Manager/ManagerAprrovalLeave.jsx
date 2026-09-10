import { ToastContainer } from "react-toastify";
import managerApprovalHook from "../../Hooks/managerHook/managerApprovalHook";

const ManagerAprrovalLeave = () => {
   
  const {allleavesApproved, leaveApproved, HandleInputUpdateSubmit, UpdateInputHandle} = managerApprovalHook();
  
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

    
      {/* heading */}
      <h1 className="text-xl md:text-2xl pt-8 text-white font-semibold">Employee Leave List</h1>

      {/* display all leaves approved or not by manager */}
      <div className="leaved-Approved overflow-y-scroll md:h-[81vh] pt-4">

        {/* fetch all employee leaves */}
        <section className="first-section grid grid-cols-1 w-full bg-gradient-to-r from-slate-400 to-white gap-4 md:p-6 p-3">

          {allleavesApproved.map((item, index) => (
            <div key={index} className="flex flex-col text-white md:p-3 p-2 bg-gradient-to-r from-slate-950 to-black gap-5">

              <div className="box bg-gradient-to-r from-slate-900 to-gray-950 p-4 rounded-xl">
                {/* employee side */}
              <p>Emp Leave No:- {index + 1}</p>
              <p>Name:- {item.name}</p>
              <p>Department:- {item.department}</p>
              <p>Designation: {item.designation}</p>
              <p>Leave Reason:- {item.leavereason}</p>

              {/* status of leaves */}
              <p>Status:- {item.status}</p>
              </div>

              <textarea className="p-1 md:pt-4 py-6 border border-slate-700 rounded-xl" onChange={(e)=>UpdateInputHandle(item.leaveid, e.target.value)} placeholder="Enter Your Approval Message for Employee" name="leaveApproval" value={leaveApproved[item.leaveid] || ""} />
              {/*manager side accept and reject control button */}
              <div className="action-buttons-manager mt-6">
                <section className="both-button flex md:justify-end justify-center items-center mx-5 gap-4">
                  <button className="bg-gradient-to-r from-green-700 to-green-900 p-3 rounded-3xl" onClick={()=> HandleInputUpdateSubmit(item.leaveid, "Accepted")}>Accepted</button>

                  <button className="bg-gradient-to-r from-red-700 to-red-900 p-3 rounded-3xl" onClick={()=> HandleInputUpdateSubmit(item.leaveid, "Rejected")}>Rejected</button>
                </section>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default ManagerAprrovalLeave
