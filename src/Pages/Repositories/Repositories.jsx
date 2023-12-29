import {
   Button,
   Card,
   Checkbox,
   Option,
   Select,
   Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import useRepositories from "../../Hooks/useRepositories";
import NewRepoModal from "./NewRepoModal/NewRepoModal";
import ProfileMenu from "./ProfileMenu";
import styles from "./styles.module.css";

const TABLE_HEAD = ["Repository", "Username", "Watchers", "Created"];
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
   const [modalOpen, setModalOpen] = useState(false);
   const handleOpen = () => setModalOpen(!modalOpen);
   const { repositories, isPending } = useRepositories();

   return (
      <div className={styles.repoMainWrapper}>
         <div className={styles.repoToolbarWrapper}>
            <div>
               <Select variant="outlined" label="Repositories to Show">
                  <Option>My Repositories</Option>
                  <Option>All Repositories</Option>
               </Select>
            </div>
            <div>
               <Select variant="outlined" label="Short By">
                  <Option>Latest</Option>
                  <Option>Alphabetical</Option>
                  <Option>watchers</Option>
               </Select>
            </div>
            <div className="flex items-center">
               <Checkbox id="myWatch" color="blue" defaultChecked />
               <label htmlFor="myWatch">My Watching Repositories</label>
            </div>
            <div>
               <Button onClick={handleOpen} className={styles.newRepoBtn}>
                  New Repository
               </Button>
               <NewRepoModal open={modalOpen} handleOpen={handleOpen} />
            </div>
            <div>
               <ProfileMenu />
            </div>
         </div>
         <Card className={styles.tableWrapper}>
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
         </Card>
      </div>
   );
};

export default Repositories;
