import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Configuration/firebase.config";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   // Auth provider
   const googleAuthProvider = new GoogleAuthProvider();

   // Sign up with email and password
   const registerWithEmailPassword = (email, password) => {
      setIsLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // Sign in with email and password
   const loginWithEmailPassword = (email, password) => {
      setIsLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // Update profile
   const profileUpdate = (userInfo) => {
      setIsLoading(true);
      return updateProfile(auth.currentUser, userInfo);
   };

   // Google signIn
   const loginWithGoogle = () => {
      setIsLoading(true);
      return signInWithPopup(auth, googleAuthProvider);
   };

   // Log Out
   const logOut = () => {
      setIsLoading(true);
      return signOut(auth);
   };

   // Get current user
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setIsLoading(false);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = {
      user,
      logOut,
      isLoading,
      profileUpdate,
      loginWithGoogle,
      registerWithEmailPassword,
      loginWithEmailPassword,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthContextProvider;
