import React, { useContext, useEffect } from "react";
import { Context } from "./Context";

const FaceRecognition = ({ url }) => {
  const { state } = useContext(Context);

  useEffect(() => {
    // console.log(state.boxes);
  }, [state]);

  return (
    <div className="flex justify-center">
      <div className="absolute">
        <img
          id="inputImage"
          src={state.imgUrl}
          className="flex flex-grow max-w-[500px] h-auto"
          alt=""
        />
        {state.boxes.map((box, i) => (
          <div
            className="absolute flex wrap justify-center cursor-pointer border-2 border-cyan-300"
            style={state.boxes[i]}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
