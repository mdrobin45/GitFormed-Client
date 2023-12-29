import { Button, Checkbox, Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import NewRepoModal from "../NewRepoModal/NewRepoModal";
import ProfileMenu from "../ProfileMenu";
import styles from "../styles.module.css";

const RepoActionBar = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const handleOpen = () => setModalOpen(!modalOpen);
   return (
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
   );
};

export default RepoActionBar;
