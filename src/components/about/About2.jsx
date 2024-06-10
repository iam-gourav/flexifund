import React from 'react'
import aboutimg from "../../assets/aboutimg.jpg"

function About2() {
  return (
    <div>
        <div className="bg-gray-100 px-6 py-12 font-[sans-serif]">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div >
            <img src={aboutimg} alt="Image" className="rounded-md object-cover w-full h-full border-r-[40px] border-green-500" />
          </div>
          <div>
            <p className='text-sm font-semibold text-green-500'>WHY CHOOSE OUR COMPANY</p>
            <h2 className="text-5xl font-bold text-black mb-4 mt-4 font-serif">We Promise Sustainable Future For You.</h2>
            <p className="text-gray-700 text-sm leading-6">
              Unleash your imagination and explore a world of endless possibilities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-disc text-sm text-gray-700 space-y-2 pl-4 mt-6">
              <li>Discover innovative ideas.</li>
              <li>Create unique projects.</li>
              <li>Collaborate with like-minded individuals.</li>
              <li>Transform your visions into reality.</li>
            </ul>
            <div className="mt-6">
              <a href="#" className="text-green-500 text-sm font-semibold hover:underline">Apply For A Loan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About2