import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

if (process.env.NODE_ENV === "production") {
  console.error = () => {};
  console.warn = () => {};
  console.log = () => {};
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
