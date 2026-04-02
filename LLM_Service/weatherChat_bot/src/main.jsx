import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AiProvider } from "./AiContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AiProvider>
      <App />
    </AiProvider>
  </StrictMode>,
);
