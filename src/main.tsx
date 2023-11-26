import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import config from "./aws-exports.js";
import { signOut } from "aws-amplify/auth/cognito";
Amplify.configure(config);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App signOut={signOut} />
  </React.StrictMode>
);
