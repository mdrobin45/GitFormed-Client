import { Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import useRepositories from "../../Hooks/useRepositories";
import useUserRepo from "../../Hooks/useUserRepo";
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
   const {
      isPending,
      isFetching: allReposStates,
      repositories,
   } = useRepositories();
   const { userRepos, isFetching } = useUserRepo();
   const [displayRepos, setDisplayRepos] = useState();
   const [selectRepo, setSelectRepo] = useState(1);
   const [sortBy, setSortBy] = useState(1);

   // Handle repo dropdown change
   const handleRepo = (e) => {
      setSelectRepo(e);
   };

   // Handle sort dropdown change
   const handleSort = (e) => {
      setSortBy(e);
   };

   // Handle watching filter change
   const handleWatching = (e) => {
      console.log(e.target.checked);
   };

   useEffect(() => {
      // Repo change handle
      if (selectRepo == 2) {
         setDisplayRepos(userRepos);
      } else {
         setDisplayRepos(repositories);
      }

      // Sort by handler
      if (sortBy == 2) {
         const alphabeticSorts = repositories.sort((a, b) => {
            const usernameA = a.repoName.toLowerCase();
            const usernameB = b.repoName.toLowerCase();

            if (usernameA < usernameB) {
               return -1;
            }
            if (usernameA > usernameB) {
               return 1;
            }
            return 0;
         });
         setDisplayRepos(alphabeticSorts);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectRepo, isPending, sortBy, isFetching, allReposStates]);

   return (
      <div className={styles.repoMainWrapper}>
         <RepoActionBar
            handleSort={handleSort}
            handleWatching={handleWatching}
            handleRepo={handleRepo}
         />
         <Card className={styles.tableWrapper}>
            {!isPending ? (
               <RepoTable repositories={displayRepos} />
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
