import React from "react";
import { Navigate } from "react-router";
import { useContext } from "react";
import { Context } from "./Context";
const ProtectedRoute = ({ children }) => {
  const { state } = useContext(Context);
  return state.token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
