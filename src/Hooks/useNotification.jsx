import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useAPI from "./useAPI";
import useAuth from "./useAuth";
import useUser from "./useUser";

const useNotification = () => {
   const { getNotifications } = useAPI();
   const { user } = useAuth();
   const { dbUser } = useUser();

   const { refetch, data: notifications = [] } = useQuery({
      queryKey: ["getNotify", user],
      queryFn: () => getNotifications(dbUser?._id),
   });

   useEffect(() => {
      refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [user, dbUser?._id]);
   return { notifications, refetch };
};

export default useNotification;
