import React from 'react'

function HowItWorksPage() {
  return (
          <div className='w-full min-h-[600px] flex flex-col mb-10  justify-center items-center gap-11  relative '>



      <div className='w-[70%] h-[200px] flex flex-col justify-center   items-center gap-5 pt-40 mb-10 '>
        <h1 className=' font-bold text-blue-600 text-[2.5rem]'>Why Flexifund Stands Out</h1>
        <span className='text-[gray] text-[18px]'>Key Factors Driving Our Popularity !</span>
        <p className='w-[100%] h-[30px] flex justify-center items-center font-serif'>We as “Flexifund ” is well-known because of our outstanding features and traits, which make us a top choice for clients.</p>
      </div>

      {/* first */}
      <div className='w-[90%] min-h-[200px] flex flex-col gap-11 shadow-lg group font-serif relative'>

        <div className='w-[100%] h-[100%] flex flex-col justify-center m-10'>
          <h1 className=' font-bold text-green-600 text-[2rem]'>Easy to Apply</h1>
          <p className='text-[gray] text-[18px] w-[600px]'>Applying for a loan with us is easy and convenient thanks to our shortened application procedure and low documentation requirements. Minutes are granted for approvals.</p>
        </div>
        <div className=' w-[100%] h-[10px] border-2  rounded-md absolute bottom-0'>
          <div className='w-[0px] h-[100%] bg-green-600 transition-all ease-in-out duration-1000 group-hover:w-[100%]'>

          </div>



        </div>
      </div>


      {/* second */}

      <div className='w-[90%] min-h-[200px] flex flex-col gap-11 shadow-lg group font-serif relative'>

        <div className='w-[100%] h-[100%] flex flex-col justify-center m-10'>
          <h1 className=' font-bold text-green-600 text-[2rem]'>Competent Prices</h1>
          <p className='text-[gray] text-[18px] w-[600px]'>We offer loans with reasonable interest rates so that borrowers can access capital on convenient terms.

          </p>
        </div>
        <div className=' w-[100%] h-[10px] border-2  rounded-md absolute bottom-0'>
          <div className='w-[0px] h-[100%] bg-green-600 transition-all ease-in-out duration-1000 group-hover:w-[100%]'>

          </div>



        </div>
      </div>


      {/* third */}

      <div className='w-[90%] min-h-[200px] flex flex-col gap-11 shadow-lg group font-serif relative'>

        <div className='w-[100%] h-[100%] flex flex-col justify-center m-10'>
          <h1 className=' font-bold text-green-600 text-[2rem]'>Quick Disbursement</h1>
          <p className='text-[gray] text-[18px] w-[600px]'>We rapidly disburse the sanctioned amount after approval to ensure that our customers have timely access to funds for their financial needs.</p>
        </div>
        <div className=' w-[100%] h-[10px] border-2  rounded-md absolute bottom-0'>
          <div className='w-[0px] h-[100%] bg-green-600 transition-all ease-in-out duration-1000 group-hover:w-[100%]'>

          </div>



        </div>
      </div>


      {/* fourth */}





      <div className='w-[90%] min-h-[200px] flex flex-col gap-11 shadow-lg group font-serif relative'>

        <div className='w-[100%] h-[100%] flex flex-col justify-center m-10'>
          <h1 className=' font-bold text-green-600 text-[2rem]'>Streamlined Documentation</h1>
          <p className='text-[gray] text-[18px] w-[600px]'>The loan application process is easy and stress-free due to our reduction of paper work and simplification of documentation requirements.</p>
        </div>
        <div className=' w-[100%] h-[10px] border-2  rounded-md absolute bottom-0'>
          <div className='w-[0px] h-[100%] bg-green-600 transition-all ease-in-out duration-1000 group-hover:w-[100%]'>

          </div>



        </div>
      </div>
    </div>
  )
}

export default HowItWorksPage