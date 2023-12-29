import { Typography } from "@material-tailwind/react";
import useRepositories from "../../../Hooks/useRepositories";
import styles from "../styles.module.css";

const TABLE_HEAD = ["Repository", "Username", "Watchers", "Created"];
const RepoTable = () => {
   const { repositories } = useRepositories();
   return (
      <table className={styles.repoTable}>
         <thead>
            <tr className={styles.tableRow}>
               {TABLE_HEAD.map((head) => (
                  <th key={head} className={styles.tableHeader}>
                     <Typography
                        variant="small"
                        color="blue-gray"
                        className={styles.tableHeadingText}>
                        {head}
                     </Typography>
                  </th>
               ))}
            </tr>
         </thead>
         <tbody>
            {repositories.map((repo, index) => {
               const isLast = index === repositories.length - 1;
               const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

               return (
                  <tr key={repo._id}>
                     <td className={classes}>
                        <Typography
                           variant="small"
                           color="blue-gray"
                           className="font-normal">
                           {repo.repoName}
                        </Typography>
                     </td>
                     <td className={classes}>
                        <Typography
                           variant="small"
                           color="blue-gray"
                           className="font-normal">
                           {repo.repoUsername}
                        </Typography>
                     </td>
                     <td className={classes}>
                        <Typography
                           variant="small"
                           color="blue-gray"
                           className="font-normal">
                           {/* {repo.repoWatchers} */}
                           10
                        </Typography>
                     </td>
                     <td className={classes}>
                        <Typography
                           as="a"
                           href="#"
                           variant="small"
                           color="blue-gray"
                           className="font-medium">
                           Edit
                        </Typography>
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};

export default RepoTable;