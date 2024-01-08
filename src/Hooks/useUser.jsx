import { useQuery } from "@tanstack/react-query";
import useAPI from "./useAPI";
import useAuth from "./useAuth";

const useUser = () => {
   const { user } = useAuth();
   const { getUser } = useAPI();

   // Retrieve username
   const email = user?.email;
   const { data: dbUser } = useQuery({
      queryKey: ["user"],
      queryFn: () => getUser(email),
   });

   return { dbUser };
};

export default useUser;
