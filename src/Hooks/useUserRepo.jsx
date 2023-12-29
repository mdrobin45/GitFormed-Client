import { useQuery } from "@tanstack/react-query";
import { getRepoByUser } from "../APIs/APIs";
import useAuth from "./useAuth";

const useUserRepo = () => {
   const { user } = useAuth();
   let {
      isPending,
      refetch,
      data: userRepos = [],
   } = useQuery({
      queryKey: ["userRepos"],
      queryFn: () => getRepoByUser(user?.email),
   });

   userRepos = userRepos.toReversed();

   return { userRepos, isPending, refetch };
};

export default useUserRepo;
