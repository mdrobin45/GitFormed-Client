import { Button, Typography } from "@material-tailwind/react";
import moment from "moment";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";

const TABLE_HEAD = ["Repository", "Username", "Watchers", "Created", "Action"];
const RepoTable = ({ repositories = [] }) => {
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
                           {repo.repoWatchers?.length}
                        </Typography>
                     </td>
                     <td className={classes}>
                        <Typography
                           variant="small"
                           color="blue-gray"
                           className="font-normal">
                           {moment(repo.createdAt).format(
                              "DD MMM YYYY - hh:mm A"
                           )}
                        </Typography>
                     </td>
                     <td className={classes}>
                        <Link to={`/pull-requests/${repo?._id}`}>
                           <Button className="bg-primary p-2 font-normal tracking-wider">
                              Pull Requests
                           </Button>
                        </Link>
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};

export default RepoTable;
