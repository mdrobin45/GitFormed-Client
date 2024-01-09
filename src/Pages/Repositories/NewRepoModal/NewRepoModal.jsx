import {
   Button,
   Dialog,
   DialogBody,
   DialogFooter,
   DialogHeader,
   Input,
   Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createNewRepo, findRepo } from "../../../APIs/APIs";
import useAuth from "../../../Hooks/useAuth";
import useUser from "../../../Hooks/useUser";
import { showToast } from "../../../Utilities/toast";

const NewRepoModal = ({ handleOpen, open, refetchFilter }) => {
   const [inputErr, setInputErr] = useState("");
   const { user } = useAuth();
   const { dbUser } = useUser();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   // Form submit
   const onSubmit = (data) => {
      const repoInfo = {
         repoName: data.repoName,
         repoUsername: dbUser.username,
         repoUserEmail: user?.email,
      };

      // Check if repo already exist before create new one
      findRepo(data.repoName, user?.email).then((res) => {
         if (!res.exist) {
            createNewRepo(repoInfo).then((res) => {
               if (res.id) {
                  showToast("Repository Created", "success");
                  handleOpen();
                  refetchFilter();
                  reset();
               }
            });
         } else {
            setInputErr("Repository already exist! Please try another");
         }
      });
   };
   return (
      <Dialog open={open} size="xs" handler={handleOpen}>
         <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start">
               {" "}
               <Typography className="mb-1" variant="h4">
                  Create New Repository{" "}
               </Typography>
            </DialogHeader>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               className="mr-3 h-5 w-5 cursor-pointer"
               onClick={handleOpen}>
               <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
               />
            </svg>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <DialogBody>
               <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                  Write repository details and then click button.
               </Typography>
               <div className="grid gap-3">
                  <Typography className="-mb-1" color="blue-gray" variant="h6">
                     Repository Name
                  </Typography>
                  <Input
                     {...register("repoName", {
                        required: "This field is required",
                        pattern: {
                           value: /^[A-Za-z0-9-_]{5,10}$/,
                           message:
                              "It should be 5 to 10 characters long and consist of letters, digits, hyphens, or underscores",
                        },
                     })}
                     label="Enter repository name"
                  />
                  {errors.repoName ? (
                     <p className="text-sm text-red-500">
                        {errors.repoName.message}
                     </p>
                  ) : (
                     ""
                  )}
                  <p className="text-sm text-red-500">{inputErr}</p>
               </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
               <Button variant="text" color="gray" onClick={handleOpen}>
                  cancel
               </Button>
               <Button
                  type="submit"
                  className="bg-primary font-normal tracking-wider"
                  color="gray">
                  Create
               </Button>
            </DialogFooter>
         </form>
      </Dialog>
   );
};

export default NewRepoModal;
