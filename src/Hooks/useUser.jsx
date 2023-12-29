import { useQuery } from "@tanstack/react-query";
import { getUser } from "../APIs/APIs";
import useAuth from "./useAuth";

const useUser = () => {
   const { user } = useAuth();

   // Retrieve username
   const email = user?.email;
   const { data: dbUser } = useQuery({
      queryKey: ["user"],
      queryFn: () => getUser(email),
   });

   return { dbUser };
};

export default useUser;
