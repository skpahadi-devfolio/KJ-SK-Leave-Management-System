import React from 'react'
import Navbar from '../components/Navbar'
import TypeAnimationText from '../components/TypeAnimationText'

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col pb-24">

            <div className="heading md:text-5xl text-3xl text-center pt-5">
                <p className='md:text-4xl text-xl font-semibold'>Welcome to</p>
                <p className='font-semibold'><TypeAnimationText/></p>
            </div>

            {/* Home-page Content */}
            <div className='my-16 flex flex-col gap-8'>
                {/* first-section */}
                <section className='flex justify-center items-center mx-auto max-w-4xl w-[90vw]'>
                    <div className='md:text-xl text-left text-slate-300'>
                        <p>Our Leave Management System makes employee leave management simple, fast, and organized.</p>
                        <p>Employees can easily apply for leaves, track their leave requests, and update or cancel them when needed, while managers can view all assigned leave requests and take quick approval or rejection actions.</p>
                        <p>With role-based access and a streamlined workflow, the system reduces manual work and keeps the entire leave process efficient and transparent.</p>
                    </div>
                </section>


                {/* second section */}
                <section className='flex justify-start items-center mx-auto max-w-4xl w-[90vw]'>
                    <div className='text-left md:text-xl text-slate-300'>
                        <p>Want to Know More About Our Company Policy:-</p>
                        <p>Let's Connect with us</p>

                        <div className="action-button flex justify-start items-center gap-5 my-4">
                            <button onClick={()=> navigation.navigate("/login")} className='text-white bg-gradient-to-r from-blue-800 to-pink-600 p-4 px-10 rounded-full'>Login</button>
                            <button onClick={()=> navigation.navigate("/signup")} className='text-white bg-gradient-to-r from-blue-800 to-pink-600 p-4 px-10 rounded-full'>Signup</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
