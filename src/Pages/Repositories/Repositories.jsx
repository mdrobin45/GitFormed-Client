import { Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import useAPI from "../../Hooks/useAPI";
import useRepositories from "../../Hooks/useRepositories";
import useUser from "../../Hooks/useUser";
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
   const { repositories, isPending } = useRepositories();
   const { dbUser } = useUser();
   console.log(dbUser);

   // URL query params
   const repo = searchParams.get("repo");
   const sortBy = searchParams.get("sortBy");
   const myWatching = searchParams.get("myWatching");

   // Fetch repository by filtering
   useEffect(() => {
      filterRepository(repo, sortBy, myWatching).then((res) =>
         setFilteredRepos(res)
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myWatching, repo, searchParams, sortBy]);

   return (
      <div className={styles.repoMainWrapper}>
         <RepoActionBar
            searchParams={searchParams}
            setSearchParams={setSearchParams}
         />
         <Card className={styles.tableWrapper}>
            {!isPending ? (
               <RepoTable
                  repositories={
                     !filteredRepos.length ? repositories : filteredRepos
                  }
               />
            ) : (
               <div className="flex py-6 w-full items-start justify-center">
                  <PulseLoader color="#2563eb" />
               </div>
            )}
         </Card>
      </div>
   );
};

export default Repositories;
