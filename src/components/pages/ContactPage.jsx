import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function ContactPage() {
    return (
        <div className='w-[100%] h-[100%] pt-10 '>

            {/* <!-- component --> */}
            <div className="  flex justify-center items-center mt-10 w-[100%] h-[800px] bg-white">
                {/* <!-- COMPONENT CODE --> */}
                <div className="container mx-auto my-4 px-4 lg:px-20">

                    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold uppercase text-[1.5rem]">GET IN <br /><span className='text-green-500'>TOUCH</span></h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="First Name*" />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Last Name*" />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email*" />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="number" placeholder="Phone*" />
                        </div>
                        <div className="my-4">
                            <textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button className="uppercase text-sm font-bold tracking-wide bg-green-500 text-gray-100 p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>

                    <div
                        className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-green-500 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
                            <p className="text-[#ffffff]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                tincidunt arcu diam,
                                eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                            </p>

                            <div className="flex my-4 w-full ">
                                
                                <div className="w-full flex  justify-center items-start gap-5 ">
                                    <div className='mt-2'>
                                        <FaLocationDot className='text-[25px]' />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl">Main Office</h2>
                                        <p className="text-[#ffffff]">Office No-1004, Sector-88 Faridabad</p>

                                    </div>

                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 ">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex gap-5">
                                    <div className='mt-2'>
                                        <FaPhone className='text-[25px]' />
                                    </div>
                                    <div className='w-full'>
                                        <h2 className="text-2xl" >Call Us</h2>
                                        <p className="text-[#ffffff]">Tel: +91-9821666805</p>
                                       
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                {/* <!-- COMPONENT CODE --> */}
            </div>



        </div>
    )
}

export default ContactPage