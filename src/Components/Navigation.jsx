import React from "react";

const Navigation = () => {
  return (
    <div className="flex justify-end p-2">
      <div className="text-xl hover:cursor-pointer hover:text-gray-700 transition-all duration-200 underline">
        Logout
      </div>
    </div>
  );
};

export default Navigation;
