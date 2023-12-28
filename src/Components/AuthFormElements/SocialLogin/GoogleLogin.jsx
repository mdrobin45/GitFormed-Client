import useGoogleSignIn from "./useGoogleSignIn";

const GoogleLogin = () => {
   const handleGoogleSignIn = useGoogleSignIn();
   return (
      <button
         onClick={handleGoogleSignIn}
         className="px-4 w-full mt-4 justify-center mx-auto py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
         <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
         />
         <span className="dark:text-gray-200 ">Continue with Google</span>
      </button>
   );
};

export default GoogleLogin;
