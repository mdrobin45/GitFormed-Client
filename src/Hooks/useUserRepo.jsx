import { useQuery } from "@tanstack/react-query";
import { getRepoByUser } from "../APIs/APIs";
import useAuth from "./useAuth";

const useUserRepo = () => {
   const { user } = useAuth();
   const { isPending, data: userRepos = [] } = useQuery({
      queryKey: ["userRepos"],
      queryFn: () => getRepoByUser(user?.email),
   });

   return { userRepos, isPending };
};

export default useUserRepo;
