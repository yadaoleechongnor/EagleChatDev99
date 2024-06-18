import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import {
  Login,
  Dashboard,
  Error,
  Chat,
  ChatNavbarPersonaldetail,
  Register,
  RegisterOPT,
  RegisterProfile,
} from "../pages";

const AllRoute = ({ selectedUser, onSelectUser }) => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerotp" element={<RegisterOPT />} />
        <Route path="/registerprofile" element={<RegisterProfile />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard onSelectUser={onSelectUser} />
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

        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat selectedUser={selectedUser} />
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
