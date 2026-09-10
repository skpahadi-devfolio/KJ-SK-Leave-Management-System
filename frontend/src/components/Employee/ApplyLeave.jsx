import { ToastContainer} from "react-toastify"
import createLeaveHook from "../../Hooks/employeeHook/createLeaveHook.js"

const ApplyLeave = () => {
  
  const {applyleave, leaveID, isEditing, HandleInputValidation, HandleLeaveSubmit, HandleUpdate} = createLeaveHook();
  
  return (
    <div className='bg-gradient-to-r from-slate-300 to-gray-400 mt-7 rounded-xl'>

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

      
      <div className="Apply-leave-content pt-4">

        {/* heading */}
        <h1 className='md:text-2xl text-lg bg-gradient-to-r from-violet-950 to-green-950 bg-clip-text text-transparent font-semibold text-center'>Please Apply Your Leave</h1>

        <div className="Leave-box">
          
          <section className="apply-leave-contain p-5 flex flex-col gap-2">

            <div className="first-input flex flex-col gap-3">
              <label htmlFor="leaveReason">Leave Reason</label>
              <input name="leaveReason" value={applyleave.leaveReason} onChange={HandleInputValidation} className='w-full bg-white p-4 rounded-md text-black py-5' type="text" placeholder='Mention Your Apply Leave Reason' />
            </div>

            <div className="leave-button bg-gradient-to-r from-pink-800 to-indigo-900 rounded-full w-full md:p-6 p-4 text-center mt-5">
              {isEditing ? (<button onClick={()=>{HandleUpdate(leaveID)}}>Update Leave</button>):(<button onClick={HandleLeaveSubmit} className='text-white'>Apply Leave</button>)}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ApplyLeave
