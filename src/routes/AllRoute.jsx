import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute"
import {
  Login,
  Dashboard,
 
  Error,
  Chat,
  ChatNavbarPersonaldetail,
  Resgister,
  RegisterOPT,
  RegisterProfile,
 
} from "../pages";
const AllRoute = () => {
    const token = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Resgister />} />
        <Route path="/registerotp" element={<RegisterOPT />} />
        <Route path="/registerprofile" element={<RegisterProfile />} />
       
       
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
       
       
        <Route
          path="*"
          element={
            <PublicRoute>
              <Error />
            </PublicRoute>
          }
        />

        {/* =======================================  chat =========================================  */}
        
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route
          path="/personaldetail"
          element={
            <PrivateRoute>
              <ChatNavbarPersonaldetail />
            </PrivateRoute>
          }
        />
       
      


      </Routes>
    </Router>
  );
};

export default AllRoute;
