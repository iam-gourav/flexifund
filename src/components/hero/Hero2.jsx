import React from 'react'
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"

function Hero2() {
  return (
   
        <section className="text-gray-600 body-font bg-section ">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold title-font text-gray-900 mb-4">WHY CHOOSE US?</h1>

      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-green-500 inline-flex">
          
        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-around sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/4 shadow-[0_10px_25px_-2px_rgba(0,0,0,0.8)]  hover:scale-110 transition-all duration-75 ease  flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full hover:bg-slate-800 bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <img className='w-[70%]' src={logo1} alt="" />
          
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Money In 1 Hour!</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
       
        </div>
      </div>
      <div className="p-4 md:w-1/4 flex flex-col text-center shadow-[0_10px_25px_-2px_rgba(0,0,0,0.8)] items-center hover:scale-110 transition-all duration-75 ease">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <img className='w-[70%]' src={logo3} alt="" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Helpfull Staff</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          
        </div>
      </div>
      <div className="p-4 md:w-1/4 flex shadow-[0_10px_25px_-2px_rgba(0,0,0,0.8)] flex-col text-center items-center hover:scale-110 transition-all duration-75 ease ">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <img className='w-[70%]' src={logo2} alt="" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Credit History Considered</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
         
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-blue-800 rounded text-lg font-bold">Apply Now</button>
  </div>
</section>
   
  )
}

export default Hero2