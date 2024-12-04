import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./components/App";
import "./assets/css/tailwindstyle.css";
import { getAuthUserDetails} from "./components/lanidngpage";
import MainHome from "./components/MainHome";
import AddUser from "./components/adduser";

const routes = [
  { path: "/", element: <App /> },
  //if user has clickde login then only go to mainPAge
  { path: "/main", element :<MainHome/>, loader : getAuthUserDetails, },
  {path: '/admin/adduser', element :<AddUser/>}
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
