import React from "react";
import Navigation from "./Components/Navigation";
import Logo from "./Components/Logo";
import ImageLinkForm from "./Components/ImageLinkForm";
import Rank from "./Components/Rank";
import FaceRecognition from "./Components/FaceRecognition";
import "./App.css";
import ParticlesComp from "./Components/ParticlesComp";
// import Particles from "react-particles-js";

const App = () => {
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
    <div className="p-3">
      <ParticlesComp />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
};

export default App;
