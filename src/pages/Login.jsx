import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { errorSwal, successSwal } from './../helpers/sweetalert';
import { apiLink } from '../auth/Api';
import Cookies from 'js-cookie';

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new URLSearchParams();
    data.append('email', email); // Changed to email
    data.append('password', password);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${apiLink}/user/login`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data
    };

    try {
      const response = await axios.request(config);
      console.log("Response:", response);
      console.log("Response Data:", response.data);

      const token = response.data?.jwt;

      if (token) {
        Cookies.set("token", token);

        setLoading(false);
        successSwal("Login Successful!");
        navigate("/");
      } else {
        console.log("Response data does not contain token:", response.data);
        setLoading(false);
        errorSwal("Invalid response from server!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setLoading(false);
      if (error.response) {
        console.error("Response Data:", error.response.data);
        console.error("Response Status:", error.response.status);
        errorSwal("Invalid email or password!");
      } else {
        console.error("Error:", error.message);
        errorSwal("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat'>
      <div className='w-full sm:flex sm:justify-center md:flex'>
        <div className='sm:w-full sm:text-center md:text-4xl xl:text-8xl font-bold text-blue-light flex flex-col md:w-[30%] justify-center items-center'>
          <h1 className='text-4xl font-semibold text-center text-gray-300'>
            Login
            <span className='text-blue-500'> EagleChat</span>
          </h1>
        </div>
        <div className='lg:w-[50%] flex justify-center items-center'>
          <div className='md:border md:shadow-lg lg:w-[50%] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-3xl flex justify-center'>
            <div className='w-[90%] my-5'>
              <form onSubmit={handleLogin}>
                <div className='flex flex-col'>
                  <div className='border-b-2 border-black my-3'>
                    <label htmlFor="email" className='block'>Email</label>
                    <input id="email" type="email" required className='w-full bg-white outline-none' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className='border-b-2 border-black my-2'>
                    <label htmlFor="password" className='block'>Password</label>
                    <input id="password" type="password" required className='w-full bg-white outline-none' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className='flex w-full flex-col justify-center my-3'>
                  <NavLink to="/forgot-password" className='flex self-end'>
                    Forgot Password?
                  </NavLink>
                </div>
                <div className='flex flex-col gap-5 my-4'>
                  <button type="submit" className='flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light'>
                    {loading ? "Loading..." : "Login"}
                  </button>
                  <button type="button" className='flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light gap-2'>
                    Continue With Google
                  </button>
                </div>
              </form>
              <NavLink to="/register" className='flex w-full justify-center items-center my-4'>
                <span>
                  New Here? Register Here!
                </span>
              </NavLink>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );   
}

export default Login;
