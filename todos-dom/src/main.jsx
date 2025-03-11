// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./01-default-app/app";
// import App from "./02-single-file-app";
import App from "./03-dynamic-app";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App name="Matteo Antony" />
  // </StrictMode>
);
