import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppRouter from "./components/fakeEcommers/AppRouter.jsx";
import Routers from "./components/practiceRoutes/Routers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Routers /> */}
    <AppRouter />
  </React.StrictMode>
);
