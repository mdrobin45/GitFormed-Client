import {
   Avatar,
   Button,
   Menu,
   MenuHandler,
   MenuItem,
   MenuList,
   Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const ProfileMenu = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const closeMenu = () => setIsMenuOpen(false);
   const { logOut } = useAuth();

   // Logout
   const handleLogOut = () => {
      logOut().then(() => {
         toast.error("Your are logged out!");
      });
      closeMenu();
   };
   return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
         <MenuHandler>
            <Button
               variant="text"
               color="blue-gray"
               className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
               <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="border border-gray-900 p-0.5"
                  src="https://i.ibb.co/238dYyx/user.png"
               />
            </Button>
         </MenuHandler>
         <MenuList className="p-1">
            <MenuItem
               onClick={closeMenu}
               className={`flex items-center gap-2 rounded `}>
               <Typography as="span" variant="small" className="font-normal">
                  My Profile
               </Typography>
            </MenuItem>
            <MenuItem
               onClick={handleLogOut}
               className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}>
               <Typography
                  color="red"
                  as="span"
                  variant="small"
                  className="font-normal">
                  Sign Out
               </Typography>
            </MenuItem>
         </MenuList>
      </Menu>
   );
};

export default ProfileMenu;
