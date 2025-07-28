import React from "react";
import Navigation from "./Components/Navigation";
import Logo from "./Components/Logo";
import ImageLinkForm from "./Components/ImageLinkForm";
import FaceRecognition from "./Components/FaceRecognition";

const App = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
};

export default App;
