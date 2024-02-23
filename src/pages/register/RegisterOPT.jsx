import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Define OTPInput as a separate component
const OTPInput = ({ otp, handleChange }) => (
  <div className="flex justify-center items-center my-4">
    {otp.map((digit, index) => (
      <input
        key={index}
        type="text"
        maxLength="1"
        className="w-12 h-12 mx-1 text-center border border-gray-400 rounded"
        value={digit}
        onChange={(event) => handleChange(index, event)}
      />
    ))}
  </div>
);

function RegisterOPT() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);
  };

  return (
    <div className='w-full min-[360px] flex justify-center items-center h-full fixed'>
    <div className='w-full sm:flex sm:justify-center md:flex'>
      <div className='sm:w-full sm:flex sm:text-center md:text-4xl xl:text-8xl font-bold text-blue-light flex flex-col md:w-[30%] justify-center items-center'>
        <span>Sign Up</span>
        <br />
        <span>And Get Into Chat</span>
      </div>
      <div className='lg:w-[50%] flex justify-center items-center'>
        <div className='md:border md:shadow-lg lg:w-[50%] bg-white rounded-3xl flex justify-center'>
          <div className=' w-[90%] my-5 flex flex-col items-center'>
            <h1 className='text-black'> OTP Code here</h1>
            <OTPInput otp={otp} handleChange={handleChange} />
            <div className='flex flex-col gap-5 my-4 w-full'>
              <NavLink to="/registerprofile" className='flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light'>Sign up</NavLink>
             
              <NavLink to="/register" className='flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light gap-2'>
               Back
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default RegisterOPT;
