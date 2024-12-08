import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./components/App";
import "./assets/css/tailwindstyle.css";
import { getAuthUserDetails } from "./components/lanidngpage";
import MainHome from "./components/MainHome";
import { getAddUserFormData } from "./controller/getformdata";
import AddUser from "./components/AddUser";
import ManageUser from "./components/manageuser";

const routes = [
  { path: "/", element: <App /> },
  //if user has clickde login then only go to mainPAge
  { path: "/main", element: <MainHome />, loader: getAuthUserDetails },
  { path: "/admin/adduser", element: <AddUser />, action: getAddUserFormData }, // calling getAddUserFormData to get the form data and format it so that it could be strored in the database.
  { path: "/admin/manageuser", element: <ManageUser /> },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
