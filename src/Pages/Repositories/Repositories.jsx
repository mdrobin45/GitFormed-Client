import {
   Button,
   Card,
   Checkbox,
   Option,
   Select,
   Typography,
} from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];
const TABLE_ROWS = [
   {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
   },
   {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
   },
   {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
   },
   {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
   },
   {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
   },
   {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
   },
   {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
   },
   {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
   },
   {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
   },
   {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
   },
];
const Repositories = () => {
   return (
      <div className="w-3/4 rounded mx-auto mt-32">
         <div className="flex items-center justify-between">
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
               <Button className="bg-primary capitalize font-normal text-md py-2">
                  New Repository
               </Button>
            </div>
            <div>
               <ProfileMenu />
            </div>
         </div>
         <Card className="h-full mt-4">
            <table className="w-full min-w-max table-auto text-left">
               <thead>
                  <tr className="rounded-lg">
                     {TABLE_HEAD.map((head) => (
                        <th
                           key={head}
                           className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                           <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal leading-none opacity-70">
                              {head}
                           </Typography>
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {TABLE_ROWS.map(({ name, job, date }, index) => {
                     const isLast = index === TABLE_ROWS.length - 1;
                     const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                     return (
                        <tr key={name}>
                           <td className={classes}>
                              <Typography
                                 variant="small"
                                 color="blue-gray"
                                 className="font-normal">
                                 {name}
                              </Typography>
                           </td>
                           <td className={classes}>
                              <Typography
                                 variant="small"
                                 color="blue-gray"
                                 className="font-normal">
                                 {job}
                              </Typography>
                           </td>
                           <td className={classes}>
                              <Typography
                                 variant="small"
                                 color="blue-gray"
                                 className="font-normal">
                                 {date}
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
