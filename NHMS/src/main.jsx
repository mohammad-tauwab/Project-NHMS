import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./components/App";
import "./assets/css/tailwindstyle.css";
import MainHome from "./components/MainHome";

const routes = [
  { path: "/", element: <App /> },
  { path: "/main", element: <MainHome /> },
];
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
