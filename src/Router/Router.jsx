import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Landing from "../Pages/Landing/Landing";
import Repositories from "../Pages/Repositories/Repositories";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: (
               <PrivateRoute>
                  <Repositories />
               </PrivateRoute>
            ),
         },
      ],
   },
   {
      path: "/landing",
      element: <Landing />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
]);

export default router;
