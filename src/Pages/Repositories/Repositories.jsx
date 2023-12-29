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
   const { isPending, repositories } = useRepositories();
   const { userRepos } = useUserRepo();
   const [selectRepo, setSelectRepo] = useState(1);
   const [displayRepos, setDisplayRepos] = useState([]);

   // Handle repo dropdown change
   const handleRepo = (e) => {
      setSelectRepo(e);
   };
   // Handle repo dropdown change
   const handleSort = (e) => {
      console.log(e);
   };
   // Handle repo dropdown change
   const handleWatching = (e) => {
      console.log(e.target.checked);
   };

   useEffect(() => {
      if (selectRepo == 2) {
         setDisplayRepos(userRepos);
      } else {
         setDisplayRepos(repositories);
      }
   }, [repositories, selectRepo, userRepos]);

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
