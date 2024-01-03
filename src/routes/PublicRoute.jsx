import React from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "../pages";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) return <Navigate to="/" />;
  else {
    return (
      <>
        <Layout>{children}</Layout>
      </>
    );
  }
};

export default PublicRoute;
