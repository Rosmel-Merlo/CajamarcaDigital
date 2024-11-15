import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css"
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

createRoot(document.getElementById("root")!).render(
  <FluentProvider theme={webLightTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </FluentProvider>
);
