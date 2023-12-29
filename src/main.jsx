import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./MyContext/AuthContextProvider.jsx";
import router from "./Router/Router.jsx";
import "./index.css";

// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthContextProvider>
         <QueryClientProvider client={queryClient}>
            <ThemeProvider>
               <RouterProvider router={router} />
               <ToastContainer autoClose={1500} />
            </ThemeProvider>
         </QueryClientProvider>
      </AuthContextProvider>
   </React.StrictMode>
);
