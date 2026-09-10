import React from 'react'
import innovation from "../assets/innovation.jpg"
import Idea from "../assets/ideaImage.jpg"
import techy from "../assets/techy.jpg"

const About = () => {
  return (
    <div>
      {/* Welcome to About Page */}

      {/* Divided in three section */}

      <div className="All-sections grid grid-cols-1 w-[90vw] max-w-3xl mx-auto pt-12 gap-12 pb-52">

      {/* first section */}
      <section className='flex  flex-col justify-center items-center md:gap-8 gap-4 bg-gradient-to-r from-gray-900 to-slate-800 p-4 rounded-2xl'>
          <div>
            <img className='object-cover md:w-[80vw] h-full w-full rounded-2xl opacity-65' src={innovation} alt="image" />
          </div>
          <div className='bg-gradient-to-r from-violet-950 to-gray-950 p-4 mb-7 max-w-3xl rounded-xl flex flex-col gap-4'>
          <p className='text-2xl font-semibold'>About Talking the Innovation</p>
          <p>We believe in creating smarter and simpler solutions that solve real-world business problems. Our focus is on transforming traditional manual processes into efficient digital workflows.</p>
          <p>Through continuous improvement and creative thinking, we aim to increase productivity, reduce complexity, and deliver better experiences for users and businesses.</p>
        </div>
      </section>



      {/* second-section */}
      <section className='flex flex-col justify-center items-center md:gap-8 gap-4 bg-gradient-to-r from-gray-900 to-slate-800 p-4 rounded-2xl'>
        <div>
          <img className='object-cover md:w-[80vw] w-full h-full rounded-2xl opacity-65' src={Idea} alt="image" />
          </div>
          <div className='bg-gradient-to-r from-violet-950 to-gray-950 p-4 mb-7 max-w-3xl rounded-xl flex flex-col gap-4'>
          <p className='text-2xl font-semibold'>What's Idea:-</p>
          <p>Every successful product begins with a meaningful idea and a clear understanding of the problem. We focus on identifying real business challenges and turning them into practical, user-friendly solutions.</p>
          <p>Our ideas are driven by simplicity, efficiency, and the goal of creating technology that delivers real value.</p>
        </div>
      </section>



      
      {/* third-section */}
      <section className='flex flex-col justify-center items-center md:gap-8 gap-4 bg-gradient-to-r from-gray-900 to-slate-800 p-4 rounded-2xl'>
        <div>
          <img className='object-cover md:w-[80vw] w-full h-full rounded-2xl opacity-65' src={techy} alt="image" />
          </div>
          <div className='bg-gradient-to-r from-violet-950 to-gray-950 p-4 mb-7 max-w-3xl rounded-xl flex flex-col gap-4'>
            <p className='text-2xl font-semibold'>What's there technology</p>
          <p>We use modern technologies and development practices to build reliable, secure, and scalable applications.</p>
          <p>From intuitive user interfaces to powerful backend systems and databases, technology helps us transform innovative ideas into real-world solutions.</p>
          <p>Our focus is always on performance, maintainability, and a better digital experience.</p>
        </div>
      </section>
      </div>
    </div>
  )
}

export default About
