import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import useAPI from "./useAPI";
import useAuth from "./useAuth";

const useFilterRepos = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const { user } = useAuth();
   const { filterRepository } = useAPI();
   // URL query params
   const repo = searchParams.get("repo");
   const sortBy = searchParams.get("sortBy");
   const myWatching = searchParams.get("myWatching");
   const pageNumber = searchParams.get("pageNumber");
   const {
      isPending,
      refetch: refetchFilter,
      data,
   } = useQuery({
      queryKey: [
         "filteredRepo",
         user,
         myWatching,
         repo,
         searchParams,
         sortBy,
         pageNumber,
      ],
      queryFn: () => filterRepository(repo, sortBy, myWatching, pageNumber),
   });

   return { isPending, data, refetchFilter, setSearchParams, searchParams };
};

export default useFilterRepos;
