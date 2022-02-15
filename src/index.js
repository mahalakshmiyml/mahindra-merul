import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

axios.defaults.baseURL="https://mahindra-eden.prelaunchprop.in/Email/"

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
