import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>Meltdown Map Marker</h1>
    <StrictMode>
      <App />
    </StrictMode>
  </>
);
