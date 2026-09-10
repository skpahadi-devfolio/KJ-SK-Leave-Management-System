import { ToastContainer} from 'react-toastify';
import useLogin from '../Hooks/useAuthHook/useLogin.js';

const Login = () => {

  const {register, handleSubmit, errors, isSubmitting, onSubmit} = useLogin();
  
  return (
    <div>
      <p className='bg-gradient-to-r from-blue-800 to-violet-800 bg-clip-text text-transparent text-center py-4 pt-8 text-xl font-semibold'>Welcome to Login Page</p>

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
        <p>Login in</p>
      </div>}

      {/* Signup-form-design */}
      <section className="Login-Page md:w-[35vw] w-[90vw] md:text-lg text-xs mx-auto min-h-screen pb-48">
        <div className="form">

          <form className='flex flex-col gap-4 bg-gradient-to-r from-indigo-900 to-blue-600 p-6 rounded-xl' onSubmit={handleSubmit(onSubmit)} action="">

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


            <div className="signup-Button bg-gradient-to-r from-violet-800 to-slate-600 text-center p-4 rounded-full">
              <button className='text-white' disabled={isSubmitting} type='submit'>Login</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login
