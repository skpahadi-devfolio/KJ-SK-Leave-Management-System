import { useState } from 'react'
import { contactAPI } from '../services/contactService.js';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [form, setform] = useState({name: "", email: "", message: ""});

  //InputValidation:-
  const HandleInputValidation = (e) => {
    setform({...form, [e.target.name]:e.target.value});
  }

  //HandleSubmit:-
  const HandleFormSubmit = async(e) => {
    e.preventDefault();
    try {
      if(!form.name || !form.email || !form.message){
        return toast.error("Please Field Empty Column");
      }
      const result = await contactAPI(form);
      if(!result.success){
        return toast.error(result.message);
      }
      toast.success(result.message);
      setform({name: "", email: "", message: ""});
    } catch (error) {
      return toast.error(error.message);
    }
  }

  return (
    <div className='pb-48'>

      {/* Toast-design */}
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

      {/* contact form Page */}
      <div className="Contact-full-section w-full max-w-3xl mx-auto flex flex-col gap-8 mt-14">

       {/* section-first  */}
       <section className="first-section text-white md:text-xl text-xs">
         
         {/* heading */}
         <h1>Let's Connect With Us</h1>

         {/* content */}
         <div className="content">
          <p>Have a question, suggestion, or need more information about our Leave Management System? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.</p>
         </div>
       </section>


       {/* second-section */}
       <section className="second-section">
        <div className="form bg-gradient-to-r from-slate-900 to-gray-800 md:w-[35vw] w-[90vw] mx-auto p-4 pt-8 rounded-xl">
          <form onSubmit={HandleFormSubmit} className='flex gap-6 justify-center items-center flex-col p-4' action="">
            
            <label htmlFor="name" className='w-full'>
              <div className="full-name">
              <input onChange={HandleInputValidation} value={form.name} className='p-4 rounded-md w-full bg-white' type="text" name='name' placeholder='Enter Your Name' />
            </div>
            </label>

            <label htmlFor="email" className='w-full'>
              <div className="your-email">
              <input onChange={HandleInputValidation} value={form.email} className='p-4 rounded-md w-full bg-white' type="email" name='email' placeholder='Enter Your Email' />
            </div>
            </label>

            <label htmlFor="message" className='w-full'>
              <div className="your-message">
              <textarea onChange={HandleInputValidation} value={form.message} className='p-4 rounded-md w-full bg-white' name="message" placeholder='Enter Your Message'></textarea>
            </div>
            </label>

            <div className="send-button text-center bg-gradient-to-r from-pink-800 to-blue-900 p-4 rounded-full w-full">
              <button className='text-white'>Send Your Message</button>
            </div>
          </form>
        </div>
       </section>

       
      </div>
    </div>
  )
}

export default Contact
