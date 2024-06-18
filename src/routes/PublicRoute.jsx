import React from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "../pages";
import Cookies from 'js-cookie';

const PublicRoute = ({ children }) => {
  const token = Cookies.get("token");

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
