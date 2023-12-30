import { Typography } from "@material-tailwind/react";
import styles from "../../Repositories/styles.module.css";

const TABLE_HEAD = ["ID", "Title", "Created"];
const repositories = [1, 2, 3];
const PullReqTable = () => {
   return (
      <>
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
                              01
                           </Typography>
                        </td>
                        <td className={classes}>
                           <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal">
                              {/* {repo.repoWatchers?.length} */}
                              Title
                           </Typography>
                        </td>
                        <td className={classes}>
                           <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal">
                              {/* {moment(repo.createdAt).format(
                              "DD MMM YYYY - hh:mm A"
                           )} */}
                              Created
                           </Typography>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </>
   );
};

export default PullReqTable;
