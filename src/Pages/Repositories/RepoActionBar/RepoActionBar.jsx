import { Button, Checkbox, Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import NewRepoModal from "../NewRepoModal/NewRepoModal";
import ProfileMenu from "../ProfileMenu";
import styles from "../styles.module.css";

const RepoActionBar = ({ handleRepo, handleSort, handleWatching }) => {
   const [modalOpen, setModalOpen] = useState(false);
   const handleOpen = () => setModalOpen(!modalOpen);

   return (
      <div className={styles.repoToolbarWrapper}>
         <div>
            <Select
               onChange={handleRepo}
               variant="outlined"
               label="Repositories to Show">
               <Option value="1">All Repositories</Option>
               <Option value="2">My Repositories</Option>
            </Select>
         </div>
         <div>
            <Select onChange={handleSort} variant="outlined" label="Sort By">
               <Option value="1">Latest</Option>
               <Option value="2">Alphabetical</Option>
               <Option value="3">watchers</Option>
            </Select>
         </div>
         <div className="flex items-center">
            <Checkbox onChange={handleWatching} id="myWatch" color="blue" />
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
