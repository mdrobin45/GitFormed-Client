import styles from "../styles.module.css";
import useGoogleSignIn from "./useGoogleSignIn";

const GoogleLogin = () => {
   const handleGoogleSignIn = useGoogleSignIn();
   return (
      <button onClick={handleGoogleSignIn} className={styles.socialLoginBtn}>
         <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
         />
         <span>Continue with Google</span>
      </button>
   );
};

export default GoogleLogin;
