import React, { useDispatch, useContext, useReducer } from "react";
import Navigation from "./Components/Navigation";
import Logo from "./Components/Logo";
import ImageLinkForm from "./Components/ImageLinkForm";
import Rank from "./Components/Rank";
import FaceRecognition from "./Components/FaceRecognition";
import "./App.css";
import ParticlesComp from "./Components/ParticlesComp";
import { ContextProvider } from "./Components/Context";
import { Reducer } from "./Components/Reducer";
// import Particles from "react-particles-js";

const App = () => {
  const actions = {
    SET_URL: "SET_URL",
    SET_BOXES: "SET_BOXES",
    CLEAR_STATE: "CLEAR_STATE", // Added action for clearing state
  };

  const initialState = { imgUrl: "", boxes: [] };
  const [state, dispatch] = useReducer(Reducer, initialState);
  // const particlesOptions = {
  //   particles: {
  //     line_linked: {
  //       shadow: {
  //         enable: true,
  //         color: "#3CA9D1",
  //         blur: 5,
  //       },
  //     },
  //   },
  // };

  return (
    <ContextProvider state={state} dispatch={dispatch} actions={actions}>
      <div className="p-3">
        <ParticlesComp />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <FaceRecognition />
      </div>
    </ContextProvider>
  );
};

export default App;
