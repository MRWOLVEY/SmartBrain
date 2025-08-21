import React from "react";
import { useContext } from "react";
import { Context } from "./Context";

const Rank = () => {
  const { state } = useContext(Context);
  return (
    <div className="text-3xl text-white flex flex-col items-center justify-center gap-3 p-3">
      <p className="capitalize">
        hello, {state.profile.name}, your current rank is...
      </p>
      <p>#{state.profile.entries}</p>
    </div>
  );
};

export default Rank;
