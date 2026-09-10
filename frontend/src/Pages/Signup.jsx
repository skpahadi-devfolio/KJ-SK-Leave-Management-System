import {ToastContainer} from 'react-toastify';
import useSignup from '../Hooks/useAuthHook/useSignup.js';

const Signup = () => {

  const {register, handleSubmit, errors, isSubmitting, onSubmit} = useSignup();
  return (
    <div>
      <p className='bg-gradient-to-r from-blue-800 to-violet-800 bg-clip-text text-transparent text-center py-4 pt-8 text-xl font-semibold'>Welcome to Signup Page</p>

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

      {isSubmitting && <div className='bg-gradient-to-r from-black to-gray-900 text-white text-center font-bold p-2 md:w-[15vw] w-40 md:max-w-2xl flex justify-center items-center flex-col gap-3 mx-auto'>
        <p className='border-6 border-gray-400 border-t-transparent animate-spin h-10 w-10 rounded-full'></p>
        <p>Sign in</p>
      </div>}

      {/* Signup-form-design */}
      <section className="Signup-Page md:w-[35vw] w-[90vw] md:text-lg text-xs mx-auto min-h-screen pb-48">
        <div className="form">

          <form className='flex flex-col gap-4 bg-gradient-to-r from-indigo-900 to-pink-500 p-6 rounded-xl' onSubmit={handleSubmit(onSubmit)} action="">

            <div className="first-input flex flex-col gap-2">
              <label htmlFor="name">Enter Full Name</label>
              <input className='w-full p-4 bg-white rounded-md' type="text" placeholder='Enter Your Name' {...register("name", { required: "Name is required", minLength: { value: 5, message: "Name Should be Minimum of 5 Character" }, maxLength: { value: 20, message: "Name can't contain more than 20 Character" } })} />
              {errors.name && <div className='text-red-600'>{errors.name.message}</div>}
            </div>


            <div className="second-input flex flex-col gap-2">
              <label htmlFor="email">Enter Email</label>
              <input className='w-full p-4 bg-white rounded-md' type="email" placeholder='Enter Your Email' {...register("email", { required: "Email is required", minLength: { value: 15, message: "Email Should be Minimum of 15 Character" }, maxLength: { value: 30, message: "Email can't contain more than 30 Character" } })} />
              {errors.email && <div className='text-red-600'>{errors.email.message}</div>}
            </div>


            <div className="third-input flex flex-col gap-2">
              <label htmlFor="password">Enter Password</label>
              <input className='w-full p-4 bg-white rounded-md' type="password" placeholder='Enter Your Password' {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password Should be Minimum of 8 Character" }, maxLength: { value: 20, message: "Password can't contain more than 20 Character" } })} />
              {errors.password && <div className='text-red-600'>{errors.password.message}</div>}
            </div>


            <div className="fourth-input flex flex-col gap-2">
              <label htmlFor="confirmpassword">Re-Enter Password</label>
              <input className='w-full p-4 bg-white rounded-md' type="password" placeholder='Re-Enter Your Password' {...register("confirmpassword", { required: "confirm Password is required", minLength: { value: 8, message: "Comfirm password Should be Minimum of 8 Character" }, maxLength: { value: 20, message: "Confirm password can't contain more than 20 Character" } })} />
              {errors.confirmpassword && <div className='text-red-600'>{errors.confirmpassword.message}</div>}
            </div>


            <div className="signup-Button bg-gradient-to-r from-violet-900 to-pink-800 text-center p-4 rounded-full">
              <button className='text-white' disabled={isSubmitting} type='submit'>Signup</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Signup
