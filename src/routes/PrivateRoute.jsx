
import { Navigate } from "react-router-dom";
import { Layout } from "../pages";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;
  else {
    return (
      <>
        <Layout>{children}</Layout>
      </>
    );
  }
};

export default PrivateRoute;
