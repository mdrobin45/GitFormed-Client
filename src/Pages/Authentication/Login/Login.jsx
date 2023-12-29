import { useState } from "react";
import AuthFormFooter from "../../../Components/AuthFormElements/AuthFormFooter/AuthFormFooter";
import AuthFormHeader from "../../../Components/AuthFormElements/AuthFormHeader/AuthFormHeader";
import GoogleLogin from "../../../Components/AuthFormElements/SocialLogin/GoogleLogin";
import SubmitButton from "../../../Components/AuthFormElements/SubmitButton";
import styles from "../styles.module.css";
import useLogin from "./useLogin";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const { register, handleSubmit, onSubmit, errors } = useLogin();

   // Handle password show hide
   const showHideHandler = () => {
      setShowPassword(!showPassword);
   };
   return (
      <div className={styles.sectionWrapper}>
         <div className={styles.formWrapper}>
            <AuthFormHeader heading="Login" />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
               <div className={styles.inputWrapper}>
                  <label htmlFor="Email" className={styles.inputLabel}>
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
                     className={styles.input}
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
               <div className={styles.inputWrapper}>
                  <label htmlFor="password" className={styles.inputLabel}>
                     Password
                  </label>
                  <div className="relative">
                     <input
                        {...register("password", {
                           required: "This field is required",
                        })}
                        id="password"
                        type={`${showPassword ? "text" : "password"}`}
                        className={styles.input}
                        required
                     />
                     <div
                        onClick={showHideHandler}
                        className={styles.passwordFieldWrapper}>
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
               <SubmitButton btnText="Login" />
               <GoogleLogin />
            </form>
            <AuthFormFooter loginPage={true} />
         </div>
      </div>
   );
};

export default Login;
