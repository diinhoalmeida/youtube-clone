import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SidebarProvider } from "./context/SideBarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);
