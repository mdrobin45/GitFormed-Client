import { useLocation, useNavigate } from "react-router-dom";
import { saveUserToDB } from "../../../APIs/APIs";
import useAuth from "../../../Hooks/useAuth";
import { showToast } from "../../../Utilities/toast";

const useGoogleSignIn = () => {
   const { loginWithGoogle } = useAuth();
   const { state } = useLocation();
   const navigate = useNavigate();

   // Handle signIn with google
   const handleGoogleSignIn = () => {
      loginWithGoogle()
         .then((result) => {
            if (result.user) {
               // Save user to database
               const userInfo = {
                  email: result.user?.email,
               };
               saveUserToDB(userInfo);

               showToast("Login Successful!", "success");

               if (state !== null) {
                  navigate(state.from);
               } else {
                  navigate("/");
               }
            }
         })
         .catch((err) => {
            if (err) {
               showToast("Something went wrong!", "error");
            }
         });
   };

   return handleGoogleSignIn;
};

export default useGoogleSignIn;
