import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiLink } from '../../auth/Api';
import Cookies from 'js-cookie';
import { errorSwal, successSwal } from '../../helpers/sweetalert';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("male");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

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
            case "gender":
                setGender(value);
                break;
            default:
                break;
        }
    };

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleRegister();
    };

    const handleRegister = async () => {
        setLoading(true);

        const data = {
            username,
            email,
            phoneNumber,
            password,
            confirmPassword,
            gender,
        };

        let config = {
            method: 'post',
            url: `${apiLink}/user/register`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        try {
            const response = await axios.request(config);

            console.log("Response:", response);

            if (response.status === 201) {
                const token = response.data.token;

                console.log("Received token:", token);

                Cookies.set("token", token);

                setUsername("");
                setEmail("");
                setPhoneNumber("");
                setPassword("");
                setConfirmPassword("");

                setLoading(false);
                successSwal("Registration Successful!");
                navigate("/registerotp");
            } else {
                setLoading(false);
                errorSwal("Registration failed!");
            }
        } catch (error) {
            console.error("Registration Error:", error);
            setLoading(false);
            if (error.response) {
                console.error("Response Data:", error.response.data);
                errorSwal(error.response.data.error || "An error occurred during registration.");
            } else {
                errorSwal("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className='w-full min-[360px]:justify-center justify-center items-center h-full fixed flex'>
            <div className='w-full sm:flex sm:justify-center md:flex'>
                <div className='sm:w-full sm:flex sm:text-center md:text-4xl xl:text-8xl font-bold text-blue-light flex flex-col md:w-[30%] justify-center items-center'>
                    <h1 className='text-3xl font-semibold text-center text-gray-300'>
                        Sign Up <span className='text-blue-500'> And Get Into Chat</span>
                    </h1>
                </div>
                <div className='lg:w-[50%] flex justify-center items-center'>
                    <div className='md:border md:shadow-lg lg:w-[50%] bg-white rounded-3xl flex justify-center bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                        <div className='max-[678px]:w-[90%] my-5 min-[1000px]:w-[90%]'>
                            <div className='flex flex-col w-full'>
                                <div className='border-b-2 border-black my-3'>
                                    <span>Username</span>
                                    <input
                                        type="text"
                                        name="username"
                                        value={username}
                                        onChange={handleChange}
                                        className='w-full bg-white outline-none'
                                        placeholder='Username'
                                    />
                                </div>
                                <div className='border-b-2 border-black my-3'>
                                    <span>Email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                        className='w-full bg-white outline-none'
                                        placeholder='Email'
                                    />
                                </div>
                                <div className='border-b-2 border-black my-3'>
                                    <span>Phone Number</span>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onChange={handleChange}
                                        className='w-full bg-white outline-none'
                                        placeholder='Phone Number'
                                    />
                                </div>
                                <div className='border-b-2 border-black my-2'>
                                    <span>Password</span>
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={handleChange}
                                        className='w-full bg-white outline-none'
                                        placeholder='Password'
                                    />
                                </div>
                                <div className='border-b-2 border-black my-2'>
                                    <span>Confirm Password</span>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={handleChange}
                                        className='w-full bg-white outline-none'
                                        placeholder='Confirm Password'
                                    />
                                </div>
                                <div className='border-b-2 border-black my-2'>
                                    <span>Gender</span>
                                    <select
                                        name="gender"
                                        value={gender}
                                        onChange={handleChange}
                                        className='w-full bg-white outline-none'
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex flex-col gap-5 my-4'>
                                <button onClick={handleSubmit} className='flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light'>
                                    {loading ? "Loading..." : "Sign up"}
                                </button>
                                <button className='flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light gap-2'>
                                    <FcGoogle className='h-6 w-6' /> Continue With Google
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
