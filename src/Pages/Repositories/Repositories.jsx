import { Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import Pagination from "../../Components/Pagination/Pagination";
import useFilterRepos from "../../Hooks/useFilterRepos";
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
   const { isPending, data, refetchFilter, setSearchParams, searchParams } =
      useFilterRepos();

   const [filteredRepos, setFilteredRepos] = useState([]);

   useEffect(() => {
      setFilteredRepos(data?.response);
   }, [data]);

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
            {data?.total > 10 && (
               <div className="p-4">
                  <Pagination totalRepositories={data?.total} />
               </div>
            )}
         </Card>
      </div>
   );
};

export default Repositories;
