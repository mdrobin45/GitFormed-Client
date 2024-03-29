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
import useNotification from "../../../Hooks/useNotification";
import NewRepoModal from "../NewRepoModal/NewRepoModal";
import ProfileMenu from "../ProfileMenu";
import styles from "../styles.module.css";

const RepoActionBar = ({ searchParams, setSearchParams, refetchFilter }) => {
   const [modalOpen, setModalOpen] = useState(false);
   const handleOpen = () => setModalOpen(!modalOpen);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const closeMenu = () => setIsMenuOpen(false);
   const { user } = useAuth();
   const { notifications } = useNotification();
   let notificationArray = notifications?.response || [];
   notificationArray = notificationArray.toReversed();

   return (
      <div className={styles.repoToolbarWrapper}>
         <div>
            <Select
               selected={() => {
                  const params = searchParams.get("repo");
                  if (!params) {
                     return "All Repositories";
                  } else if (params !== "all") {
                     return "My Repositories";
                  } else {
                     return "All Repositories";
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

               <Option disabled={user ? false : true} value={user?.email}>
                  My Repositories
               </Option>
            </Select>
         </div>
         <div>
            <Select
               selected={() => {
                  const params = searchParams.get("sortBy");
                  if (params === "alphabetical") {
                     return "Alphabetical";
                  }
                  if (params === "watchers") {
                     return "Watchers";
                  } else {
                     return "Latest";
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
               disabled={user ? false : true}
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
            <label className={user ? "" : "opacity-30"} htmlFor="myWatch">
               My Watching Repositories
            </label>
         </div>

         <div>
            <Button
               disabled={user ? false : true}
               onClick={handleOpen}
               className={styles.newRepoBtn}>
               New Repository
            </Button>
            <NewRepoModal
               refetchFilter={refetchFilter}
               open={modalOpen}
               handleOpen={handleOpen}
            />
         </div>
         <div className="mt-2">
            <Menu
               open={isMenuOpen}
               handler={setIsMenuOpen}
               placement="bottom-end">
               <MenuHandler>
                  <button disabled={user ? false : true}>
                     <Badge content={notificationArray.length}>
                        <IoNotifications
                           className={`text-2xl text-gray-900 ${
                              user ? "" : "opacity-30"
                           }`}
                        />
                     </Badge>
                  </button>
               </MenuHandler>
               {notificationArray.length ? (
                  <MenuList className="p-1 overflow-y-scroll h-52">
                     {notificationArray.map((item) => (
                        <MenuItem
                           key={item._id}
                           onClick={closeMenu}
                           className="flex items-center gap-2 rounded">
                           <Typography
                              as="span"
                              variant="small"
                              className="font-normal">
                              {item.message}
                           </Typography>
                        </MenuItem>
                     ))}
                  </MenuList>
               ) : (
                  ""
               )}
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
