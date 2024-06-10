import React from 'react'
import team from "../../assets/team.webp"

function Hero1() {
    return (
        <div>
            <div className="font-sans  text-[#000a2d]  bg-no-repeat bg-cover bg-herobg">
                <div className="grid lg:grid-cols-2 items-center gap-y-6 lg:h-[540px] ">
                    <div className="max-lg:order-1 h-full max-lg:text-center sm:p-12 p-4 ">
                        <h2 className="lg:text-7xl text-4xl font-bold font-serif mb-4 lg:!leading-[100px]">Welcome To <span className='text-green-500'>Flexifund</span> Loan</h2>
                        <p className="mt-4  text-2xl leading-relaxed">Small Business Loans For Daily Expenses</p>
                        <button type='button'
                            className="bg-slate-800   hover:bg-blue-600 border-2 border-white mt-10 transition-all text-white font-bold text-sm rounded-md px-6 py-2.5">Apply Now</button>
                    </div>
                    <div className="lg:h-[540px] flex items-center">
                        <img src={team} className="w-full h-full object-cover" alt="Dining Experience" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Hero1;