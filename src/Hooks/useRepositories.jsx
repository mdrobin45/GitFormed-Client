import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../APIs/APIs";

const useRepositories = () => {
   const { isPending, data: repositories = [] } = useQuery({
      queryKey: ["repos"],
      queryFn: getRepositories,
   });

   return { repositories, isPending };
};

export default useRepositories;
