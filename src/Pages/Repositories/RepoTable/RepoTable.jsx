import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import moment from "moment";
import { Link } from "react-router-dom";
import useAPI from "../../../Hooks/useAPI";
import useAuth from "../../../Hooks/useAuth";
import useRepositories from "../../../Hooks/useRepositories";
import useUser from "../../../Hooks/useUser";
import styles from "../styles.module.css";

const TABLE_HEAD = ["Repository", "Username", "Watchers", "Created", "Action"];
const RepoTable = ({ repositories = [] }) => {
   const { removeWatcher, updateRepoWatcher } = useAPI();
   const { refetchAllRepo } = useRepositories();
   const { dbUser } = useUser();
   const { user } = useAuth();

   // Server update request with tan stack
   const addWatcher = useMutation({
      mutationKey: ["watchUpdate"],
      mutationFn: ({ userId, repoId }) => updateRepoWatcher(userId, repoId),
      onSuccess: () => {
         refetchAllRepo();
      },
   });

   // Server update request with tan stack
   const removeWatcherFun = useMutation({
      mutationKey: ["removeWatcher"],
      mutationFn: ({ userId, repoId }) => removeWatcher(userId, repoId),
      onSuccess: (e) => {
         console.log(e);
         refetchAllRepo();
      },
      onError: (e) => {
         console.log(e);
      },
   });

   // Watching change handler
   const watchChangeHandler = (e, repoId) => {
      const isChecked = e.target.checked;
      if (isChecked) {
         addWatcher.mutate({ userId: dbUser?._id, repoId });
      } else {
         removeWatcherFun.mutate({ userId: dbUser?._id, repoId });
      }
   };
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
                        {user ? (
                           <div className="flex items-center gap-2">
                              <Link
                                 to={`/pull-requests/${repo?._id}?username=${repo?.repoUsername}`}>
                                 <Button className="bg-primary p-2 font-normal tracking-wider">
                                    Pull Requests
                                 </Button>
                              </Link>
                              <div className="flex items-center">
                                 {repo?.repoWatchers.indexOf(dbUser?._id) ===
                                 0 ? (
                                    <Checkbox
                                       defaultChecked
                                       onChange={(e) => {
                                          watchChangeHandler(e, repo?._id);
                                       }}
                                       color="blue"
                                    />
                                 ) : (
                                    <Checkbox
                                       onChange={(e) => {
                                          watchChangeHandler(e, repo?._id);
                                       }}
                                       color="blue"
                                    />
                                 )}
                                 <label>Watch</label>
                              </div>
                           </div>
                        ) : (
                           "Login Required"
                        )}
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};

export default RepoTable;
