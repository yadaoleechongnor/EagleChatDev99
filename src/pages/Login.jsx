import React, { useState, useLayoutEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { errorSwal, successSwal } from './../helpers/sweetalert';

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useLayoutEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  if (token) {
    return <h2>Redirecting...</h2>;
  }

  const handleLogin = async () => {
    setLoading(true);

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://eaglechat.onrender.com/user/login",
        data
      );

      console.log("response_data::", response?.data);
      localStorage.setItem("token", response?.data?.accessToken);
      setLoading(false);
      successSwal("Login Successful!");
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      setLoading(false);
      if (error.response) {
        console.error("Response Data:", error.response.data);
        console.error("Response Status:", error.response.status);
        errorSwal("Invalid credentials. Please try again.");
      } else if (error.request) {
        console.error("Request:", error.request);
        errorSwal("No response from server. Please try again later.");
      } else {
        console.error("Error:", error.message);
        errorSwal("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className='w-full min-[360px] justify-center items-center h-full fixed flex'>
      <div className='w-full sm:flex sm:justify-center md:flex'>
        <div className='sm:w-full sm:flex sm:text-center md:text-4xl xl:text-8xl font-bold text-blue-light flex flex-col md:w-[30%] justify-center items-center'>
          <span>Login to</span>
          <span>continue</span>
        </div>
        <div className='lg:w-[50%] flex justify-center items-center'>
          <div className='md:border md:shadow-lg lg:w-[50%] bg-white rounded-3xl flex justify-center'>
            <div className='w-[90%] my-5'>
              <div className='flex flex-col'>
                <div className='border-b-2 border-black my-3'>
                  <span>E-mail</span>
                  <input type="email" className='w-full bg-white outline-none' placeholder=' E-mail Require' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='border-b-2 border-black my-2'>
                  <span>Password</span>
                  <input type="password" className='w-full bg-white outline-none' placeholder=' Password Require' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className='flex w-full flex-col justify-center my-3'>
                <Link to="/forgot-password" className='flex self-end'>
                  Forgot Password ?
                </Link>
              </div>
              <div className='flex flex-col gap-5 my-4'>
                <button onClick={handleLogin} className='flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light'>
                  {loading ? "Loading..." : "Login"}
                </button>
                <button className='flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light gap-2'>
                  <FcGoogle className='h-6 w-6' /> Continue With Google
                </button>
              </div>
              <NavLink to="/register" className='flex w-full justify-center items-center my-4'>
                <span>
                  New Here ? Register Here!
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
