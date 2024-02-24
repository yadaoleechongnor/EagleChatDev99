import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Navigation hook
    const navigate = useNavigate();

    // Handle change function
    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "username":
                setUsername(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phoneNumber":
                setPhoneNumber(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        handleRegister();
    };

    // Handle registration function
    const handleRegister = async () => {
        try {
            // Validate email
            const trimmedEmail = email.trim();
            if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
                alert("Please enter a valid email address!");
                return;
            }

            // Prepare user data
            const userData = {
                username,
                email: trimmedEmail,
                phoneNumber,
                password,
                confirmPassword
            };

            // Send registration request to the server
            const response = await axios.post(
                "https://eaglechat.onrender.com/user/register",
                userData
            );

            // Handle successful registration
            handleRegistrationSuccess(response);

        } catch (error) {
            // Handle registration errors
            handleRegistrationError(error);
        }
    };

    // Email validation function
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    // Handle successful registration
    const handleRegistrationSuccess = (response) => {
        if (response.data.status === true) {
            // Save user data to local storage
            localStorage.setItem("userCode", response.data.data.userCode);
            localStorage.setItem("password", response.data.data.password);

            console.log("Server response:", response.data);

            // Clear input fields
            setUsername("");
            setEmail("");
            setPhoneNumber("");
            setPassword("");
            setConfirmPassword("");

            // Navigate to "/register/otp" after successful registration
            navigate("/registerotp");
        }
    };

    // Handle registration errors
    const handleRegistrationError = (error) => {
        if (error.response) {
            // Server responded with an error
            console.error("Server responded with an error:", error.response.data);
            alert(`Server responded with an error: ${error.response.data.message}`);
        } else if (error.request) {
            // No response received from the server
            console.error("No response received from the server");
            alert("No response received from the server. Please try again later.");
        } else {
            // Error setting up the request
            console.error("Error setting up the request:", error.message);
            alert("Registration failed. Please try again later.");
        }
    };

    return (
        <div className=' w-full min-[360px]:justify-center justify-center items-center h-full fixed flex  '>
            <div className=' w-full sm:flex sm:justify-center md:flex '>
                <div className='sm:w-full  sm:flex sm:text-center md:text-4xl xl:text-8xl font-bold  text-blue-light flex  flex-col md:w-[30%] justify-center items-center  '>
                    <span>Sign Up</span>
                    <br />
                    <span>And Get Into Chat </span>
                </div>
                <div className=' lg:w-[50%] flex justify-center items-center   '>
                    <div className=' md:border md:shadow-lg lg:w-[50%]  bg-white  rounded-3xl flex justify-center '>
                        <div className='  max-[678px]:w-[90%] my-5 min-[1000px]:w-[90%] '>
                            <div className=' flex flex-col w-full '>
                                <div className='border-b-2 border-black my-3  '>
                                    <span>Name</span>
                                    <input
                                        type="text"
                                        name="username"
                                        value={username}
                                        onChange={handleChange}
                                        className=' w-full bg-white outline-none '
                                        placeholder=' Name '
                                    />
                                </div>
                                <div className='border-b-2 border-black my-3  '>
                                    <span>E-mail</span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                        className=' w-full bg-white outline-none '
                                        placeholder=' E-mail '
                                    />
                                </div>
                                <div className='border-b-2 border-black my-3  '>
                                    <span>Phone Number</span>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onChange={handleChange}
                                        className=' w-full bg-white outline-none '
                                        placeholder=' Phone Number '
                                    />
                                </div>
                                <div className=' border-b-2 border-black my-2'>
                                    <span>Password</span>
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={handleChange}
                                        className=' w-full bg-white outline-none '
                                        placeholder=' Password '
                                    />
                                </div>
                                <div className=' border-b-2 border-black my-2'>
                                    <span>Confirm Password </span>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={handleChange}
                                        className=' w-full bg-white outline-none '
                                        placeholder=' Confirm Password '
                                    />
                                </div>
                            </div>

                            <div className=' flex flex-col gap-5 my-4 '>
                                <button onClick={handleSubmit} className=' flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light '>Sign up</button>
                                <button className=' flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light gap-2 '> <FcGoogle className=' h-6 w-6' /> Continue With Google
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;
