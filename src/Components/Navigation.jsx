import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Context } from "./Context";

const Navigation = () => {
  const navigate = useNavigate();
  const { state, dispatch, actions } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="flex justify-end p-2">
      <div
        onClick={handleLogout}
        className="text-xl hover:cursor-pointer hover:text-gray-700 transition-all duration-200 underline"
      >
        Logout
      </div>
    </div>
  );
};

export default Navigation;
