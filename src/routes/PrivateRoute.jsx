import { Navigate } from "react-router-dom";
import { Layout } from "../pages";
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const token = Cookies.get("token");

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
