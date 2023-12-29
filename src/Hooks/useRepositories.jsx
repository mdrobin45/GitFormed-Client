import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../APIs/APIs";

const useRepositories = () => {
   let {
      isPending,
      refetch: refetchAllRepo,
      data: repositories = [],
   } = useQuery({
      queryKey: ["repos"],
      queryFn: getRepositories,
   });

   repositories = repositories.toReversed();

   return { repositories, isPending, refetchAllRepo };
};

export default useRepositories;
