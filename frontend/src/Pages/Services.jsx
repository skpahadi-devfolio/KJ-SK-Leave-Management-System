import React from 'react'

const Services = () => {
  return (
    <div className='min-h-screen flex flex-col pb-32'>
      
      <div className="Services-Contents">

        <h1 className='md:text-4xl text-2xl bg-gradient-to-r from-violet-400 to-blue-900 bg-clip-text text-transparent font-bold text-center pt-5'>Our Services</h1>

        {/* first-part */}
        <div className="first-part text-center pt-7 text-xl md:text-2xl text-white">
          <p>We provide smart digital solutions that simplify business operations, reduce manual work, and improve productivity.</p>
        </div>


        {/* second-part */}
        <div className="all-cards-sections grid grid-cols-1 gap-5 md:grid-cols-3 w-[90vw] max-w-6xl mx-auto mt-12 mb-16">

          {/* first section */}
          <section className="first-section flex flex-col gap-6 bg-gradient-to-r from-slate-950 to-indigo-900 rounded-2xl p-10">
            <h3 className='md:text-3xl text-xl font-semibold text-white'>Leave Management</h3>
            <p>Employees easily apply, update and track their leave requests while managers can approve or reject them.</p>
          </section>


          {/* second-section */}
          <section className="second-section flex flex-col gap-6 bg-gradient-to-r from-slate-950 to-indigo-900 rounded-2xl p-8">
            <h3 className='md:text-3xl text-xl font-semibold text-white'>Employee Management</h3>
            <p>Manage employee profiles, roles and essential employee information through a centralized system.</p>
          </section>


          {/* third-section */}
          <section className="third-section flex flex-col gap-6 bg-gradient-to-r from-slate-950 to-indigo-900 rounded-2xl p-8">
            <h3 className='md:text-3xl text-xl font-semibold text-white'>Manager Approval System</h3>
            <p>Managers can view assigned leave requests and take quick approval or rejection actions.</p>
          </section>


          {/* fourth-section */}
          <section className="fourth-section flex flex-col gap-6 bg-gradient-to-r from-slate-950 to-indigo-900 rounded-2xl p-8">
            <h3 className='md:text-3xl text-xl font-semibold text-white'>Role-Based Access</h3>
            <p>Separate access for employees and managers keeps the system secure and ensures users only access the features relevant to their roles.</p>
          </section>


          {/* fifth-section */}
          <section className="fifth-section flex flex-col gap-6 bg-gradient-to-r from-slate-950 to-indigo-900 rounded-2xl p-8">
            <h3 className='md:text-3xl text-xl font-semibold text-white'>Workflow Automation</h3>
            <p>Automates repetitive leave-management tasks and reduces dependency on manual processes.</p>
          </section>



          {/* sixth-section */}
          <section className="sixth-section flex flex-col gap-6 bg-gradient-to-r from-slate-950 to-indigo-900 rounded-2xl p-8">
            <h3 className='md:text-3xl text-xl font-semibold text-white'>Centralized Management</h3>
            <p>All leave-related information stays organized in one place, making management easier and more transparent.</p>
          </section>


        </div>
      </div>
    </div>
  )
}

export default Services
