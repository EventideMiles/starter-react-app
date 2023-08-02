import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(
  <div>
    <h1>Hello React!</h1>
    <p>Start editing to see some magic happen :)</p>
  </div>
);
