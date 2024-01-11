import { useState } from "react";
import useAPI from "./useAPI";

const useNotification = () => {
   const { pullNotification } = useAPI();
   const [notification, setNotification] = useState("");

   const handlePullNotification = (repoId) => {
      pullNotification(repoId).then((res) => setNotification(res));
   };

   return { handlePullNotification, notification };
};

export default useNotification;
