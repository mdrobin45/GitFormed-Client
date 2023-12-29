import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { user, isLoading } = useAuth();
   const location = useLocation();
   if (isLoading) {
      return (
         <div className="h-screen flex flex-col items-center justify-center">
            <ClipLoader color="#2563eb" />
         </div>
      );
   }
   if (!user) {
      return <Navigate to="/home" state={{ from: location.pathname }} />;
   }
   return children;
};

export default PrivateRoute;
