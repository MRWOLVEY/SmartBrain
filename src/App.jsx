import React, { useDispatch, useContext, useReducer, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Navigate,
  useNavigate,
} from "react-router";
import Navigation from "./Components/Navigation";
import Logo from "./Components/Logo";
import ImageLinkForm from "./Components/ImageLinkForm";
import Rank from "./Components/Rank";
import FaceRecognition from "./Components/FaceRecognition";
import "./App.css";
import ParticlesComp from "./Components/ParticlesComp";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { ContextProvider } from "./Components/Context";
import { Reducer } from "./Components/Reducer";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
// import Particles from "react-particles-js";

const App = () => {
  const actions = {
    SET_URL: "SET_URL",
    SET_BOXES: "SET_BOXES",
    SET_PROFILE: "SET_PROFILE",
    INCREMENT_SCORE: "INCREMENT_SCORE",
    CLEAR_BOXES: "CLEAR_BOXES",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
  };

  const initialState = {
    imgUrl: "",
    boxes: [],
    token: "",
    id: "",
    profile: {},
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const MainPage = () => (
    <div className="p-3">
      <ParticlesComp />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition url={state.imgUrl} />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <PublicRoute>
          <Register />
        </PublicRoute>
      ),
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);

  return (
    <ContextProvider state={state} dispatch={dispatch} actions={actions}>
      <RouterProvider router={router} />
    </ContextProvider>
  );
};

export default App;
