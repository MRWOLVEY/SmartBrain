import React from "react";
import "../App.css";

const ImageLinkForm = () => {
  const formStyle = {};

  return (
    <div className="flex justify-center">
      <div className=" p-3 flex flex-col items-center gap-2 flex-grow max-w-3xl">
        <p>
          This Magic Brain will detect faces in your pictures, Give it a try :)
        </p>
        <form
          preventDefault
          className="formStyle flex shadow-xl h-20 w-full  items-center rounded p-6"
        >
          <input
            className="bg-gray-100 h-8 flex-4/6 focus:border-none focus:outline-none p-1 "
            type="text"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="h-8 flex-2/6 rounded-r-lg border border-white bg-pink-600 text-white p-1 hover:scale-105 transition-all duration-200 active:bg-pink-800 active:scale-95"
          >
            Detect
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageLinkForm;
