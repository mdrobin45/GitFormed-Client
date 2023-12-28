import { useContext } from "react";
import { AuthContext } from "../MyContext/AuthContextProvider";

const useAuth = () => {
   const authInfo = useContext(AuthContext);
   return authInfo;
};

export default useAuth;
