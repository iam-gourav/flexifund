import React from 'react'
import loan1 from "../../assets/loan1.jpg"
import loan2 from "../../assets/loan2.jpg"
import loan3 from "../../assets/loan3.jpg"
import loan4 from "../../assets/loan4.jpg"
import loan5 from "../../assets/loan5.jpg"
import loan6 from "../../assets/loan6.jpg"





function LoanCards() {
  return (
    <div>
      <div className="bg-white font-[sans-serif] pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-green-500 after:rounded-full">AVAILABLE LOANS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img src={loan2} alt="Blog Post 1" className="w-full h-96 object-cover" />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">

                <h3 className="text-xl font-bold text-[#333]">BUSSINESS LOAN</h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                </div>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img src={loan5} alt="Blog Post 2" className="w-full h-96 object-cover" />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">

                <h3 className="text-xl font-bold text-[#333]">COMMERCIAL LOAN</h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                </div>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img src={loan6} alt="Blog Post 3" className="w-full h-96 object-cover" />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">

                <h3 className="text-xl font-bold text-[#333]">PERSONAL LOAN</h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                </div>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img src={loan1} alt="Blog Post 1" className="w-full h-96 object-cover" />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">

                <h3 className="text-xl font-bold text-[#333]">HOME LOAN</h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                </div>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img src={loan3} alt="Blog Post 1" className="w-full h-96 object-cover" />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">

                <h3 className="text-xl font-bold text-[#333]">WEDDING LOAN</h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                </div>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img src={loan4} alt="Blog Post 1" className="w-full h-96 object-cover" />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">

                <h3 className="text-xl font-bold text-[#333]">CONSTRUCTION LOAN</h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoanCards