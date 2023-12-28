import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { saveUserToDB } from "../../../APIs/APIs";
import useAuth from "../../../Hooks/useAuth";

const useRegister = () => {
   const { registerWithEmailPassword } = useAuth();
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   // Form submit
   const onSubmit = async (data) => {
      // Initialize tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Please wait...",
         isLoading: true,
      });

      // User registration process
      registerWithEmailPassword(data.email, data.password)
         .then((result) => {
            if (result.user) {
               // Save user to database
               const userInfo = {
                  email: result.user?.email,
               };
               saveUserToDB(userInfo);

               // Show toast after successful registration
               toast.update(toastMsg, {
                  render: "Registration Successful!",
                  type: "success",
                  isLoading: false,
               });
               navigate("/");
            }
         })
         .catch((err) => {
            toast.update(toastMsg, {
               render: err.message,
               type: "error",
               isLoading: false,
            });
         });
   };

   return { register, handleSubmit, onSubmit, errors };
};

export default useRegister;
