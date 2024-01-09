import {
   Badge,
   Button,
   Checkbox,
   Menu,
   MenuHandler,
   MenuItem,
   MenuList,
   Option,
   Select,
   Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import NewRepoModal from "../NewRepoModal/NewRepoModal";
import ProfileMenu from "../ProfileMenu";
import styles from "../styles.module.css";

const RepoActionBar = ({ searchParams, setSearchParams }) => {
   const [modalOpen, setModalOpen] = useState(false);
   const handleOpen = () => setModalOpen(!modalOpen);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const closeMenu = () => setIsMenuOpen(false);
   const { user } = useAuth();

   return (
      <div className={styles.repoToolbarWrapper}>
         <div>
            <Select
               selected={() => {
                  const params = searchParams.get("repo");
                  if (params === "all") {
                     return "All Repositories";
                  } else {
                     return "My Repositories";
                  }
               }}
               onChange={(e) =>
                  setSearchParams((prev) => {
                     prev.set("repo", e);
                     return prev;
                  })
               }
               variant="outlined">
               <Option value="all">All Repositories</Option>
               <Option value={user?.email}>My Repositories</Option>
            </Select>
         </div>
         <div>
            <Select
               selected={() => {
                  const params = searchParams.get("sortBy");
                  if (params === "latest") {
                     return "Latest";
                  }
                  if (params === "alphabetical") {
                     return "Alphabetical";
                  }
                  if (params === "watchers") {
                     return "Watchers";
                  }
               }}
               onChange={(e) => {
                  setSearchParams((prev) => {
                     prev.set("sortBy", e);
                     return prev;
                  });
               }}
               variant="outlined">
               <Option value="latest">Latest</Option>
               <Option value="alphabetical">Alphabetical</Option>
               <Option value="watchers">watchers</Option>
            </Select>
         </div>
         <div className="flex items-center">
            <Checkbox
               checked={searchParams.get("myWatching") === "true"}
               onChange={(e) => {
                  setSearchParams((prev) => {
                     prev.set("myWatching", e.target.checked);
                     return prev;
                  });
               }}
               id="myWatch"
               color="blue"
            />
            <label htmlFor="myWatch">My Watching Repositories</label>
         </div>
         <div>
            <Button onClick={handleOpen} className={styles.newRepoBtn}>
               New Repository
            </Button>
            <NewRepoModal open={modalOpen} handleOpen={handleOpen} />
         </div>
         <div className="mt-2">
            <Menu
               open={isMenuOpen}
               handler={setIsMenuOpen}
               placement="bottom-end">
               <MenuHandler>
                  <button>
                     <Badge content="5">
                        <IoNotifications className="text-2xl text-gray-900" />
                     </Badge>
                  </button>
               </MenuHandler>
               <MenuList className="p-1">
                  <MenuItem
                     onClick={closeMenu}
                     className="flex items-center gap-2 rounded">
                     <Typography
                        as="span"
                        variant="small"
                        className="font-normal">
                        Profile icon changed
                     </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2 rounded">
                     <Typography
                        as="span"
                        variant="small"
                        className="font-normal">
                        Add google analytics and change code
                     </Typography>
                  </MenuItem>
               </MenuList>
            </Menu>
         </div>
         <div>
            {user ? (
               <ProfileMenu />
            ) : (
               <Link to="/login">
                  <Button className="ml-4 bg-primary">Login</Button>
               </Link>
            )}
         </div>
      </div>
   );
};

export default RepoActionBar;
