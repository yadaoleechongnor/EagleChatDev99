import React, { useState, useLayoutEffect } from "react";
import { Formik } from "formik";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { errorSwal, successSwal } from "../helpers/sweetalert";
import { Loader } from "../components";
import hongfa from "../assets/hongfah.png";
import hong from "../assets/hong.svg";

const Login = () => {
  const [errorUser, setErrorUser] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleLogin = async (values) => {
    setLoading(true);

    const data = {
      userCode: values?.userCode,
      password: values?.password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "https://hongfah-server.onrender.com/api/v1.0/user/login",
        data,
        config
      );

      console.log("response_data::", response?.data);
      localStorage.setItem("token", response?.data?.accessToken);
      setLoading(false);
      successSwal("ເຂົ້າສູລະບົບສຳເລັດ!");
      navigate("/");
    } catch (error) {
      console.error(error);
      setLoading(false);
      errorSwal("ເຂົ້າສູ່ລະບົບຫລົ້ມແຫຼວ");
    }
  };

  return (
    <div className="w-full fixed">
      <div className="login-background w-full h-screen place-items-center p-4 grid ">
        {loading && <Loader />}
        <div className="lg:w-[30%] h-[85%] sml:w-full rounded-3xl flex justify-center items-center md:border-2 md:w-[50%]">
          <Formik
            initialValues={{
              userCode: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.userCode) {
                errors.userCode = "ກະລະນຸປ້ອມ User ID";
                setErrorUser(true);
              }
              if (!values.password) {
                errors.password = "ກະລຸນາລະຫັດຜ່ານ";
                setErrorPassword(true);
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              handleLogin(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <form className="bg-white w-full shadow-md md:w-[93%] md:h-[95%] rounded-3xl text-center py-4 px-2">
                <div className="flex w-full justify-center">
                  <img src={hongfa} alt="" className="w-[200px] h-[200px]" />
                </div>
                <div className="mt-2">
                  <div className="mb-2 px-4">
                    <p className="self-start flex font-medium "> User ID</p>
                    <input
                      type="text"
                      name="userCode"
                      value={values.userCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="User ID"
                      className={`${
                        errorUser ? "border-red-500" : "border-gray-400"
                      } p-3 w-full border-2 outline-none focus:border-2 focus:border-main-color rounded-md`}
                    />
                    <p className="text-red-500 text-[12px] mt-3 text-left">
                      {errors.userCode &&
                        touched.userCode &&
                        errors.userCode}
                    </p>
                  </div>
                  <div className="px-4">
                    <p className="flex self-start font-medium">Password</p>
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="ລະຫັດຜ່ານ"
                      className={`${
                        errorPassword
                          ? "border-red-500"
                          : "border-gray-400"
                      } p-3 w-full outline-none border-2 rounded-md focus:border-2 focus:border-main-color`}
                    />
                    <p className="text-red-500 text-[12px] text-left">
                      {errors.password &&
                        touched.password &&
                        errors.password}
                    </p>
                    <div className="mt-2 flex justify-between ">
                      <div className="flex gap-2 ">
                        <input type="checkbox" /> <span> Remember me</span>
                      </div>
                      <ul>
                        <li className="underline">
                          <a href="#"> ລືມລະຫັດຜ່ານ </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="px-4 mt-2 ">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full font-medium text-base rounded-md text-white bg-blue-dark p-3 hover:shadow-md duration-300"
                    >
                      ເຂົ້າສູລະບົບ
                    </button>
                  </div>
                  <div className="px-4 my-2 ">
                    <NavLink to="/register">
                      <button className="mt-3 w-full font-medium text-base rounded-md text-blue-dark border-blue-dark border-2 p-3 hover:shadow-md duration-300">
                        ລົງທະບຽນ
                      </button>
                    </NavLink>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <img
        src={hong}
        alt=""
        className="hidden absolute mt-[-23rem] w-[350px] ml-[60.5rem] opacity-10 lg:block"
      />
      <img
        src={hong}
        alt=""
        className="hidden absolute mt-[-23rem] w-[350px] ml-[13rem] opacity-10 transform scale-x-[-1] lg:block"
      />
    </div>
  );
};

export default Login;
