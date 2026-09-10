import { ToastContainer} from "react-toastify"
import profileHook from "../../Hooks/managerHook/profileHook"

const ManagerProfile = () => {

  const {createProfile, isProfileCreated, EditProfile, managerId, HandleInputValidation, HandleSaveprofileSubmit, HandleEditMode, HandleUpdateProfile} = profileHook();

  return (
    <div className='bg-gradient-to-r from-slate-300 to-gray-400 mt-7 rounded-md'>

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


      <div className="Apply-Profile-content pt-4">

        {/* heading */}
        <h1 className='text-2xl bg-gradient-to-r from-violet-950 to-green-950 bg-clip-text text-transparent font-semibold text-center'>{!isProfileCreated ? "Create Your Profile" : EditProfile ? "Edit Your Profile" : "Your Profile"}</h1>

        <div className="Profile-form">

          <section className="apply-form-contain p-5 flex flex-col gap-2">
 
            <div className="first-input flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <input disabled={isProfileCreated && !EditProfile} onChange={HandleInputValidation} name="name" value={createProfile.name} className='w-full bg-white p-4 rounded-md text-black py-5' type="text" placeholder='Enter Your Name' />
            </div>


            <div className="second-input flex flex-col gap-3">
              <label htmlFor="department">Department</label>
              <input disabled={isProfileCreated && !EditProfile} onChange={HandleInputValidation} name="department" value={createProfile.department} className='w-full bg-white p-4 rounded-md text-black py-5' type="text" placeholder='Enter Your Department' />
            </div>

            <div className="third-input flex flex-col gap-3">
              <label htmlFor="designation">Desgination</label>
              <input disabled={isProfileCreated && !EditProfile} onChange={HandleInputValidation} name="designation" value={createProfile.designation} className='w-full bg-white p-4 rounded-md text-black py-5' type="text" placeholder='Enter Your Designation' />
            </div>

            <div className="leave-button bg-gradient-to-r from-pink-800 to-indigo-900 rounded-full w-full md:p-6 p-4 text-center mt-5">
              {!isProfileCreated ? (<button onClick={HandleSaveprofileSubmit}>Save Profile</button>) : !EditProfile ? (<button onClick={HandleEditMode}>Edit Your Profile</button>) : (<button onClick={() => { HandleUpdateProfile(managerId) }}>Update Your Profile</button>)}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ManagerProfile
