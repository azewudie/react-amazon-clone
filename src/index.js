// import React from "react";
// import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import reducer, { initialState } from "./reducer";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./Stateprovider";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);
reportWebVitals();
