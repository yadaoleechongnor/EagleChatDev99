import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" w-fill grid place-items-center min-h-screen">
      <div>
        <h3>Not found this page</h3>
        <Link to="/" className=" mt-10 underline text-blue-400">click to home page</Link>
      </div>
    </div>
  );
};

export default Error;
