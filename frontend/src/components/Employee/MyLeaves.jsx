import { ToastContainer } from "react-toastify";
import { FaPenClip } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import myLeavesHook from "../../Hooks/employeeHook/myLeavesHook.js";

const MyLeaves = () => {

  const {myLeaves, HandleEditMode, HandleDelete} = myLeavesHook();
  
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

      <div className="my-All-Leaves flex flex-col min-h-screen">

        {/* heading */}
        <p className="md:text-2xl text-lg font-semibold pt-5 bg-gradient-to-r from-violet-500 to-white bg-clip-text text-transparent">{myLeaves.length <= 0 ? "Your All Leaves" : "Your Total Leaver Check here"}</p>

        {/* Show all The leaves of Employee:- */}
        <div className="show-leaves bg-gradient-to-r from-slate-400 to-gray-500 w-full md:h-[79vh] max-w-4xl mt-5 overflow-y-scroll">

          <section className="show-leave-cards grid grid-cols-1 gap-8 md:gap-4 md:p-6 p-2 rounded-xl">
            {myLeaves.map((item, index) => (
              <div key={item.leaveid} className="flex flex-col gap-4 md:gap-1 bg-gradient-to-r from-slate-950 to-slate-800 p-4 rounded-md text-white">
                <p>Leave no:- {index + 1}</p>
                <p>Reason:- {item.leavereason}</p>
                <p>Status:- {item.status}</p>
                <p>Response:- {item.leaveapproval}</p>
                {/* actions-buttons */}
                <div className="action-buttons gap-4 flex justify-end items-center">
                  <button className="text-green-600 text-xl" onClick={()=>{HandleEditMode(item.leaveid, item.leavereason)}}><FaPenClip/></button>
                  <button className="text-red-600 text-xl" onClick={()=>{HandleDelete(item.leaveid)}}><IoTrashBin/></button>
                </div>
              </div>
            ))}

          </section>
        </div>
      </div>
    </div>
  )
}

export default MyLeaves
