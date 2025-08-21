import React from "react";
import { Navigate } from "react-router";
import { useContext } from "react";
import { Context } from "./Context";
const PublicRoute = ({ children }) => {
  const { state } = useContext(Context);
  return !state.token ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
