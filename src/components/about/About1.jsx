import React from 'react';
import aboutimg1 from "../../assets/aboutimg1.jpg"

function About1() {
  return (
    <div>
        <div className="font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center">
          
          <p className='text-green-500 text-xl font-bold'>About Our Company</p>
          <h2 className="md:text-4xl text-2xl  font-extrabold mb-4 my-4 md:!leading-[55px] font-serif">Building a Brighter financial Future & Good Support.</h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed">
          We are a new-age Fin-Tech platform which aims to foster financial inclusion by leveraging technology to support borrowers with hassle-free loans. Our establishment is based in Haryana and focusing on providing online loans to those who are looking for a quick line of credit. We offer easy EMI options on our loans and repayments are in line with what you can repay comfortably. We strive to extend our users a neat experience to avail of credit without any hiccups. Our responsible lending norms ensure that you borrow only what you require for a given purpose. We believe in quick and effective service. So, we make sure to respond to every query ASAP.


          </p>
          <div className="mt-10 space-x-4">
            <button type='button'
              className="bg-blue-600 hover:bg-blue-400 ease-[cubic-bezier(0.53,-0.01, 0.34, 1.19)] hover:text-white border-2 border-blue-600 transition-all text-white font-bold text-sm rounded-full px-6 py-2.5">Apply Now </button>
           
          </div>
         
          
        </div>
        <div className="lg:h-[550px] md:h-[450px] flex items-center relative max-md:before:hidden before:absolute before:bg-green-500 before:h-full before:w-3/4 before:right-0 before:z-0">
          <img src={aboutimg1} className="rounded-md lg:w-1/2 md:w-11/12 z-20 relative" alt="Dining Experience" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default About1