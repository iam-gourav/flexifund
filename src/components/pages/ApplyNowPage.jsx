import React from 'react'

function ApplyNowPage() {
    return (
        <div className='w-[100%] min-h-[600px] '>
            <div className='w-[100%] h-[70px] bg-green-500 text-[#ffffff] font-bold font-serif flex justify-center items-center text-[1.5rem]'>
                Loan Application Form

            </div>
            <div className='flex flex-col justify-center items-center gap-10 '>
                <form action="" className='flex flex-col justify-center gap-10 w-[100%] p-10 '>

                    {/* row 1 */}

                    <div className=' flex flex-row  justify-center items-center gap-10 flex-wrap'>

                        {/* loan amount field */}
                        <div className='flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Loan Amount*</label>
                            <input className=' outline-none p-3 w-[350px] h-[50px] outline-2 border-2 border-b-green-500 ' type="text" name='loanamount' placeholder='Loan Amount' />
                        </div>

                        {/*  */}

                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Monthly Income*</label>
                            <input className=' outline-none  p-3 w-[350px] h-[50px] outline-2 border-2 border-b-green-500' type="text" name='income' placeholder='Monthly Income' />
                        </div>


                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Purpose of Loan*</label>
                            <input className=' outline-none p-3 w-[350px] h-[50px] outline-2 border-2 border-b-green-500' type="text" name='purpose' placeholder='Purpose of Loan' />
                        </div>

                    </div>


                    {/* row 2 */}

                    <div className=' flex flex-row  justify-center items-center gap-10 flex-wrap'>

                        {/* loan amount field */}
                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Full Name [As Per PAN Card]*</label>
                            <input className=' outline-none p-3 w-[350px] h-[50px] outline-2 border-2 border-b-green-500' type="text" name='panname' placeholder='Name' />
                        </div>



                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Mobile*</label>
                            <input className=' outline-none p-3 w-[350px] h-[50px] outline-2 border-2 border-b-green-500' type="number" name='mobile' placeholder='Mobile' />
                        </div>


                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Email*</label>
                            <input className=' outline-none p-3 w-[350px] h-[50px] outline-2 border-2 border-b-green-500' type="email" name='email' placeholder='Email' />
                        </div>

                    </div>

                    {/* row 3 */}


                    <div className=' flex flex-row  justify-center items-center gap-10 flex-wrap'>

                        {/* loan amount field */}
                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Date of Birth [As Per PAN Card]*</label>
                            <input className=' outline-none p-3 w-[350px] h-[50px] outline-2 border-2 border-b-green-500' type="date" name='dob' placeholder='DOB' />
                        </div>



                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Gender*</label>
                            <select className='w-[350px] h-[50px] outline-2 border-2 border-b-green-500' type="number" name='gender' placeholder='Gender'>
                                <option value="defalut">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>


                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Pan*</label>
                            <input className=' outline-none p-3 w-[350px] h-[50px] outline-2 border-2 border-b-green-500' type="number" name='pan' placeholder='PAN Number' />
                        </div>

                    </div>

                    {/* row 4 */}

                    <div className=' flex flex-row  justify-center items-center gap-10 flex-wrap'>

                        {/* loan amount field */}
                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Aadhar*</label>
                            <input className=' outline-none p-3 w-[350px] h-[50px] outline-2 border-2 border-b-green-500' type="number" name='adhar' placeholder='Adhar Number' />
                        </div>



                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >State*</label>
                            <select className='w-[350px] h-[50px] outline-2 border-2 border-b-green-500' type="text" name='state' placeholder=''>
                                <option value="default">Select State</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CT">Chhattisgarh</option>
                                <option value="GA">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="GA">Goa</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OR">Odisha</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TG">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UT">Uttarakhand</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="WB">West Bengal</option>
                                <option value="AN">Andaman and Nicobar Islands</option>
                                <option value="CH">Chandigarh</option>
                                <option value="DN">Dadra and Nagar Haveli</option>
                                <option value="DD">Daman and Diu</option>
                                <option value="DL">Delhi</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="PY">Puducherry</option>

                            </select>
                        </div>


                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >City*</label>
                            <input className=' outline-none p-3 w-[200px] h-[50px] outline-2 border-2 border-b-green-500' type="text" name='city' placeholder='City' />
                        </div>
                        <div className=' flex flex-col gap-5'>
                            <label className='text-[bold] text-[gray] text-[20px]' htmlFor="loanamount" >Pincode*</label>
                            <input className=' outline-none p-3 w-[150px] h-[50px] outline-2 border-2 border-b-green-500' type="number" name='pincode' placeholder='Pincode' />
                        </div>

                    </div>

                    {/* trems and condtions */}

                    <div className='flex justify-center items-center gap-3'>
                        <input className=' outline-none p-3 ' type="checkbox" />
                        <p>I agree to the Zipziploan terms and conditions and Privacy Policy.
                        </p>
                    </div>






                </form>

                <button class="inline-flex items-center justify-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-2 mb-8 md:mt-0 w-32 h-12 text-white font-bold">Apply Now</button>

                

            </div>

        </div>
    )
}

export default ApplyNowPage