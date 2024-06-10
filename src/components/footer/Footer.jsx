import React from 'react'
import logo  from "../../assets/logo3.jpeg"
import footer3 from "../../assets/footer3.jpg"
import { FaFacebook , FaLinkedin , FaInstagramSquare , FaTwitter} from "react-icons/fa";

function Footer() {
  return (
    <footer style={{backgroundImage:`url(${footer3})`}} className=" font-sans tracking-wide bg-cover bg-center bg-no-repeat">
    <div className="py-14 px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

        <div className="lg:col-span-2">
          <a href='#'><img src={logo} alt="logo"
            className='w-44 mb-8' /></a>
          <p className="text-gray-100 text-md w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-8 text-white">Services</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-100 hover:text-white text-md">Loans</a></li>
            <li><a href="#" className="text-gray-100 hover:text-white text-md">Car loans</a></li>
            <li><a href="#" className="text-gray-100 hover:text-white text-md">Debt consolidation loans</a></li>
            <li><a href="#" className="text-gray-100 hover:text-white text-md">Home improvement loans</a></li>
            <li><a href="#" className="text-gray-100 hover:text-white text-md">Wedding loans</a></li>
            <li><a href="#" className="text-gray-100 hover:text-white text-md">Innovative Finance ISA</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-8 text-white">Follow Us</h4>

          <ul className="flex gap-4 flex-col">
            <li><a href="#" className="text-gray-100 hover:text-white text-xl">
              <FaFacebook className="fill-gray-100 inline hover:fill-white w-6 h-6"/></a></li>
            <li><a href="#" className="text-gray-100 hover:text-white">
            <FaLinkedin className="fill-gray-100 inline hover:fill-white w-6 h-6" /></a></li>
            <li><a href="#" className="text-gray-100 hover:text-white">
            <FaInstagramSquare className="fill-gray-100 inline hover:fill-white w-6 h-6"/></a></li>
            <li><a href="#" className="text-gray-100 hover:text-white">
            <FaTwitter className="fill-gray-100 inline hover:fill-white w-6 h-6"/></a></li>
          </ul>

        </div>

        <div>
          <h4 className="text-lg font-semibold mb-8 text-white ">Contact Us</h4>
          <div className="space-y-4">
            <p className="text-gray-100 text-md">Office No-1004, Sector-88 Faridabad </p>
            <p className="text-gray-100 text-md">contact@example.com</p>
            <p className="text-gray-100 text-md">+91-9821666805</p>
          </div>
        </div>

      </div>
    </div>

    <div className="text-center py-5 ">
      <p className='text-gray-100 font-semibold text-md'>© 2024<a href='#' target='_blank'
        className="hover:underline mx-1">Softsynth</a>All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer