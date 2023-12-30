import { Typography } from "@material-tailwind/react";
import moment from "moment";
import styles from "../../Repositories/styles.module.css";

const TABLE_HEAD = ["ID", "Title", "Created"];

const PullReqTable = ({ pullRequests }) => {
   const reversePulls = pullRequests.toReversed();
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
               {reversePulls.map((pull, index) => {
                  const isLast = index === reversePulls.length - 1;
                  const classes = isLast
                     ? "p-4"
                     : "p-4 border-b border-blue-gray-50";

                  return (
                     <tr key={pull._id}>
                        <td className={classes}>
                           <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal">
                              {index + 1}
                           </Typography>
                        </td>
                        <td className={classes}>
                           <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal">
                              {pull?.pullReqTitle}
                           </Typography>
                        </td>
                        <td className={classes}>
                           <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal">
                              {moment(pull.createdAt).format(
                                 "DD MMM YYYY - hh:mm A"
                              )}
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
