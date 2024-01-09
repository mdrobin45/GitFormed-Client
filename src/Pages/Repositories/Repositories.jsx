import { Card } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Pagination from "../../Components/Pagination/Pagination";
import useAPI from "../../Hooks/useAPI";
import useAuth from "../../Hooks/useAuth";
import RepoActionBar from "./RepoActionBar/RepoActionBar";
import RepoTable from "./RepoTable/RepoTable";
import styles from "./styles.module.css";

// const TABLE_ROWS = [
//    {
//       name: "John Michael",
//       job: "Manager",
//       date: "23/04/18",
//    },
//    {
//       name: "Alexa Liras",
//       job: "Developer",
//       date: "23/04/18",
//    },
//    {
//       name: "Laurent Perrier",
//       job: "Executive",
//       date: "19/09/17",
//    },
//    {
//       name: "Michael Levi",
//       job: "Developer",
//       date: "24/12/08",
//    },
//    {
//       name: "Richard Gran",
//       job: "Manager",
//       date: "04/10/21",
//    },
//    {
//       name: "Richard Gran",
//       job: "Manager",
//       date: "04/10/21",
//    },
//    {
//       name: "Richard Gran",
//       job: "Manager",
//       date: "04/10/21",
//    },
//    {
//       name: "Richard Gran",
//       job: "Manager",
//       date: "04/10/21",
//    },
//    {
//       name: "Richard Gran",
//       job: "Manager",
//       date: "04/10/21",
//    },
//    {
//       name: "Richard Gran",
//       job: "Manager",
//       date: "04/10/21",
//    },
// ];
const Repositories = () => {
   const { filterRepository } = useAPI();
   const [searchParams, setSearchParams] = useSearchParams();
   const [filteredRepos, setFilteredRepos] = useState([]);
   const { user } = useAuth();

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

   useEffect(() => {
      setFilteredRepos(data?.response);
   }, [data]);

   console.log(data);
   return (
      <div className={styles.repoMainWrapper}>
         <RepoActionBar
            refetchFilter={refetchFilter}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
         />
         <Card className={styles.tableWrapper}>
            {!isPending ? (
               <RepoTable repositories={filteredRepos} />
            ) : (
               <div className="flex py-6 w-full items-start justify-center">
                  <PulseLoader color="#2563eb" />
               </div>
            )}
            <div className="p-4">
               <Pagination totalRepositories={data?.total} />
            </div>
         </Card>
      </div>
   );
};

export default Repositories;
