import { useState } from "react";
import AuthFormFooter from "../../../Components/AuthFormElements/AuthFormFooter/AuthFormFooter";
import AuthFormHeader from "../../../Components/AuthFormElements/AuthFormHeader/AuthFormHeader";
import GoogleLogin from "../../../Components/AuthFormElements/SocialLogin/GoogleLogin";
import SubmitButton from "../../../Components/AuthFormElements/SubmitButton";
import useRegister from "./useRegister";

const RegisterForm = () => {
   const { register, handleSubmit, onSubmit, errors } = useRegister();
   const [showPassword, setShowPassword] = useState(false);

   // Handle password show hide
   const showHideHandler = () => {
      setShowPassword(!showPassword);
   };
   return (
      <div className="h-screen flex items-start justify-center flex-col">
         <div className="mx-auto w-[26rem] border rounded-md shadow-md">
            <AuthFormHeader heading="Create an Account" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full px-6">
               <div className="my-3">
                  <label
                     htmlFor="Username"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                     Username
                  </label>
                  <input
                     {...register("username", {
                        required: "This field is required",
                     })}
                     type="text"
                     id="Username"
                     className="bg-gray-50
                  border-gray-300 border-2 text-gray-900 text-sm rounded-lg
                  focus:border-secondary focus:outline-none block w-full p-2.5
                  dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required
                  />
                  {errors.username ? (
                     <p className="text-sm text-red-500">
                        {errors.username.message}
                     </p>
                  ) : (
                     " "
                  )}
               </div>
               <div className="my-3">
                  <label
                     htmlFor="Email"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                     Email
                  </label>
                  <input
                     {...register("email", {
                        required: "This field is required",
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           message: "Invalid email address",
                        },
                     })}
                     type="email"
                     id="Email"
                     className="bg-gray-50
                  border-gray-300 border-2 text-gray-900 text-sm rounded-lg
                  focus:border-secondary focus:outline-none block w-full p-2.5
                  dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required
                  />
                  {errors.email ? (
                     <p className="text-sm text-red-500">
                        {errors.email.message}
                     </p>
                  ) : (
                     " "
                  )}
               </div>
               <div className="my-3">
                  <label
                     htmlFor="password"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                     Password
                  </label>
                  <div className="relative">
                     <input
                        {...register("password", {
                           required: "This field is required",
                           pattern: {
                              value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~-]).{7,}$/,
                              message:
                                 "Password must be at least 6 characters long and include at least one uppercase and one special character",
                           },
                        })}
                        id="password"
                        type={`${showPassword ? "text" : "password"}`}
                        className="bg-gray-50 border-gray-300 border-2 text-gray-900 text-sm rounded-lg focus:border-secondary focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                     />
                     <div
                        onClick={showHideHandler}
                        className="absolute inset-y-0 p-3 right-0 flex items-center pl-3.5">
                        {showPassword ? (
                           <svg
                              onClick={showHideHandler}
                              className="w-4 h-4 text-gray-500 cursor-pointer"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 14">
                              <g
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2">
                                 <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                 <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                              </g>
                           </svg>
                        ) : (
                           <svg
                              onClick={showHideHandler}
                              className="w-4 h-4 text-gray-500 cursor-pointer"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 18">
                              <path
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                           </svg>
                        )}
                     </div>
                  </div>
               </div>
               <SubmitButton btnText="Sign Up" />
               <GoogleLogin />
            </form>
            <AuthFormFooter registerPage={true} />
         </div>
      </div>
   );
};

export default RegisterForm;
