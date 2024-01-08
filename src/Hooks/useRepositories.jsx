import { useQuery } from "@tanstack/react-query";
import useAPI from "./useAPI";

const useRepositories = () => {
   const { getRepositories } = useAPI();
   let {
      isPending,
      isFetching,
      refetch: refetchAllRepo,
      data: repositories = [],
   } = useQuery({
      queryKey: ["repos"],
      queryFn: getRepositories,
   });

   repositories = repositories.toReversed();

   return { repositories, isPending, refetchAllRepo, isFetching };
};

export default useRepositories;
