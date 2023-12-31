import { Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import Pagination from "../../Components/Pagination/Pagination";
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
   let [displayRepos, setDisplayRepos] = useState([]);
   const [selectRepo, setSelectRepo] = useState(1);
   const [sortBy, setSortBy] = useState(1);
   const [currentPage, setCurrentPage] = useState(1);
   const postsPerPage = 10;

   const startIndex = (currentPage - 1) * postsPerPage;
   const endIndex = startIndex + postsPerPage;

   const totalPage = Math.ceil(repositories.length / postsPerPage);
   const pageNumbers = [];
   for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
   }

   displayRepos = displayRepos.slice(startIndex, endIndex);

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
      if (selectRepo == 1) {
         setDisplayRepos(repositories);
      }
      if (selectRepo == 2) {
         setDisplayRepos(userRepos);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectRepo, sortBy, isPending, isFetching, allReposStates]);

   useEffect(() => {
      // Sort by handler
      if (sortBy == 1) {
         setDisplayRepos(repositories);
      }
      if (sortBy == 2) {
         const alphabeticSorts = displayRepos.sort((a, b) => {
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
   }, [sortBy, isFetching]);
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
            {repositories.length > 5 ? (
               <div className="flex pb-4 items-center justify-center mt-6">
                  <Pagination
                     currentPage={currentPage}
                     setCurrentPage={setCurrentPage}
                     pageNumbers={pageNumbers}
                     totalPage={totalPage}
                  />
               </div>
            ) : (
               ""
            )}
         </Card>
      </div>
   );
};

export default Repositories;
