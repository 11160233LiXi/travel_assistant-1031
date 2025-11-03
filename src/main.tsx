
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import App from "./App";
import "./index.css";
import { MAP_LIBRARIES, MAP_API_KEY } from "./googleMaps";
import { ThemeProvider } from "./ThemeContext"; // <--- 1. 引入 ThemeProvider

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ▼▼▼ 2. 在這裡用 ThemeProvider 包裹起來 ▼▼▼ */}
      <ThemeProvider>
        <LoadScript googleMapsApiKey={MAP_API_KEY} libraries={[...MAP_LIBRARIES]}>
          <App />
        </LoadScript>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);