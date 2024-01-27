import React, { useState } from "react";
import hong from "../../assets/hong.svg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");  // State for email input
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Validate email
      const trimmedEmail = email.trim();
      if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
        alert("Please enter a valid email address!");
        return;
      }

      // Validate phone number
      const trimmedPhoneNumber = phoneNumber.trim();
      if (!trimmedPhoneNumber || !/^\d{8}$/.test(trimmedPhoneNumber)) {
        alert("Please enter a valid 8-digit phone number!");
        return;
      }

      // Prepare user data
      const userData = {
        email: trimmedEmail,
        phoneNumber: trimmedPhoneNumber,
      };

      // Send registration request to the server
      const response = await axios.post(
        "https://hongfah-server.onrender.com/api/v1.0/user",
        userData
      
      );

      //  console.log(response.data["data"]["userCode"])
      //  console.log(response.data["data"]["password"])


      if(response.data["status"]=== true ) { 
        localStorage.setItem("userCode", response.data["data"]["userCode"])
        localStorage.setItem("password", response.data["data"]["password"])

        console.log("Server response:", response.data);
  
        // Clear input fields
        setEmail("");
        setPhoneNumber("");
  
        // Show success notification
        // Save token to local storage
  
        // Navigate to "/register/otp" after a successful registration
        navigate("/register/otp");
       }
     
    } catch (error) {
      console.error("Error:", error);

      // Handle errors and show appropriate alerts
      handleRegistrationError(error);
    }
  };

  // Simple email validation function
  const isValidEmail = (email) => {
    // Implement your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleRegistrationError = (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Server responded with an error:", error.response.data);

      // Show error message from the server
      alert(`Server responded with an error: ${error.response.data.message}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from the server");

      // Show a generic error message
      alert("No response received from the server. Please try again later.");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", error.message);

      // Show a generic error message
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="w-full fixed">
      <div className="flex justify-between items-center p-2 bg-blue-dark">
        <div className="flex flex-col justify-center items-center">
          <img src={hong} alt="" className="md:w-24 md:ml-12 sml:w-20 w-10" />
          <h1 className="text-white md:ml-12 text-sm md:text-lg">
            ບໍລິດສັດ ຫົງຟ້າຈຳກັດ
          </h1>
        </div>
        <span className="font-medium text-white md:text-5xl md:mr-32 mr-10">
          {" "}ສະໝັກສະມາຊິກ{" "}
        </span>
        <div></div>
      </div>
      <div className="w-full mt-8 flex justify-center text-blue-dark font-medium ">
        <div className="flex flex-col justify-center items-center sm:w-[60rem] w-[90%]">
          <div className="w-full flex flex-col items-center border rounded-lg  h-[20rem] justify-around shadow-lg">
            <b className=" text-3xl">Enter Your Email and Phone Number</b>
            <div className=" w-full flex justify-center "> 
              {/* Email input */}
              <input
                type="email"
                className=" w-[50%] border h-10 outline-none text-lg rounded-lg "
                placeholder=" E-mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="overflow-hidden items-center flex border text-xl rounded border-blue-dark h-10 sm:w-[50%] w-[90%]">
              {/* Phone number input */}
              <h1 className="w-24 flex items-center justify-center border-r border-blue-dark h-full">
                +856
              </h1>
              <div className="flex rounded h-full items-center gap-2">
                <h1 className="ml-4">20</h1>
                <input
                  type="text"
                  value={phoneNumber}
                  placeholder=" Phone Number "
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="h-6 w-[20rem]  my-4 px-2  outline-none md:bg-sky-200"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between w-full">
            <NavLink
              to="/login"
              className="flex items-center justify-center border-2 border-blue-dark w-[45%] h-14 rounded-lg"
            >
              {" "}ຍົກເລິກ{" "}
            </NavLink>
            <button
              className="flex items-center justify-center text-white bg-blue-dark w-[45%] h-14 rounded-lg"
              onClick={handleRegister}
            >
              ຢືນຢັນ{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
